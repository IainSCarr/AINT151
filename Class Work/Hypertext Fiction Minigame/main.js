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


		AddButtons(roomIndex);

		AddPicture(roomIndex);

		AddAudio(roomIndex);

}

function AddButtons(roomIndex)
{
	for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
		var index = roomArray[roomIndex].choices[i].index;
		var button = "<button onclick='SelectRoom(" + index + ")'>" + roomArray[roomIndex].choices[i].text + "</button></br>"
		document.getElementById('roomChoices').innerHTML += button;
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
