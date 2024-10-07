import type { Account } from "./account";

export interface CreditRequest {
  id: number;
  amount: number;
  status: 'pending' | 'approved' | 'denied';
  createdAt: Date;
  account: Account;
  description?: string;
}
