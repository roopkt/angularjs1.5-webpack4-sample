export interface Phone {
  name: string;
  snippet: string;
  images: string[];
}

export class PhoneService {
  static $inject = ['$http'];
  constructor(private $http: ng.IHttpService) {}
  query(): ng.IPromise<Phone[]> {
    return this.$http
      .get('phones/phones.json')
      .then((res: ng.IHttpPromiseCallbackArg<Phone[]>) => res.data);
  }
  get(id: string): ng.IPromise<Phone> {
    return this.$http
      .get(`phones/${id}.json`)
      .then((res: ng.IHttpPromiseCallbackArg<Phone>) => res.data);
  }
}
