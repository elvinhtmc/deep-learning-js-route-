const a = () => {
  b ()
  alert (a)
}
const b = () => {
  c ()
  alert (b)
}
const c = () => {
  alert (c)
}

a ()