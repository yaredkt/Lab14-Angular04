import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class PostService {
    constructor(private http: HttpClient) { }

    getPosts() {
        return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
    }

    getUser() {
        return this.http.get('http://jsonplaceholder.typicode.com/users/1')
    }
}
