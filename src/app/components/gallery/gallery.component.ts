declare function require(path: string);
import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  galleryTitle:string = "Gallery";

  galleryImageSrc1 = require('../../../assets/images/gallery/1.jpg');
  galleryImageSrc2 = require('../../../assets/images/gallery/2.jpg');
  galleryImageSrc3 = require('../../../assets/images/gallery/3.jpg');
  galleryImageSrc4 = require('../../../assets/images/gallery/4.jpg');
  galleryImageSrc5 = require('../../../assets/images/gallery/5.jpg');
  galleryImageSrc6 = require('../../../assets/images/gallery/6.jpg');
  galleryImageSrc7 = require('../../../assets/images/gallery/7.jpg');
  galleryImageSrc8 = require('../../../assets/images/gallery/8.jpg');
  galleryImageSrc9 = require('../../../assets/images/gallery/9.jpg');

  
  // public _albums: {src: string, caption: string, thumb: string}[] =  [
  //   { 
  //     src: "../../../assets/images/gallery/1.jpg",
  //     caption: "Gallery 1",
  //     thumb: "../../../assets/images/gallery/1.jpg"
  //   },
  //   {
  //     src: "../../../assets/images/gallery/2.jpg",
  //     caption: "Gallery 2",
  //     thumb: "../../../assets/images/gallery/2.jpg"
  //   },
  //   {
  //     src: "../../../assets/images/gallery/3.jpg",
  //     caption: "Gallery 3",
  //     thumb: "../../../assets/images/gallery/3.jpg"
  //   },
  //   { 
  //     src: "../../../assets/images/gallery/4.jpg",
  //     caption: "Gallery 4",
  //     thumb: "../../../assets/images/gallery/4.jpg"
  //   },
  //   {
  //     src: "../../../assets/images/gallery/5.jpg",
  //     caption: "Gallery 5",
  //     thumb: "../../../assets/images/gallery/5.jpg"
  //   },
  //   {
  //     src: "../../../assets/images/gallery/6.jpg",
  //     caption: "Gallery 6",
  //     thumb: "../../../assets/images/gallery/6.jpg"
  //   },
  //   { 
  //     src: "../../../assets/images/gallery/7.jpg",
  //     caption: "Gallery 7",
  //     thumb: "../../../assets/images/gallery/7.jpg"
  //   },
  //   {
  //     src: "../../../assets/images/gallery/8.jpg",
  //     caption: "Gallery 8",
  //     thumb: "../../../assets/images/gallery/8.jpg"
  //   },
  //   {
  //     src: "../../../assets/images/gallery/9.jpg",
  //     caption: "Gallery 9",
  //     thumb: "../../../assets/images/gallery/9.jpg"
  //   }
  // ];
  // constructor(private _lightbox: Lightbox) {
  //   for (let i = 9; i <= 8; i++) {
  //     const src = 'demo/img/image' + i + '.jpg';
  //     const caption = 'Image ' + i + ' caption here';
  //     const thumb = 'demo/img/image' + i + '-thumb.jpg';
  //     const album = {
  //        src: src,
  //        caption: caption,
  //        thumb: thumb
  //     };

  //     this._albums.push(album);
  //   }
  // }

  // open(index: number): void {
  //   // open lightbox
  //   this._lightbox.open(this._albums, index);
  // }

  // close(): void {
  //   // close lightbox programmatically
  //   this._lightbox.close();
  // }
}