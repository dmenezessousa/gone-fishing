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

console.log("You've gone fishing! Try to maximize the value of your caught fish.");
console.log('You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.');
console.log();
console.log('============================================');
console.log();

function generateRandomFish(){
    let fishType = ['Big','Small','Deepsea','Slimy','Scaly','Bigmouthed','Longnose','Ugly','Pretty','Angry',];
    let fishType2 = ['Green','Gold','Silver','Yellow','Black','Blue','Brown','Red','Pink','Gray',];
    let fishName = ['Puffers','Drum','Haddock','Seahorse','Sea bass','Hammerhead','Hogfish','Pinfish','Needlefish','Triggerfish',];
    const randomFishType = Math.floor(Math.random() * fishType.length );
    const randomFishType2 = Math.floor(Math.random() * fishType2.length );
    const randomFishName = Math.floor(Math.random() * fishName.length );
    return fishType[randomFishType] + ' ' + fishType2[randomFishType2] + ' ' + fishName[randomFishName];
}
