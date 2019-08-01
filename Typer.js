class Typer{
  constructor(htmlElement){
    this.htmlElement = htmlElement;
  };

  async type(str,timing){
    for(let char of str){
      this.htmlElement.innerHTML += char;
      //see sleep function at the bottom of Typer class
      await this.sleep(timing);
    }
  }

  async erase(timing){
    for(let char of this.htmlElement.innerHTML){
      this.htmlElement.innerHTML = this.htmlElement.innerHTML.substring(0, this.htmlElement.innerHTML.length - 1);
      await this.sleep(timing);
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
