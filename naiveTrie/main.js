let worker = new Worker('./naiveTrie.js')

let workerHandler = (message) => {
    console.log(message.data)
}

worker.addEventListener('message', workerHandler, false)

worker.postMessage({sourceTextPath: 'text.txt'})