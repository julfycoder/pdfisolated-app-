import { Component, AfterViewInit } from '@angular/core';

declare var window: any;

@Component({
	selector: 'app-root',
	templateUrl: window.serverSideSettings.appPath + '/AdminSite/app/app.view.html'
})

export class AppComponent  {
	appPath = window.serverSideSettings.appPath;
}
