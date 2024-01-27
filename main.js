import PromptsManager from "./PromptsManager.js";
import PromptSync from "prompt-sync";

// Constant variables for test input
const testPrompt1 = "This is a prompt test 1.";
const testResponse1 = "This is a response test 1.";
const testPrompt2 = "This is a prompt test 2.";
const testResponse2 = "This is a response test 2.";
const testURL = "https://upload.wikimedia.org/wikipedia/commons/6/6f/Northeastern_seal.svg";

// Create a PromptsManager instance
const myPromtManager = new PromptsManager();

// Initialize the prompt-sync for getting user input.
const prompt = PromptSync();

// Ask the user for a number to run different mode
let user = "";
user = userPrompt();

// Loop to keep prompting the user until 0 is entered
while (user != "0") {

  // Display all interactions
  if (user === "1") {
    myPromtManager.showAllInteractions();
  }

  // Add test interactions
  else if (user === "2") {
    myPromtManager.addInteraction(testPrompt1, testResponse1);
    myPromtManager.addDalleInteraction(testPrompt2, testURL, testResponse2);
    //myPromtManager.showAllInteractions();
  }

  // (new feature) Replace a response
  else if (user === "3") {
    myPromtManager.showAllInteractions();
    if (myPromtManager.interactions.length != 0) {
      let i = getUserIndex("Enter an index to replace response: ");
      let r = prompt("Give me a new response: ");
      myPromtManager.replaceResponse(i, r);
      console.log(`The response of Interaction ${i} has been updated!`);
    }
  }

  // Display all interactions and prompt the user for a number to delete an interaction
  else if (user === "4") {
    myPromtManager.showAllInteractions();
    if (myPromtManager.interactions.length != 0) {
      let i = getUserIndex("Enter an index to delete: ");
      myPromtManager.deleteInteraction(i);
      console.log(`Interaction ${i} has been deleted!`);
    }
  }

  // Repeat asking user for a number to display each mode
  user = userPrompt();

}

function userPrompt() {
  const scope = ["1", "2", "3", "4", "0"];
  console.log("1. Show all interactions.\n2. Add example interactions.\n3. Replace a response.\n4. Delete an interaction.\n0. Quit.");
  let result = prompt("Please enter a number: ");
  while (!scope.includes(result)) {
    console.log("Not valid input!\n1. Show all interactions.\n2. Add example interactions.\n3. Replace a response.\n4. Delete an interaction.\n0. Quit.");
    result = prompt("Please re-enter:");
  }
  return result;
}

function getUserIndex(promptString) {
  const inters = myPromtManager.interactions;
  let i = parseInt(prompt(promptString));
  while (isNaN(i) || i > inters.length || i < 0) {
    i = parseInt(prompt("Invalid! Re-enter a number to delete: "));
  }
  return i;
}
