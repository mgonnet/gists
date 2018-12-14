let worker = new Worker('./MatrixClosestNeighbor.js')

let interestPoints = []

let promptResponse = (message) => {
  document.querySelector('body').setAttribute('style', 'background-color: blue')
  let div = document.createElement('div')
  div.innerHTML = message.data
  let body = document.querySelector('body')
  while (body.firstChild) {
    body.removeChild(body.firstChild).remove()
  }
  body.appendChild(div)
  document.querySelector('body').setAttribute('style', 'background-color: white')
}

worker.addEventListener('message', promptResponse, false)

let onclick = (event) => {
  document.querySelector('body').setAttribute('style', 'background-color: red')
  let target = event.target
  if (target.nodeName === 'TD') {
    let y = target.cellIndex
    let x = target.parentElement.rowIndex
    console.log(x, y)
    interestPoints.push({ x: x, y: y })
    let http = new XMLHttpRequest()
    http.open('POST', 'https://hooks.slack.com/services/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')
    http.send('{"text":"* hiciste click* ' + x + ' ' + y + ' "}')
    worker.postMessage({ x: 100, y: 100, interestPoints: interestPoints })
  }
}

document.querySelector('body').addEventListener('click', onclick)

worker.postMessage({ x: 100, y: 100, interestPoints: interestPoints })
