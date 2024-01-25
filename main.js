import PromptsManager from "./PromptsManager.js";

const myPromtManager = new PromptsManager();

myPromtManager.recordPrompt("Prompt Test 1", "Response Test 1");
myPromtManager.showAllInteractions();

myPromtManager.addDalleInteraction("Prompt Test 2", "https://upload.wikimedia.org/wikipedia/commons/6/6f/Northeastern_seal.svg", "Response Test 2");
myPromtManager.showAllDalles();