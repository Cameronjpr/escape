$(document).ready(function() {
    const text = document.getElementById("text")
    const leftBtn = document.getElementById("left-button")
    const rightBtn = document.getElementById("right-button")
    let index = 0;
    const title = "Escape"
    const linebreak = "<br><br>"
    console.log(rightBtn, leftBtn)

    let buttons = {
        selectToggle: function() {
            $(leftBtn).toggleClass('selected');
            $(rightBtn).toggleClass('selected');
        },
        left: false,
        right: false,
    }

    $(document).keydown(function(event){
    var keycode = event.which;
    if(keycode == 13 || keycode == 32){ 
        if ($( '#left-button' ).hasClass('selected')) {
            $(leftBtn).toggleClass('mobile-selection')
            index = forks[index].next[0]
            forks.update(index)
        }
        else {
            $(rightBtn).toggleClass('mobile-selection')
            index = forks[index].next[1]
            forks.update(index)
        }
    }
    else if (keycode == 37) { 
        buttons.selectToggle();
        
    }
    else if (keycode == 39) { 
        buttons.selectToggle();
    }
    });

    $(leftBtn).click(function(event){
        index = forks[index].next[0]
        forks.update(index)
    });

    $(rightBtn).click(function(event){
        index = forks[index].next[1]
        forks.update(index)
    });

    $(leftBtn).hover(function(event){
        $(leftBtn).toggleClass('selected');
    });

    $(rightBtn).hover(function(event){
        $(rightBtn).toggleClass('selected');
    });

    const forks = {
        update: function(i) {
            text.innerHTML = forks[i].text;
            leftBtn.innerHTML = forks[i].left
            rightBtn.innerHTML = forks[i].right
            console.log(forks[i])
        },
        0: {
            text: "Are you ready to start the game?",
            left: "Yes",
            right: "No",
            next: [1, 2]
        },
        1: {
            text: `Then let's begin...${linebreak}You wake up. It's dark, it's cold, and you're not sure where you are, but you're fairly certain it's indoors.`,
            left: "Feel around for a lightswitch",
            right: "Sit in the darkness for a moment",
            next: [3, 4]
        },
        2: {
            text: "That's a real shame.",
            left: "Too",
            right: "Bad",
            next: [0, 0]
        },
        3: {
            text: `You stand up, and find a lightswitch after running your hands along the walls. You flick it on and realise you're standing inside a wooden box, just large enough for an adult.${linebreak}You notice that your body is swaying side to side, and that you feel a little nauseous...`,
            left: "Pound at the wooden walls",
            right: "Look around for a door of some kind",
            next: [5, 6]
        },
        4: {
            text: `Sitting in the darkness, you struggle to remember how you got here.`,
            left: "Feel around for a lightswitch",
            right: "Go back to sleep",
            next: [3, 7]
        },
        5: {
            text: `You pound and pound but the walls refuse to break.`,
            left: "Pound some more!",
            right: "Give up and search for a door",
            next: [8, 6]
            },
        6: {
            text: `You try and find a door of some sort, but fail in doing so.${linebreak}It seems that the wooden planks have been nailed into place.`,
            left: "Pound at the wooden walls",
            right: "Give up. It's pointless. I'm trapped.",
            next: [5, 601]
            },
        7: {
            text: `Zzzzz${linebreak}ZzzzzzzZZZzzzzzz${linebreak}ZZZZZZZZZZ${linebreak}You wake up, slightly refreshed.`,
            left: "Feel around for a lightswitch",
            right: "Sit in the darkness for a moment",
            next: [3, 4]
        },
        8: {
            text: `You keeping pounding, and then...${linebreak}You hear footsteps coming towards you.`,
            left: '"Hello? Can you get me out of here?"',
            right: '"Who\'s there?!"',
            next: [9, 9]
        },
        9: {
            text: `The footstep get closer, before stopping just beyond one of the wooden walls.${linebreak}You hear a man outside, struggling with something.${linebreak}A few seconds later, and with an enormous <em>CRACK</em>, one of the wooden planks is ripped away, right in front of you.${linebreak}In front of you stands a dirty, dusty man wearing sailor's clothes.`,
            left: "Make a break for it!",
            right: "Slowly climb out and speak with the man",
            next: [10, 11]
        },
        10: {
            text: `You squeeze through the gap and find yourself inside the cabin of a long wooden boat, which is filled with a dozen more wooden crates. Your crate had protected you from the foul stench of rotting food which now fills your lungs. You scramble away from the sailor, who tries feebly to pull you back.${linebreak}You dash across the room, ducking out of sight, towards a staircase leading to a sunlit deck.`,
            left: "Run up to the deck",
            right: "Hide",
            next: [14, 15]
        },
        11: {
            text: `The sailor explains that you've been in the box for about a week. You ask if it was him who put you there. He insists that it wasn't -- that the order came from the captain of the ship. Bloody yes-men.${linebreak}You notice that the sailor has a small knife dangling by his side.${linebreak}You're not sure if he's someone you can trust, despite being the one who got you out of the crate...`,
            left: "Grab his knife!",
            right: '"Why am I here?"',
            next: [12, 13]
        },
        12: {
            text: `You try and snatch the knife from the sailor, but in the resulting scuffle it drops to the floor. He kicks you into the walls of the crate, and you tumble to floor.${linebreak}He bends over to pick up the fallen knife, before straightening back up and holding the knife high above you.`,
            left: 'Beg for mercy',
            right: 'Protect yourself with the broken plank',
            next: [15, 16]
        },
        13: {
            text: `"You're this ship's cargo.", he explains.${linebreak}"Or at least, you're part of it. There are around ten others." He motions towards the several other crates that fill up the cargo hold.`,
            left: `I'm not cargo! I'm a human being!`,
            right: `You're freaking me out here.`,
            next: [17, 18]
        },
        14: {
            text: `You make a break for the deck, hopping up the staircase into the light.${linebreak}It's midday, and the sun is hanging warm above you. You look around and see several members of the crew, dressed in tatty clothes and going about their business. Beyond the ship lies the endless blue of the open ocean.`,
            left: 'Introduce yourself...',
            right: 'Find a place to hide',
            next: [21, 22]
        },
        15: {
            text: `The sailor laughs off your plea for mercy.${linebreak}This isn't going to end well...`,
            left: `Aaaaaaaaaargh!`,
            right: `Arrrrrgh!`,
            next: [602, 602]
        },
        16: {
            text: `The sailor tries to stab you with the knife, but the blade gets stuck in your makeshift shield. Sensing an opportunity, you spring to your feet and land a solid <em>THWWWACK</em> on his cheek.${linebreak}He topples over, hitting the floor with a great thud. Everyone on board must have heard that...`,
            left: `Grab the knife`,
            right: `Change into his clothes`,
            next: [19, 20]
        },
        17: {
            text: `The man explains that this is not strictly the case. He concedes that yes, you are a human being, but no, you are <em>indeed</em> cargo.${linebreak}He expresses his disgust for the buying and selling of humans, and insists he only took this job because he had to.`,
            left: `Is that why you freed me?`,
            right: `This is all too much...`,
            next: [22, 18]
        },
        18: {
            text: `"I undestand that."${linebreak}(He doesn't)${linebreak}"We all want the same thing here -- to find a way off this boat!${linebreak}(What the sailor really wants is a private island and his own galleon)${linebreak}"So let's make a plan, eh?"`,
            left: `Let's sneak onto the deck!`,
            right: `Onto the deck let's sneak!`,
            next: [24, 24]
        },
        19: {
            text: `You pick up the knife. It's heavy, and the blade is very sharp. In testing this, you draw some of your own blood.${linebreak}Idiot.`,
            left: `Make your way to the deck`,
            right: `Slit your own throat...`,
            next: [14, 605]
        },
        20: {
            text: `You strip the sailor of his clothes and put them on yourself. The fit is snug, but better than you had anticipated.${linebreak}You pick up his knife. It's heavy, and the blade is very sharp. In testing this, you draw some of your own blood.${linebreak}Idiot.`,
            left: `Make your way to the deck`,
            right: `Slit your own throat...`,
            next: [19, 605]
        },
        21: {
            text: `You stride towards the nearest sailor. Confidence is key. Act like you belong. ${linebreak}You begin to introduce yourself, but are soon silenced by the noise from a growing crowd around you. You look around -- five or six sailors, each carrying a long sword.`,
            left: `Greetings, friends!`,
            right: `I come in <strong>PEACE!</strong>`,
            next: [603, 604]
        },
        22: {
            text: `"Yes!" he exclaims. "But you're not safe yet. Above deck are six of the fiercest pirates you've ever seen. Except Martin, the sweep. Martin got on the wrong boat at Plymouth.`,
            left: `Let's find a way to escape!`,
            right: `Martin?`,
            next: [24, 25]
        },
        24: {
            text: `You and the sailor devise a way off the boat. You'll sneak up onto the deck, get into position, then unleash hell on the unsuspecting crew.`,
            left: `Okay`,
            right: `Sure`,
            next: [26, 26]
        },
        25: {
            text: `After a few moments have passed, you both make your way to a staircase leading up to the deck. It suddenly crosses your mind that you don't even know the name of this savior sailor. This most brave of rescuers with whom you may shortly perish.${linebreak}I'm John, he explains. You don't really care anyway and forget his name almost immediately.`,
            left: `On with the plan!`,
            right: `On with the plan!`,
            next: [19, 20]
        },
        25: {
            text: `Yes -- Martin. He's a young lad, dense as a rock. Thought this was the ferry to Guernsey.${linebreak}He's a buffoon but he's <em>our</em> buffoon. Quite literally, too, ever since the cap'n declared him cargo.`,
            left: `Right. Now, how do we escape?`,
            right: `I see. Now, how do we escape?`,
            next: [24, 24]
        },
        26: {
            text: `Edging your way up to the deck, you take care to stay out of sight of the crew. From behind a large oak chest near the edge of the deck, you survey the scene.${linebreak}Six pirates - as promised - and one Martin. The pirates seem to be walking along pre-determined routes, almost as if this were a video game.`,
            left: `Wait a moment...`,
            right: `Attack!!!`,
            next: [27, 606]
        },
        27: {
            text: `You hold your position until all of the pirates have their backs turned to you. This is the moment. You and the sailor -- what was his name? -- turn to one another. Are you ready?`,
            left: `Give them HELL!`,
            right: `I'm too scared!`,
            next: [28, 28]
        },
        28: {
            text: `You and the sailor bloke launch into a frenzy of left hooks and dagger blows, punching and cutting your way through six of the beardiest, hardest, meanest pirates you ever did see. The sailor is a skilled fighter (<strong>PLOT ARMOUR</strong>), and the two of you are soon surrounded by six bodies and a cowering Martin.`,
            left: `Let Martin go...`,
            right: `He's an accomplice! He dies too!`,
            next: [29, 30]
        },
        29: {
            text: `Martin scampers back, putting as much ground as possible between him and your friend's blade.${linebreak}It's all over. Thanks to the sailor, you escaped your wooden crate and were able to wrest control of the ship.${linebreak}The open ocean is laid out in front of you.${linebreak}Where do you want to go?`,
            left: `Back home...`,
            right: `Onwards! The seas are ours!`,
            next: [701, 702]
        },
        30: {
            text: `You gut Martin like all the others. It's not your fault he can't read a ferry timetable.${linebreak}You take a deep breath. It's all over. Thanks to the sailor, you escaped your wooden crate and were able to wrest control of the ship.${linebreak}The open ocean is laid out in front of you.${linebreak}Where do you want to go?`,
            left: `Back home...`,
            right: `Onwards! The seas are ours!`,
            next: [701, 702]
        },
        601: {
            text: `You died of a broken spirit.${linebreak}:(`,
            left: "Retry",
            right: "Who made this stupid game?",
            next: [0, 999]
        },
        602: {
            text: `You died from a fatal stab wound.${linebreak}:(`,
            left: "Retry",
            right: "Who made this stupid game?",
            next: [0, 999]
        },
        603: {
            text: `Diplomacy failed. You were stabbed by a sailor called Barry.${linebreak}:(`,
            left: "Retry",
            right: "Who made this stupid game?",
            next: [0, 999]
        },
        604: {
            text: `The sailors didn't understand 'peace', and took it in turns to stick you. You died seven minutes after making your introductions.${linebreak}:(`,
            left: "Retry",
            right: "Who made this stupid game?",
            next: [0, 999]
        },
        605: {
            text: `You died.${linebreak}You killed yourself.${linebreak}That's it.${linebreak}${linebreak}You <em>do</em> realise that this is a game, right?`,
            left: "Retry",
            right: "Who made this stupid game?",
            next: [0, 999]
        },
        606: {
            text: `<em>"Attack!!!"</em>?${linebreak}What on earth made you think that would work? <em>Of course</em> you were slain. You were <strong>so</strong> slain.${linebreak}Try again.`,
            left: "Retry",
            right: "Who made this stupid game?",
            next: [0, 999]
        },
        701: {
            text: `Thank you for playing ${title}.${linebreak}I hope your home is just as you left it.${linebreak}This game was created in 2019 by Cameron Robson.`,
            left: "Play Again",
            right: "Play Again",
            next: [0, 0]
        },
        702: {
            text: `Thank you for playing ${title}.${linebreak}May the oceans bring you much adventure and wealth.${linebreak}This game was created in 2019 by Cameron Robson.`,
            left: "Play Again",
            right: "Play Again",
            next: [0, 0]
        },
        999: {
            text: `${title} was created by Cameron Robson.`,
            left: "Play Again",
            right: "Play Again",
            next: [0, 0]
        }
    }
   
    console.log(forks[index].next[1])
    console.log(forks[2])


    forks.update(index)

});

// x:
//     {
//         text: ``,
//         left: "",
//         right: "",
//         next: [, ]
//     }