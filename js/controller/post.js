app.controller('PostsCtrl', function($scope, Post ){
    $scope.loading = true;
    $scope.posts =  Post.find().then(function(posts){
        $scope.loading = false;
        $scope.posts = posts;
    }, function(msg){
        alert (msg);
    })
})