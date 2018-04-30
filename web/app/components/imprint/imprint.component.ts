import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html'
})
export class ImprintComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta) {
}

  ngOnInit() {
    this.title.setTitle('Imprint');
    this.meta.updateTag({name: 'description', content: 'Imprint'});
  }
}