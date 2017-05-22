import {guid} from '../utils'

export default function Tag (data) {
  return {
    id: guid(),
    color: '',
    count: 1,
    ...data
  }
}
