import type { Transaction } from "./Transaction";
	import { transactions } from '$lib/store/transaction';

export class Transactions {
  private _transactions: Transaction[] = []

  add(transaction: Transaction) : void {
    this._transactions.push(transaction)
    transactions.set(this)
  }

  toArray() : Transaction[] {
    return [].concat(this._transactions)
  }
}