import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TramiteService } from './services/tramite.service';
import { TramiteComponent } from './views/tramite/tramite.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,    TramiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  ReactiveFormsModule,FormsModule,
    HttpClientModule
  ],
  providers: [TramiteService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
