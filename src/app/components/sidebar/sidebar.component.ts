import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    mobileQuery: MediaQueryList;
    // tslint:disable-next-line: comment-format
    //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
    fillerNav = [
      {name: 'Home' , route: '', icon: 'home'},
      {name: 'Trending' , route: '/Trending', icon: 'trending_up'},
      {name: 'Subscriptions' , route: '/Subscriptions', icon: 'subscriptions'},
      {name: 'Library' , route: '/Library', icon: 'folder'},
      {name: 'History' , route: '/History', icon: 'history'},
      {name: 'Watch later' , route: '/Watch_later', icon: 'watch_later'},
    ]
    // tslint:disable-next-line: variable-name
    private _mobileQueryListener: () => void;
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      // tslint:disable-next-line: deprecation
      this.mobileQuery.addListener(this._mobileQueryListener);
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy(): void {
      // tslint:disable-next-line: deprecation
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    // tslint:disable-next-line: member-ordering
    shouldRun = true;

  ngOnInit() {
  }

}
