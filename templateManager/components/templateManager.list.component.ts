import { Component, Injectable } from '@angular/core';

declare var window: any;

@Injectable()
@Component({
	selector:'app-template-list',
	templateUrl: window.serverSideSettings.appPath + '/AdminSite/app/templateManager/views/templateManager.list.view.html'
})



export class TemplateManagerListComponent {
	appPath = window.serverSideSettings.appPath;
}
