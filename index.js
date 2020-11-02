// Code your solution here

const findMatching = (drivers, name) => {
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

const fuzzyMatch = (drivers,name) => {
  return drivers.filter(driver => {
    return driver.startsWith(name)
  })
}

const matchName = (drivers, name) => {
  return drivers.filter(driver => {
    return driver.name === name
  })
}