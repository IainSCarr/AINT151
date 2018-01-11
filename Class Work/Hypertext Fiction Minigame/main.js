var health = 10;

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

		RoomCheck(roomIndex);

		AddPicture(roomIndex);

		AddButtons(roomIndex);

		AddAudio(roomIndex);
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
