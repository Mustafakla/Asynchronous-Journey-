async function postlariGetir() {
    try {
        console.log("Veriler çekiliyor...");

        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        
        const posts = await response.json();

        const ciftPostlar = posts.filter(post => post.id % 2 === 0);

        const liste = document.getElementById("post-liste");

        ciftPostlar.forEach(post => {
            const li = document.createElement("li");
            li.textContent = `ID: ${post.id} - ${post.title}`;
            liste.appendChild(li);
        });
    } catch (error) {
        console.error("hata oluştu:", error);
    }
}

postlariGetir();
