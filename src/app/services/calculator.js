export default function calculator (calculators) {
  return calculators.map(calculate)
}

function calculate (calc) {
  const type = calc.get('type')
  return calculator[type] ? calculator[type](calc) : calc
}
