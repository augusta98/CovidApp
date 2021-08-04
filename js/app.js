var app = angular.module('MyApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{ templateUrl : 'home.html', controller : 'PostsCtrl' })
    .when('/comments/:id',{templateUrl: 'comments.html', controller : 'CommentsCtrl'} )
    .when('/template',{templateUrl : './js/template/dashboard.html'})
    .when('/tables',{templateUrl : './js/template/tables.html', controller : 'GeneralCtrl'})
    .when('/rendez-vous',{templateUrl : 'rendez-vous.html', controller : 'GeneralCtrl'})
    .when('/rendez-vous',{templateUrl:'rendez-vous.html' , controller : 'FormCtrl'})
    .when('/centreCovid',{templateUrl:'cntreVac.html' })
    .when('/centreCovidRosHill',{templateUrl:'roseHi.html' })
    .when('/faireUnDon',{templateUrl:'faireUnDon.html' })
    // .when('/centreCovidFlac',{templateUrl:'Flac.html' })
    .when('/centreCovidQtreBrnes',{templateUrl:'contact.html' })
    .when('/detailsInfo',{templateUrl:'details.html' })
    // .when('/Essaie',{templateUrl:'essaie.html' })
    .otherwise({redirectTo : '/'});

})