import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightboxModule } from 'ngx-lightbox';
import { ComponentsModule } from './components/components/components.module';
import { SharedModule } from './shared/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule,
    ComponentsModule,
    SharedModule,
    FormsModule,
    CarouselModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
