var person ={
    name:"Jonas",
    favFood:"🍕",
    age:28,
};

// ------------------SLL------------singly linked list
class SLL{
    constructor(){
        this.head=null;
    }
    isEmpty(){
        return this.head===null;
    }
    addToFront(node){
    //     if (isEmpty()){
    //         this.head=node
    //     }else{
    //         node.next=this.head;
    //         this.head=node;

    // }
    node.next=this.head;
    this.head=node;}
}
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
var myFirstSll= new SLL()
var  n1=new Node(11);
var  n2=new Node(22);
var  n3=new Node(33);
console.log(myFirstSll.isEmpty())
