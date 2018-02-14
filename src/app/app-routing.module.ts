import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {ResourcesComponent} from "./resources/resources.component";
import {PleaseComponent} from "./resources/please/please.component";
import {ResourceEditComponent} from "./resources/resource-edit/resource-edit.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'search',pathMatch:'full'},
  {path: 'search', component:SearchComponent},
  {path: 'resources',component:ResourcesComponent,children:[
    {path:'',component:PleaseComponent},
    {path:'new',component:ResourceEditComponent},
    {path:':id',component:ResourceEditComponent}
    ]
  },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
