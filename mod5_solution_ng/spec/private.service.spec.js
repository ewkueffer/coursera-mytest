xdescribe('private', function () {

  var privateService;
  // var $httpBackend;
  // var ApiBasePath;
  var testEmail = 'bob@yyy.com';
  var aliceUserData = { firstName: 'Alice',
                        lastName: 'Smith',
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
    userData = privateService.getUserData(testEmail);
    expect(userData.firstName).toEqual('Bob');
  });

  it('should return user data Alice', function() {
    var userData;
    privateService.setUserData(aliceUserData);
    userData = privateService.getUserData(aliceUserData.email);
    expect(userData.firstName).toEqual('Alice');
    userData = privateService.getUserData(testEmail);
    expect(userData.firstName).toEqual('Bob');

  });


});
