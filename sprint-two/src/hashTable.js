

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

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
    }
  }
  else{
    //if not bucket
    var bucket = [];
    //set tuple's key and value
    bucket.push([k, v]);
    this._storage.set(index, bucket);
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
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


