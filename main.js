// Create 3 arrays that can will be randomly selected to create a sentence
const animals = ['pig', 'chicken', 'cow', 'squirrel', 'horse', 'dog', 'beaver', 'lynx', 'hawk', 'pigeon'];
const verb = ['drank a beer', 'took a strole', 'cleaned the house', 'went exploring', 'went to the pub', 'shoveled snow', 'flew to paris']
const purpose = ['they were stressed', 'they don\'t like their spouse', 'they are messy', 'they like the outdoors', 'they are dying', 'they have too much free time'];


// Create a function that randomly selects 1 array value in each array
const randomize = (arr1, arr2, arr3) => {
    let randomArr = [];
    randomArr.push(animals[Math.floor(Math.random() * arr1.length)]);
    randomArr.push(verb[Math.floor(Math.random() * arr2.length)]);
    randomArr.push(purpose[Math.floor(Math.random() * arr3.length)]);
    return `The ` + randomArr[0] + ' ' + randomArr[1] + ' because ' + randomArr[2] + '.';
};

console.log(randomize(animals, verb, purpose));
// console.log(verb);
// console.log(purpose);
