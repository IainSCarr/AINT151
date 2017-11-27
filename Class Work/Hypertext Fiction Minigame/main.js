function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
		document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title;
		document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;

		document.getElementById('roomChoices').innerHTML = "";
		document.getElementById('image').innerHTML = ""
;
		for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
			var index = roomArray[roomIndex].choices[i].index;
			var button = "<button onclick='SelectRoom(" + index + ")'>" + roomArray[roomIndex].choices[i].text + "</button></br>"
			document.getElementById('roomChoices').innerHTML += button;
		}


		var img = roomArray[roomIndex].picture
		var picture = "<img src='" + img + "'>" ;
		document.getElementById('image').innerHTML += picture;

}
