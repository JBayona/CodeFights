
/*
This is our first Beautiful JavaScript challenge, where your elegant code can win you 
awesome prizes! For full details and rules, check out the official announcement here.

CFBot stores all of her important information in the Secret Archives. 
CodeMaster is trying to pick the lock! The lock, a metal rectangle composed of movable cells
is unique and hard to pick. Some of the lock’s cells are occupied, and some are empty. 
The lock is unlocked when its occupied  cells form a specific configuration.

CodeMaster’s plan is to apply magnets to the lock’s 4 sides (one side at a time) 
to get the cells aligned correctly. CodeMaster doesn’t have much time to try to 
pick the lock before CFBot finds him, and he doesn’t want to waste time trying out 
different sequences. So you’re going to help him by implementing a function that, 
given a sequence of operations, will output the final state of the lock.

https://codefights.com/challenge/tuX9NefHfwnPBFZoW
*/
secretArchivesLock = (lock, actions) => {
  [...actions].map(action => {
    switch(action){
      case 'L' : lock = moveLeft(lock); break;
      case 'R' : lock = moveRight(lock); break
      case 'U' : lock = moveUp(lock); break;
      case 'D' : lock = moveDown(lock); break;
    }
  });
  return lock;
};

/*Obtenemos el length, eliminamos los puntos
y creamos un string con el mismo length, poniendolos
al final ya que queremos recorrer a la izquierda*/
const processLeftLock = element =>{
  const columns = element.length;
  return element.replace(/\./g, '').padEnd(columns,'.');
};

const processRightLock = element =>{
  const columns = element.length;
  return element.replace(/\./g, '').padStart(columns,'.');
};

const moveLeft = lock => lock.map(processLeftLock);
const moveRight = lock => lock.map(processRightLock);
const moveUp = lock => tranposeLock(moveLeft(tranposeLock(lock)));
const moveDown = lock => tranposeLock(moveRight(tranposeLock(lock)));

//Utils
const lockToMatrix = lock => lock.map(lock => [...lock]);
const transponseMatrix = matrix => 
    matrix[0].map((item, col) => 
      matrix.map(row => row[col])
    );
const matrixToLock = matrix => matrix.map(row => row.join(''));
const tranposeLock = lock => matrixToLock(transponseMatrix(lockToMatrix(lock)));

  lock = ["....",
        "AB..",
        ".C..",
        "...."];
  actions = "RDL";
  console.log(secretArchivesLock(lock,actions));