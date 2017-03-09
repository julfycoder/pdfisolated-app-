import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';


declare var window: any;

@Injectable()
export class RouterService {
	appPath: string;
	exception:any;
	constructor(private location: Location, private router: Router) {
		this.appPath = window.serverSideSettings.appPath;
	}
	navigateToUrl(url: string) {
		this.router.navigateByUrl(this.appPath + url);
	}
	navigateBack() {
		this.location.back();
	}
	navigateForward() {
		this.location.forward();
	}
}