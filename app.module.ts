import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { RouterService } from './services/router.service';
import { HttpService } from './services/http.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponents } from './app.routing';
import { TemplateManagerModule } from './templateManager/templateManager.module';

@NgModule({
	imports: [BrowserModule, HttpModule, AppRoutingModule, FormsModule, TemplateManagerModule],
	declarations: [AppComponent, routingComponents],
	providers: [RouterService, HttpService],
	bootstrap: [AppComponent]
})

export class AppModule {
}
