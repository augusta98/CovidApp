app.directive('ngComment', function(){
    return{
        scope : {
            comment : '=',
        },
        restrict : 'E',
        templateUrl: '_comment.html'
    }
});

app.directive('ngTest', function(){
    return{
        template: '<div>salut<strong>{{username}} {{comments}}</strong><div ng-transclude></div></div>',
        restrict : 'A',
        transclude: true,
        scope : {
                comment : '@',
                username : '='
        }
    }
})