


function playGames(){

  let scores = "<header>Scores</header>";

	var teamIdx = day % teamsSize;
	scores += "<p>" + playGame(temp[teamIdx],teams[0]) + "<p>";

	for (var idx = 1; idx < halfSize; idx++)
	{
		var firstTeam = temp[(day + idx) % teamsSize];
		var secondTeam = temp[(day  + teamsSize - idx) % teamsSize];
        scores += "<p>" + playGame(firstTeam, secondTeam) + "<p>" ;
	}
	day++;

    $(".scores").html(scores);
    $(".standings").html(generateStandings());
    if(numDays == day){
        $(".page-continue").html(`<button onclick='initPlayoffs()'>Begin Playoffs</button>`);
        //$(".page-continue").html(`<button onclick='endSeason()'>Season Done</button>`);
    }

}

// Plays game between two teams, return result as string.
// TODO: Improve shitty ass algorithm
function playGame(t1,t2){
	var firstScore = Math.floor(Math.random() * t1.totalRating + .2* t1.totalRating);
	var secondScore = Math.floor(Math.random() * t2.totalRating + .2*t2.totalRating);
	let result = t1.name + ": " + firstScore + ", " + t2.name + ": " + secondScore;
	if(firstScore > secondScore){
		t1.w++;
		t1.totw++;
		t2.l++;
		t2.totl++;
	}
	else{
		t1.l++;
		t1.totl++;
		t2.w++;
		t2.totw++;
	}
	return result;
}