var recipes = {foo: 'bar'};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
      object[key] = value;
      return object;
}

function updateObjectWithKeyAndValue(object, key, value){
      var newObj = Object.assign({}, object);
      newObj[key] = value;
      return newObj;
}

function deleteFromObjectByKey(object, key) {
  var newObj2 = Object.assign({}, object);
  delete newObj2[key]
  return newObj2
}

function destructivelyDeleteFromObjectByKey(object, key) {
 delete object[key];
 return object;
}

// let obj =updateObjectWithKeyAndValue(recipes, 'bar', 'foo');
// console.log("obj", obj)