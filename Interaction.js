export default class Interaction{
  constructor(prompt, response){
    this.prompt = prompt;
    this.response = response;
  }
  show(){
    console.log(`PROMPT:\n\n${this.prompt}\n\nRESPONSE:\n\n${this.response}`);
  }
}