//Consulta a la API
const getPosts = async () =>{
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let posts = await response.json();
        let list = ``;

        for(const post of posts){
            let content = createPost(post);
            list+=content;
        }

        document.getElementById("post-data").innerHTML = list;

    }catch(error){ 
        console.log("Error consultando la información");
    }
}

//Resultado de la Request en HTML
const createPost = (post) => {
    let content = `
    <ul>
        <li> 
            <h4>${post.title}</h4>
             <p>${post.body}</p>
        </li>
    </ul>` ;

    return content;
}