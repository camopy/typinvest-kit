import { writable } from 'svelte/store';
import type { Transaction } from "$lib/models/Transaction";

class Transactions {
  private _transactions: Transaction[] = []

  add(transaction: Transaction) : void {
    this._transactions.push(transaction)
    transactions.set(this)
  }

  toArray() : Transaction[] {
    return [].concat(this._transactions)
  }
}

export const transactions = writable<Transactions | null>(new Transactions());