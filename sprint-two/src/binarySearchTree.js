var BinarySearchTree = function(value) {
  //first create a new object that'll be the tree
  var binaryTree = {};
  //create a value property for the object
  binaryTree.value = value;
  //create right pointer with the value null
  binaryTree.right = null;
  //create left pointer with the value null
  binaryTree.left = null;

  //create a insert function method
  binaryTree.insert = function(value) {
    //if node value smaller than value
    if (value < this.value) {
      //check if there isn't left node
      if (this.left === null) {
        //if there's not then assign left value to new obj
        this.left = BinarySearchTree(value);
      } else {
        //else run insert function on left node
        this.left.insert(value);
      }
    }
    //if node value larger than value
    if (value > this.value) {
      //check if there is right node
      if (this.right === null) {
        //if there's not then assign right value to new obj
        this.right = BinarySearchTree(value);
      } else {
        //else run insert function on right node
        this.right.insert(value);
      }
    }
  };
  //create a contains function method
  binaryTree.contains = function(value) {
    //check if the current node has the value
    if (value === this.value) {
      //if yes, then return true;
      return true;
    }
    //if the right and left objects are null,
    if (this.right === null && this.left === null) {
      //return false;
      return false;
    }
    //if value is smaller than current node
    if (value < this.value) {
      //then run contains function on the left property
      return this.left.contains(value);
    }
    //if value is bigger than current node
    if (value > this.value) {
      //then run contains function on the right property
      return this.right.contains(value);
    }
    return false;
  };
  //create a depthFirstLog() function method
  binaryTree.depthFirstLog = function(cb) {
    //run the callback function on the current node's value
    cb(this.value);
    //check if it has a left kid
    if (this.left) {
      //run depthFirstLog on left kid
      this.left.depthFirstLog(cb);
    }
    //check if it has a right kid
    if (this.right) {
      //run depthFirstLog on right kid
      this.right.depthFirstLog(cb);
    }
  };

  return binaryTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
