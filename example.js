/*
Binary tree and depth first search implementation
*/

// node
function Node(val) {
    this.value = val
    this.left = null
    this.right = null
}

// tree
function Tree() {
    this.treeRoot = null

    this.addNode = function(val) {
        // if root = null
        if (!this.treeRoot) {
            this.treeRoot = new Node(val)
        }else {
            let current = this.treeRoot
            let isPlaced = false
            while (!isPlaced) {
                // go left
                if (current.value>val) {
                    if (!current.left) {
                        current.left = new Node(val)
                        isPlaced = true
                    }else {
                        current = current.left
                    }
                }
                // go right
                if (current.value<val) {
                    if (!current.right) {
                        current.right = new Node(val)
                        isPlaced = true
                    }else {
                        current = current.right
                    }
                }
            }
        }
    }
}
/*
        _ 5 _
       4   _ 7 _
          6     8
*/
//tree setup 
const binaryTree = new Tree()
binaryTree.addNode(5)
binaryTree.addNode(7)
binaryTree.addNode(8)
binaryTree.addNode(6)
binaryTree.addNode(4)

// driver code for tree
//console.log(tree.treeRoot)


// depth first search algorithm
const visitedNodes = new Set()
let isFound = false

function DFS_Find (root, targetValue) {
    
    for (const child of getChild(root)) {
        if (child.childVal === targetValue) {
            isFound = true
        }
        if (!visitedNodes.has(child)) {
            if (child.direction=="left") {
                DFS_Find(root.left, targetValue, visitedNodes)
            }else {
                DFS_Find(root.right, targetValue, visitedNodes)
            }
        }
    }

    return isFound ? `Target value '${targetValue}' is found.` : `Can not find '${targetValue}'.`
}


// get child info of a node 
function getChild(node) {
    const childArr = []
    if (node.left) {
        childArr.push({direction:"left",childVal:node.left.value})
    }
    if (node.right) {
        childArr.push({direction:"right",childVal:node.right.value})
    }
    return childArr
}

// driver code
console.log(DFS_Find(binaryTree.treeRoot, 8))
