export default {
  number (number) {
    return number.toLocaleString('en-US', {maximumFractionDigits: 0})
  },
  currency (number) {
    return '$ ' + this.number(number)
  },
  hours (number) {
    return this.number(number) + 'ч'
  }
}
