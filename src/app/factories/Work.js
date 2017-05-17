let id = 0;

export default function Work(data) {
  return {
    id: ++id,
    name: '',
    hourPrice1: 0,
    hourPrice2: 0,
    count: 0,
    hours: 0,
    ...data
  }
}