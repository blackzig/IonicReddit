import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/Rx'

@Injectable()
export class RedditService {
    http: any
    baseUrl: String

    constructor(http: Http) {
        this.http = http;
        this.baseUrl = 'https://www.reddit.com/r'
    }

    getPosts(category, limit) {
        //https://www.reddit.com/r/pics/.json?limit=10&sort=hot
        return this.http.get(this.baseUrl + '/' + category + '/.json?limit=' + limit + '&sort=hot')
            .map(res => res.json())
    }
}