import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Offer } from '../../models';
import {
  sortOffersInAscending,
  sortOffersInDescending,
} from '../../helpers/sorting';

export const selectOffers = createFeatureSelector<Offer[]>('myOffers');
export const selectSortedOffers = (sortType: string) =>
  createSelector(selectOffers, (subscriptions: Offer[]) => {
    switch (sortType) {
      case 'Asc': {
        return [...subscriptions].sort(sortOffersInAscending);
      }
      case 'Desc': {
        return [...subscriptions].sort(sortOffersInDescending);
      }
    }
    return subscriptions;
  });
