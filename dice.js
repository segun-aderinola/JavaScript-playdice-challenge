
function random_number(){
    var randomNumber = Math.random() * 6;
    randomNumber = Math.floor(randomNumber) + 1;

    return randomNumber;
}

document.querySelector('#play').addEventListener('click', function(){
    game();
});
function game(){

  // var dice_images = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];

  var player1_number = random_number();
  var player2_number = random_number();


  if(player1_number > player2_number){
    document.querySelector('#message').textContent = "Player 1 Wins";
  }
  else if(player1_number < player2_number){
    document.querySelector('#message').textContent = "Player 2 Wins";
  }
  else{
    document.querySelector('#message').textContent = "Draw";
  }

  document.getElementsByClassName('img1')[0].setAttribute('src', "images/dice"+player1_number+".png");
  document.getElementsByClassName('img2')[0].setAttribute('src', "images/dice"+player2_number+".png");

  // console.log(player1_dice);
  // console.log(player2_dice);

}
// game();
