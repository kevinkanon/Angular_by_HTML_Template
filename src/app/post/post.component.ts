import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
}) 

export class PostComponent implements OnInit {

    @Input() post: any;

    constructor() { }

    ngOnInit() { }

}
