var health = 10;
var isDead = false;

var hasSword = false;
var hasMagic = false;
var hasMausoleumOption = true;
var hasSwordOption = true;
var hasLatrineOption = true;
var hasMeatOption = true;

function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
		document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title;
		document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;

		document.getElementById('roomChoices').innerHTML = "";
		document.getElementById('image').innerHTML = "";

		document.getElementById('health').innerHTML = "";

		if (health < 1) {
			if (!isDead) {
				isDead = true;
				SelectRoom(23);
			}
			else {
				RoomCheck(roomIndex);

				DisplayHealth();

				AddPicture(roomIndex);

				AddButtons(roomIndex);

				AddAudio(roomIndex);
			}
		}
		else {
			RoomCheck(roomIndex);

			DisplayHealth();

			AddPicture(roomIndex);

			AddButtons(roomIndex);

			AddAudio(roomIndex);
		}
}

function DisplayHealth()
{
	var halfHeart = "<img src='assets/images/half_heart.png' id='heart' alt='Full Heart'>";
	var fullHeart = "<img src='assets/images/full_heart.png' id='heart' alt='Half Heart'>";

	if ((health % 2) != 0) {
		document.getElementById('health').innerHTML += halfHeart;
	}

	for (var i = 0; i < ((health-1)/2); i++) {
		document.getElementById('health').innerHTML += fullHeart;
	}

}

function RoomCheck(roomIndex)
{
	if (roomIndex == 3 || roomIndex == 13 || roomIndex == 20) {
		health -= 3;
		if (roomIndex == 13) {
			hasLatrineOption = false;
		}
	}
	else if (roomIndex == 15) {
		health = 10;
		hasMeatOption = false;
	}
	else if (roomIndex == 17) {
		health -= 6;
		hasMausoleumOption = false;
	}
	else if (roomIndex == 8) {
		hasSword = true;
		hasSwordOption = false;
	}
	else if (roomIndex == 16) {
		hasMagic = true;
	}
	else if (roomIndex == 0) {
		Reset();
	}
}

function Reset() {
	health = 10;
	hasMagic = false;
	hasSword = false;
	hasSwordOption = true;
	hasMeatOption = true;
	hasLatrineOption = true;
	hasMausoleumOption = true;
	isDead = false;
}

function AddButtons(roomIndex)
{
	if ((roomIndex == 5) && (hasMausoleumOption == false)) {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			if (i != 2) {
				var index = roomArray[roomIndex].choices[i].index;
				var button = "<button onclick='SelectRoom(" + index + ")'>" + roomArray[roomIndex].choices[i].text + "</button></br>"
				document.getElementById('roomChoices').innerHTML += button;
			}
		}
	}
	else if ((roomIndex == 6) && (hasSwordOption == false)) {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			if (i != 0) {
				var index = roomArray[roomIndex].choices[i].index;
				var button = "<button onclick='SelectRoom(" + index + ")'>" + roomArray[roomIndex].choices[i].text + "</button></br>"
				document.getElementById('roomChoices').innerHTML += button;
			}
		}
	}
	else if ((roomIndex == 12) && (hasLatrineOption == false) && (hasMeatOption == false)) {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			if (i > 1) {
				var index = roomArray[roomIndex].choices[i].index;
				var button = "<button onclick='SelectRoom(" + index + ")'>" + roomArray[roomIndex].choices[i].text + "</button></br>"
				document.getElementById('roomChoices').innerHTML += button;
			}
		}
	}
	else if ((roomIndex == 12 || roomIndex == 15) && (hasLatrineOption == false)) {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			if (i != 0) {
				var index = roomArray[roomIndex].choices[i].index;
				var button = "<button onclick='SelectRoom(" + index + ")'>" + roomArray[roomIndex].choices[i].text + "</button></br>"
				document.getElementById('roomChoices').innerHTML += button;
			}
		}
	}
	else if ((roomIndex == 12) && (hasMeatOption == false)) {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			if (i != 1) {
				var index = roomArray[roomIndex].choices[i].index;
				var button = "<button onclick='SelectRoom(" + index + ")'>" + roomArray[roomIndex].choices[i].text + "</button></br>"
				document.getElementById('roomChoices').innerHTML += button;
			}
		}
	}
	else if ((roomIndex == 13) && (hasMeatOption == false)) {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			if (i != 0) {
				var index = roomArray[roomIndex].choices[i].index;
				var button = "<button onclick='SelectRoom(" + index + ")'>" + roomArray[roomIndex].choices[i].text + "</button></br>"
				document.getElementById('roomChoices').innerHTML += button;
			}
		}
	}
	else {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			var index = roomArray[roomIndex].choices[i].index;
			var button = "<button onclick='SelectRoom(" + index + ")'>" + roomArray[roomIndex].choices[i].text + "</button></br>"
			document.getElementById('roomChoices').innerHTML += button;
		}
	}
}

function AddPicture(roomIndex)
{
	var img = roomArray[roomIndex].picture;
	var picture = "<img src='" + img + "'>" ;
	document.getElementById('image').innerHTML += picture;
}


function AddAudio(roomIndex)
{
	var aud = roomArray[roomIndex].audio
	var audio = "<audio autoplay><source src='" + aud + "' " + "type='audio/wav'>Your browser does not support the audio element.</audio>"
	document.getElementById('audio').innerHTML = audio;
}
