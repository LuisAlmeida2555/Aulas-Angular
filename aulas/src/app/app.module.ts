import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component';
import { HomeComponent } from './home/home.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { FormsModule } from '@angular/forms';
import { EvAndRefComponent } from './ev-and-ref/ev-and-ref.component';
import { AnimalComponent } from './animal/animal.component';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { ChuckComponent } from './components/chuck/chuck.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CalculadoraComponent,
    ReadMeGeneratorComponent,
    HomeComponent,
    ExperimentsComponent,
    EvAndRefComponent,
    AnimalComponent,
    FourOFourComponent,
    BuyComponent,
    CookiesComponent,
    ContactoComponent,
    ChuckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
