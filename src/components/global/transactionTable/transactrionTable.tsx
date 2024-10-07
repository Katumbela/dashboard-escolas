import React from 'react';
import { FaMoneyBillWave, FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { IconType } from 'react-icons';
import { NumberUtils } from '@/utils';
import { routes } from '@/infra';
import Link from 'next/link';

export interface Transaction {
  name: string;
  date: string;
  amount: number;
  type: 'entrada' | 'saida';
}

interface TransactionListProps {
  transactions: Transaction[];
  showShowMore?: boolean
}

const getIcon = (type: 'entrada' | 'saida'): IconType => {
  switch (type) {
    case 'entrada':
      return GiReceiveMoney;
    case 'saida':
      return FaMoneyBillWave;
    default:
      return FaRegMoneyBillAlt;
  }
};

export const TransactionList: React.FC<TransactionListProps> = ({ transactions, showShowMore = true }) => {
  return (
    <div className="">
      <div className="p-4 rounded-lg shadow-md bg-purple-50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-primary">Resumo</h3>
          {
            showShowMore &&
            <Link href={routes.MOVEMENTS_ROUTE} className="font-semibold text-primary">Ver mais</Link>
          }
        </div>
        <ul>
          {transactions.map((transaction, index) => {
            const Icon = getIcon(transaction.type);
            const amountColor = transaction.type == 'saida' ? 'text-red-500' : 'text-green-500';
            return (
              <li key={index} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center">
                  <div className="p-3 bg-white rounded-full shadow-md">
                    <Icon className="text-lg text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{transaction.name}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <div className={`font-semibold ${amountColor}`}>
                  {transaction.type == 'saida' ? '-' : '+'} {NumberUtils.formatCurrency(transaction.amount)}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
