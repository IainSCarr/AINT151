var roomArray = [
	{
		title:'The Pit',
		text:'Hiking through the mountains the ground gives way and you fall into a deep chasm. You awake, bruised and bloody, on a cold slab in a dank, cavernous room. Above you a glimmer of light shines down from where you fell, to your east is what looks like a training room while west smoke bellows from a hot room. As further investigate you notice a small crevice from which red light emanates.',
		picture:'assets/images/blood.png',
		alt:'blood',
		audio:'',
		choices:[
			{
				text:'Scream towards the light for help.',
				index:1
			},
			{
				text:'Move towards the training room.',
				index:2
			},
			{
				text:'Go into the smoky room.',
				index:3
			},
			{
				text:'Squeeze through the crevice.',
				index:4
			}
		]
	},
	{
		title:'The Pit',
		text:'You let out a scream in the hope that your companions might hear it from above. The sound echoes down the passageways before all falls silent again. After a brief moment a deep rumble accompanied by a rush of wind approaches you; it sends a chill down your spine as you sense a great evil lurking in this strange place.',
		picture:'assets/images/blood.png',
		alt:'blood',
		audio:'assets/audio/manscream.wav',
		choices:[
			{
				text:'Move towards the training room.',
				index:2
			},
			{
				text:'Go into the smoky room.',
				index:3
			},
			{
				text:'Squeeze through the crevice.',
				index:4
			}
		]
	},
	{
		title:'Training Room',
		text:'Creeping forwards down the passageway you approach what looks like a training room scattered with broken sticks and shards of metal. The room has archery targets and mannequins made of straw while the ground is stained red in places. To the east you catch a glint of metal through reinforced doors. South is an archway that leads a large courtyard.',
		picture:'assets/images/target.png',
		alt:'target',
		audio:'',
		choices:[
			{
				text:'Go back to where you fell.',
				index:5
			},
			{
				text:'Head through the reinforced doors.',
				index:6
			},
			{
				text:'Approach the courtyard.',
				index:7
			}
		]
	},
	{
		title:'Crematorium',
		text:'Smoke fills your lungs causing you cough uncontrollably, when you regain your composure and manage to examine the room you vomit everywhere - you’re standing in a crematorium and just inhaled the remains of some creature. Searching further, west you see a tunnel just big enough to crawl into with handprints and the words “Do not enter” scrawled in red by the entrance. To the south is a dimly lit room.',
		picture:'assets/images/skeleton_burning.png',
		alt:'skeleton on fire',
		audio:'assets/audio/fire.mp3',
		choices:[
			{
				text:'Go back to where you fell',
				index:5
			},
			{
				text:'Crawl into the tunnel',
				index:10
			},
			{
				text:'Head into the dimly lit room.',
				index:12
			}
		]
	},
	{
		title:'Mausoleum',
		text:'Shuffling through the crevice you eventually pass through into a large mausoleum. In the center of the room red flames emerge from a bowl however no heat is emitted. Skeletons are strewn about the room and hang from chains and manacles against the walls. Up some steps lies a large concrete tomb preceded by an altar with a large book upon it. The book is titled “Prophecies of the Necromancer”.',
		picture:'assets/images/book.png',
		alt:'magical book',
		audio:'',
		choices:[
			{
				text:'Go back to where you fell',
				index:5
			},
			{
				text:'Open the book.',
				index:16
			}
		]
	},
	{
		title:'The Pit',
		text:'You return to the spot you fell marked by the fresh bloody puddle on the floor. Above you a glimmer of light shines down from where you fell, to your east is what looks like a training room while west smoke bellows from a hot room. As further investigate you notice a small crevice from which red light emanates.',
		picture:'assets/images/blood.png',
		alt:'blood',
		audio:'',
		choices:[
			{
				text:'Move towards the training room.',
				index:2
			},
			{
				text:'Go into the smoky room.',
				index:3
			},
			{
				text:'Squeeze through the crevice.',
				index:4
			}
		]
	},
	{
		title:'Armory',
		text:'Pushing the heavy doors further open you reveal an armory full of malevolent orcish weapons and armour. There are some broken torture instruments scattered about which you warily inspect. To the south you hear some faint screams while east leads to the training room.',
		picture:'assets/images/weapons.png',
		alt:'weapons',
		audio:'',
		choices:[
			{
				text:'Steal a sword.',
				index:8
			},
			{
				text:'Go towards the screams.',
				index:9
			},
			{
				text:'Go into the training room.',
				index:2
			}
		]
	},
	{
		title:'Courtyard',
		text:'You pass under the archway into a large courtyard. A fountain shooting red liquid dominates the room, the walls are covered in shields, weapons and skulls from various beasts - trophies. To the east you can hear a low chanting while west you hear some faint screams.',
		picture:'assets/images/fountain.png',
		alt:'fountain',
		audio:'assets/audio/fountain.wav',
		choices:[
			{
				text:'Go towards the chanting',
				index:11
			},
			{
				text:'Go towards the screams.',
				index:9
			},
			{
				text:'Go into the training room.',
				index:2
			}
		]
	},
	{
		title:'Armory',
		text:'You slide your hand along the harsh metal before selecting a sword. A skull has been carved into the pommel while gems line the guard; this is no ordinary sword. As you raise it up you feel power course through your veins. To the south you hear some faint screams while east leads to the training room.',
		picture:'assets/images/sword.png',
		alt:'sword',
		audio:'assets/audio/getsword.wav',
		choices:[
			{
				text:'Go towards the screams.',
				index:9
			},
			{
				text:'Go into the training room',
				index:2
			}
		]
	},
	{
		title:'Prison',
		text:'As you approach the screams a horrifying scene unfolds. Bones litter the floor as rats scurry around them, the wails emanating from the cages around you pierce your ears and all manner of torture devices look freshly used. Some skeletal figures behind the bars mumble “do not climb”, you want to help them but they are all beyond saving. To the south a ladder is bathed in light from which you can see the surface! To the east an archway leads to a courtyard. North are large reinforced doors.',
		picture:'assets/images/flames.png',
		alt:'flames',
		audio:'assets/audio/hellscreams.mp3',
		choices:[
			{
				text:'Climb the ladder.',
				index:10
			},
			{
				text:'Head through the reinforced doors.',
				index:6
			},
			{
				text:'Approach the courtyard',
				index:7
			}
		]
	},
	{
		title:'You Died!',
		text:'Thinking escape is near, you accidentally trip a wire and a blade slices you in half. As you bleed to death you are filled with regret for not heeding the warning. Your remains are fed to a terrible beast. </br></br> Learn from your previous mistakes or forever be doomed to fail.',
		picture:'assets/images/skull.png',
		alt:'skull',
		audio:'assets/audio/manscream.wav',
		choices:[
			{
				text:'Try Again.',
				index:0
			}
		]
	},
	{
		title:'Shrine',
		text:'As you approach the chanting you see orcs dressed in black robes seemingly in a trance. Oblivious to the orcs, you wander into the gothic shrine. An overwhelming sense of dread consumes you as you turn south to face a huge gate and peer through towards a shroud of darkness. To the east lies a long dimly lit room. To the west, an archway leads to a courtyard.',
		picture:'assets/images/gate.png',
		alt:'gate',
		audio:'',
		choices:[
			{
				text:'Head into the dimly lit room',
				index:12
			},
			{
				text:'Approach the courtyard',
				index:7
			},
			{
				text:'Raise the gate and enter the chamber.',
				index:19
			}
		]
	},
	{
		title:'Barracks',
		text:'You enter the room and your heart almost stops. Hundreds of sleeping orcs! Trying to stay as silent as possible there is a disgusting smell radiating from a room to the south however as you move further into the room you catch a whiff of something delicious coming from a room to the east. To the north smoke bellows from a hot room while a low chanting can be heard from the west.',
		picture:'assets/images/bed.png',
		alt:'bed',
		audio:'assets/audio/snoring.mp3',
		choices:[
			{
				text:'Investigate the disgusting smell.',
				index:13
			},
			{
				text:'Investigate the delicious smell.',
				index:14
			},
			{
				text:'Go into the smoky room.',
				index:3
			},
			{
				text:'Go towards the chanting.',
				index:11
			}
		]
	},
	{
		title:'Latrines',
		text:'The smell grows stronger and stronger and eventually overwhelms you. You vomit everywhere and through a tear you make out some overflowing toilets. An orc has fallen asleep on one of them however you don’t stay to inspect as the stench forces you to exit. You catch a whiff of something delicious coming from a room to the east. To the north lies a dark ominous room while a low chanting can be heard from the west.',
		picture:'assets/images/poop.png',
		alt:'poop',
		audio:'assets/audio/vomit.wav',
		choices:[
			{
				text:'Investigate the delicious smell.',
				index:14
			},
			{
				text:'Go into the smoky room.',
				index:3
			},
			{
				text:'Go towards the chanting.',
				index:11
			}
		]
	},
	{
		title:'Kitchen',
		text:'You are drawn towards the smell and soon come upon a wondrous banquet. Huge piles of food line the tables, surely for when the orcs awaken.',
		picture:'assets/images/meat.png',
		alt:'meat',
		audio:'',
		choices:[
			{
				text:'Eat the food.',
				index:15
			},
			{
				text:'Return to the barracks.',
				index:12
			}
		]
	},
	{
		title:'Kitchen',
		text:'You grab a large slab of meat and quickly consume it. It’s delicious and you feel fully recharged afterwards so head back to the barracks. Trying to stay as silent as possible there is a disgusting smell radiating from a room to the south. To the north lies a dark ominous room while a low chanting can be heard from the west.',
		picture:'assets/images/meat.png',
		alt:'meat',
		audio:'',
		choices:[
			{
				text:'Investigate the disgusting smell.',
				index:13
			},
			{
				text:'Go into the smoky room.',
				index:3
			},
			{
				text:'Go towards the chanting.',
				index:11
			}
		]
	},
	{
		title:'Mausoleum',
		text:'You open the book and feel a magical power surge through your veins. Suddenly all the skeletons in the room spring to life and start advancing towards you.',
		picture:'assets/images/skeleton-knight.png',
		alt:'skeleton knight',
		audio:'assets/audio/creature snarl.mp3',
		choices:[
			{
				text:'Fight the skeletons.',
				index:17
			},
			{
				text:'Run Away.',
				index:18
			}
		]
	},
	{
		title:'Mausoleum',
		text:'Using your new magical abilities, you start blasting the skeletons with fireballs. A couple get too close and manage to injure you before you can blow them to smithereens. Once they are all destroyed you return through the crevice to where you fell and behind you the mausoleum collapses. Above you a glimmer of light shines down from where you fell, to your east is what looks like a training room while west smoke bellows from a hot room.',
		picture:'assets/images/fireball.png',
		alt:'fireball',
		audio:'assets/audio/firey woosh thick.wav',
		choices:[
			{
				text:'Move towards the training room.',
				index:2
			},
			{
				text:'Go into the smoky room.',
				index:3
			}
		]
	},
	{
		title:'You Died!',
		text:'Your cowardice knows no bounds. As you flee the skeletons capture you before tearing you limb from limb. Those limbs are then fed to a terrible beast. </br></br> Learn from your previous mistakes or forever be doomed to fail.',
		picture:'assets/images/skull.png',
		alt:'skull',
		audio:'assets/audio/manscream.wav',
		choices:[
			{
				text:'Try Again.',
				index:0
			}
		]
	},
	{
		title:'The Lair of Grodush the Indomitable',
		text:'You approach the crank that opens the gate and begin to turn. As the huge gate begins to rise the chanting orcs snap out of their trances and scream with horror at what you are doing. They rush over but you manage to slip under the gate before it slams down behind you. Turning around you are suddenly faced by a terrible beast. Huge with many arms, Grodush towers over you and pierces into your soul with it’s all seeing eye.',
		picture:'assets/images/monster.png',
		alt:'monster',
		audio:'assets/audio/creature breath 01.mp3',
		choices:[
			{
				text:'Attack with sword.',
				index:20
			},
			{
				text:'Cower in terror.',
				index:22
			}
		]
	},
	{
		title:'The Lair of Grodush the Indomitable',
		text:'Mustering all the courage you have, you charge at Grodush and stab out its eye. The beast lets out a harrowing roar that reverberates through your body and, in a rage, smacks you across the room.',
		picture:'assets/images/eye.png',
		alt:'severed eye',
		audio:'assets/audio/creature growl 07.mp3',
		choices:[
			{
				text:'Attack with magic.',
				index:21
			},
			{
				text:'Cower in terror.',
				index:22
			}
		]
	},
	{
		title:'The Lair of Grodush the Indomitable',
		text:'Using all your strength you launch a powerful magical spell at Grodush however it deflects your attack upwards into the ceiling. A crack begins to form and after a moment the ceiling comes crashing down on top of Grodush crushing it like a bug. The orcs, seeing what you have done, raise the gate and begin to worship you. You become their new chief and lead them above ground to freedom.',
		picture:'assets/images/praisehands.png',
		alt:'success',
		audio:'assets/audio/civwin.wav',
		choices:[
			{
				text:'Play Again?',
				index:0
			}
		]
	},
	{
		title:'You Died!',
		text:'You crumble in the presence of Grodush and it quickly consumes you. </br></br> Learn from your previous mistakes or forever be doomed to fail.',
		picture:'assets/images/skull.png',
		alt:'skull',
		audio:'assets/audio/manscream.wav',
		choices:[
			{
				text:'Try Again.',
				index:0
			}
		]
	},
	{
		title:'You Died!',
		text:'Your health has dropped to zero. You have died. </br></br> Learn from your previous mistakes or forever be doomed to fail.',
		picture:'assets/images/skull.png',
		alt:'skull',
		audio:'assets/audio/manscream.wav',
		choices:[
			{
				text:'Try Again.',
				index:0
			}
		]
	}
]
