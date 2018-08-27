import * as angular from "angular";
import { provide } from "ng-metadata/core";
import { PhoneService } from "./phone.service";

export const CoreModule = angular
  .module("phonecat.core", [])
  .service("phoneService", PhoneService).name;
