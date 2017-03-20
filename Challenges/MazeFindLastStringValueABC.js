/*
Your task is to determine the number of moves it will take to get from the first character of the given string maze to the last one.

Each character of maze is a lowercase letter of the English alphabet. Each letter is assigned an integer value: 'a' = 1, 'b' = 2, 'c' = 3, and so on, with 'z' = 26. Starting from the first character of the maze, you can move n characters to the right, where n is the value assigned to the letter at your current position. For example, if you are standing on the character 'c', you should move 3 positions to the right.

If you land up on a character that lies farther than the last character of the maze, start over from the beginning and keep counting. For example, if you pass over the last character by four, you will end up at the fourth character from the beginning.

Given the maze, return the number of moves required to get to its last character from its first one as described above. If the algorithm turns out to be an infinite loop that never lands on the last character, return -1 instead.

Example

For maze = "able", the output should be
stringMaze(maze) = 2.

Starting on 'a', move one character right to the 'b'. Since 'b' equals 2, move two more characters right to the 'e'. 'e' is the last character in the maze, so you are finished. This took two moves, so the output should be 2.

For maze = "aced", the output should be
stringMaze(maze) = -1.

Starting on the 'a', move one character right to the 'c'. Since 'c' equals 3, move three more characters right, wrapping around to the 'a' again. 'a' and 'c' form an infinite loop, so the answer is -1.
*/

function stringMaze(maze) {
  tam = maze.length;
  moves = 0;
  asci = 0;
  visited = []; //Con este array vamos a ver cuales letras ya recorrimos
  for(i = 0; i < tam; ){
    //Menos 96 para que el abecedario sea desde 1 hasta 26, el ASCII de "a" comienza en 97. de "b" en 98 y so on..
    moves++; //contamos un movimiendo por cada letra, comenzando desde la primera
    asci = (maze[i].charCodeAt(0)-96); //sacamos el codigo ASCII de la letra y restamos 96 para tener a= 1, b=2...
    i = (i+asci)%tam; //usamos modulo de la dimension de nuestro array para que solo regresemos de nuevo si nos pasamos
    if(i == maze.length-1){ //checamos si nuestro index en el array es igual al ultimo de nuestro array
      break; //Si si, significa que hemos llegado a la ultima letra, rompemos el ciclo y regresamos el numero de movimientos para llegar
    }else{
      if(visited.includes(i)){ //Si no, verificamos si el index en el que estamos ya lo analizamos antes
        //Si si, significa que vamos a entrar a un loop y debemos retornar -1
        return -1
      }
      visited.push(i); //Si no hemos analizado ese index, lo marcamos como analizado en nuestro array
    }
  }
  return moves;
}

maze = "aesvdjjfrizknthijnacdkz";
console.log(stringMaze(maze))