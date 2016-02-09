$(document).ready(function() {
  
  function generateRandNum() {
    var x = Math.floor((Math.random() * 10) + 1);
    return x;
  }

  function calBankroll(bet, guess, ranNum) {
    if(guess === ranNum) {
      bankroll += bet;
      alert("Your guess is right.\nBet: $" + bet + "\nBankroll: $" + bankroll);
    } else if(guess+1 === ranNum || guess-1 === ranNum) {
      bankroll;
      alert("Your guess is off by 1.\nBet: $" + bet + "\nBankroll: $" + bankroll);
    } else {
      bankroll -= bet;
      alert("Your guess is wrong.\nBet: $" + bet + "\nBankroll: $" + bankroll);
    }
    return bankroll;
  }

  var bankroll = 100;
  var bankroll_msg = "\nYour bankroll is $";
  var bet;
  var bet_msg = "Enter an amount between $5 and $10.";
  var guess;
  var guess_msg = "Enter your guess number between 1 and 10.";
  var ranNum;

  $('#start').on('click', function() {
    $(this).hide();
    $('#bet').text(bet_msg).show();
    $('#guess').text(guess_msg).show();

    while(bankroll > 0) {
      $('#bankroll').text(bankroll_msg + bankroll);
      bet = append("Enter an amount between $5 and $10.");
      guess = prompt("Enter your guess number between 1 and 10.");
      ranNum = generateRandNum();
      alert("Correct number is " + ranNum + "\nYour guess is " + guess);
      bankroll = calBankroll(bet, guess, ranNum);
    }
  });

  alert("No more money to bet. Goodbye~");
});