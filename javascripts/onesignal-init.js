window.OneSignal = window.OneSignal || [];
var initOptions = {
  appId: "d6929160-35b3-40a8-91ef-5a3a17168c93",
  subdomainName: '',
  autoRegister: true,
  notifyButton: {
    enable: true
  }
};

OneSignal.push(function() {
  OneSignal.init(initOptions);
});
