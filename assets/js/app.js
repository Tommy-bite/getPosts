const btnPost = document.querySelector("#btn-post");
const postData = document.querySelector("#post-data");

const getPosts = async () => {
    let cantPosts = +prompt("Indique la cantidad de posts a traer de la base de datos");

    if(!isNaN(cantPosts)){
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            pintaHTML(data, cantPosts);
        } catch (error) {
            console.error(error);
        }
    }else{
        alert("Debe escribir un número válido, haga click en el bóton nuevamente");
    }
 
}

function pintaHTML(data, cantPosts){
    postData.innerHTML = "";
    data.forEach(element => {
        if(element.id <= cantPosts){
            postData.innerHTML += `
                <li>
                    <span class="fw-bold">${element.title}</span>
                    <p>${element.body}</p>
                </li>
            `
        }
    });
}

btnPost.addEventListener("click", getPosts)

