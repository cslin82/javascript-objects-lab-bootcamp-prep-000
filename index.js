var recipes = {
  
}

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, key, value);
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}

function deleteFromObjectByKey(object, key) {
  var newObj = object;
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
  
}

