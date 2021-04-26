import { Writable, writable } from 'svelte/store';
import type { Transaction } from "$lib/models/Transaction";

class Transactions {
  constructor(
    readonly transactions : Writable<Transaction[]>
  ) {}

  add(transaction: Transaction) : void {
    this.transactions.update(transactionsData => [...transactionsData, transaction])
  }

  toArray() : Transaction[] {
    return [].concat(this.transactions)
  }

}

export const transactionsStore = new Transactions(writable([]));