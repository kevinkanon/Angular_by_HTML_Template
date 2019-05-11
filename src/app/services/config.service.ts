import { Injectable } from '@angular/core';
import { configuration } from '../configuration';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ConfigService {

    config = configuration;

    constructor() { }

    /**
     * get all config data 
     */
    getConfigFromService() { return this.config; }


    /**
     * get post by Id
     * @param id 
     */
    getPostByIDFromService(id: number): Observable<any>
    {
        //return of(this.config.blog.posts[id - 1]);
        return of(this.config.blog.posts.find(post => post.id === id));
    }

}
