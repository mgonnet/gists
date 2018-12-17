let fibogenerator = function* (){
    let fibo_i_1 = 1
    let fibo_i_2 = 0

    let fibo_i

    yield fibo_i_2
    yield fibo_i_1

    while(true){
        fibo_i = fibo_i_2 + fibo_i_1
        fibo_i_1 = fibo_i
        fibo_i_2 = fibo_i_1

        yield fibo_i
    }
}

let fibotabla = fibogenerator()

setInterval(() => {
    document.querySelector('#fibo').innerHTML=fibotabla.next().value
}, 1000);