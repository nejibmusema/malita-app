import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { OffersService } from '../../services';
import {
  offersFetchAPISuccess,
  invokeOffersAPI,
  refreshOffersAPI,
} from '../actions/offers.action';
import { selectOffers } from '../selectors/offers.selector';

@Injectable()
export class OffersEffect {
  constructor(
    private _actions$: Actions,
    private _offersService: OffersService,
    private _store: Store
  ) {}

  loadAllOffers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(invokeOffersAPI),
      withLatestFrom(this._store.pipe(select(selectOffers))),
      mergeMap(([, offerFormStore]) => {
        if (offerFormStore.length > 0) {
          return EMPTY;
        }
        return this._offersService
          .getOffers()
          .pipe(map((data) => offersFetchAPISuccess({ allOffers: data })));
      })
    )
  );

  refreshAllOffers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(refreshOffersAPI),
      withLatestFrom(this._store.pipe(select(selectOffers))),
      mergeMap(([, offerFormStore]) => {
        return this._offersService
          .getOffers()
          .pipe(map((data) => offersFetchAPISuccess({ allOffers: data })));
      })
    )
  );
}
