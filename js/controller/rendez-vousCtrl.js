app.controller("GeneralCtrl",function($scope, $http){
    
    //GeneralController.$inject = ['$scope','Employee'];
    //function GeneralController($scope, Employee){
       // $scope.employees = Employee.query();
        $scope.employees = {};
        $scope.buttonText = "submit";
    
        $scope.$on('$viewContentLoaded', function() {
            console.log("Recuperation des employes");
            $scope.getListEmployee();
            
        });
        
		$scope.getListEmployee = function(){
			console.log("API liste employee")
			$http.get("http://localhost:8080/employee/liste").then(
			  function successCallback(response) {
				  console.log("Reponse de l'API: ", response);
				  $scope.employees = response.data;
                  console.log(response.data)
                  console.log($scope.employees)

			  },
			  function errorCallback(response) {
				console.log("Unable to perform get request");
			  }
			);
		}
		
        $scope.saveEmployee = function(){
            // $scope.addComment = function()
            {
                $scope.employee.push($scope.newEmployee);
                employee.add($scope.newEmployee).then(function(){
          
                }, function(){
                    alert('message pas sauvegarder');
                })
                $scope.newEmployee = {};
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
			
        $scope.updateEmployeeInit = function(employee){
            $scope.buttonText = "Update";
            //$scope.employee = employee;
        }
			
        $scope.deleteEmployee = function(employee){
            // employee.$delete({id : employee.id},function(){
            //     $scope.employees = Employee.query();
            // });
        }
        //}

});

app.controller("CentreCtrl",function($scope, $http){
    
    //GeneralController.$inject = ['$scope','Employee'];
    //function GeneralController($scope, Employee){
       // $scope.employees = Employee.query();
        $scope.centres = {};
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
				  $scope.centres = response.data;
                  console.log(response.data)
                  console.log($scope.centres)

			  },
			  function errorCallback(response) {
				console.log("Unable to perform get request");
			  }
			);
		}
		
        $scope.saveCentres = function(){
             $scope.addComment = function()
            {
                $scope.centres.push($scope.newCentre);
                centres.add($scope.newCentre).then(function(){
          
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

