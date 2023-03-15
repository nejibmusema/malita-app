import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Offer, SubscriptionModel } from '../models';

@Injectable()
export class OffersService {
  private apiUrl: any;

  constructor(
    @Inject('environment') environment: any,
    private http: HttpClient
  ) {
    this.apiUrl = environment.apiUrl;
  }

  public getOffers(): Observable<Offer[]> {
    const url = `${this.apiUrl}offers`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response?.offers;
      })
    );
  }

  public getOfferDetail(offerId: number): Observable<SubscriptionModel[]> {
    const url = `${this.apiUrl}offers/${offerId}/subscriptions`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response?.subscriptions;
      })
    );
  }
}
