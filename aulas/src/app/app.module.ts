import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component';
import { HomeComponent } from './home/home.component';
import { ExperimentsComponent } from './experiments/experiments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CalculadoraComponent,
    ReadMeGeneratorComponent,
    HomeComponent,
    ExperimentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
