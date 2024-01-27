import Interaction from "./Interaction.js";

export default class DalleInteraction extends Interaction {
  constructor(prompt, image, response) {
    super(prompt, response);
    this.image = image;
  }

  show() {
    console.log(`PROMPT TEXT: ${this.prompt} WITH IMAGE: ${this.image} HAS A RESPONSE: ${this.response}`);
  }

  getType() {
    return "DalleInteraction";
  }
}