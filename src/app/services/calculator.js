export default function calculator (calculators, index) {
  if (index !== void 0) {
    return calculators.update(index, calculate)
  }
  return calculators.map(calculate)
}

function calculate (calc) {
  const type = calc.get('type')
  return calculator[type] ? calculator[type](calc) : calc
}
