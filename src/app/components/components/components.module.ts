import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../gallery/gallery.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home/home.component';
import { BannerComponent } from '../home/banner/banner.component';
import { SmallaboutComponent } from '../home/smallabout/smallabout.component';
import { OurServicesComponent } from '../home/our-services/our-services.component';
import { MissioVisionComponent } from '../home/mission-vision/mission-vision.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LedDisplayComponent } from '../our-services/led-display/led-display.component';
import { AdvertisingComponent } from '../our-services/advertising/advertising.component';
import { EventAndStageShowComponent } from '../our-services/event-and-stage-show/event-and-stage-show.component';
import { AirportAndRailwayComponent } from '../our-services/airport-and-railway/airport-and-railway.component';
import { MobileVanRoadShowComponent } from '../our-services/mobile-van-road-show/mobile-van-road-show.component';
import { ScrollingBoardsComponent } from '../our-services/scrolling-boards/scrolling-boards.component';
import { ThreeDHologramFanComponent } from '../our-services/three-d-hologram-fan/three-d-hologram-fan.component';
import { SmallBannerComponent } from 'src/app/shared/small-banner/small-banner.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';



@NgModule({
  declarations: [
    GalleryComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    BannerComponent,
    SmallaboutComponent,
    MissioVisionComponent,
    OurServicesComponent,
    PageNotFoundComponent,
    LedDisplayComponent,
    AdvertisingComponent,
    EventAndStageShowComponent,
    AirportAndRailwayComponent,
    MobileVanRoadShowComponent,
    ScrollingBoardsComponent,
    ThreeDHologramFanComponent,
    SmallBannerComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CarouselModule 
  ],
  exports: [
    GalleryComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    BannerComponent,
    SmallaboutComponent,
    MissioVisionComponent,
    OurServicesComponent,
    PageNotFoundComponent,
    LedDisplayComponent,
    AdvertisingComponent,
    EventAndStageShowComponent,
    AirportAndRailwayComponent,
    MobileVanRoadShowComponent,
    ScrollingBoardsComponent,
    ThreeDHologramFanComponent,
    SmallBannerComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
