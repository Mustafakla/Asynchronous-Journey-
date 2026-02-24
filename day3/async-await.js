
const mesaj = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Merhaba")
        }, 2000)
    })
}

async function mesajıGoster() {
    console.log("mesaj bekleniyor")

    const gelenMesaj = await mesaj()
    
    console.log("sonuc:",gelenMesaj)
}
mesajıGoster()



// /////////////////


const getMe = () => { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id: 1, name: "Mustafa"})
        }, 1000);
    })
}

const getFriends = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["ali","ayse"])
        }, 1000);
    })
}

async function profile() {
    try {
        console.log("bilgiler yükleniyor")

        const user = await getMe()
        console.log("kullanıcı alındı :", user.name)
        
        console.log(`${user.name} arkadas listesi yükleniyor...`)
        const friends = await getFriends(user.id)

        console.log("basarılı!")
        console.log("kullanıcı:" , user.name)
        console.log("arkadasları:", friends.join(","))
    } catch (error) {
        console.error("hata olustu",error)
    } 
}
profile()
