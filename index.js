function takeANumber(katzDeliLine, person){
<<<<<<< HEAD
  katzDeliLine.push(person)
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  var lineLength = katzDeliLine.length
  if (lineLength < 1) {
    return "There is nobody waiting to be served!"
  } else {
  var person = katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${person}.`
  }
}

function currentLine(katzDeliLine) {
  var lineArray = []
  if (katzDeliLine.length < 1) {
    return "The line is currently empty."
  } else {
    for (var i = katzDeliLine.length; i >= 1; i--) {
      lineArray.unshift(` ${i}. ${katzDeliLine[i-1]}`)
    }
  }
  return `The line is currently:${lineArray}`
=======
  var lineLength = katzDeliLine.length + 1
  katzDeliLine.push(person)
  return `Welcome, ${person}. You are number ${lineLength} in line.`
>>>>>>> 9885b26d5dce9d169c0ab4122abf311fce1a9c63
}
