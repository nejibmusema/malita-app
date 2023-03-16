import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { OffersService } from '../../services';
import {
  subscriptionsFetchAPISuccess,
  invokeSubscriptionsAPI,
} from '../actions/subscriptions.action';
import { selectSubscriptions } from '../selectors/subscriptions.selector';

@Injectable()
export class SubscriptionsEffect {
  constructor(
    private _actions$: Actions,
    private _offersService: OffersService,
    private _store: Store
  ) {}

  loadAllSubscriptions$ = createEffect(() =>
    this._actions$.pipe(
      ofType(invokeSubscriptionsAPI),
      withLatestFrom(this._store.pipe(select(selectSubscriptions))),
      mergeMap(([action, subscriptionFormStore]) => {
        var subscriptionById = subscriptionFormStore.filter(
          (_) => _.offerId == action.offerId
        );
        if (subscriptionFormStore.length > 0 && subscriptionById[0]) {
          return EMPTY;
        }
        return this._offersService.getOfferDetail(action.offerId).pipe(
          map((data) =>
            subscriptionsFetchAPISuccess({
              allSubscriptions: {
                offerId: action.offerId,
                subscriptions: data,
              },
            })
          )
        );
      })
    )
  );
}
