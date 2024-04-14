function total(a){
    return function (b){
        return function (c){
            return a + b + c
        }
    }
}

let res = total (3)(2)(5)
console.log(res)