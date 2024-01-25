import Interaction from "./Interaction.js";
import DalleInteraction from "./DalleInteraction.js";

export default class PromptsManager {
  interactions = [];
  dalleInteractions = [];

  // Abstraction
  showAllInteractions() {
    for(let i of this.interactions){
      i.show();
    }
  }

  showAllDalles(){
    for(let i of this.dalleInteractions){
      i.show();
    }
  }

  recordPrompt(prompt, response) {
    const i = new Interaction(prompt, response);
    this.interactions.push(i);
  }

  addDalleInteraction(text, image, response){
    const d = new DalleInteraction(text, image, response);
    this.dalleInteractions.push(d);
  }
}

