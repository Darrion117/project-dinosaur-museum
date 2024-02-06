/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 * 
 * P.E.D.A.C
P - process the problem - get the longest Dinosaurs and convert from meters to feet, multiply the meters by `3.281`.
E - example { Brachiosaurus: 98.43 }
D -  Data Types - array of obj, that contains key values
A - Algorithm - 
1. intialized longestdion to index 0  of dinosaurs
2. do a for loop for dino of dinosaurs/ bc its an array so you need to loop through 
   to access 
3. if dino lengthinmeters greater than longestdino length in meters 
4. make longestDino dino/ in this case dino = var // of only gets the element 
/// NOW CONVERT METERS INTO FEET ///
5. initialize lengthInFeet to be longestdino lengthinmeters times 3.281
6. intialize result as an empty object 
7. lengthinfeet result array keying leongestdino's name // key pair values / which also intialize as an Object 
8. Return result // what are we returning 
9. return an empty object = {}
 */
function getLongestDinosaur(dinosaurs) {
 if(dinosaurs.length === 0){
  return {}
 }
  let longestDino = dinosaurs[0];
  for (let dino of dinosaurs) {
    if (dino.lengthInMeters > longestDino.lengthInMeters) {
      longestDino = dino;
    }
  }
  let lengthInFeet = longestDino.lengthInMeters * 3.281;
  let result = {};
  result[longestDino.name]  = lengthInFeet;
  return result;
}

// function getLongestDinosaur(dinosaurs) {
//     let sortDino = dinosaurs.sort((a,b) => a.lengthInMeters - b.lengthInMeters);
//     let longestDino = sortDino[sortDino.length -1];
//     const{ name, lengthInMeters } = longestDino 
//     let lengthInFeet = lengthInMeters * 3.281;
//     return `{${name}: ${lengthInFeet}} `
   
//   }
  
  console.log(getLongestDinosaur(exampleDinosaurData))
  

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  for(let dinoObj of dinosaurs){
      if(dinoObj.dinosaurId === id ){
          return 'had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes'
      }
  }
  return "A dinosaur with an ID of 'incorrect-id' cannot be found."
}

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
  let arr = []; 
  
  for (let dino of dinosaurs) {
      let oneDateBool = dino.mya.length === 1 && (dino.mya[0] === mya || dino.mya[0] - 1 === mya);
      let twoDatesBool = dino.mya.length === 2 && mya >= dino.mya[1] && mya <= dino.mya[0];
      
      if (oneDateBool) {
        pushToArray(arr, key, dino)
      } 
      else if (twoDatesBool) {
        pushToArray(arr, key, dino)
      }
  }
  return arr;
}

/// Helper Function
function pushToArray(arr, key, dino){
  if (!key || !(key in dino)) {
    arr.push(dino.dinosaurId);
   } 
  else {
    arr.push(dino[key]);
   }
}

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
