var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var noOfBalls = 0;
var noOfPlayers = 10;
var possibleRun = [0, 1, 2, 4, 6];
var runIndex = 0;
var run = possibleRun[runIndex];
var game = /** @class */ (function () {
    function game() {
        this.teams = [];
    }
    return game;
}());
var team = /** @class */ (function () {
    function team(n) {
        this.players = [];
        this.score = [];
        this.total = 0;
        this.name = n;
    }
    return team;
}());
var player = /** @class */ (function () {
    function player(n, ind, t) {
        this.score = [];
        this.name = n;
        this.index = ind;
        this.team = t;
    }
    return player;
}());
var cricket = new game();
var team1 = new team("team-1");
cricket.teams.push(team1);
var team2 = new team("team-2");
cricket.teams.push(team2);
var play = 1;
var hit1 = 1;
var hit2 = 0;
var gen = 0;
var secondsToCountDown = 60;
window.onload = function () {
    localStorage.clear();
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    container.innerHTML = "\n  <div class=\"row\">\n    <div class=\"col-lg-10\" style=\"font-family: 'Righteous', cursive;margin-left:36%;\">\n     <h1> <span class=\"iconify\" data-icon=\"mdi-cricket\" data-inline=\"false\" data-width=\"40\" data-height=\"40\"></span>CRICKET GAME</h1>\n     </div>\n     </div>\n    <div class=\"row text-center\">\n    <div class=\"col-4 col-lg-4 text-left\" style=\"font-size:1.3em;\"><p id=\"score1\"></p></div>\n    <div class=\"col-4 col-lg-4 text-center\">\n    <button class=\"btn btn-dark\" onclick=\"startTimer();\" id=\"start\">Start</button>\n    </div>\n    <div class=\"col-4 col-lg-4 text-right\"><p id=\"score2\"></p></div>\n    </div>\n    <hr>\n    <div class=\"row text-center\">\n        <div class=\"col-4 col-lg-4 text-center\">\n            <h3>Team-1</h3>\n            <h3 id=\"team1Score\">0</h3>\n            <button class=\"btn btn-dark\" id=\"hit1\" onclick=\"hit(1)\" disabled>HIT 1</button>\n        </div>\n        <div class=\"col-4 col-lg-4 text-center\">\n        <svg class=\"bi bi-alarm\" width=\"2em\" height=\"2em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" d=\"M8 15A6 6 0 108 3a6 6 0 000 12zm0 1A7 7 0 108 2a7 7 0 000 14z\" clip-rule=\"evenodd\"/>\n        <path fill-rule=\"evenodd\" d=\"M8 4.5a.5.5 0 01.5.5v4a.5.5 0 01-.053.224l-1.5 3a.5.5 0 11-.894-.448L7.5 8.882V5a.5.5 0 01.5-.5z\" clip-rule=\"evenodd\"/>\n        <path d=\"M.86 5.387A2.5 2.5 0 114.387 1.86 8.035 8.035 0 00.86 5.387zM11.613 1.86a2.5 2.5 0 113.527 3.527 8.035 8.035 0 00-3.527-3.527z\"/>\n        <path fill-rule=\"evenodd\" d=\"M11.646 14.146a.5.5 0 01.708 0l1 1a.5.5 0 01-.708.708l-1-1a.5.5 0 010-.708zm-7.292 0a.5.5 0 00-.708 0l-1 1a.5.5 0 00.708.708l1-1a.5.5 0 000-.708zM5.5.5A.5.5 0 016 0h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z\" clip-rule=\"evenodd\"/>\n        <path d=\"M7 1h2v2H7V1z\"/>\n        </svg>\n              <h4 class=\"timerText\" >Timer</h4>\n            <h3 id=\"timer\" class=\"timerText \">60</h3>\n\n        </div>\n        <div class=\"col-4 col-lg-4 text-center\">\n            <h3>Team-2</h3>\n            <h3 id=\"team2Score\">0</h3>\n            <button class=\"btn btn-dark\" id=\"hit2\" onclick=\"hit(2)\" disabled>HIT 2</button>\n        </div>\n    </div>\n    <hr>\n    ";
    var container2 = document.createElement("div");
    container2.setAttribute("class", "container-fluid");
    container2.innerHTML = "<div class=\"row \">\n  <div class=\"col-lg-4 text-left\"></div>\n  <div class=\"col-lg-4 text-center\"><a href=\"output.html\" target=\"__blank\"><button class=\"btn btn-dark\" id=\"gen\"disabled>Generate Result</button></a></div>\n  <div class=\"col-lg-4 text-right\"></div>\n  </div>";
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    row.id = "scoreBoard";
    var col = document.createElement("div");
    col.setAttribute("class", "col-12 col-lg-5 text-center");
    col.innerHTML = "<table class=\"table table-striped table-info\">\n  <thead>\n    <tr id=\"thead1\">\n\n    </tr>\n  </thead>\n  <tbody id=\"content1\">\n  </tbody>\n  </table>";
    row.appendChild(col);
    col = document.createElement("div");
    col.setAttribute("class", "col-0 col-lg-2");
    row.appendChild(col);
    col = document.createElement("div");
    col.setAttribute("class", "col-12 col-lg-5 text-center");
    col.innerHTML = "<table class=\"table table-striped table-info\">\n  <thead>\n    <tr id=\"thead2\">\n\n    </tr>\n  </thead>\n  <tbody id=\"content2\">\n  </tbody>\n  </table>";
    row.appendChild(col);
    container2.appendChild(row);
    container2.innerHTML += "<br>";
    document.body.appendChild(container);
    document.body.appendChild(container2);
    genTable(1);
    genTable(2);
    for (var i = 0; i < noOfPlayers; i++) {
        var play_1 = new player("Player-" + (i + 1), i, "team-1");
        team1.players.push(play_1);
    }
    for (var i = 0; i < noOfPlayers; i++) {
        var play_2 = new player("Player-" + (i + 1), i, "team-2");
        team2.players.push(play_2);
    }
};
function genTable(index) {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 8; j++) {
            if (i == 0) {
                if (j == 0) {
                    (document.getElementById("thead" + index)).innerHTML += "<th scope=\"col\">Team-" + index + "</th>";
                }
                else if (j == 7) {
                    (document.getElementById("thead" + index)).innerHTML += "<th scope=\"col\">Total</th>";
                }
                else {
                    (document.getElementById("thead" + index)).innerHTML += "<th scope=\"col\">B-" + j + "</th>";
                }
            }
        }
        (document.getElementById("content" + index)).innerHTML += "<tr>\n            <td scope=\"row\">Player-" + (i + 1) + "</th>\n            <td id=\"B-" + (i + 1) + "1" + index + "\"></td>\n            <td id=\"B-" + (i + 1) + "2" + index + "\"></td>\n            <td id=\"B-" + (i + 1) + "3" + index + "\"></td>\n            <td id=\"B-" + (i + 1) + "4" + index + "\"></td>\n            <td id=\"B-" + (i + 1) + "5" + index + "\"></td>\n            <td id=\"B-" + (i + 1) + "6" + index + "\"></td>\n            <td id=\"total" + (i + 1) + index + "\"> </td>\n          </tr>";
    }
}
function startTimer() {
    return __awaiter(this, void 0, void 0, function () {
        var temp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clearVar = 1;
                    scoreRunner();
                    secondsToCountDown = 60;
                    noOfBalls = 0;
                    if (hit1 == 1) {
                        hit1 = 0;
                        hit2 = 1;
                        document.getElementById("hit1").disabled = false;
                    }
                    else if (hit2 == 1) {
                        hit1 = 0;
                        hit2 = 0;
                        gen = 1;
                        document.getElementById("hit2").disabled = false;
                    }
                    document.getElementById("start").disabled = true;
                    temp = new Promise(function (resolve, reject) { return timer(resolve, reject); });
                    return [4 /*yield*/, temp];
                case 1:
                    _a.sent();
                    clearVar = 0;
                    document.getElementById("timer").innerHTML = String(60);
                    if (hit2 == 0 && hit1 == 0) {
                        document.getElementById("hit2").disabled = true;
                        document.getElementById("start").disabled = true;
                        document.getElementById("gen").disabled = false;
                        document.getElementById("gen").classList.add("btn-primary");
                        document.getElementById("gen").classList.remove("btn-dark");
                        localStorage.setItem("result", JSON.stringify(cricket));
                        localStorage.setItem("table", String(document.getElementById("scoreBoard").outerHTML));
                    }
                    else if (hit1 == 0) {
                        document.getElementById("hit1").disabled = true;
                        document.getElementById("start").disabled = false;
                        document.getElementById("hit2").disabled = true;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
var clearVar = 1;
function scoreRunner() {
    var interval = setInterval(function () {
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
    var interval = setInterval(function () {
        document.getElementById("timer").innerHTML = String(secondsToCountDown);
        if (secondsToCountDown === 0) {
            clearInterval(interval);
            return resolve("sucess");
        }
        secondsToCountDown--;
    }, 1000);
}
var playerBatting1 = 0;
var player1Total = 0;
var team1score = 0;
var playerBatting2 = 0;
var player2Total = 0;
var team2score = 0;
function hit(hitIndex) {
    switch (hitIndex) {
        case 1:
            if (playerBatting1 < team1.players.length) {
                if (run == 0) {
                    playerBatting1 + 1;
                }
                else {
                    playerBatting1 + 1;
                }
                team1.players[playerBatting1].score.push(run);
                player1Total += run;
                team1score += run;
                team1.total = team1score;
                // console.log(`B-${playerBatting1+1}${noOfBalls+1}${hitIndex}`);
                (document.getElementById("B-" + (playerBatting1 + 1) + (noOfBalls + 1) + hitIndex)).innerHTML = String(run);
                (document.getElementById("total" + (playerBatting1 + 1) + hitIndex)).innerHTML = String(player1Total);
                noOfBalls++;
                if (noOfBalls == 6 || run == 0) {
                    team1.players[playerBatting1].total = player1Total;
                    team1.score.push(player1Total);
                    player1Total = 0;
                    noOfBalls = 0;
                    playerBatting1++;
                }
            }
            else {
                document.getElementById("hit1").disabled = true;
                secondsToCountDown = 0;
                document.getElementById("timer").innerHTML = String(60);
            }
            break;
        case 2:
            if (playerBatting2 < team1.players.length) {
                if (run == 0) {
                    playerBatting2 + 1;
                }
                else {
                    playerBatting2 + 1;
                }
                team2.players[playerBatting2].score.push(run);
                player2Total += run;
                team2score += run;
                team2.total = team2score;
                (document.getElementById("B-" + (playerBatting2 + 1) + (noOfBalls + 1) + hitIndex)).innerHTML = String(run);
                (document.getElementById("total" + (playerBatting2 + 1) + hitIndex)).innerHTML = String(player2Total);
                noOfBalls++;
                if (noOfBalls == 6 || run == 0) {
                    team2.players[playerBatting2].total = player2Total;
                    team2.score.push(player2Total);
                    player2Total = 0;
                    noOfBalls = 0;
                    playerBatting2++;
                }
            }
            else {
                document.getElementById("hit2").disabled = true;
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
            document.getElementById("team1Score").innerHTML = String(team1.total);
            break;
        case 2:
            document.getElementById("team2Score").innerHTML = String(team2.total);
            break;
    }
}
