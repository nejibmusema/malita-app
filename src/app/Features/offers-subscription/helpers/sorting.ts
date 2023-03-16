import { Offer } from '../models/offer.model';

export const sortInAscending = (a: Offer, b: Offer) => {
  if (new Date(a.contractStartDate) < new Date(b.contractStartDate)) {
    return -1;
  }
  if (new Date(a.contractStartDate) > new Date(b.contractStartDate)) {
    return 1;
  }
  return 0;
};

export const sortInDescending = (a: Offer, b: Offer) => {
  if (new Date(a.contractStartDate) < new Date(b.contractStartDate)) {
    return 1;
  }
  if (new Date(a.contractStartDate) > new Date(b.contractStartDate)) {
    return -1;
  }
  return 0;
};
