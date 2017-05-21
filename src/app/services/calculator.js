export default function calculator (calculators, complexity, index) {
  let _calculate = calculate.bind(null, calculators, complexity)

  if (index !== void 0) {
    return calculators.update(index, _calculate)
  }
  return calculators.map(_calculate)
}

function calculate (calculators, complexity, calc) {
  const type = calc.get('type')
  return calculator[type] ? calculator[type](calc, complexity, calculators) : calc
}
