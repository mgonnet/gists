var matrixClosestNeighbor = function(x,y,neighbors){
	let matrix = Array(x).fill().map(()=>Array(y).fill(-1));
	let q = [...neighbors];
	while(q.length>0){		
		let node = q.shift();		
		if(matrix[node.x][node.y]===-1){
			let jumps = (typeof node.jumps === 'undefined' ? 0 : node.jumps);	
			matrix[node.x][node.y] = jumps;
			jumps=jumps+1;

			if(node.x+1<x && matrix[node.x+1][node.y]===-1){
				q.push({x: node.x+1, y: node.y, jumps: jumps});
			}
			if(node.x-1>=0 && matrix[node.x-1][node.y]===-1){
				q.push({x: node.x-1, y: node.y, jumps: jumps});
			}
			if(node.y+1<y && matrix[node.x][node.y+1]===-1){
				q.push({x: node.x, y: node.y+1, jumps: jumps});
			}
			if(node.y-1>=0 && matrix[node.x][node.y-1]===-1){
				q.push({x: node.x, y: node.y-1, jumps: jumps});
			}
		}
		

	}

	return matrix;
}

console.time();
var result = matrixClosestNeighbor(2048,2048,[{x:1,y:1},{x:1322,y:459}]);
console.timeEnd();