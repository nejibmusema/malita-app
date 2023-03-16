import { createAction, props } from '@ngrx/store';
import { SubscriptionStateModel } from '../../models';

export const invokeSubscriptionsAPI = createAction(
  '[Subscriptions API] Invoke Subscription Fetch API',
  props<{ offerId: number }>()
);

export const subscriptionsFetchAPISuccess = createAction(
  '[Subscriptions API] Fetch API Success',
  props<{ allSubscriptions: SubscriptionStateModel }>()
);
