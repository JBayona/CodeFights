/*
You're a crossword fanatic, and have finally decided to try and create your own. However, you also love symmetry and good design, so you come up with a set of rules they should follow:

the crossword must contain exactly four words;
these four words should form four pairwise intersections;
all words must be written either left-to-right or top-to-bottom;
the area of the rectangle formed by empty cells inside the intersections isn't equal to zero.
Given 4 words, find the number of ways to make a crossword following the above-described rules. Note that two crosswords which differ by rotation are considered different.

Example

For words = ["crossword", "square", "formation", "something"], the output should be
crosswordFormation(words) = 6.

The six crosswords can be formed as shown below:

  f                         f                             f
  o                     c r o s s w o r d     c r o s s w o r d
c r o s s w o r d           r   o                   q     r
  m   q                     m   m                   u     m
  a   u            ;  s q u a r e          ;        a     a
  t   a                     t   t                   r     t
  i   r                     i   h             s o m e t h i n g
s o m e t h i n g           o   i                         o
  n                         n   n                         n
                                g                               
                                                              
    c         s               s                                      
f o r m a t i o n       c     q               c         s          
    o         m         r     u               r         o      
    s q u a r e       f o r m a t i o n       o         m            
    s         t    ;    s     r            ;  s q u a r e                  
    w         h         s o m e t i n g       s         t         
    o         i         w                     w         h     
    r         n         o                   f o r m a t i o n            
    d         g         r                     r         n         
                        d                     d         g             


https://codefights.com/arcade/code-arcade/labyrinth-of-nested-loops/W5Sq7taLSzNHh8GiF
*/

//Let's use brute force!

//Stole a nifty permutation generator from the internets
//http://stackoverflow.com/questions/9960908/permutations-in-javascript
var permArr = [], usedChars = []

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};


function cwCounts(words) {
    top = words[0]
    left = words[1]
    right = words[2]
    bottom = words[3]
    
    count = 0
    for(t4l=0; t4l<top.length-2; ++t4l) {
        for(l4t=0; l4t<left.length-2; ++l4t) {
            if(top[t4l] === left[l4t]) {
                //right has to be at least 2 spaces to the right of left
                for(t4r=t4l+2; t4r<top.length; ++t4r) {
                    for(r4t=0; r4t<right.length-2; ++r4t) {
                        if(top[t4r] === right[r4t]) {
                            //bottom has to be at least 2 spaces below top
                            for(l4b=l4t+2; l4b<left.length; ++l4b) {
                                if(l4b-l4t+r4t >= right.length)
                                    continue;
                                
                                for(b4l=0; b4l<bottom.length-2; ++b4l) {
                                    if(b4l+t4r-t4l >= bottom.length)
                                        continue;
                                    if(left[l4b] === bottom[b4l]) {
                                        count += bottom[t4r-t4l+b4l] === right[l4b-l4t+r4t]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return count
}

function crosswordFormation(words) {
    permute(words);
    
    count = 0
    for(perm of permArr)
        count += cwCounts(perm)
    return count
}


words = ["crossword", "square", "formation", "something"]
console.log(crosswordFormation(words));