

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //create counter
  this._counter = 0;
};

HashTable.prototype._resize = function (newLimit){
  //create a copy of _storage
  var oldStorage = this._storage;
  //create new _storage with new limit
  this._storage = LimitedArray(newLimit);
  //set limit to new limit
  this._limit = newLimit;
  //set the context
  var thisThis = this;
  //set counter to 0 so it wouldn't double the limit
  this._counter = 0;
  oldStorage.each(function(bucket) {
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        thisThis.insert(bucket[i][0], bucket[i][1]);
      }
    }
  });
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create bucket
  var bucket = this._storage.get(index);
  //check if bucket exists
  if (bucket) {
    //if yes, iterate bucket to check if key matches
    var inserted = false;
    for (var i = 0; i < bucket.length; i++) {
      //if matches then update value
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        inserted = true;
      }
    }
    if (!inserted){
      //if not then set value
      bucket.push([k, v]);
      //increment counter
      this._counter++;
    }
  } else {
    //if not bucket
    var bucket = [];
    //set tuple's key and value
    bucket.push([k, v]);
    this._storage.set(index, bucket);
    //increment counter
    this._counter++;
  }

  if (this._counter > (.75 * this._limit)) {
    this._resize(this._limit * 2);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create bucket
  var bucket = this._storage.get(index);
  //check if bucket exists
  if (bucket) {
    //if yes, iterate tuples
    for (var i = 0; i < bucket.length; i++) {
      //if tuple key matches k
      if (bucket[i][0] === k) {
        //return value
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create bucket
  var bucket = this._storage.get(index);
  //check if bucket exists
  if (bucket) {
    //if yes then iterate over bucket
    for (var i = 0; i < bucket.length; i++) {
      //if key matches k
      if (bucket[i][0] === k) {
        //remove tuple
        bucket.splice(i, 1);
        //decrement counter
        this._counter--;
        //check if counter is under 25%
        if (this._counter < (.25 * this._limit)){
          //if yes then halve the storage array with the resize func
          this._resize(this._limit / 2);
        }
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


