const API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMG = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movie_box= document.querySelector("#movie-box");

const getMovies = async(url)=>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    showMovie(data);
}
getMovies(API);

const showMovie = (data)=>{
    movie_box.innerHTML="";
    data.results.forEach(
        (results) => {
        const imgPath = results.poster_path == null ? "img/image-missing.png" : IMG + results.poster_path;
        
        console.log(imgPath);

        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML =`
                 <img src="${imgPath}" alt="img1" >
                <div class="overlay">
                    <div class="title">
                        <h2>${results.original_title}</h2>
                        <span>${results.vote_average}</span>
                    </div>
                    <h3>Overview</h3>
                    <p>${results.overview}</p>
                </div>
        `;
        movie_box.appendChild(box);
        }

    )
    }
    document.querySelector("#search").addEventListener("keyup", function(event){
        if(event.target.value !=""){
            getMovies(SEARCHAPI + event.target.value);
        }
        else{
            getMovies(API);
        }
    })
            
