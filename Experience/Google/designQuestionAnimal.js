Please use this Google doc to code during your interview. To free your hands for coding, we recommend that you use a headset or a phone with speaker option.


//Game

Function Board(){
	Self = this;
	Self.board = [
	0,0,0,
	0,0,0,
	0,0,0
	]
	Self.score = 0;
	self.currentPos = 0;
	Self.time = 1min;
	self.eachCountdown = 0; 
}

Board.protype.constructor : Board;
Board.prototype.randomPosition = function(){
	Var self = this;
	Random = randomI:
	self.board[random]
	for(let i = 0; i < self.board.length; i++){
		if(i == ramdom){
			Self.board[i] = 1
		}else{
			Self.board[i] = 0
		}
	}
}

Board.prorotype.isHitted = function(position){ //Receive the index of our clicked element in the DOM
	Var self = this;
	if(self.currentPos == position){
		Self.score += 100;
	}else if(self.eachCountdown == 0){
		self.randomPosition();
	}else if(self.time == 0){
		self.getScore();
	}
}


Board.prototype.getScore(){
//POST
//SOME ajax call to the server to POST the result;
}

<h1 id=’myId’>{Name} your score is {score}</h1>
<div id=’container’>
<div id=’0’onClick = “isHitted(id)”></div>
<div id=’1’></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div id=’9’></div>
</div>

<div>
<h1>Scores</h1>
<table>
…
…

</table>
</div>


