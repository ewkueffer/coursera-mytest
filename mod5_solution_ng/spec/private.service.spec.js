describe('private', function () {

  var privateService;
  // var $httpBackend;
  // var ApiBasePath;
  var testEmail = 'bob@yyy.com';
  var bobUserData = { firstname: 'Bob',
                        lastname: 'Smith',
                        email: 'bob@yyy.com',
                        phone: '556661111'};

  var aliceUserData = { firstname: 'Alice',
                        lastname: 'Smith',
                        email: 'alice@yyy.com',
                        phone: '556669999'};

  beforeEach(function () {
    module('private');

    inject(function ($injector) {
      privateService = $injector.get('PrivateService');
      // $httpBackend = $injector.get('$httpBackend');
      // ApiBasePath = $injector.get('ApiBasePath');
    });
  });

  it('should return user data', function() {
    var userData;
    privateService.setUserData(bobUserData);
    userData = privateService.getUserData();
    expect(userData.firstname).toEqual('Bob');
  });

  it('should return user data Alice', function() {
    var userData;
    privateService.setUserData(aliceUserData);
    userData = privateService.getUserData(aliceUserData.email);
    expect(userData.firstname).toEqual('Alice');
    privateService.setUserData(bobUserData);
    userData = privateService.getUserData(testEmail);
    expect(userData.firstname).toEqual('Bob');
    userData = privateService.getUserData(aliceUserData.email);
    expect(userData.firstname).toEqual('Bob');
    expect(userData.phone).toEqual('556661111');
  });


});
