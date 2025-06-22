exports.playGame = (req, res) => {
  const playerChoice = req.body.choice;
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';
  if (playerChoice === computerChoice) {
    result = 'Draw';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You Win!';
  } else {
    result = 'You Lose!';
  }

  res.json({
    playerChoice,
    computerChoice,
    result
  });
};
