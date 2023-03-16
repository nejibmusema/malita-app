import { SubscriptionModel } from '../models';
import { Offer } from '../models/offer.model';

/**
 * sorts offers array in asc order based on contract Start Date
 * @param a
 * @param b
 * @returns
 */
export const sortOffersInAscending = (a: Offer, b: Offer) => {
  if (new Date(a.contractStartDate) < new Date(b.contractStartDate)) {
    return -1;
  }
  if (new Date(a.contractStartDate) > new Date(b.contractStartDate)) {
    return 1;
  }
  return 0;
};

/**
 * sorts offers array in desc order based on contract Start Date
 * @param a
 * @param b
 * @returns
 */
export const sortOffersInDescending = (a: Offer, b: Offer) => {
  if (new Date(a.contractStartDate) < new Date(b.contractStartDate)) {
    return 1;
  }
  if (new Date(a.contractStartDate) > new Date(b.contractStartDate)) {
    return -1;
  }
  return 0;
};
/**
 * sorts subscriptions array in asc order based on name and line
 * @param a
 * @param b
 * @returns
 */
export const sortSubscriptionInAscending = (
  a: SubscriptionModel,
  b: SubscriptionModel
) => {
  if (a.name < b.name || a.line < b.line) {
    return -1;
  }
  if (a.name > b.name || a.line > b.line) {
    return 1;
  }
  return 0;
};

/**
 * sorts subscriptions array in asc order based on name and line
 * @param a
 * @param b
 * @returns
 */
export const sortSubscriptionInDescending = (
  a: SubscriptionModel,
  b: SubscriptionModel
) => {
  if (a.name < b.name || a.line < b.line) {
    return 1;
  }
  if (a.name > b.name || a.line > b.line) {
    return -1;
  }
  return 0;
};
