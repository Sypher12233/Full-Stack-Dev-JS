/*
Team Stats
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

After we create these data structures in this project, feel free to challenge yourself to gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

let team = {
  _players: [
    (player1 = { firstName: "", lastName: "", age: 0 }),
    (player2 = { firstName: "", lastName: "", age: 0 }),
    (player3 = { firstName: "", lastName: "", age: 0 }),
  ],
  _games: [
    (game1 = { opponent: "", teamPoints: 0, opponentPoints: 0 }),
    (game2 = { opponent: "", teamPoints: 0, opponentPoints: 0 }),
    (game3 = { opponent: "", teamPoints: 0, opponentPoints: 0 }),
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    player = { newFirstName, newLastName, newAge };
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    game = { newOpponent, newTeamPoints, newOpponentPoints };
    this._games.push(game);
  },
};

team.addPlayer("Andrew", "Tate", 44);
team.addGame('Titans', 100, 98);
console.log(team.players);
console.log(team.games);
