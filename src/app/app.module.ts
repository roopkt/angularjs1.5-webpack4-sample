import * as angular from "angular";
import * as ngRoute from "angular-route";
import { configure } from "./app.config";
import { CoreModule } from "./core/core.module";
import { PhoneListModule } from "./phone-list/phone-list.module";
import { AppController } from "./app.controller";
import { AppDirective } from "./app.directive";

export const PhonecatApp = angular
  .module("phonecatApp", [ngRoute, CoreModule, PhoneListModule])
  .config(configure)
  .controller("appController", AppController)
  .directive("pcApp", () => new AppDirective()).name;

  
