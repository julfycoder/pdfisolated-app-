import { Component} from '@angular/core';
declare var window: any;

@Component({
	selector:'app-template',
	templateUrl: window.serverSideSettings.appPath + '/AdminSite/app/templateManager/views/templateManager.view.html'
})

export class TemplateManagerComponent {
}
