import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PublicationsDataServiceService } from 'src/app/services/publications-data-service.service';

interface Publication {
  text: string;
  date: string;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  public publications: Publication[] = [];
  private publicationsSubscription$: Subscription;

  constructor(
    private _publicationDataService: PublicationsDataServiceService
  ) {}

  ngOnInit(): void {
    this.publicationsSubscription$ = this._publicationDataService
      .getPublications()
      .subscribe((value: any) => {
        this.publications = value;
      });
  }

  ngOnDestroy(): void {
    this.publicationsSubscription$.unsubscribe();
  }
}
