
$(document).ready(function() {

  var player = 0;
  var players = ['<img src="http://cdn.superbwallpapers.com/wallpapers/cartoons/elsa-frozen-25406-400x250.jpg">', '<img src="http://kathyssavings.com/wp-content/uploads/2013/08/Frozen-Hula-Olaf.png">'];
  var squareArray = [];
  var count = 0;
  var gameOver = false;
  var xWins = 0;
  var oWins = 0;

  var restart = function() {
    $('.square').html("");
    count = 0;
    $('#tie').hide();
    $('#winner').hide();
    gameOver = false;
  };

  $('#new-game').on('click', function() {
    restart();
  });

  $('.square').click(function() {
    squareArray=[];
    if ($(this).html() === '' && gameOver === false) {
      $(this).html(players[player]);

      count++;

      $('.square').each(function() {
        squareArray.push($(this).html());
      });

      console.log(squareArray);

      if (getWinner(squareArray, players[player])) {
        gameOver = true;
        if (player === 0) {
          xWins += 1;
          $('#x-win-count').html(xWins);
        } else {
          oWins += 1;
          $('#o-win-count').html(oWins);
        }
        $('#winner').html(players[player] + ' wins!');
        $('#winner').show();

      } else if (count === 9) {
        gameOver = true;
        $('#tie').html('Tie game!');
        $('#tie').show();
      }

      player = 1 - player;

    }
  });

  var getWinner = function(square, player) {
    var win = false;

    if (square[0] === player && square[1] === player && square[2] === player) {
      win = true;
    }

    else if (square[3] === player && square[4] === player && square[5] === player) {
      win = true;
    }

    else if (square[6] === player && square[7] === player && square[8] === player) {
      win = true;
    }

    else if (square[0] === player && square[3] === player && square[6] === player) {
      win = true;
    }

    else if (square[1] === player && square[4] === player && square[7] === player) {
      win = true;
    }

    else if (square[2] === player && square[5] === player && square[8] === player) {
      win = true;
    }

    else if (square[0] === player && square[4] === player && square[8] === player) {
      win = true;
    }

    else if (square[2] === player && square[4] === player && square[6] === player) {
      win = true;
    }
    return win;
  };

});
