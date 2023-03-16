import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  sortSubscriptionInAscending,
  sortSubscriptionInDescending,
} from '../../helpers/sorting';
import { SubscriptionStateModel } from '../../models';

export const selectSubscriptions =
  createFeatureSelector<SubscriptionStateModel[]>('mySubscriptions');

export const selectSubscriptionById = (offerId: number, sortType: string) =>
  createSelector(
    selectSubscriptions,
    (subscriptions: SubscriptionStateModel[]) => {
      var subscriptionById = subscriptions.filter((_) => _.offerId == offerId);
      if (subscriptionById.length == 0) {
        return null;
      }
      switch (sortType) {
        case 'Asc': {
          return {
            offerId: subscriptionById[0].offerId,
            subscriptions: [...subscriptionById[0].subscriptions].sort(
              sortSubscriptionInAscending
            ),
          };
        }
        case 'Desc': {
          return {
            offerId: subscriptionById[0].offerId,
            subscriptions: [...subscriptionById[0].subscriptions].sort(
              sortSubscriptionInDescending
            ),
          };
        }
      }
      return subscriptionById[0];
    }
  );
