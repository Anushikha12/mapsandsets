// "Problem1:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"

function remove_duplicate(str,n){
    const set=new Set(str);
    console.log([...set]);
}
remove_duplicate('abcadeecfb','10');



// "Problem2:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"


function countVowel(str) {
    let mp=new Map();
    let count=0;
    for(let i of str) {
         mp.set(i,count);
    }
     for(let i of str){
     count=mp.get(i);
     mp.set(i,count+1);
  }
  for(let [i,value] of mp){
    console.log(i+" : "+value);
  }
}
countVowel('abcadeecfb');