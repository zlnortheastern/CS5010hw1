import PromptsManager from "./PromptsManager.js";
import PromptSync from "prompt-sync";

const myPromtManager = new PromptsManager();
const prompt = PromptSync();
let user = "";

// Ask the user for a number to run different mode
user = userPrompt();

// Loop to keep prompting the user until 0 is entered
while (user != "0") {

  // Display all interactions
  if (user === "1") {
    myPromtManager.showAllInteractions();
  }

  // Record test interactions
  else if (user === "2") {
    myPromtManager.recordPrompt("This is a prompt test 1", "Thi is a response test 1");
    myPromtManager.addDalleInteraction("This is a prompt test 2", "https://upload.wikimedia.org/wikipedia/commons/6/6f/Northeastern_seal.svg", "Thi is a response test 2");
    //myPromtManager.showAllInteractions();
  }

  // Prompt the user for adding a new interaction
  else if (user === "3") {
    console.log("Give me a prompt. It could be followed by an image url");
    let p = prompt("Enter Prompt: ");
    let r = prompt("Give me a response: ");
    let url = p.match(/(.*?)(https?:\/\/\S+|$)/);
    if (url != null) {
      let text = url[1].trim();
      let u = url[2].trim();
      myPromtManager.addDalleInteraction(text, u, r);
    } else {
      myPromtManager.recordPrompt(p, r);
    }
  }

  // Display all interactions and prompt the user for a number to delete an interaction
  else if (user === "4") {
    myPromtManager.showAllInteractions();
    if (myPromtManager.interactions.length != 0 ) {
      const inters = myPromtManager.interactions;
      let i = parseInt(prompt("Enter a number to delete: "));
      while (isNaN(i) || i > inters.length || i < 0) {
        i = parseInt(prompt("Invalid! Re-enter a number to delete: "));
      }
      myPromtManager.deleteInteraction(i);
      console.log(`Interaction ${i} has been deleted!`);
    }
  }

  // Repeat asking user for a number to display each mode
  user = userPrompt();

}
function userPrompt() {
  const scope = ["1", "2", "3", "4", "0"];
  console.log("1. Show all interactions.\n2. Add example interactions.\n3. Add an interaction.\n4. Delete an interaction.\n0. Quit.");
  let result = prompt("Please enter a number: ");
  while (!scope.includes(result)) {
    console.log("Not valid input!\n1. Show all interactions.\n2. Add example interactions.\n3. Add an interaction.\n4. Delete an interaction.\n0. Quit.");
    result = prompt("Please re-enter:");
  }
  return result;
}
