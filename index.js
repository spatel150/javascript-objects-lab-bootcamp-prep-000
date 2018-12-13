var recipes = {foo: 'bar'};

function updateObjectWithKeyAndValue(object, key, value){
      object[key] = value;
      return object;
}

let obj =updateObjectWithKeyAndValue(recipes, 'bar', 'foo');
console.log("obj", obj)