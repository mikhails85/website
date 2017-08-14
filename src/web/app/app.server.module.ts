import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { UniversalInterceptor } from '../infrastructure/universal.interceptor';

@NgModule({
  imports: [
    ServerModule,
    AppModule
  ],
   providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UniversalInterceptor,
    /* Multi is important or you will delete all the other interceptors */
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppServerModule { }