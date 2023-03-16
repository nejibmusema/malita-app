import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Offer } from '../../models';
import { sortInDescending, sortInAscending } from '../../helpers/sorting';

export const selectOffers = createFeatureSelector<Offer[]>('myOffers');
export const selectSortedOffers = (sortType: string) =>
  createSelector(selectOffers, (subscriptions: Offer[]) => {
    switch (sortType) {
      case 'Asc': {
        return [...subscriptions].sort(sortInAscending);
      }
      case 'Desc': {
        return [...subscriptions].sort(sortInDescending);
      }
    }
    return subscriptions;
  });
