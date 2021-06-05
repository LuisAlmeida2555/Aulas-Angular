import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';
import { AddComponent } from './components/lista-de-compras/add/add.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { EvAndRefComponent } from './ev-and-ref/ev-and-ref.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { HomeComponent } from './home/home.component';
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"calculator", component: CalculadoraComponent},
  {path:"readMeGen", component: ReadMeGeneratorComponent},
  {path:"experiments", component: ExperimentsComponent},
  {path:"evAndRef", component: EvAndRefComponent},
  {path:"notfound", component: FourOFourComponent},
  {path:"listadecompras", component: ListaDeComprasComponent,
    children:
    [
      {path:"add", component: AddComponent},
      {path:"buy", component: BuyComponent},
    ]
  },
  {path:"**", redirectTo : "notFound"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
