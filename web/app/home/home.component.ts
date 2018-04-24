import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private title: Title,
              private meta: Meta) {
  }
  
  ngOnInit() {
    this.title.setTitle('Home');
    this.meta.updateTag({name: 'description', content: 'Home'});
  }

}
