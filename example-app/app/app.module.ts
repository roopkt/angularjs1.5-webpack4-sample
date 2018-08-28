import * as angular from 'angular';
import * as ngRoute from 'angular-route';
import { configure } from './app.config';
import { PhonecatApp } from '../../module-app';
import { AppController } from './app.controller';
import { AppDirective } from './app.directive';

export const ExampleApp = angular
  .module('exampleApp', [ngRoute, PhonecatApp])
  .config(configure)
  .controller('appController', AppController)
  .directive('pcApp', () => new AppDirective()).name;
