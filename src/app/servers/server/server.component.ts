import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  constructor(private router: Router, private activateRouter: ActivatedRoute) {}
  ngOnInit() {}
  onReload() {
    // this.router.navigate(['/servers'], { relativeTo: this.activateRouter });
  }
}
