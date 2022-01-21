//A pangram is a sentence or phrase that uses every letter of the alphabet
//Write a function to return if a string contains at least one of every
//letter(not case sensitive).
//return true or false
//toUpperCase is a good idea to use
//if(str[0] >= "A" && str[0] <= "Z") can be useful

// nested loop - first loop goes through all the letters in the alphabet
// second loop goes through input str
// check if each letter in alphabet is in the string
// if the letter is in the string, then we check for next letter in alphabet
// if not, then we end the algorithm by returning false
// to check for both upper and lower case letters use toUpperCase to make str all caps
// we will then parse through new str

const isPangram = (str) => {
    const newStr = str.toUpperCase(); 
    var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(var i = 0; i < alph.length; i++){
        var check = false;
        // console.log(alph[i]);
        for(var j = 0; j < newStr.length; j++){
            // console.log(newStr[j]);
            if(newStr[j] === alph[i]){
                check = true;
                
            }
        }
        if(!check){
            return false
        }
        
    }
    return true;
}

console.log(isPangram("Waxy and quivering, jocks fumble the pizza."));//returns true
console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false
console.log(isPangram("Sphinx of black quartz, judge my vow"));
console.log(isPangram("A"));

// //Write a function to check if a string contains exactly one of every letter
// //again, not case sensitive and it's ok to use toUpperCase
// const isPerfectPangram = (str) => {
// }

// console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false
// console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP"));//should be true
// console.log(isPerfectPangram("Mr. Jock, TV quiz PhD., bags few lynx."))
// console.log(isPerfectPangram("The five boxing wizards jump quickly."))