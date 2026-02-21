
function getFamily(url) {
    fetch(url)  
        .then((response) => {
            return response.json()
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}
getFamily("family.json")