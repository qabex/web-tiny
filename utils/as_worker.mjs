export default asWorkerFunction
export asWorkerFunction
export asBlobURLFunction

function asWorkerFunction(func) {
  return new Worker(asBlobURLFunction(func))
}

function asBlobURLFunction(func) {
  const rx_src = /(^.*=>|{)\s*([^]*?)(}\s*)?$/
  const f_src = rx_src.exec(func)
  const blob = new Blob([f_src[2]])
  return URL.createObjectURL(blob)
}
