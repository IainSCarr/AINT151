var health = 10;

var hasSword = false;
var hasMagic = false;
var hasGrodush = false;
var hasMausoleumOption = true;
var hasSwordOption = true;
var hasLatrineOption = true;
var hasMeatOption = true;

function OnLoad()
{
	SelectRoom(0);
	document.getElementById("audio").volume = 0.5;
}

function MuteAudio()
{
	var aud = document.getElementById('audio')
	var roomAud = document.getElementById('roomAudio')

	if (aud.muted == true) {
		aud.muted = false;
		roomAud.muted = false;
		document.getElementById('mute').src = 'assets/images/speaker_icon.png';
		document.getElementById('mute').alt = 'speaker icon';
	}
	else {
		aud.muted = true;
		roomAud.muted = true;
		document.getElementById('mute').src = 'assets/images/Mute_icon.png';
		document.getElementById('mute').alt = 'mute icon';
	}

}

function SelectRoom(roomIndex)
{
		document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title;
		document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;

		document.getElementById('roomChoices').innerHTML = "";
		document.getElementById('imagediv').innerHTML = "";
		document.getElementById('health').innerHTML = "";
		document.getElementById('inventory').innerHTML = "";

		RoomCheck(roomIndex);

		if (health > 0) {
			AddPicture(roomIndex);

			AddButtons(roomIndex);

			AddAudio(roomIndex);

			DisplayHealth(roomIndex);

			DisplayInventory();

		}
		else {
			Reset();
			SelectRoom(23);
		}

 		taskUpdate();

}

function taskUpdate() {
	if (hasSword) {
		document.getElementById('tableSword').style.textDecoration = "line-through";
	}
	if (hasMagic) {
		document.getElementById('tableMagic').style.textDecoration = "line-through";
	}
	if (hasGrodush) {
		document.getElementById('tableGrodush').style.textDecoration = "line-through";
	}
}

function DisplayInventory() {
	if (hasSword) {
		document.getElementById('inventory').innerHTML += "<img src='assets/images/sword.png' id='items' alt='sword'>";
	}

	if (hasMagic) {
		document.getElementById('inventory').innerHTML += "<img src='assets/images/fireball.png' id='items' alt='magic'>";
	}
}

function DisplayHealth(roomIndex)
{
	var halfHeart = "<img src='assets/images/half_heart.png' id='heart' alt='Half Heart'>";
	var fullHeart = "<img src='assets/images/full_heart.png' id='heart' alt='Full Heart'>";
	var emptyHeart = "<img src='assets/images/empty_heart.png' id='heart' alt='Empty Heart'>";

	if (roomIndex != 10 && roomIndex != 23 && roomIndex != 22)
	{
		for (var i = 0; i < ((9-health)/2); i++) {
			document.getElementById('health').innerHTML += emptyHeart;
		}

		if ((health % 2) != 0) {
			document.getElementById('health').innerHTML += halfHeart;
		}

		for (var i = 0; i < ((health-1)/2); i++) {
			document.getElementById('health').innerHTML += fullHeart;
		}
	}
	else {
		for (var i = 0; i < 5; i++) {
			document.getElementById('health').innerHTML += emptyHeart;
		}
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
	else if (roomIndex == 21) {
		hasGrodush = true;
	}
	else if (roomIndex == 0) {
		Reset();
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

function Reset()
{
	health = 10;

	hasSword = false;
	hasMagic = false;
	hasGrodush = false;
	hasMausoleumOption = true;
	hasSwordOption = true;
	hasLatrineOption = true;
	hasMeatOption = true;

	document.getElementById('tableGrodush').style.textDecoration = "none";
	document.getElementById('tableSword').style.textDecoration = "none";
	document.getElementById('tableMagic').style.textDecoration = "none";
}

function DisplayButton(i, roomIndex)
{
	var index = roomArray[roomIndex].choices[i].index;
	var button = "<button onclick='SelectRoom(" + index + ")'>" + roomArray[roomIndex].choices[i].text + "</button></br>"
	document.getElementById('roomChoices').innerHTML += button;
}

function AddButtons(roomIndex)
{
	if ((roomIndex == 5) && (hasMausoleumOption == false)) {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			if (i != 2) {
				DisplayButton(i, roomIndex)
			}
		}
	}
	else if ((roomIndex == 6) && (hasSwordOption == false)) {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			if (i != 0) {
				DisplayButton(i, roomIndex)
			}
		}
	}
	else if ((roomIndex == 12) && (hasLatrineOption == false) && (hasMeatOption == false)) {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			if (i > 1) {
				DisplayButton(i, roomIndex)
			}
		}
	}
	else if ((roomIndex == 12 || roomIndex == 15) && (hasLatrineOption == false)) {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			if (i != 0) {
				DisplayButton(i, roomIndex)
			}
		}
	}
	else if ((roomIndex == 12) && (hasMeatOption == false)) {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			if (i != 1) {
				DisplayButton(i, roomIndex)
			}
		}
	}
	else if ((roomIndex == 13) && (hasMeatOption == false)) {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			if (i != 0) {
				DisplayButton(i, roomIndex)
			}
		}
	}
	else if ((roomIndex == 19) && (hasSword == false)) {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			if (i != 0) {
				DisplayButton(i, roomIndex)
				document.getElementById('roomText').innerHTML += "</br><p>You do not have a sword!</p>"
			}
		}
	}
	else if ((roomIndex == 20) && (hasMagic == false)) {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			if (i != 0) {
				DisplayButton(i, roomIndex)
				document.getElementById('roomText').innerHTML += "</br><p>You do not have magic!</p>"
			}
		}
	}
	else {
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			DisplayButton(i, roomIndex)
		}
	}
}



function AddPicture(roomIndex)
{
	var img = roomArray[roomIndex].picture;
	var alt = roomArray[roomIndex].alt;
	var full = "<img id='image' src='" + img + "' alt='" + alt +"'>";
	document.getElementById('imagediv').innerHTML += full;
}


function AddAudio(roomIndex)
{
	var aud = roomArray[roomIndex].audio
	document.getElementById('roomAudio').src = aud;
}
