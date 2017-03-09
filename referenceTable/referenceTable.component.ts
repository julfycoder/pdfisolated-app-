import { Component} from '@angular/core';
declare var window: any;

@Component({
	selector:'app-reference',
	templateUrl: window.serverSideSettings.appPath + '/AdminSite/app/referenceTable/referenceTable.view.html'
})

export class ReferenceTableComponent {
}
