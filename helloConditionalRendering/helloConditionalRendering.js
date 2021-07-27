import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
  isVisible = false;
  showData = "Show Data";
  name;
  handleClick(){
    if(this.isVisible){
      this.showData = "Show Data";
      return this.isVisible = false;
    }
    this.isVisible = true;
    this.showData = "Hide Data";
  }

  changeHandler(event){
    this.name = event.target.value;
  }

  get helloMethod(){
    return this.name === 'hello';
  }
}