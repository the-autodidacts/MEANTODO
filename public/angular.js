// public/angular.js
var todoApp = angular.module('todoApp', []);

function mainController($scope, $http) {
    $scope.formData = {};
    console.log("in main controller");

    // get all todos and show them
    $http.get('/weeklyTodos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


    $scope.createTodo = function() {
        $http.post('/weeklyTodos', $scope.formData)
            .success(function(data) {
                console.log(data);
                $scope.formData = {}; // clear the bind
                $scope.todos = data;
            })
            .error(function(data, status) {
                console.log('Error: ' + data);
                console.log(status);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/weeklyTodos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}
