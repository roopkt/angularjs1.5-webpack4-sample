import { CoreModule } from "../core/core.module";
import * as angular from "angular";
import { PhoneListController } from "./phone-list.controller";
import { PhoneListDirective } from "./phone-list.directive";

export const PhoneListModule = angular
  .module("phonecat.phoneList", [CoreModule])
  .controller("phoneListController", PhoneListController)
  .directive("pcPhoneList", () => new PhoneListDirective()).name;
