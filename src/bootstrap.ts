
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/app.less';

import {PhonecatApp} from './app/app.module';
import angular = require('angular');


angular.bootstrap(document, [PhonecatApp]);
