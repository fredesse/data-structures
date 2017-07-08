

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //create counter
  this._counter = 0;
};

HashTable.prototype._resize = function(newLimit){
  //update limit with newLimit
  //create new limited array with updated limit
  //iterate through buckets of old _storage array
    //iterate through tuples of each bucket
      //insert tuples into new array
  //update _storage with new array
}

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create bucket
  var bucket = this._storage.get(index);
  //check if bucket exists
  if(bucket) {
    //if yes, iterate bucket to check if key matches
    var inserted = false;
    for(var i = 0; i < bucket.length; i++) {
      //if matches then update value
      if(bucket[i][0] === k) {
        bucket[i][1] = v;
        inserted = true;
      }
    }
    if(!inserted){
      //if not then set value
      bucket.push([k, v]);
      //increment counter
      //check if counter is over 75%
        //if yes then double the size of storage array with the resize func
    }
  }
  else{
    //if not bucket
    var bucket = [];
    //set tuple's key and value
    bucket.push([k, v]);
    this._storage.set(index, bucket);
    //increment counter
      //check if counter is over 75%
        //if yes then double the size of storage array with the resize func
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create bucket
  var bucket = this._storage.get(index);
  //check if bucket exists
  if(bucket) {
      //if yes, iterate tuples
    for(var i = 0; i < bucket.length; i++) {
      //if tuple key matches k
      if(bucket[i][0] === k) {
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
  if(bucket) {
    //if yes then iterate over bucket
    for(var i = 0; i < bucket.length; i++) {
      //if key matches k
      if(bucket[i][0] === k) {
        //remove tuple
        bucket.splice(i, 1);
        //decrement counter
        //check if counter is under 25%
          //if yes then halve the storage array with the resize func
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


