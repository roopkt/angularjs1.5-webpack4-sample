import * as angular from "angular";
import * as ngRoute from "angular-route";
import { configure } from "./app.config";
import { CoreModule } from "../../src/app/core/core.module";
import { PhoneListModule } from "../../src/app/phone-list/phone-list.module";


export const PhonecatApp = angular
  .module("phonecatApp", [ngRoute, CoreModule, PhoneListModule])
  .config(configure).name;
  

  
