export interface Transaction {
  _id: string; 
  amount: number;
  type: 'credit' | 'debit';
  status: 'approved' | 'pending'; 
  createdAt: Date;
  account: string;  
  description?: string;
}
