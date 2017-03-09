import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { RouterService } from './router.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { classToPlain } from "class-transformer";


declare var window: any;

@Injectable()
export class HttpService {
	appPath: string;
	public error: any;
	constructor(private http: Http, private routerService: RouterService) {
		this.appPath = window.serverSideSettings.appPath;
	}

	get(path: string): Observable<any> {
		return this.http.get(this.appPath + path)
			.map(this.extractData)
			.catch(this.handleError);
	}

	post(path: string, data: any, options: any = null) {
		let jsonData = classToPlain(data);
		var body = JSON.stringify(jsonData);
		var headers = new Headers({ 'Content-Type': 'application/json;  charset=utf-8 ' });
		if (!options) {
			options = new RequestOptions({ headers: headers });
		}
		return this.http.post(this.appPath + path, body, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json() as Object;
		return body || {};
	}

	private handleError(error: any) {
		this.error = error.json();
		console.error(error);
		return Observable.throw(this.error);
	}
}