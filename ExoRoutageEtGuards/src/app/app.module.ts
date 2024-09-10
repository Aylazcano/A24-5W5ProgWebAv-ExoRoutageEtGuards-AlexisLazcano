import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { VerreDEauComponent } from './verre-deau/verre-deau.component';
import { BonbonComponent } from './bonbon/bonbon.component';
import { SelComponent } from './sel/sel.component';
import { CaramelAuSelComponent } from './caramel-au-sel/caramel-au-sel.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    VerreDEauComponent,
    BonbonComponent,
    SelComponent,
    CaramelAuSelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
