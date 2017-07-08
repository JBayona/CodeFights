'use strict';

// Utils

const parse = str => /\'.*\'/.exec(str);
const newMoove = str => {return {name: str, count:1};};
const insertBy = (arr, elem, prop) => {
  const found = findBy(arr, elem, prop);
  if(found){
    found.count++;
  }else{
    arr.push(elem);
  }
};

const findBy = (arr, elem, prop) => {
  if(arr.length == 0) return null; 
  const max = arr.length-1;
  const guess = Math.floor(max/2);
  if(elem[prop] === arr[guess][prop]){
    return arr[guess];
  }else if(elem.name.localeCompare(arr[guess][prop]) > 0) {
     return findBy(arr.slice(guess+1, max+1), elem, prop );
  }else{	
     return findBy(arr.slice(0, guess), elem, prop ); 	
  }
};

const sortBy = arr => f => arr.sort(f);
/*
const Maybe = x => this.__value = x;
Maybe.prototype.of = x = new Maybe(x);
Maybe.prototype.map = f = Maybe.of(f(x));
*/

// solution
var moovies = [];

const rank = (a, b) => b.count - a.count;
const videoViewed = str => insertBy(moovies, newMoove(str), 'name');
const printRank = arr  => sortBy(arr)(rank).forEach(elem => console.log(elem.name, ', ', elem.count));

videoViewed('video 1');
videoViewed('video 2');
videoViewed('video 2');
videoViewed('video 3');
videoViewed('video 1');
videoViewed('video 2');

printRank(moovies);
 
