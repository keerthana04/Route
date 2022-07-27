import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private router: Router, private activateRouter: ActivatedRoute) {}
  ngOnInit() {}
  onReload() {
    // this.router.navigate(['/servers'], { relativeTo: this.activateRouter });
  }
}
