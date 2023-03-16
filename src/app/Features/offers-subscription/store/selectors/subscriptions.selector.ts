import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SubscriptionStateModel } from '../../models';

export const selectSubscriptions =
  createFeatureSelector<SubscriptionStateModel[]>('mySubscriptions');

export const selectSubscriptionById = (offerId: number) =>
  createSelector(
    selectSubscriptions,
    (subscriptions: SubscriptionStateModel[]) => {
      var subscriptionById = subscriptions.filter((_) => _.offerId == offerId);
      if (subscriptionById.length == 0) {
        return null;
      }
      return subscriptionById[0];
    }
  );
