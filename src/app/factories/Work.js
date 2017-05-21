import {guid} from '../utils'

export default function Work (data) {
  return {
    id: guid(),
    name: '',
    hourPrice1: 0,
    hourPrice2: 0,
    count: 0,
    hours: 0,
    ...data
  }
}
