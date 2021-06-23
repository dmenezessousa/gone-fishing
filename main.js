// input prompt-sync =======================================

const prompt = require('prompt-sync')({ sigint: true });

let gamerunnig = true;
let time = 6;
let fishcaught = [];
let total = {
    fish: 0,
    weigth: 0,
    value: 0
};

function generateRandomFish(){
    let fishType = ['Big','Small','Deepsea','Slimy','Scaly','Bigmouthed','Longnose','Ugly','Pretty','Angry',];
    let fishType2 = ['Green','Gold','Silver','Yellow','Black','Blue','Brown','Red','Pink','Gray',];
    let fishName = ['Puffers','Drum','Haddock','Seahorse','Sea bass','Hammerhead','Hogfish','Pinfish','Needlefish','Triggerfish',];
    const randomFishType = Math.floor(Math.random() * fishType.length );
    const randomFishType2 = Math.floor(Math.random() * fishType2.length );
    const randomFishName = Math.floor(Math.random() * fishName.length );
    return fishType[randomFishType] + ' ' + fishType2[randomFishType2] + ' ' + fishName[randomFishName];
}

console.log("You've gone fishing! Try to maximize the value of your caught fish.");
console.log('You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.');
console.log();
console.log('============================================');
console.log();

while(gamerunnig){
    if(time >= 12){
        gamerunnig = false;
        console.log('The time is '+time+':00pm. Times up!');
        console.log();
        console.log('You caught ' + total.fish + ' fish:');
        for(i = 0; i < fishcaught.length; i++ ){
            console.log('* ' + fishcaught[i].Name + ', ' + fishcaught[i].Weight + ' lbs, $' + fishcaught[i].Value);
        }
        console.log();
        console.log('Total weight: ' + total.weigth+' lbs');
        console.log('Total value: $' + total.value);
    }
    else{
        let randomWeigth = Math.floor(Math.random() * 1000) / 100;
        let randomValue = Math.floor(Math.random() * 1000) / 100;
        let randomName = generateRandomFish();
        console.log("The time is "+ time +":00am. So far you've caught:");
        console.log(total.fish + ' fish, ' + total.weigth.toFixed(2) + ' lbs, ' + '$' + total.value.toFixed(2));
        console.log();
        console.log("You caught a "+ randomName+ " weighing "+randomWeigth+" lbs and valued at $"+ randomValue);
        console.log();
        if((total.weigth + randomWeigth) < 10) {
            console.log('Your action: [c]atch or [r]elease?');
            const answer = prompt('>');
            console.log();
            if(answer === 'c'){
                console.log('You chose to keep the fish.');
                total.fish++;
                total.weigth += randomWeigth;
                total.value += randomValue;
                fishcaught.push({'Name': randomName, 'Weight': randomWeigth, 'Value': randomValue});
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
    time++; 
}
