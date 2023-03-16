import { createAction, props } from '@ngrx/store';
import { Offer } from '../../models';

export const invokeOffersAPI = createAction(
  '[Offers API] Invoke Offers Fetch API'
);

export const offersFetchAPISuccess = createAction(
  '[Offers API] Fetch API Success',
  props<{ allOffers: Offer[] }>()
);
