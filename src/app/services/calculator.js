export default function calculator (calculators, index) {
  let _calculate = calculate.bind(null, calculators)

  if (index !== void 0) {
    return calculators.update(index, _calculate)
  }
  return calculators.map(_calculate)
}

function calculate (calculators, calc) {
  const type = calc.get('type')
  return calculator[type] ? calculator[type](calc, calculators) : calc
}
