// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
const Book=require('./server/models/book');
const bodyParser=require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const _=require('lodash');

import { join } from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();




const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

// function angularRouter(req, res) {
//
//   res.render('index', {
//     req,
//     res,
//     providers: [{
//       provide: 'serverUrl',
//       useValue: `${req.protocol}://${req.get('host')}`
//     }]
//   });
// }


app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// TODO: implement data requests securely
app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods','POST, GET, OPTIONS');
  next();

});

// app.get('/', angularRouter);

app.get('/api/books',(req,res)=>{

  Book.find().then((books)=>{
    res.send({books});
  }).catch((e)=> {
      res.status(404).send(e);
    }
  );
});

app.post('/api/books',(req,res)=>{
  const book=new Book({
    title:req.body.title,
    author:req.body.author,
    isbn:req.body.isbn,
    bno:req.body.bno,
    reference:req.body.reference,
    pages:req.body.pages,
    date:req.body.date
  });

  book.save().then((book)=>{
    res.send({book});
  }).catch((e)=>{
    res.status(400).send();
  });

});

app.delete('/api/books/:id',(req,res)=>{
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send({error:"Id is not valid"});
  }
  Book.findByIdAndRemove(id).then((book)=>{
    if(!book){
      return res.status(404).send({error:"Not Found!"});
    }else {
      return res.send({status:"success"});
    }

  }).catch((e)=>{
      res.status(400).send(e);
    }
  );

});

app.patch('/api/books/:id',(req,res)=>{
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send({error:"Id is not valid"});
  }
  const book=_.pick(req.body,['title','author','isbn','bno','reference','pages','date']);

  Book.findByIdAndUpdate(id,book).then((book)=>{
    if(!book){
      return res.status(404).send({error:"Not Found!"});
    }else {
      return res.send({status:"success"});
    }

  }).catch((e)=>{
      res.status(400).send(e);
    }
  );

});


// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
