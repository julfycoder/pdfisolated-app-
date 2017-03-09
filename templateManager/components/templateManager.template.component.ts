import { Component } from '@angular/core';
import { RouterService } from '../../services/router.service';
import { FileUploader } from 'ng2-file-upload';
import { FileItem } from 'ng2-file-upload';
import { ParsedResponseHeaders } from 'ng2-file-upload';
import { PdfParsingResponse } from '../models/pdfparsingresponse';
import { plainToClass } from "class-transformer";
import { Program } from "../models/program";


const UploadUrl = '/admin/api/templatemanager/uploadpdftemplate';

declare var window: any;


@Component({
	selector:'app-template-template',
	templateUrl: window.serverSideSettings.appPath + '/AdminSite/app/templateManager/views/templateManager.template.view.html'
})

export class TemplateManagerTemplateComponent {
	public uploader: FileUploader;

	//-------------------- Model part
	public parsingResponse: PdfParsingResponse;
	public isError: boolean;
    public templateName: string;
	//-------------------------------

	constructor(public routerService: RouterService) {
		this.uploader = new FileUploader({ url: window.serverSideSettings.appPath + UploadUrl });
		
		this.uploader.onCompleteItem = this.onUploadComplete.bind(this);
		this.uploader.onErrorItem = this.onUploadError.bind(this);
	}

	public onUploadFileChanged(e: any): void {
		this.isError = false;
		this.parsingResponse = null;
		this.uploader.uploadAll();
	}

	public onUploadComplete(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): void {
		if (status != 200 || response == '')
			return;

		var plainObj = JSON.parse(response);
		this.parsingResponse = plainToClass<PdfParsingResponse, Object>(PdfParsingResponse, plainObj);

        this.templateName = this.parsingResponse.FileName;

       
	}

	public onUploadError(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): void {
		this.isError = true;
	}

    public onProgramSelected(p: Program) {
        alert(p);
    }
    public onSelected(): boolean{
        alert("Selected!");
        return false;
    }
    

	goback() {
		this.routerService.navigateBack();
	}
}
