let worker = new Worker('./MatrixClosestNeighbor.js')

let promptResponse = (message) => {
  console.table(message.data)
}

worker.addEventListener('message', promptResponse, false)

worker.postMessage({ x: 2048, y: 2048, interestPoints: [{ x: 1, y: 1 }, { x: 1322, y: 459 }] })
