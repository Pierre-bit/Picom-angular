import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AuthGuard } from './auth.guard';
import { CreateAnnonceComponent } from './component/annonce/create-annonce/create-annonce.component';
import { DiffusionComponent } from './component/annonce/diffusion/diffusion.component';
import { CookieService } from 'ngx-cookie-service';
import { ListAnnonceComponent } from './component/annonce/list-annonce/list-annonce.component';
import { AnnonceComponent } from './component/annonce/annonce.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorI18nService } from './services/mat-paginator-i18n-service.service';
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      withCredentials: true
    });
    return next.handle(xhr);
  }
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    LoginService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    AuthGuard,
    CookieService,
    {provide: MatPaginatorIntl,useClass:MatPaginatorI18nService}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function translateFactory(httpClient: HttpClient)
{
  return new TranslateHttpLoader(httpClient);
}