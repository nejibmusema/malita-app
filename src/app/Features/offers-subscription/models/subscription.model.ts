export interface SubscriptionModel {
  id: number;
  name: string;
  type: string;
  line: number;
  usage?: Usage[];
}

export interface Usage {
  type: string;
  used: number;
  limit: number;
}

export interface SubscriptionStateModel {
  offerId: number;
  subscriptions: SubscriptionModel[];
}
