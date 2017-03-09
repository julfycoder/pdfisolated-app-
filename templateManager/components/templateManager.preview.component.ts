import { Component} from '@angular/core';
declare var window: any;

@Component({
	selector:'app-template-preview',
	templateUrl: window.serverSideSettings.appPath + '/AdminSite/app/templateManager/views/templateManager.preview.view.html'
})

export class TemplateManagerPreviewComponent {
}
