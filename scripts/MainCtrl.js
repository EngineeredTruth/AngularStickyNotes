angular.module('app')
    .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, dataService) {
    $scope.saveNote = function(newNote){
      dataService.addNote(newNote);
    };

    function getNotes(){
      dataService.getNotes().then(function(response){
        $scope.notes = response;
        console.log($scope.notes);
      });
    }

    getNotes();

    // $scope.clear = localStorage.clear();
}
