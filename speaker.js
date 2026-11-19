// this gives the player three hints per page. 

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function runExample() {

console.log ("Hey, before we start. I do have to warn you fairly that this story pulls no punches.")
await delay(1000);
console.log ("If you're uncomfortable with the topics, or need to take a break, that's alright.")
await delay(1000);
console.log ("Let's begin... I think this is an old memory vault. Something I must have locked up years ago.")
await delay (1000);
console.log ("I think you should look around. Some hidden memories might be our clue to getting into this vault and maybe out of this dark and dingy area.")
  }

  runExample();