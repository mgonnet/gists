let ws

function create(){
  ws = new WebSocket('ws://umpire-chess.herokuapp.com:80')
  ws.onopen = () => {
    ws.onmessage = (a) => document.querySelector('#result').innerHTML += a.data + "\n"

    /** @type {HTMLInputElement} */
    let userNameNode = document.querySelector('#userName')
    /** @type {HTMLInputElement} */
    let lobbyNameNode = document.querySelector('#lobbyName')

    ws.send(JSON.stringify(['REGISTER', {name: userNameNode.value}]))
    ws.send(JSON.stringify(['CREATE-LOBBY', {name: lobbyNameNode.value}]))
  }  
}

function join(){
  ws = new WebSocket('ws://umpire-chess.herokuapp.com:80')
  ws.onopen = () => {
    ws.onmessage = (a) => document.querySelector('#result').innerHTML += a.data + "\n"

    /** @type {HTMLInputElement} */
    let userNameNode = document.querySelector('#userName')
    /** @type {HTMLInputElement} */
    let lobbyNameNode = document.querySelector('#lobbyName')

    ws.send(JSON.stringify(['REGISTER', {name: userNameNode.value}]))
    ws.send(JSON.stringify(['JOIN-LOBBY', {name: lobbyNameNode.value}]))
  } 
}

function start(){
  ws.send(JSON.stringify(['START-GAME', {}]))
}