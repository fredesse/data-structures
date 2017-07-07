var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, node) {
  node = node || this;
  //check if parent has target
  if(node.value === target){
    //if yes then return true
    return true;
  }
  //if not then go over the children
  for(var i = 0; i < node.children.length; i++){
    //check if child has target
    if(this.contains(target, node.children[i])){
      return true;
    }
  }

  return false;
  };

/*
 * Complexity: What is the time complexity of the above functions?
 */

