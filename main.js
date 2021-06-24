// input prompt-sync =======================================

const prompt = require('prompt-sync')({ sigint: true });

// list of Variables =======================================

let gamerunnig = true;
let time = 6;
let fishcaught = [];
let total = {
    fish: 0,
    weight: 0,
    value: 0
};

// Fuctions ================================================

function generateRandomFish(){
    let fishType = ['Big','Small','Deepsea','Slimy','Scaly','Bigmouthed','Longnose','Ugly','Pretty','Angry',];
    let fishType2 = ['Green','Gold','Silver','Yellow','Black','Blue','Brown','Red','Pink','Gray',];
    let fishName = ['Puffers','Drum','Haddock','Seahorse','Sea bass','Hammerhead','Hogfish','Pinfish','Needlefish','Triggerfish',];
    const randomFishType = Math.floor(Math.random() * fishType.length );
    const randomFishType2 = Math.floor(Math.random() * fishType2.length );
    const randomFishName = Math.floor(Math.random() * fishName.length );
    return fishType[randomFishType] + ' ' + fishType2[randomFishType2] + ' ' + fishName[randomFishName];
}

//Greet User ================================================

console.log("You've gone fishing! Try to maximize the value of your caught fish.");
console.log('You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.');
console.log();
console.log('============================================');
console.log();

//Game Loop ==================================================
while(gamerunnig){
    //kill game when time >= the number 12.Time is set to 6.
    //end game
    if(time >= 12){
        gamerunnig = false; //End the game by changing (True)statment to false.

        //Store all the info during the game and show it to the user at the end of it .

        console.log('The time is '+time+':00pm. Times up!');
        console.log();
        console.log('You caught ' + total.fish + ' fish:');

        //For loop to display fish info after the time is up.

        for(i = 0; i < fishcaught.length; i++ ){
            console.log('* ' + fishcaught[i].Name + ', ' + fishcaught[i].Weight + ' lbs, $' + fishcaught[i].Value);
        }
        console.log();
        console.log('Total weight: ' + total.weight+' lbs');
        console.log('Total value: $' + total.value);
    }
    else{
        //Variables to generate a random number for weights and Values.

        let randomweight = Math.floor(Math.random() * 1000) / 100;
        let randomValue = Math.floor(Math.random() * 1000) / 100;
        let randomName = generateRandomFish();
        
        //Display user progress during the game.

        console.log("The time is "+ time +":00am. So far you've caught:");

        //Values was showing all decimals needed to add toFixed(#) to display only 2 decimals

        console.log(total.fish + ' fish, ' + total.weight.toFixed(2) + ' lbs, ' + '$' + total.value.toFixed(2)); 
        console.log();
        //generate randoms values for the obj total {name, weight , value} and log out.

        console.log("You caught a "+ randomName+ " weighing "+randomweight+" lbs and valued at $"+ randomValue);
        console.log();
        if((total.weight + randomweight) < 10) {
            console.log('Your action: [c]atch or [r]elease?');
            const answer = prompt('>');
            console.log();
            if(answer === 'c'){
                console.log('You chose to keep the fish.');
                total.fish++; // adds +1 to fish count.
                total.weight += randomweight;
                total.value += randomValue;
                fishcaught.push({'Name': randomName, 'Weight': randomweight, 'Value': randomValue});// push fish info to the empty array.
            }else if(answer === 'r'){
                console.log('You chose to release the fish.');
            }
            console.log();
        }else{
            console.log('This fish would put you over 10 lbs, so you release it.');
            console.log('Press [enter] to continue.');
            const next = prompt('>');
        }      
    }
    console.log('==========================================');
    time++; //adds +1 to time.
}
