export class PhoneListDirective {
  controllerAs: string;
  controller: string;
  template: string;

  constructor() {
    this.controllerAs = "vm";
    this.controller = "phoneListController";
    this.template = require("./phone-list.html");
  }
}
