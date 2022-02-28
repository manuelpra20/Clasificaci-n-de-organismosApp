import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyOneComponent } from './pages/family-one/family-one.component';
import { ArchaeaComponent } from './pages/clasificación-de-organismos/archaea/archaea.component';
import { EukaryotaComponent } from './pages/clasificación-de-organismos/eukaryota/eukaryota.component';
import { BacteriaComponent } from './pages/clasificación-de-organismos/bacteria/bacteria.component';
import { FungiComponent } from './pages/Eukaryotas/fungi/fungi.component';
import { PlantsComponent } from './pages/Eukaryotas/plants/plants.component';
import { AnimalsComponent } from './pages/Eukaryotas/animals/animals.component';
import { VascularComponent } from './pages/Eukaryotas/Plantas/vascular/vascular.component';
import { BilateralComponent } from './pages/Eukaryotas/Animales/bilateral/bilateral.component';


@NgModule({
  declarations: [
    AppComponent,
    FamilyOneComponent,
    ArchaeaComponent,
    EukaryotaComponent,
    BacteriaComponent,
    FungiComponent,
    PlantsComponent,
    AnimalsComponent,
    VascularComponent,
    BilateralComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
