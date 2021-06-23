// input prompt-sync =======================================

const prompt = require('prompt-sync')({ sigint: true });


let gamerunnig = true;
let time = 6;
let fishcaught = [];


function generateRandomFish(){
    let fishType = ['Big','Small','Deepsea','Slimy','Scaly','Bigmouthed','Longnose','Ugly','Pretty','Angry',];
    let fishType2 = ['Green','Gold','Silver','Yellow','Black','Blue','Brown','Red','Pink','Gray',];
    let fishName = ['Puffers','Drum','Haddock','Seahorse','Sea bass','Hammerhead','Hogfish','Pinfish','Needlefish','Triggerfish',];
    const randomFishType = Math.floor(Math.random() * fishType.length );
    const randomFishType2 = Math.floor(Math.random() * fishType2.length );
    const randomFishName = Math.floor(Math.random() * fishName.length );
    return fishType[randomFishType] + ' ' + fishType2[randomFishType2] + ' ' + fishName[randomFishName];
}
