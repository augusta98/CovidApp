app.controller("CentreCtrl",function($scope, $http){
    
        $scope.centre = {};
        $scope.buttonText = "submit";
    
        $scope.$on('$viewContentLoaded', function() {
            console.log("Recuperation des centres");
            $scope.getListCentre();
            
        });
        
		$scope.getListCentre = function(){
			console.log("API liste des centres")
			$http.get("http://localhost:8080/centre/liste").then(
			  function successCallback(response) {
				  console.log("Reponse de l'API: ", response);
				  $scope.centre = response.data;
                  console.log(response.data)
                  console.log($scope.centre)

			  },
			  function errorCallback(response) {
				console.log("Unable to perform get request");
			  }
			);
		}
		
        $scope.saveCentres = function(){
            // $scope.addComment = function()
            {
                $scope.centre.push($scope.newCentre);
                centre.add($scope.newCentre).then(function(){
          
                }, function(){
                    alert('message pas sauvegarder');
                })
                $scope.newCentre = {};
            }
			/**
             * 
            if($scope.employee.id == undefined){
                Employee.update($scope,employee,function(){
                    $scope.employees = Employee.query();
                    $scope.employees = {};
                     $scope.buttonText = "submit";
                });
            }else{
                Employee.save($scope,employee,function(){
                    $scope.employees = Employee.query();
                    $scope.employees = {};
                });
              }
			  **/
		}
			
        $scope.updateCentreInit = function(centres){
            $scope.buttonText = "Update";
            //$scope.employee = employee;
        }
			
        $scope.deleteCentres = function(centres){
            // employee.$delete({id : employee.id},function(){
            //     $scope.employees = Employee.query();
            // });
        }
        //}

});

