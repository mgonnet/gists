let fibogenerator = function* (){
    let fibo_i_1 = 1n
    let fibo_i_2 = 0n

    let fibo_i

    yield fibo_i_2
    yield fibo_i_1

    while(true){
        fibo_i = fibo_i_2 + fibo_i_1
        fibo_i_2 = fibo_i_1
        fibo_i_1 = fibo_i        

        yield fibo_i
    }
}

let fibotabla = fibogenerator()

setInterval(() => {
    document.querySelector('#fibo').innerHTML=fibotabla.next().value
}, 1000);
