for (let i = 0; i < 25; i++) {
  var array = []
  if (i===0) {array = ["I am ${i} strange loops."]}
  if (i===1) {array = [...array, "I am 1 strange loop."]};
  else {array = [...array, "I am ${i} strange loops."]};
  return array
}
