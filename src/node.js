class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		if(!this.left){
			this.left=node;
		}else if(!this.right){
			this.right=node;
		}
	}

	removeChild(node) {
		if(this.left===node){
			this.left.parent=null;
			this.left=null;
		}else if(this.right===node){
			this.right.parent=null;
			this.right=null;
		}else{
			alert('node is not a child');
		}
	}

	remove() {
		if(this.parentNode){
		var parent=this.parentNode;
		parent.appendChild(this);
		var child=this;
		child.parent.removeChild(child);
		}
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
