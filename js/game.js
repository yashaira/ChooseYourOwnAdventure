// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You wake up in a dark, dank room. You're laying on the gravelly floor with a hospitial gown on, you don't remember how you got there. Do you...",
            choices: [
                {
                    text: "Get up and walk around in the dark, trying to find a way out",
                    nextLevel: "hallway",
                },

                {
                    text: "Stay put, trying to remember how you got there",
                    nextLevel: "stay",
                },
            ]
        },

        stay: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You stay put, you begin to hear loud rumbling noises and with the blink of an eye you DIE",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        hallway : {
            message: "You feel your way through the dark as best you can and find a door, you walk through and find yourself in a narrow, dimly lit, long hallway, you hear a noise!Do you...",
            choices: [
                {
                    text: "Hide!",
                    nextLevel: "hiding",
                },
                { 
                    text:"Run!",
                    nextlevel: "run",
                }
            ]
        },
        
        hiding: { 
            message: "You find a random door and go inside. You find yourself back to where you started! do you ",
            choices: [ 
                { 
                    text: " Give up",
                    nextlevel: "give up",
                },
                {
                    text:" wait for the noise to stop"
                    nextlevl:"wait"
                }
            ]
        
        }, 

    }
};

console.log(game.start);

