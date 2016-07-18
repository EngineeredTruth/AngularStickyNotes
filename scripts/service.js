angular.module('app')
  .service('dataService', mainService);

  function mainService ($q) {
    this.addNote = function (note) {
      var existingEntries = JSON.parse(localStorage.getItem('allEntries')); //gets allEntries from localStorage then JSON parses into an array
      if(existingEntries === null){ //checks if there are any entries,
        existingEntries = []; //makes a empty array if
      }

      localStorage.setItem('last entry',JSON.stringify(note)); //saves the last entry to local storage
      existingEntries.push(note); //pushes our new note onto our array
      localStorage.setItem("allEntries", JSON.stringify(existingEntries)); //converts existingEntries back into a a JSON string, then sets it back onto localStorage
      console.log(localStorage.getItem(note));
    };

this.getNotes = function(){
  var deferred = $q.defer();

   deferred.resolve(JSON.parse(localStorage.getItem('allEntries')));
   
   return deferred.promise;
};

  }
