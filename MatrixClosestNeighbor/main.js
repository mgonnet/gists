let worker = new Worker('./MatrixClosestNeighbor.js')

let promptResponse = (message) => {
  let div = document.createElement('div')
  div.innerHTML=message.data
  console.log(message.data)
  document.querySelector('body').appendChild(div)
}

worker.addEventListener('message', promptResponse, false)

worker.postMessage({ x: 100, y: 100, interestPoints: [{ x: 1, y: 1 }, { x: 50, y: 50 }] })
