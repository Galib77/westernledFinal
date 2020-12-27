import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home/home.component';
import { AdvertisingComponent } from './components/our-services/advertising/advertising.component';
import { AirportAndRailwayComponent } from './components/our-services/airport-and-railway/airport-and-railway.component';
import { EventAndStageShowComponent } from './components/our-services/event-and-stage-show/event-and-stage-show.component';
import { LedDisplayComponent } from './components/our-services/led-display/led-display.component';
import { MobileVanRoadShowComponent } from './components/our-services/mobile-van-road-show/mobile-van-road-show.component';
import { ScrollingBoardsComponent } from './components/our-services/scrolling-boards/scrolling-boards.component';
import { ThreeDHologramFanComponent } from './components/our-services/three-d-hologram-fan/three-d-hologram-fan.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'led-display', component:LedDisplayComponent},
  {path: 'advertising', component:AdvertisingComponent},
  {path: 'event-and-stage-show', component:EventAndStageShowComponent},
  {path: 'airport-and-railway', component:AirportAndRailwayComponent},
  {path: 'mobile-van-road-show', component:MobileVanRoadShowComponent},
  {path: 'scrolling-boards', component:ScrollingBoardsComponent},
  {path: '3d-hologram-fan', component:ThreeDHologramFanComponent},

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
