export default {
  number (number) {
    return number.toLocaleString('ru-RU', {maximumFractionDigits: 0})
  },
  currency (number) {
    return this.number(number) + 'p'
  },
  hours (number) {
    return number + 'ч'
  }
}
