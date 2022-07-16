let input = "whale talk"
let vowels = ["a", "e", "i", "o", "u"]
let resultArray = []
let resultString = resultArray.join()

for(i = 0; i < input.length; i++) {
  //console.log(input[i])
  //console.log('i is ' + i)
    if(input[i] === 'e'){
      resultArray.push(input[i])
    }
  for(j = 0; j < vowels.length; j++){
    //console.log(vowels[i])
    //console.log('j is ' + j)
    if(input[i] === vowels[j]) {
      resultArray.push(vowels[j])
    }
    if(input[i] === vowels[j]) {
      resultArray.push('u', 'u')
    }
  }
}
console.log(resultArray.join().toUpperCase())