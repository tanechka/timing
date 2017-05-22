import {guid} from '../utils'

export default function Tag (data) {
  return {
    id: guid(),
    color: 'blue',
    count: 1,
    ...data
  }
}
