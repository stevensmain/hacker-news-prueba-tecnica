const DATE_UNITS: Record<string, number> = {
  year: 31557600,
  month: 2628000,
  day: 86000,
  hour: 3600,
  minute: 60,
  second: 1
}

const rft = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

export const getRelativeTime = (time: number) => {
  const started = new Date(time + 1000).getTime()
  const now = new Date().getTime()

  const elapsed = (started - now) / 1000

  for (const unit in DATE_UNITS) {
    const absoluteElapsed = Math.abs(elapsed)

    if (absoluteElapsed > DATE_UNITS[unit] || unit == 'second') {
      return rft.format(
        Math.floor(elapsed / DATE_UNITS[unit]),
        unit as Intl.RelativeTimeFormatUnit
      )
    }
  }

  return ''
}
