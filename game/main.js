let boxes = document.querySelectorAll('.allbutton');
let reset = document.querySelector('.reset');
let new_gamebtn = document.querySelector('.new_game');
let result = document.querySelector('.result')
let score1 = document.querySelector('.score_O');
let score2 = document.querySelector('.score_X')
let turnO= true;

const winning_patterns = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
]
let score = {
  winner_O : 0,
  winner_X : 0
}

boxes.forEach((allbutton) => {
  allbutton.addEventListener('click' , () => {
    console.log('box was clicked');
    if (turnO) {
 allbutton.innerText = 'O'
  turnO = false;
}else {
  allbutton.innerText = 'X'
  turnO = true;
}
allbutton.disabled = true;
check_winner();
  })
});


 

function check_winner () {
    for(let pattern of winning_patterns) {
      let pos1_val = boxes[pattern[0]].innerText
      let pos2_val = boxes[pattern[1]].innerText
      let pos3_val = boxes[pattern[2]].innerText            

      if (pos1_val != '' && pos2_val != '' && pos3_val != '') {
        if (pos1_val === pos2_val && pos2_val === pos3_val) {
    
          show_Winner(pos1_val)
    
       }
      }
    }  
  }

  function show_Winner (winner) {
    result.innerText = `congratulations, winner is ${winner}`
  
    if (winner === 'O') {
      score.winner_O += 1; 
      score1.innerHTML = `winner_O: ${score.winner_O}`
      score2.innerHTML = `winner_X: ${score.winner_X}` 
    }else if (winner === 'X') {
      score.winner_X += 1;
      score1.innerHTML = `winner_O: ${score.winner_O}`
      score2.innerHTML = `winner_X: ${score.winner_X}`
    }

    result.classList.remove('hide');
    new_gamebtn.classList.remove('hide');
    btn_disable();
   
  }
  
  function btn_disable () {
    for (allbutton of boxes) {
      allbutton.disabled = true ;
     
    }
  }
  function  resetbtn () {
    turnO = true;
    btn_enable()
    result.classList.add('hide');
    new_gamebtn.classList.add('hide');
    
  }
  
  function btn_enable () {
    for (allbutton of boxes) {
      allbutton.disabled = false ;
      allbutton.innerText = '';
     
    }
  }

  function new_game () {
    score.winner_O = 0
    score.winner_X = 0
    score1.innerHTML = `winner_O: ${score.winner_O}`
    score2.innerHTML = `winner_X: ${score.winner_X}` 
    resetbtn()
  };
  
  



