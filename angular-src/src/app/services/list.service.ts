import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { List } from '../../../../model/List';

import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

    constructor(private http: Http) { }

    private serverApi = 'http://localhost:3000';

    public getAllLists(): Observable<List[]> {

        const URI = `${this.serverApi}/todoList/`;
        return this.http.get(URI)
            .map(res => res.json())
            .map(res => <List[]>res.lists);
    }

    public deleteList(listId: string) {
      const URI = `${this.serverApi}/todoList/${listId}`;
      const headers = new Headers;
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, {headers})
        .map(res => res.json());
    }
}
