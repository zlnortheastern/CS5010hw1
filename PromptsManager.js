import Interaction from "./Interaction.js";
import DalleInteraction from "./DalleInteraction.js";

export default class PromptsManager {
  interactions = [];

  // Method to display all interactions
  showAllInteractions() {
    if (this.interactions.length === 0) {
      console.log("No interaction record!");
      return;
    }
    for (let i = 0; i < this.interactions.length; i++) {
      console.log(`${i + 1}. ${this.interactions[i].getType()}`);
      this.interactions[i].show();
    }
  }

  // Method to delete an interaction
  deleteInteraction(i) {
    this.interactions.splice(i - 1, 1);
  }

  // (New feature) Method to replace the response by imput of interaction index
  replaceResponse(i, newResponse) {
    this.interactions[i - 1].replaceResponse(newResponse);
  }

  // Method to add an interaction into interactions
  addInteraction(prompt, response) {
    const i = new Interaction(prompt, response);
    this.interactions.push(i);
  }

  //Method to add a dalleinteraction into interactions
  addDalleInteraction(text, image = new URL(), response) {
    const d = new DalleInteraction(text, image, response);
    this.interactions.push(d);
  }
}

