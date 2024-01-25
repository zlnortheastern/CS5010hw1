export default class Interaction{
  constructor(prompt, response){
    this.prompt = prompt;
    this.response = response;
  }
  show(){
    console.log(`PROMPT:\n${this.prompt}\nRESPONSE:\n${this.response}`);
  }
}