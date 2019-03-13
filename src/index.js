/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
   var length = preferences.length; 
  var count = 0;  
  for (var i = 0; i<length; i++) { 
      var Love1 = preferences[i] - 1;
        console.log(Love1);
      if (Love1 == i) continue;
      var Love2 = preferences[Love1] - 1;
      if (Love1 == Love2) continue;
      var Love3 = preferences[Love2] - 1;
      if (Love3 == Love2) continue;
      if (Love3 == i) {
          count++;
      }
   }
   return count / 3;
};
