import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReferenceTableComponent } from './referenceTable/referenceTable.component';
import { TemplateManagerComponent } from './templateManager/components/templateManager.component';
import { templateManagerRoutes } from './templateManager/templateManager.routing';

declare var window: any;

const routes = [
	{ path: window.serverSideSettings.appPath + '/admin', redirectTo: window.serverSideSettings.appPath + '/admin' +'/templatemanager'},
	{ path: '', pathMatch: 'full', redirectTo: window.serverSideSettings.appPath + '/admin' + '/templatemanager' },
	{
		path: window.serverSideSettings.appPath + '/admin' + '/templatemanager', component: TemplateManagerComponent,
		children: templateManagerRoutes
	},
	{ path: window.serverSideSettings.appPath + '/admin' + '/referencetable', component: ReferenceTableComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {
}

export const routingComponents = [
	ReferenceTableComponent, 
	TemplateManagerComponent];