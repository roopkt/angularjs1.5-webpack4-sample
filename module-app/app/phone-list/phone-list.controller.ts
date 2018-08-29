import { PhoneService, Phone } from '../core/phone.service';

export class PhoneListController implements ng.IController {
  phones: Phone[] = [];
  static $inject = ['$scope', 'phoneService'];
  constructor(public $scope: any, private phoneService: PhoneService) {}

  $onInit() {    this.phoneService.query().then(phones => (this.phones = phones));
  }  imageUrl(url) {    return require('../../../assets/images/phones/' + url);  }}
