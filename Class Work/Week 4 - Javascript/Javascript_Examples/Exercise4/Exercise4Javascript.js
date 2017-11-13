function CreatePlayer()
{
  var playerName = document.getElementById('playername').value;

  var playerColour = document.getElementById('playercolour').value;

  var playerHealth = document.getElementById('playerhealth').value;

  var playerWeaponInput = parseInt(document.getElementById('playerweapon').value);

  switch (playerWeaponInput) {
    case 1:
      playerWeapon = "Crossbow of much hurting";
      break;
    case 2:
      playerWeapon = "Broadsword of so slicing";
      break;
    case 3:
      playerWeapon = "Wand of amaze magics";
  }

  document.getElementById('name').innerHTML = playerName;
  document.getElementById('colour').style.backgroundColor = playerColour;
  document.getElementById('health').innerHTML = playerHealth;
  document.getElementById('weapon').innerHTML = playerWeapon;

}
