var recipes = {foo: 'bar'};

<<<<<<< HEAD
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
=======
function updateObjectWithKeyAndValue(object, key, value){
>>>>>>> 4dbf0baf3aa3f5416d4411a32692117b8c9955e4
      object[key] = value;
      return object;
}

<<<<<<< HEAD
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
=======
let obj =updateObjectWithKeyAndValue(recipes, 'bar', 'foo');
console.log("obj", obj)
>>>>>>> 4dbf0baf3aa3f5416d4411a32692117b8c9955e4
