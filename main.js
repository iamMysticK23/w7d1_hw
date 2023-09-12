// CodeWars revisit # 1
function evenOrOdd(num) {

    if (num % 2 == 0) {
        return "Even"
    } else { 
        return "Odd"
    }
}

console.log(evenOrOdd(10))
console.log(evenOrOdd(7))


// CodeWars revisit # 2
function simpleMultiplication(number) {
  
    if (number % 2 === 0) {
      // If the number is even, multiply by eight
      return number * 8;
    } else {
      // If the number is odd, multiply by nine
      return number * 9;
    }
  }
console.log(simpleMultiplication(10))
console.log(simpleMultiplication(5))  


// Homework Question 1
function findDogNames(string, names) {
    let foundDog = false
    let foundCat = false
  
    for (let i = 0; i < names.length; i++) {
      if (string.includes(names[i])) {
        if (names[i] === "Sassy") {
          foundCat = true
        } else {
          foundDog = true
          console.log(`Matched ${names[i]}`)
        }
      }
    }
  
    if (foundCat) {
      console.log("Thats a damn cat")
    }
  
    if (!foundDog && !foundCat) {
      console.log("No Matches")
    }
  }
  
  let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
  Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."
  
  let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]
  
  findDogNames(dogString, dogNames)

  // Homework Question 2
  function replaceSignatureMoves(arr) {
    // Define a map of characters to their signature moves
    const signatureMoves = {
      Goku: "Kamehameha", Vegeta: "Final Flash",
      Trunks: "Burning Attack", Krillin: "Destructo Disc",
      Gohan: "Masenko", Piccolo: "Special Beam Cannon",
    }
  
    // array to store result
    const result = []
  
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
  
      if (i % 2 === 0) {
        // Replace with the signature move or keep regular value 
        result.push(signatureMoves[arr[i]] || arr[i])
      } else {

        // If the index is odd, keep the original value
        result.push(arr[i])
      }
    }
  
    return result
  }
  
  const arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]
  const result = replaceSignatureMoves(arr)
  console.log(result)