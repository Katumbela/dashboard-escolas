export interface Transaction {
  id: number;
  amount: number;
  type: 'credit' | 'debit';
  createdAt: Date;
  accountId: number;  
  description?: string;
}
