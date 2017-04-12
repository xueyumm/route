/*定义路由*/
angular.module('myApp',['ng','ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/navl',{
                templateUrl:'template/1.html',
                // controller:'firstCtrl'
            })
            .when('/nav2',{
                templateUrl:'template/2.html',
                // controller:'secondCtrl'
            })
            .when('/nav3',{
                templateUrl:'template/3.html',
                controller:'thirdCtrl'
            })
            .when('/nav4',{
                templateUrl:'template/4.html',
            })
            .otherwise('/navl');
    })

    // .controller('secondCtrl',['$scope',function($scope){
    //
    // }])

    .controller('thirdCtrl',['$scope','$location',
        function($scope,$location){
        $scope.jump=function () {
            $location.path('/nav1');
        }
    }])