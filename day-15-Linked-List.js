process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){
    class Node {
        constructor(data, next = null) {
            this.data = data,
            this.next = next
        }
    }

	this.insert=function(head,data){
		let newNode = new Node(data);
		// When head = null i.e. the list is empty, then head itself will point to the newNode.
		if (!this.head) {
		    this.head = newNode;
		    return this.head;
		}
		// Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
		let tail = this.head;
		while (tail.next !== null) {
		    tail = tail.next;
		}
		tail.next = newNode;
		return this.head;
    	};

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}
function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}		
