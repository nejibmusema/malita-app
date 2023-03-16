import { createReducer, on } from '@ngrx/store';
import { Offer } from '../../models';
import { offersFetchAPISuccess } from '../actions/offers.action';

export const offerInitialState: ReadonlyArray<Offer> = [];

export const offersReducer = createReducer(
  offerInitialState,
  on(offersFetchAPISuccess, (state, { allOffers }) => {
    return allOffers;
  })
);
