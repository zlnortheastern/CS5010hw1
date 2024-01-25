import Interaction from "./Interaction.js";

export default class DalleInteraction extends Interaction{
  constructor(prompt, image, response){
    super(prompt, response);
    this.image = image;
  }

  show(){
    console.log(`PROMPT TEXT:\n\n${this.prompt}\n\nPROMPT IMAGE:\n\n${this.image}\n\nRESPONSE:\n\n${this.response}`);
  }
}