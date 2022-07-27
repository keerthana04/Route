import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;
  constructor(private activateRouter: ActivatedRoute) {}
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
  ngOnInit() {
    this.user = {
      id: this.activateRouter.snapshot.params['id'],
      name: this.activateRouter.snapshot.params['name'],
    };
    this.paramsSubscription = this.activateRouter.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }
}
