import { Injectable } from "@angular/core";
import { Program } from "../models/program";

@Injectable()
export class TemplateStateService {
    public programs: Array<Program> = [
        new Program("A", "Program1"),
        new Program("B", "Program2"),
        new Program("C", "Program3"),
        new Program("D", "Program4"),
        new Program("E", "Program5")
    ];
}