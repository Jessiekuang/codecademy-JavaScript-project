const _ = {
  //chunk
  chunk(arr, chunkNum){
    let newarr = [];
    let pos = 0;
    while (pos < arr.length){
      let innerarr = [];
      for(let j = 1; (j <= chunkNum) && (pos < arr.length); j++){
        innerarr.push(arr[pos]);
        pos++;
      }
      newarr.push(innerarr);
    }
    return newarr;
  },

  //clamp
  clamp(num, min, max){
    if (num <= min) {
      return min;
    }
    else if (num >= max) {
      return max;
    }
    else {
      return num;
    }
  },

  //drop-while
  dropWhile(array, predicate){
    let dropPos = 0;
    for(dropPos; dropPos < array.length; dropPos++) {
      if (!predicate(array[dropPos], dropPos, array)) {
        break;
      }
    }
    return this.drop(array, dropPos);
  },

  //drop
  drop(array, num = 1){
    if (array.length <= num){
      return [];
    }
    else if (num <= 0) {
      return array;
    }
    else {
      let newarr = [];
      for(let i = num; i < array.length; i++){
        newarr.push(array[i]);
      }
      return newarr;
    }
  },

  //find-key
  findKey(array, predicate){
    for(let key in array){
      if(predicate(array[key])) {
        return key;
      }
    }
  },
  //has
  has(object, path) {
    if (typeof path === "string"){
      obj = object[path];
      if (obj){
        return true;
      }
      else return false;
    }
    else {
      let obj = object;
      for (let i = 0; i < path.length; i++){
        if (!obj.path[i]) {
          return false;
        }
        obj = obj.path[i];
      }
      return true;
    }
  },
  //in-range
  inRange(number, start, end) {
    let smaller;
    let larger;

    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      smaller  = end;
      larger = start;
    }
    else {
      smaller = start;
      larger = end;
    }
    if (number >= smaller && number < larger) {
      return true;
    }
    else {
      return false;
    }
  },

  //invert
  invert(object){
    let newobj = {};
    for(let key in object){
      let newKey = object[key];
      newobj[newKey] = key;
    }
    return newobj;
  },

  //pad
  pad(string = '', length=0, str=' ') {
    let theRest = length - string.length;
    if(theRest > 0) {
      let newstring = "";
      let left = Math.floor(theRest/2);
      let times = 0;
      while ((times + 1) * (str.length) <= left) {
         times++;
         newstring += str;
      }
      left = left - times * (str.length);
      if (left > 0) {
        let temp = str.subarray(0,left);
        newstring += temp;
      }
      newstring += string;
      let right = theRest - Math.floor(theRest/2);
      times = 0;
      while ((times + 1) * (str.length) <= right) {
         times++;
         newstring += str;
      }
      right = right - times * (str.length);
      if (right > 0) {
        temp = str.subarray(0,right);
        newstring += temp;
      }
      return newstring;
    }
    else {
      return string;
    }
  },

  //words
  words(str = " ", pattern = " "){
    if (typeof pattern === "string"){
      return str.split(pattern);
    }
    else {
      let newstring = str.match(pattern);
      console.log(newstring);
      return newstring;
    }
  }
}





// Do not write or modify code below this line.
module.exports = _;
