import { Component, OnInit } from "@angular/core";
import { TemplateStateService } from "../services/templateStateService";

declare var window: any;

@Component({
    selector: "app-template-programForm",
    templateUrl: window.serverSideSettings.appPath + '/AdminSite/app/templateManager/views/templateManager.programForm.view.html'
})
export class TemplateManagerProgramFormComponent implements OnInit{
    public select: HTMLSelectElement;
    constructor(private tmpService: TemplateStateService) {
        
    }
    ngOnInit() {
        let select: HTMLSelectElement = document.getElementById("selectProgram") as HTMLSelectElement;
        select.addEventListener('change', function () {
            var index = select.selectedIndex;
            alert(index);
        });
    }
    public updateListener() {
        
    }
}