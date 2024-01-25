import Interaction from "./Interaction.js";

export default class DalleInteraction extends Interaction{
  constructor(prompt, image, response){
    super(prompt, response);
    this.image = image;
  }

  show(){
    console.log(`PROMPT TEXT:\n${this.prompt}\nPROMPT IMAGE:\n${this.image}\nRESPONSE:\n${this.response}`);
  }
}