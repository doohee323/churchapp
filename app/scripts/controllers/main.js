'use strict';

angular.module('concordchurchApp').controller('MainCtrl', function($scope, $http) {
    $scope.items = [
    {'title':'aaaaaaaaaaaaaaaaaaaa', 'media':'http://localhost:9000/images/0.jpg'},
    {'title':'ccccccccccccccccccccc', 'media':'http://localhost:9000/images/1.jpg'},
    {'title':'eeeeeeeeeeeeeeeeeeeee', 'media':'http://localhost:9000/images/2.jpg'},
    {'title':'fffffffffffffffffffff', 'media':'http://localhost:9000/images/3.jpg'},
    {'title':'ggggggggggggggggggggg', 'media':'http://localhost:9000/images/4.jpg'},
    {'title':'hhhhhhhhhhhhhhhhhhhhh', 'media':'http://localhost:9000/images/5.jpg'}
    ]

});