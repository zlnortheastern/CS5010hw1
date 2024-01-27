export default class Interaction {
  constructor(prompt, response) {
    this.prompt = prompt;
    this.response = response;
  }

  show() {
    console.log(`PROMPT: ${this.prompt} HAS A RESPONSE: ${this.response}`);
  }

  getType() {
    return "Interaction";
  }

  replaceResponse(newResponse) {
    this.response = newResponse;
  }
}