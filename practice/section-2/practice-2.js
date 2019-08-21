'use strict';

function countSameElements(collection) {
  var result = [];
  var map = new Map();
  for (var i=0;i<collectionA.length;i++){
    if(collectionA[i].search('-') != -1){
      map.set(collectionA[i].charAt(0),collectionA[i].charAt(2));
    }
    else if (map.get(collectionA[i])==null){
      map.set(collectionA[i],1);
    }else{
      map.set(collectionA[i],map.get(collectionA[i])+1);
    }
  }
  //console.log(map);
  map.forEach(function(key,value){
    result.push({key:value,count:key})
  });
  console.log(result);
  return result;
}
