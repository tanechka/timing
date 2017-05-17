let id = 0;

export default function Calculator () {
  return {
    id: ++id,
    name: '',
    hourPrice1: 0,
    hourPrice12: 0,
    hours: 0,
    price1: 0,
    price2: 0
  }
}
