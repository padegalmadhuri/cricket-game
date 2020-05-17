
let noOfBalls = 0;
let noOfPlayers = 10;

let possibleRun = [0, 1, 2, 4, 6];
let runIndex = 0;
let run = possibleRun[runIndex];
class game {
  teams: team[] = [];
  winningTeam: team;
}

class team {
  name: string;
  players: player[] = [];
  score: number[] = [];
  total: number = 0;
  topScorer: {
    player: String;
    score: number;
  };

  constructor(n: string) {
    this.name = n;
  }
}

class player {
  index: number;
  name: String;
  team: string;
  score: number[] = [];
  total: number;
  constructor(n: string, ind: number, t: string) {
    this.name = n;
    this.index = ind;
    this.team = t;
  }
}
let cricket = new game();
let team1 = new team("team-1");
cricket.teams.push(team1);
let team2 = new team("team-2");
cricket.teams.push(team2);
let play = 1;
let hit1 = 1;
let hit2 = 0;
let gen = 0;
let secondsToCountDown = 60;

window.onload = () => {
  localStorage.clear();
  let container = <HTMLDivElement>document.createElement("div");
  container.setAttribute("class", "container");
  container.innerHTML = `
  <div class="row">
    <div class="col-lg-10" style="font-family: 'Righteous', cursive;margin-left:36%;">
     <h1> <span class="iconify" data-icon="mdi-cricket" data-inline="false" data-width="40" data-height="40"></span>CRICKET GAME</h1>
     </div>
     </div>
    <div class="row text-center">
    <div class="col-4 col-lg-4 text-left" style="font-size:1.3em;"><p id="score1"></p></div>
    <div class="col-4 col-lg-4 text-center">
    <button class="btn btn-dark" onclick="startTimer();" id="start">Start</button>
    </div>
    <div class="col-4 col-lg-4 text-right"><p id="score2"></p></div>
    </div>
    <hr>
    <div class="row text-center">
        <div class="col-4 col-lg-4 text-center">
            <h3>Team-1</h3>
            <h3 id="team1Score">0</h3>
            <button class="btn btn-dark" id="hit1" onclick="hit(1)" disabled>HIT 1</button>
        </div>
        <div class="col-4 col-lg-4 text-center">
        <svg class="bi bi-alarm" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15A6 6 0 108 3a6 6 0 000 12zm0 1A7 7 0 108 2a7 7 0 000 14z" clip-rule="evenodd"/>
        <path fill-rule="evenodd" d="M8 4.5a.5.5 0 01.5.5v4a.5.5 0 01-.053.224l-1.5 3a.5.5 0 11-.894-.448L7.5 8.882V5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
        <path d="M.86 5.387A2.5 2.5 0 114.387 1.86 8.035 8.035 0 00.86 5.387zM11.613 1.86a2.5 2.5 0 113.527 3.527 8.035 8.035 0 00-3.527-3.527z"/>
        <path fill-rule="evenodd" d="M11.646 14.146a.5.5 0 01.708 0l1 1a.5.5 0 01-.708.708l-1-1a.5.5 0 010-.708zm-7.292 0a.5.5 0 00-.708 0l-1 1a.5.5 0 00.708.708l1-1a.5.5 0 000-.708zM5.5.5A.5.5 0 016 0h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
        <path d="M7 1h2v2H7V1z"/>
        </svg>
              <h4 class="timerText" >Timer</h4>
            <h3 id="timer" class="timerText ">60</h3>

        </div>
        <div class="col-4 col-lg-4 text-center">
            <h3>Team-2</h3>
            <h3 id="team2Score">0</h3>
            <button class="btn btn-dark" id="hit2" onclick="hit(2)" disabled>HIT 2</button>
        </div>
    </div>
    <hr>
    `;
  let container2 = <HTMLDivElement>document.createElement("div");
  container2.setAttribute("class", "container-fluid");
  container2.innerHTML = `<div class="row ">
  <div class="col-lg-4 text-left"></div>
  <div class="col-lg-4 text-center"><a href="output.html" target="__blank"><button class="btn btn-dark" id="gen"disabled>Generate Result</button></a></div>
  <div class="col-lg-4 text-right"></div>
  </div>`;
  let row = <HTMLDivElement>document.createElement("div");
  row.setAttribute("class", "row");
  row.id = "scoreBoard";
  let col = <HTMLDivElement>document.createElement("div");
  col.setAttribute("class", "col-12 col-lg-5 text-center");
  col.innerHTML = `<table class="table table-striped table-info">
  <thead>
    <tr id="thead1">

    </tr>
  </thead>
  <tbody id="content1">
  </tbody>
  </table>`;
  row.appendChild(col);

  col = <HTMLDivElement>document.createElement("div");
  col.setAttribute("class", "col-0 col-lg-2");
  row.appendChild(col);
  col = <HTMLDivElement>document.createElement("div");
  col.setAttribute("class", "col-12 col-lg-5 text-center");
  col.innerHTML = `<table class="table table-striped table-info">
  <thead>
    <tr id="thead2">

    </tr>
  </thead>
  <tbody id="content2">
  </tbody>
  </table>`;
  row.appendChild(col);
  container2.appendChild(row);
container2.innerHTML+="<br>";
  document.body.appendChild(container);
  document.body.appendChild(container2);
  genTable(1);
  genTable(2);

  for (let i = 0; i < noOfPlayers; i++) {
    let play = new player(`Player-${i + 1}`, i, "team-1");
    team1.players.push(play);
  }
  for (let i = 0; i < noOfPlayers; i++) {
    let play = new player(`Player-${i + 1}`, i, "team-2");
    team2.players.push(play);
  }

};


function genTable(index) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 8; j++) {
      if (i == 0) {
        if (j == 0) {
          (<HTMLTableElement>(
            document.getElementById(`thead${index}`)
          )).innerHTML += `<th scope="col">Team-${index}</th>`;
        } else if (j == 7) {
          (<HTMLTableElement>(
            document.getElementById(`thead${index}`)
          )).innerHTML += `<th scope="col">Total</th>`;
        } else {
          (<HTMLTableElement>(
            document.getElementById(`thead${index}`)
          )).innerHTML += `<th scope="col">B-${j}</th>`;
        }
      }
    }
    (<HTMLTableElement>(
      document.getElementById(`content${index}`)
    )).innerHTML += `<tr>
            <td scope="row">Player-${i + 1}</th>
            <td id="B-${i + 1}1${index}"></td>
            <td id="B-${i + 1}2${index}"></td>
            <td id="B-${i + 1}3${index}"></td>
            <td id="B-${i + 1}4${index}"></td>
            <td id="B-${i + 1}5${index}"></td>
            <td id="B-${i + 1}6${index}"></td>
            <td id="total${i + 1}${index}"> </td>
          </tr>`;
  }
}
async function startTimer() {
  clearVar = 1;
  scoreRunner();
  secondsToCountDown = 60;
  noOfBalls = 0;
  if (hit1 == 1) {
    hit1 = 0;
    hit2 = 1;

    (<HTMLButtonElement>document.getElementById("hit1")).disabled = false;
  } else if (hit2 == 1) {
    hit1 = 0;
    hit2 = 0;
    gen = 1;

    (<HTMLButtonElement>document.getElementById("hit2")).disabled = false;
  }
  (<HTMLButtonElement>document.getElementById("start")).disabled = true;
  let temp = new Promise((resolve, reject) => timer(resolve, reject));
  await temp;
  clearVar = 0;

  document.getElementById("timer").innerHTML = String(60);
  if (hit2 == 0 && hit1 == 0) {
    (<HTMLButtonElement>document.getElementById("hit2")).disabled = true;
    (<HTMLButtonElement>document.getElementById("start")).disabled = true;
    (<HTMLButtonElement>document.getElementById("gen")).disabled = false;
    (<HTMLButtonElement>document.getElementById("gen")).classList.add(
      "btn-primary"
    );
    (<HTMLButtonElement>document.getElementById("gen")).classList.remove(
      "btn-dark"
    );
    localStorage.setItem("result", JSON.stringify(cricket));

    localStorage.setItem(
      "table",
      String(document.getElementById("scoreBoard").outerHTML)
    );
  } else if (hit1 == 0) {

    (<HTMLButtonElement>document.getElementById("hit1")).disabled = true;
    (<HTMLButtonElement>document.getElementById("start")).disabled = false;
    (<HTMLButtonElement>document.getElementById("hit2")).disabled = true;
  }
}
let clearVar = 1;
function scoreRunner() {
  const interval = setInterval(() => {

    runIndex++;
    if (runIndex > 4) {
      runIndex = 0;
    }
    run = possibleRun[runIndex];
  ;

    if (clearVar === 0) {

      clearInterval(interval);
    }
  }, 120);
}
function timer(resolve, reject) {

  const interval = setInterval(() => {
    document.getElementById("timer").innerHTML = String(secondsToCountDown);
    if (secondsToCountDown === 0) {
      clearInterval(interval);
      return resolve("sucess");
    }
    secondsToCountDown--;

    }, 1000);
}


let playerBatting1 = 0;
let player1Total = 0;
let team1score = 0;

let playerBatting2 = 0;
let player2Total = 0;
let team2score = 0;

function hit(hitIndex: number) {

  switch (hitIndex) {
    case 1:
      if (playerBatting1 < team1.players.length) {
        if (run == 0) {
            playerBatting1 + 1
        } else {
            playerBatting1 + 1
          }

        team1.players[playerBatting1].score.push(run);
        player1Total += run;
        team1score += run;
        team1.total = team1score;
        // console.log(`B-${playerBatting1+1}${noOfBalls+1}${hitIndex}`);
        (<HTMLTableCellElement>(
          document.getElementById(
            `B-${playerBatting1 + 1}${noOfBalls + 1}${hitIndex}`
          )
        )).innerHTML = String(run);
        (<HTMLTableCellElement>(
          document.getElementById(`total${playerBatting1 + 1}${hitIndex}`)
        )).innerHTML = String(player1Total);
        noOfBalls++;
        if (noOfBalls == 6 || run == 0) {
          team1.players[playerBatting1].total = player1Total;
          team1.score.push(player1Total);

          player1Total = 0;
          noOfBalls = 0;
          playerBatting1++;
        }
      } else {
        (<HTMLButtonElement>document.getElementById("hit1")).disabled = true;
        secondsToCountDown = 0;
        document.getElementById("timer").innerHTML = String(60);
      }
      break;
    case 2:
      if (playerBatting2 < team1.players.length) {
        if (run == 0) {
                    playerBatting2 + 1;

        } else {
            playerBatting2 + 1;
        }
        team2.players[playerBatting2].score.push(run);
        player2Total += run;
        team2score += run;
        team2.total = team2score;
        (<HTMLTableCellElement>(
          document.getElementById(
            `B-${playerBatting2 + 1}${noOfBalls + 1}${hitIndex}`
          )
        )).innerHTML = String(run);
        (<HTMLTableCellElement>(
          document.getElementById(`total${playerBatting2 + 1}${hitIndex}`)
        )).innerHTML = String(player2Total);
        noOfBalls++;
        if (noOfBalls == 6 || run == 0) {
          team2.players[playerBatting2].total = player2Total;
          team2.score.push(player2Total);
          player2Total = 0;
          noOfBalls = 0;
          playerBatting2++;
        }
      } else {
        (<HTMLButtonElement>document.getElementById("hit2")).disabled = true;
        secondsToCountDown = 0;
        document.getElementById("timer").innerHTML = String(60);
      }
      break;
  }
  updateValue(hitIndex);
}

function updateValue(hitIndex) {
  //   console.log("hi");
  switch (hitIndex) {
    case 1:
      (<HTMLElement>document.getElementById("team1Score")).innerHTML = String(
        team1.total
      );
      break;
    case 2:
      (<HTMLElement>document.getElementById("team2Score")).innerHTML = String(
        team2.total
      );
      break;
  }
}
