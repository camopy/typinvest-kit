import type { Transaction } from "./Transaction";

export class Transactions {
  private _transactions: Transaction[] = []

  add(transaction: Transaction) : void {
    this._transactions.push(transaction)
  }

  toArray() : Transaction[] {
    return [].concat(this._transactions)
  }
}