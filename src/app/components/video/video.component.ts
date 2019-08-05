import { Component, OnInit } from '@angular/core';
import { VideoCardsComponent } from '../video-cards/video-cards.component';
import { VideoService, iVideos } from '../../services/videos.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-video',
  templateUrl: './video.component.html'
})
// tslint:disable-next-line: class-name
export class videoComponent implements OnInit {
    [x: string]: any;

  video: iVideos [] = [];

  // tslint:disable-next-line: variable-name
  constructor(private _VideoServices: VideoService,
              private router: Router) {
    console.log('constructor');
   }

  ngOnInit() {

  this.video = this._videoServices.getvideo();
  console.log(this.video);
  }

  verHeroe(idx: number) {
      this.router.navigate(['/video', idx]);
  }

}
