import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { FooterComponent } from './footer/footer.component';
import { CoscholasticComponent } from './coscholastic/coscholastic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material';
import { VodComponent } from './vod/vod.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    FooterComponent,
    CoscholasticComponent,
    VodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
