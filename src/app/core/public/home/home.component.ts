import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Animal } from 'src/app/shared/services/zoo/zoo.model';
import { ZooService } from 'src/app/shared/services/zoo/zoo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  // Data
  animal: Animal | null = null

  // Subscriber
  subscription: Subscription | null = null

  constructor(
    private zooSvc: ZooService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  getData() {
    this.subscription = this.zooSvc.getSingle().subscribe(
      () => {
        this.animal = this.zooSvc.animal
      }
    )
  }

}
