let worker = new Worker('./MatrixClosestNeighbor.js')

let interestPoints = []

let promptResponse = (message) => {
  let div = document.createElement('div')
  div.innerHTML=message.data
  let body = document.querySelector('body')
  while (body.firstChild) {
	body.removeChild(body.firstChild).remove()
  }
  body.appendChild(div)
}

worker.addEventListener('message', promptResponse, false)

let onclick = (event) => {
	let target = event.target
	if(target.nodeName==="TD"){
		let y = target.cellIndex
		let x = target.parentElement.rowIndex
		console.log(x,y)
		interestPoints.push({x: x, y: y})
		worker.postMessage({ x: 100, y: 100, interestPoints: interestPoints })
	}
}

document.querySelector('body').addEventListener('click', onclick)

worker.postMessage({ x: 100, y: 100, interestPoints: interestPoints })


