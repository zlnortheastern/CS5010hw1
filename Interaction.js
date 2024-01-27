export default class Interaction {
  constructor(prompt, response) {
    this.prompt = prompt;
    this.response = response;
  }

  show() {
    console.log(`PROMPT:${this.prompt} has a RESPONSE:${this.response}`);
  }

  getType() {
    return "Interaction";
  }
}