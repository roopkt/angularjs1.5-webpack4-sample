import { PhoneService } from './phone.service';

describe('PhoneService', () => {
  const $httpMock = {
    get(url: string) {
      return {
        then() {},
      };
    },
  };

  let phoneSvc: PhoneService;

  beforeEach(() => {
    spyOn($httpMock, 'get').and.callThrough();
    phoneSvc = new PhoneService($httpMock as any);
  });

  it(`should check the existence of PhoneService`, () => {
    expect(phoneSvc).toBeDefined();
  });

  it(`should call $http.get on query`, () => {
    phoneSvc.query();
    expect($httpMock.get).toHaveBeenCalledWith('phones/phones.json');
  });

  it(`should call $http.get on get`, () => {
    phoneSvc.get('1');
    expect($httpMock.get).toHaveBeenCalledWith('phones/1.json');
  });
});
