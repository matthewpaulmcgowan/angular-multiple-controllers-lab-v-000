function ContactController(){
  var vm = this;
  vm.name = "someone";
  vm.email = "email@email.com";
  vm.phone = "123";

  this.changeName = function(){
    vm.name = "else";
  };
};


angular
       .module("app")
       .controller("ContactController",ContactController)
