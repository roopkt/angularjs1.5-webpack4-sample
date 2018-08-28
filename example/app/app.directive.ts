export class AppDirective {
    controllerAs: string;
    controller: string;
    template: string;
  
    constructor() {
      this.controllerAs = "vm";
      this.controller = "appController";
      this.template = require("./app.html");
    }
  }
  