// function convertF(temp){
//     return (temp * 9/5) + 32;
// }
// const cel = convertF(75);
// console.log('Farnheight temparature is : ',cel);


// function multipulNumber(array,find){
//     let n = 0;
//     for(let number of array){
//         if(number === find){
//             n = n + 1;
//         }
//     }
//     return n;

// }
// const output = multipulNumber([5,6,11,12,98, 5],5)
// console.log('output is : ',output);

// function countVowel(str){
//     let n = 0;
//     for(let world of str){
//         if(world === 'a'|| world === 'e'|| world === 'i'|| world === 'o'|| world === 'u'){
//             n = n + 1;
//         }
//     }
//     return n; 
// }
// const string = 'tanvir ahmmed tonamy';
// const vowel = countVowel(string.toLowerCase());
// console.log('Number of vowel is : ',vowel);

function longestWorld(str){
    let indexNumber;
    let index = [];
    let max;
    let sentence = str.split(" ")
    for(let i = 0; i < sentence.length; i++){
        indexNumber = sentence[i].length;
        index.push(indexNumber);
        max = Math.max(...index)
    }
    let mexIndex = index.indexOf(max)
    console.log(sentence[mexIndex])
     
}

const longString = 'tanvir ahmmedtonmay'
longestWorld(longString);