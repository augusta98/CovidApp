
app.controller('FormCtrl',function ($scope , filterFilter ,$http , $location){

    $scope.msg = "Formulaire de la prise des rendez-vous du vaccin de la coviD-19" 
    $scope.user = {
        firstname : '',
        lastname : '',
        email : '',
        phone : '',
        dateDebut : '',
        dateFin : '',
    }
    $scope.send = function(){
      console.log($scope.user)
      alert('First name :'+ $scope.user.firstname + '\n Last name : ' + $scope.user.lastname + ' \n Email adress :'
       +$scope.user.email + '\n Phone :' + $scope.user.phone  + '\n Adresse :' + $scope.user.adresse +'\n 1er Vaccin :' + $scope.user.dateDebut )
      var nam =  $scope.user.firstname;
      var preNom =$scope.user.lastname ;
      var email =$scope.user.email;
      var phone = $scope.user.phone;
      var adress = $scope.user.adress;
      var vac1 = $scope.user.dateDebut;
      var vac2 = $scope.user.dateFin;
      var detail = {
        'First name :': $scope.user.firstname + '\n Last name : ' + $scope.user.lastname + ' \n Email adress :'
        +$scope.user.email + '\n Phone :' + $scope.user.phone  + '\n Adresse :' + $scope.user.adresse +'\n 1er Vaccin :' + $scope.user.dateDebut
      }
    //   var detail ={
    //     "name" : nam,
    //     "password" : pass
    //     }
    //     console.log(nam + " and1 " + pass);
     $http({
       url : "/home",
       method : "post",
       data : detail,
       headers : {'Content-Type' : 'application/json'}
     })
    .then(function (response) {
       $location.path('/home');
       console.log( $location.path());
    }).catch(function (response) {
      console.error("error in posting");
    });
}
});

app.controller("MokaCtrl",function($scope){

    $scope.CentreNames =[
        {name1 : "What controller "},{name1 : "walk 130,ruelle "},{name1 : "9h00 a 15h30 "},
        
		{nom : "Méthodes du contrôleur"},
		{name2 : "Créer un contrôleur de base"},{name2 : "walk 130,ruelle "},{name2 : "9h00 a 15h30 "},
        
    ];
});

app.controller("QuatreCtrl",function($scope){

    $scope.CentreNames = [
        {
            name2: "liste des heritier"}, {name2 : "chanteur 132 r"},{name2 : "4h00 a 8h"}
    ]

});
app.controller("RoseHillCtrl",function($scope){

    $scope.CentreNames =[
        {name1 : "What controller "},
		{nom : "Méthodes du contrôleur"},
		{name : "Créer un contrôleur de base"}
        
    ];

    $scope.HeureCentres = [
    {heureCentre1 : "9h00 a 15h30"},
    {heureCentre3 : "Méthodes du contrôleur"},
    {heureCentre2 : "Créer un contrôleur de base"}
    
];
 $scope.AdressCentres = [
    {adressCentre1 : "walk 130,ruelle"},
    {heureCentre3 : "Méthodes du contrôleur"},
    {heureCentre2 : "Créer un contrôleur de base"}
    
]

});
app.controller("FlacCtrl",function($scope){

    $scope.CentreNames =[
        {name1 : "college boy sir gaetant"},
		{nom : "Méthodes du contrôleur"},
		{name : "Créer un contrôleur de base"}
        
    ];

    $scope.HeureCentres = [
    {heureCentre1 : "9h00 a 15h30"},
    {heureCentre2 : "Méthodes du contrôleur"},
    {heureCentre3 : "Créer un contrôleur de base"}
    
];
 $scope.AdressCentres = [
    {adressCentre1 : "walk 130,ruelle"},
    {heureCentre2 : "8h00 a 16h40"},
    {heureCentre3 : "14,sauva lane"}
    
]

});
app.controller("PortLouisCtrl",function($scope){

    $scope.CentreNames =[
        {name1 : "What controller "},
		{nom2: "8h30 a 15h10 "},
		{name : "Créer un contrôleur de base"}
        
    ];

    $scope.HeureCentres = [
    {heureCentre1 : "9h00 a 15h30"},
    {heureCentre3 : "Méthodes du contrôleur"},
    {heureCentre2 : "Créer un contrôleur de base"}
    
];
 $scope.AdressCentres = [
    {adressCentre1 : "walk 130,ruelle"},
    {heureCentre3 : "Méthodes du contrôleur"},
    {heureCentre2 : "Créer un contrôleur de base"}
    
]

});


