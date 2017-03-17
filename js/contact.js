angular.module("MyApp", ["firebase"])
  .controller("MyController", function($scope, $firebaseArray) {
      var ref = firebase.database().ref("emails");
      $scope.messages = $firebaseArray(ref);

      $scope.add = function() {
        var msg = {
          email: $("#email").val(),
          message: $("#message").val()
        }
        $scope.messages.$add(msg);
        $("#email").attr("placeholder", "example123@gmail.com").val("").focus().blur();
        $("#message").attr("placeholder", "Hello!").val("").focus().blur();
      }
  })
