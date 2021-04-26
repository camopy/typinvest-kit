import moment from 'moment'

export class Transaction {

  constructor(readonly date : string, readonly amount : number, readonly price : number) {
    this.date = moment(date).format("x")
  }

  get formattedDate() : string {
    return moment(this.date, "x").format("L")
  }
}