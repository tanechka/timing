import {guid} from '../utils'

export default function Calculator () {
  return {
    id: guid(),
    name: '',
    hourPrice1: 0,
    hourPrice2: 0,
    hours: 0,
    price1: 0,
    price2: 0
  }
}
