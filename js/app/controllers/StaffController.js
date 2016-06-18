function StaffController(){
  this.name = "Yo-Yo";
  this.email = "ma@yo-yo";
  this.phone = "43";
}



angular
        .module("app")
        .controller("StaffController", StaffController);
