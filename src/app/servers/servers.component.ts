import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor(private router: Router, private activateRouter: ActivatedRoute) {}
  ngOnInit() {}
  onReload() {
    // this.router.navigate(['/servers'], { relativeTo: this.activateRouter });
  }
}
