var app = angular.module('app', ["ui.bootstrap"]);

app.controller('MainCtrl', function($scope) {
  
  $scope.pairs = [
    {
      driver : {
        name : 'Mark V',
        phone : '111',
        thumb : 'Lamborghini.png'
      },
      vehicle : {
        model : 'BMW',
        regno : 'SGD345Y',
        thumb : 'Lamborghini.png'
      } 
    }, {
      driver : {
        name : 'Joan Q',
        phone : '111',
        thumb : 'Lamborghini.png'
      },
      vehicle : {
        model : 'AAA',
        regno : 'SGD335X',
        thumb : 'Lamborghini.png'
      } 
    }, {
      driver : {
        name : 'Shawn H',
        phone : '111',
        thumb : 'Lamborghini.png'
      },
      vehicle : {
        model : 'AAA',
        regno : 'SGD325Y',
        thumb : 'Lamborghini.png'
      } 
    }, {
      driver : {
        name : 'Patrick W',
        phone : '111',
        thumb : 'Lamborghini.png'
      },
      vehicle : {
        model : 'AAA',
        regno : 'SGD324I',
        thumb : 'Lamborghini.png'
      } 
    }, {
      driver : {
        name : 'Ryan J',
        phone : '111',
        thumb : 'Lamborghini.png'
      },
      vehicle : {
        model : 'AAA',
        regno : 'SGD554I',
        thumb : 'Lamborghini.png'
      } 
    }
  ];
});

app.directive("searchablePair", function($timeout) {
	return {
		templateUrl: 'searchablePair.html',
		restrict: 'AE',
		scope: {
			allItems: '=',
		},
		link: function(scope, element, attrs) {
			element.bind('click', function (e) {
				e.stopPropagation();
			});

			scope.itemSelected = function() {
				console.log(this.$index);

			};

			scope.updateSelectedItem = function(value) {
				if(value != undefined){
					return value;
				}
				return "Select Driver to Pair";
			};
		}
	}
});
