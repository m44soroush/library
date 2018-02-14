import {BrowserModule,BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Universal
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './search/search.component';
import {BooksListComponent} from './search/books-list/books-list.component';
import {BookItemComponent} from './search/books-list/book-item/book-item.component';
import {ResourcesComponent} from './resources/resources.component';
import {ResourceEditComponent} from './resources/resource-edit/resource-edit.component';
import {DashboardComponent} from './resources/dashboard/dashboard.component';
import {PleaseComponent} from './resources/please/please.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {BookService} from "./shared/book.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    BooksListComponent,
    BookItemComponent,
    ResourcesComponent,
    ResourceEditComponent,
    DashboardComponent,
    PleaseComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'library' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
