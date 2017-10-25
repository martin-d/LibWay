import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Book } from '../classes/book';
import { environment } from '../../../environments/environment';

@Injectable()
export class SearchService {
  private options = new RequestOptions({ withCredentials: true });
  private url: string = `${environment.apiBaseUrl}/search`;

  constructor(private http: Http) { }

  search(search: string): Observable<boolean | Response> {
    const searchInfo = { 'searchString': search };
    return this.http.post( `${this.url}`, searchInfo, this.options)
        .do((res: Response) => {
            if (res){
              return <Array<Book>>res.json();
                // return Observable.of(true);
            }

            return Observable.of(false);
        })
        .catch(error => {
            console.log('search error', error);
            return Observable.of(false);
        });
  }

}
