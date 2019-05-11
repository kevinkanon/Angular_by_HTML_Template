import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

    post = { };

    constructor(private route: ActivatedRoute, private config: ConfigService, private location: Location) { }

    ngOnInit(): void  { this.getPostById(); }

    getPostById()
    {
        const id = +this.route.snapshot.paramMap.get('id');
        this.config.getPostByIDFromService(id)
            .subscribe(postResult => this.post = postResult);
    }

    /**
     * Go back to the page before enter on the article single page
     */
    goBack(): void { this.location.back(); }


}
