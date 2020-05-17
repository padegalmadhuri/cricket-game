var cric = JSON.parse(localStorage.getItem("result"));
// console.log(cric);
// console.log(localStorage.getItem("table"));
window.onload = function () {
    var winner = 0;
    var manOfTheMatch = 0;
    var manOfTheMatchTeam = "";
    var manOfTheMatchScore = 0;
    if (cric.teams[0].total > cric.teams[1].total) {
        winner = 1;
    }
    else {
        winner = 2;
    }
    var val1 = Math.max.apply(Math, cric.teams[0].score);
    var val2 = Math.max.apply(Math, cric.teams[1].score);
    if (val1 > val2) {
        manOfTheMatch = cric.teams[0].score.indexOf(val1);
        manOfTheMatchTeam = "Team-1";
        manOfTheMatchScore = val1;
    }
    else {
        manOfTheMatch = cric.teams[1].score.indexOf(val2);
        manOfTheMatchTeam = "Team-2";
        manOfTheMatchScore = val2;
    }
    var cont = document.createElement("div");
    cont.setAttribute("class", "container text-center");
    cont.innerHTML = "<br>";
    cont.innerHTML += "" + localStorage.getItem("table");
    var row = document.createElement("div");
    row.setAttribute("class", "row text-center");
    var content = document.createElement("div");
    content.setAttribute("class", "col-lg-12 text-center");
    content.innerHTML = "<div class=\"card text-center border\">\n  <div class=\"card-header bg-info text-white\">\n  <svg class=\"bi bi-award\" width=\"2em\" height=\"2em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l-1.51-.229L8 1.126l-1.355.702-1.51.229-.684 1.365-1.086 1.072L3.614 6l-.25 1.506 1.087 1.072.684 1.365 1.51.229L8 10.874l1.356-.702 1.509-.229.684-1.365 1.086-1.072L12.387 6l.248-1.506-1.086-1.072-.684-1.365z\" clip-rule=\"evenodd\"/>\n  <path d=\"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z\"/>\n</svg>\n  Result of the Match  </div>\n\n  <div class=\"card-body\">\n    <h4 class=\"card-title font-weight-bold\">The Winner is</h4>\n    <h1 class=\"card-text\" style=\"color:#583759;font-family:monospace;\" >Team-" + winner + "</h1><br>\n    <h3 class=\"card-title font-weight-bold\">The Man of the match is</h3>\n    <h1 class=\"card-text\" style=\"color:#583759;font-family:monospace;\">Player-" + (manOfTheMatch + 1) + "</h1><br>\n    <h3 class=\"card-title\" style=\"font-family:monospace\">Team: " + manOfTheMatchTeam + "</h3>\n    <h5 class=\"card-title\">Score: " + manOfTheMatchScore + "</h5>\n  </div>\n</div>";
    row.appendChild(content);
    cont.appendChild(row);
    cont.innerHTML += "<br>";
    document.body.appendChild(cont);
};
