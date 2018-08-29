import * as angular from "angular";
import { PhoneService } from "./phone.service";

export const CoreModule = angular
  .module("phonecat.core", [])
  .service("phoneService", PhoneService).name;
