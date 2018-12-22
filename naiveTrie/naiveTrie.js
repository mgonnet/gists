var Trie = function(){
    this._count=0
}

Trie.addToTrie = trie => palabra => {
    trie._count++

    let [x,...xs] = palabra
    if(!x){
        x='_'
    }

    if(!trie[x]){
        trie[x] = new Trie()        
    }

    if(x==='_'){
        return ++trie[x]._count
    }
    
    return Trie.addToTrie(trie[x])(xs)
}

Trie.findOnTrie = trie => palabra => {
    for(let i=0; i<palabra.length; i++){
        trie = trie[palabra[i]]
        if(!trie){
            return null
        }
    }
    return trie
}

Trie.createSuffixTrie = palabra => {
    let trie = new Trie()

    for(let i=-1; i>=-palabra.length; i--){
        Trie.addToTrie(trie)(palabra.slice(i))
    }

    return trie
}

let myTrie = new Trie()

let constructTrie = (source) => {
    let http = new XMLHttpRequest()
    http.open('GET', source, false)
    http.send()

    myTrie = Trie.createSuffixTrie(http.response)

    return myTrie
}

onmessage = (message) => {
    if(message.data.sourceTextPath){
        postMessage(constructTrie(message.data.sourceTextPath))
    }else if(message.data.findWord){
        postMessage(Trie.findOnTrie(myTrie)(message.data.findWord))
    }
}