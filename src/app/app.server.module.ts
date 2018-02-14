import {NgModule} from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import {AppModule} from './app.module';
import {AppComponent} from './app.component';

// Absolute Http path

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UniversalInterceptor} from "./interceptor";

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}

// {
// provide: HTTP_INTERCEPTORS,
  // useClass: UniversalInterceptor,
  // multi: true
// }
