import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';

import {Product} from './product';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {
    constructor(private http: Http) { }

    private _url: string = "/api/Values";

    GetProducts(): Observable<Product[]> {
        return this.http.get(this._url).map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.Products || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);

        return Observable.throw(errMsg);
    }
}