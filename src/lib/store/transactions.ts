import { Writable, writable } from 'svelte/store';
import type { Transaction } from "$lib/models/Transaction";

class Transactions {
  constructor(
    private _transactions : Writable<Transaction[]>
  ) {}

  add(transaction: Transaction) : void {
    this._transactions.update(transactionsData => [...transactionsData, transaction])
  }

  toArray() : Transaction[] {
    return [].concat(this._transactions)
  }

  get transactions() : Writable<Transaction[]>{
    return this._transactions
  }
}

export const transactionsStore = new Transactions(writable([]));