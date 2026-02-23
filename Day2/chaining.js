fetch("family.json")
    .then((response) => {
        if (!response.ok) throw new Error("Dosya yuklenemedi");
        return response.json(); 
    })
    .then((data) => {
        console.log("Tum Liste:", data);
        return data[0];
    })
    .then((person) => {
        console.log("Secilen Kisi:", person.firstname);
        return person.firstname.toUpperCase(); 
    })
    .then((kisi) => {
        console.log("Sonuc:", "Hos geldin " + kisi);
    })
    .catch((error) => console.log("Hata olustu:", error));
