function forLoop (array) {
for (let i = 0; i < 25; i++) {
  // if (i===0) {array = ["I am ${i} strange loops."]}
  // if (i===1) {array = [...array, "I am 1 strange loop."]};
  // else {array = [...array, "I am ${i} strange loops."]};
  if (i=1) {array.push("I am 1 strange loops.")}
  else {array.push("I am ${i} strange loops.")}
}
return array
}
