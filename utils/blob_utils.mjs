
export function blob_save_as(blob, filename) {
  const blob_url = URL.createObjectURL(blob)

  const a = Object.assign(
    document.createElement('a'),
    { href: blob_url,
      download: filename,
      style: 'display: none' })

  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)

  URL.revokeObjectURL(blob_url)
}

export function blob_open(blob, suffix) {
  const blob_url = URL.createObjectURL(blob)
  return !! window.open(
    suffix ? blob_url + suffix : blob_url )
}

