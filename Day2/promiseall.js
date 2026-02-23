const p1 = Promise.resolve("sıcaklık bilgisi");
const p2 = Promise.resolve("rüzgar bilgisi");
const p3 = new Promise(res => setTimeout(() => res("nem bilgisi"), 1000));

Promise.all([p1, p2, p3])
    .then(sonuclar => console.log(sonuclar)) 
    .catch(hata => console.log(hata));