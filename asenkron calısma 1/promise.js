

// 1. örnegim 

let check1 = true 

const promise1 = new Promise((resolve,rejected)=>{
    if(check1){
        resolve("basarılı")
    }
    else{
        rejected("basarısız")
    }
})
console.log(promise1)


// 2.örnegim

let check = true

function promise2() {
    return new Promise((resolve,rejected)=>{
        if(check){
            resolve("Promise Başarılı")
        }
        else {
            rejected("promise başarısız")
        }
    })
}

promise2()

.then((response) => console.log(response) )

.catch((error) => console.log(error))

.finally(() => console.log("her zaman calısır"))


// 3.örnegim

// promise + XMLHTTPREQUEST 

function family(url){
    return new Promise((resolve,rejected)=>{
        const xhr = new XMLHttpRequest()
        try {
            xhr.addEventListener("readystatechange",()=>{
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText))
                }
            })
        } catch (error) {
            rejected(error)
        }
        xhr.open("GET",url)
        xhr.send()
    })
}
family("family.json")
.then((data)=> console.log(data))
.catch((error)=>console.log(error))