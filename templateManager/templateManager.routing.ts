import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateManagerListComponent } from './components/templateManager.list.component';
import { TemplateManagerPreviewComponent } from './components/templateManager.preview.component';
import { TemplateManagerTemplateComponent } from './components/templateManager.template.component';

declare var window: any;

export const templateManagerRoutes = [
	{ path: '', pathMatch: 'full', redirectTo: 'list' },
	{ path: 'list', component: TemplateManagerListComponent },
	{ path: 'new', component: TemplateManagerTemplateComponent },
	{ path: 'preview', component: TemplateManagerPreviewComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(templateManagerRoutes)],
	exports: [RouterModule]
})

export class TemplateManagerRoutingModule {
}

export const templateManagerRoutingComponents = [
	TemplateManagerListComponent, 
	TemplateManagerPreviewComponent,
	TemplateManagerTemplateComponent];