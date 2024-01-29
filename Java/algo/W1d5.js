// ------------------SLL------------singly linked list
// Singly Linked List

// Blueprint of a node
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  // Blueprint of a singly linked list
  class SLL {
    constructor() {
      this.head = null;
    }
  
    isEmpty() {
    return this.head === null;
    }
    addToFront(node) {
        node.next=this.head;
        this.head=node;}
    addValueToFront(value) {
        var node = new Node(value);
        node.next=this.head;
        this.head=node;
        return this;
        }

// ---------read
read(){
    var runner=this.head;
    var count=0;
    while (runner != null){
        console.log(runner.value)
        count++;
        runner=runner.next;
    }
}
// ------------------contains data?
contains(value){
    var runner=this.head;
    while (runner){
        if (runner.value===value){
            return true;
        }
        runner=runner.next;
    }
}
// --------------------------remove from 
removeFromFront(){
    if (this.isEmpty()) return null;
    var removed=this.head;
    this.head=this.head.next;
    removed.next=null;
    return removed;
}
//-------------------addToBack
addToback(node){
    if (this.isEmpty()){
        this.head=node;
        return this;
    }
    var runner=this.head;
    while (runner.next != null){
        runner=runner.next;
    }
    runner.next=node;
}
//------------------------removeFromBack
removeFromBack(){
    if (this.isEmpty()){
        return null;
    }
    if (this.head.next===null){return this.head=null}

    var runner =this.head
    while (runner.next.next != null){
        runner=runner.next;
    }
    runner.next=null;
    return this
}
//---------printNthToLast
printNthToLast(){}

}
// ------------
var myCoolList= new SLL();

myCoolList.addValueToFront(11);
myCoolList.addValueToFront(100);
myCoolList.addValueToFront(33);
console.log(myCoolList)

myCoolList.read();
myCoolList.removeFromFront()
console.log(myCoolList)

