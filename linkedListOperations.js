class Node {
  constructor(element){
    this.element = element
    this.next=null
  }
}

class LinkedList{
  constructor(){
    this.head=null
    this.size=0
  }
    add(element){
      let node= new Node(element)
      console.log(node, 'node init')
      console.log(this.head, 'head now')
      let current;
      if(this.head === null)
        this.head = node
      else{
        current = this.head
        console.log(current, 'curr')
        while (current.next) { 
          current = current.next; 
      }
      console.log(node, 'node val')
      current.next = node; 
     
      }
      this.size++
    }
 
    
  }

function runLinkedListOperations(choice, value, position){
  var ll = new LinkedList()
  switch(choice) {
    case 'isEmpty':
      console.log(ll.isEmpty())
      break;
    case 'add':
      ll.add(value)
      ll.add(40)
      ll.add(50)
      break;
    case 'printList':
      console.log(ll.printList())
      break;
    case 'remove':
      console.log(ll.removeElement(value))
      break;
    case 'indexOf':
      console.log(ll.indexOf(value))
      break;
    case 'insert':
      console.log(ll.insertAt(value, position))
      break;
    case 'removeFrom':
      console.log(ll.removeFrom(position))
      break;    

    default:
      console.log("No choice give!!!Exiting")
  }
}

runLinkedListOperations('add',20)
// runLinkedListOperations('add',40)

