var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var temp = storage[0];
    delete storage[0];
    for(var key in storage){
      storage[key-1] = storage[key];
    }
    delete storage[someInstance.size()-1];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
