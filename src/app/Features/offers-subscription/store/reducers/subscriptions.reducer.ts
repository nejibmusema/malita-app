import { createReducer, on } from '@ngrx/store';
import { SubscriptionStateModel } from '../../models';
import { subscriptionsFetchAPISuccess } from '../../store/actions/subscriptions.action';

export const subscriptionInitialState: ReadonlyArray<SubscriptionStateModel> =
  [];

export const subscriptionsReducer = createReducer(
  subscriptionInitialState,
  on(subscriptionsFetchAPISuccess, (state, { allSubscriptions }) => {
    let newState = state.filter((_) => _.offerId != allSubscriptions.offerId);
    newState.unshift(allSubscriptions);
    return newState;
  })
);
