app.factory('Post', function($http, $q, $timeout){
                  
    var factory ={
         posts : false,
          find  :  function(){
              var defferd = $q.defer();
              if(factory.posts !== false){
                  defferd.resolve(factory.posts);
              }else{
                 $http.get('posts.json')
                 .success(function(data, status){
                     factory.posts =  data;
                     defferd.resolve(factory.posts)
                 }).error (function(data, status){
                     defferd.reject('impossible de se recuperer les informations');
                 });
              }
              return defferd.promise;
         },
         
       get : function(id){
         var defferd = $q.defer();
          var post = {};
          var posts = factory.find().then(function(poats){
             angular.forEach(factory.posts, function(value, key){
                     if( value.id ==  id){
                        post = value
            }
          });
          defferd.resolve(post);
         },function(msg){
             defferd.reject(msg)
         })
         return defferd.promise;
     },
     add: function(comment){
         var deferred = $q.defer();
         //.....
         defferd.resolve();
         return defferd.promise;
     }
 };
 return factory;
})