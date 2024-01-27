import Interaction from "./Interaction.js";

export default class DalleInteraction extends Interaction{
  constructor(prompt, image, response){
    super(prompt, response);
    this.image = image;
  }

  show(){
    console.log(`PROMPT TEXT: ${this.prompt} with IMAGE:${this.image} has a RESPONSE:${this.response}`);
  }

  getType(){
    return "DalleInteraction";
  }
}