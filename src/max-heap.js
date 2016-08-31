const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
	}

	push(data, priority) {
			this.insertNode(new Node(data,priority));
			this.shiftNodeUp(new Node(data,priority));	
	}

	pop() {
		
	}

	detachRoot() {
		var fRoot=this.root;
		this.parentNodes[0].data=this.root.data; //this.root.parentNodes[0].data
		this.parentNodes[0].priority=this.root.priority; //this.root.parentNodes[0].priority
		this.root=null;
		return fRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
			var root=detached.right;
			var left=detached.left;
			this.root=root;
			this.root.appendChild(left);
			this.parentNodes[0]=root;
			this.parentNodes[1]=left;
	}

	size() {
			var result;
			if(!this.root){
				result=0;
			}
			else if(!this.root.left){
				result=11;
			}
			else if(!this.root.right){
				result=2;
			}
			else if(!this.root.left.left){
				result=3;
			}
			return result;

	}

	isEmpty() {		
			var result;
			if(!this.root){
				result=true;
			}
			else {
				result=false;
			}
			
			return result;	
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
	}

	insertNode(node) {
					if(!this.root){
						this.root=node;
						this.parentNodes[0]=node;
					}
					else if(!this.root.left){
						this.root.left=node;
						this.parentNodes[1]=node;
					}
					else if(!this.root.right){
						this.root.right=node;
						this.parentNodes[0]=this.parentNodes[1];
						this.parentNodes[1]=node;
					}
					else if(!this.root.left.left){
						this.root.left.left=node;
						this.parentNodes[2]=node;
					}
					else if(!this.root.left.right){
						this.root.left.right=node;
						this.parentNodes[0]=this.parentNodes[1];
						this.parentNodes[1]=this.parentNodes[2];
						this.parentNodes[2]=node;
					}
					else if(!this.root.right.left){
						this.root.right.left=node;
						this.parentNodes[3]=node;
					}
					else if(!this.root.right.right){
						this.root.right.right=node;
						this.parentNodes[0]=this.parentNodes[1];
						this.parentNodes[1]=this.parentNodes[2];
						this.parentNodes[2]=this.parentNodes[3];
						this.parentNodes[3]=node;
					}

	/*	if(!this.root){
				this.root=node;
			}
			else if(!this.root.left){
				this.root.left=node;
			}
			else if(!this.root.right){
				this.root.right=node;
			}
			else if(!this.root.left.left){
				this.root.left.left=node;
			}
			else if(!this.root.left.right){
				this.root.left.right=node;
			}
			var count=0;
			if(!this.parentNodes[0]){
				this.parentNodes[0]=node;
			}
			else if(!this.parentNodes[1]){
				this.parentNodes[1]=node;
			}
			else if(!this.parentNodes[2]&&count===0){
				this.parentNodes[0]=this.parentNodes[1];
				this.parentNodes[1]=node;
				count=1;
			}
			else if(!this.parentNodes[2]&&count===1){
				this.parentNodes[2]=node;
				count=0;
			}
			else if(!this.parentNodes[3]&&count===0){
				this.parentNodes[0]=this.parentNodes[1];
				this.parentNodes[1]=this.parentNodes[2];
				this.parentNodes[2]=node;
				count=1;
			}
			else if(!this.parentNodes[3]&&count===1){
				this.parentNodes[3]=node;
				count=0;
			}
			else if(this.parentNodes[3]&&count===0){
				this.parentNodes[0]= this.parentNodes[1];
				this.parentNodes[1]= this.parentNodes[2];
				this.parentNodes[2]= this.parentNodes[3];
				this.parentNodes[3]=node;
			}*/
	
	}

	shiftNodeUp(node) {
	/*	if (node.parent){
				node.swapWithParent();
				this.shiftNodeUp(node);
			}
			this.parentNodes[0]=this.root;
			this.parentNodes[1]=this.root.right;
			this.parentNodes[2]=this.root.left;
			
			this.parentNodes[0]=this.root.left.left;
			this.parentNodes[1]=this.root.right;
			this.parentNodes[2]=this.root;*/
	}
		
		
	

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
