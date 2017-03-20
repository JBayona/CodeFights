/*
You and your friends love to play bowling at the end of a long week. You play by your very own rules. Each team has an even number of rolls to make, two rolls in a row. A pair of consecutive rolls is called a frame.

Each frame 10 pins are placed on a lane. If a player manages to knock down all 10 pins, he gets 30points, and can try to knock down another 10 pins in the next roll. If he knocks them down again, he gets another 30 points. Otherwise the number of points he gains is equal to the number of pins he knocked down. If a player doesn't knock down all the pins in the first roll of a frame, by the end of the frame he gets the number of points equal to the number of pins knocked down in that frame.

You are given the results of the rolls your team played. Return the total number of points you received this game.

Example

For rolls = [10, 10, 10, 4, 9, 1, 0, 10, 3, 3, the output should be
bowlingScore(rolls) = 120.

Here's the number of points you got in each frame:

30 + 30 = 60
30 + 4 = 34
9 + 1 = 10
0 + 10 = 10
3 + 3 = 6.
Thus, the answer is 60 + 34 + 10 + 10 + 6 = 120.

*/

function bowlingScore(rolls) {
    total = 0
    rolls.reduce(function(item,index, array){
        if(index % 2 == 0 && item == 10){ //Si index = 2 significa que es el primer tiro de cada competidor, por lo tanto debemos verificar si es 10 ya que valdrá 30 puntos en caso de serlo
            total += 30;
            return;
        }else if(item == 10 && array[index-1] == 10){ //Si no es par el index significa que es el segundo tiro de cada jugador, entonces verificamos si el tiro anterior es 10 también, sí es así significa que puedes ser también valor de 30 en caso de ser 10
            total += 30;
            return;
        }else{ //De lo contrario solo se suma la cantidad de puntos
            total += item;
            return
        }
    });
    return total;
}

rolls = [8, 2, 10, 8, 1, 0, 10, 1, 0, 0]
console.log(bowlingScore(rolls));


//Reducido

bowlingScore = r => {
    t = 0
    r.map((e,i,a) =>{
        i % 2 == 0 && e == 10 ? t += 30:
        e == 10 && a[i-1] == 10 ? t += 30 :
        t += e
    })
    return t
}