app.controller ('CommentsCtrl', function($scope, Post , $routeParams,){
    $scope.loading = true;
    $scope.newComment = {};

   Post.get($routeParams.id).then(function(post){
      $scope.loading = false;
      $scope.title = post.name;
      $scope.comments = post.comments;
  }, function(msg){
      alert(msg);
  })
  $scope.addComment = function(){
      $scope.comments.push($scope.newComment);
      post.add($scope.newComment).then(function(){

      }, function(){
          alert('message pas sauvegarder');
      })
      $scope.newComment = {};
  }
  $scope.selectComment = function(){
      alert('salut')
  }
});
 app.controller("",function(){

 });