// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

const NFTS=[]

function mintNFT (cricket,football,pasta,noodles) {
    const myFavNFT={
        "do you play??":cricket,
        "do you ever played??":football,
        "do you cook ??":pasta,
        "do you eat??":noodles
    };

    NFTS.push(myFavNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTS.length;i++){
        console.log(NFTS[i]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(NFTS.length);
}


mintNFT ("yes","no","yes","no");
listNFTs();
getTotalSupply();

// call your functions below this line