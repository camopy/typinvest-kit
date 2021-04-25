import moment from 'moment'

export class Transaction {

  constructor(private _date : string, private _amount : number, private _price : number) {}

  get date() : string {
    return this._date
  }

  get formattedDate() : string {
    return moment(this._date, "x").format("L")
  }

  get amount() : number {
    return this._amount
  }

  get price() : number {
    return this._price
  }
}