const PREFIX = 'van-'

function gen(name, mods) {
  if (!mods) {
    return ''
  }

  if (typeof mods === 'string' || typeof mods === 'number') {
    return ` ${PREFIX}${name}--${mods}`
  }

  if (Array.isArray(mods)) {
    return mods.reduce((ret, item) => ret + gen(name, item), '')
  }

  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? gen(name, key) : ''),
    ''
  )
}

function bem(name, mods) {
  return `${PREFIX}${name}` + ' ' + gen(name, mods)
}

module.exports.bem = bem
