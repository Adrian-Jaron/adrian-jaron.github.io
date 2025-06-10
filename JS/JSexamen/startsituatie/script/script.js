// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
let movieList = document.getElementById("movielist");
let likedMovies = [];
let dislikedMovies = [];


const setup = () =>{

    likedMovies = loadLikedMovies();
    dislikedMovies = loadDislikedMovies();
    loadMovies(likedMovies);
    likebarMoviesRecoveren(likedMovies);

}

const loadLikedMovies = () =>{
    const opgeslagen = localStorage.getItem("likedMovies");
    return opgeslagen ? JSON.parse(opgeslagen ) : [];
}

const loadDislikedMovies = () =>{
    const opgeslagen = localStorage.getItem("dislikedMovies");
    return opgeslagen ? JSON.parse(opgeslagen ) : [];
}

const loadMovies = (likedMovies) =>{
    movies.forEach(movie =>{

        let id = movie.id;
        let title = movie.title;
        let description = movie.description;
        let image = movie.imageUrl;


        const movieButtons = document.createElement("div");
        const movieDiv = document.createElement("div");
        const movieTitle = document.createElement("p");
        const movieDescription = document.createElement("p");
        const movieImage = document.createElement("img");
        const likeButton = document.createElement("button");
        const dislikeButton = document.createElement("button");


        movieTitle.textContent = title;
        movieDescription.textContent = description;
        movieImage.src = image;

        movieDiv.classList.add("movie");
        movieTitle.classList.add("title");
        movieDescription.classList.add("description");
        movieImage.classList.add("image");


        likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i>';
        dislikeButton.innerHTML = '<i class="fas fa-thumbs-down"></i>';

        likeButton.style.color = 'gray';
        dislikeButton.style.color = 'gray';


        movieButtons.classList.add("buttons");

        likeButton.addEventListener("click", () =>{
            if(likeButton.style.color === 'gray' && dislikeButton.style.color === 'gray') {
                likeMovies(movie, likeButton, dislikeButton);
            }
            else if(likeButton.style.color === 'gray' && dislikeButton.style.color === 'red') {
                undislikeMovie(movie, likeButton, dislikeButton);
                likeMovies(movie, likeButton, dislikeButton);
            }
            else{
                unlikeMovie(movie, likeButton, dislikeButton);
            }
        })


        dislikeButton.addEventListener("click", () =>{
            if(dislikeButton.style.color === 'gray' && likeButton.style.color === 'gray') {
                dislikeMovies(movie, likeButton, dislikeButton);
            }
            else if(likeButton.style.color === 'green' && dislikeButton.style.color === 'gray') {
                unlikeMovie(movie, likeButton, dislikeButton);
                dislikeMovies(movie, likeButton, dislikeButton);
            }
            else{
                undislikeMovie(movie, likeButton, dislikeButton);
            }

        })

        movieButtons.appendChild(likeButton);
        movieButtons.appendChild(dislikeButton);

        movieButtons.style.display = "flex";
        movieButtons.style.flexDirection = "row";
        movieButtons.style.alignItems = "center";
        movieDiv.style.display = "flex";
        movieDiv.style.flexDirection = "column";
        movieDiv.style.alignItems = "flex-start";
        movieDiv.style.gap = "20px";

        movieDiv.append(movieTitle);
        movieDiv.append(movieButtons);
        movieDiv.append(movieImage);
        movieDiv.append(movieDescription);


        movieList.appendChild(movieDiv);
    });
}

const likedMoviesBewaren = () =>{

    localStorage.setItem("likedMovies", JSON.stringify(likedMovies));

}

const dislikedMoviesBewaren = () =>{

        localStorage.setItem("dislikedMovies", JSON.stringify(dislikedMovies));

}

const likeMovies = (movie, likeButton, dislikeButton) => {

    if(!likedMovies.includes(movie)){
        likedMovies.push(movie);
        console.log(likedMovies[0]);
        likedMovieToevoegenAandLijst(movie);
        likeButton.style.color = 'green';
        dislikeButton.style.color = 'gray';
        MovieVerwijderenVanDisliked(movie);
        likedMoviesBewaren();
    }
    else{
        console.log("al geliket!");

    }

    likeCounterVerhogen();



}


const likedMovieToevoegenAandLijst = (movie) => {
    let likebar = document.getElementById("likebar");
    likebar.style.visibility = "visible";

    let likebarmovies = document.getElementById("likebarmovies");



    if(!likedMovies.includes(movie)){
        let likedTitle = document.createElement("p");
        likedTitle.textContent = movie.title;
        likebarmovies.appendChild(likedTitle);

    }

    likebarmovies.style.visibility = "visible";


}

const likebarMoviesRecoveren = (likedMovies) => {
    let likebar = document.getElementById("likebar");
    let likebarmovies = document.getElementById("likebarmovies");

    likebarmovies.innerHTML = "";
    likedMovies.forEach((movie) => {
        let movieElement = document.createElement("div");
        movieElement.textContent = movie.title;
        likebarmovies.appendChild(movieElement);
     });

    likebar.style.visibility = "visible";

}





const dislikeMovies = (movie, likeButton, dislikeButton) => {
    dislikedMovies.push(movie);
    console.log(dislikedMovies[0]);
    movieVerwijderenVanLijst(movie);
    dislikedMoviesBewaren();

    likeButton.style.color = 'gray';
    dislikeButton.style.color = 'red';
    dislikeCounterVerhogen();


}

const movieVerwijderenVanLijst = (movie) => {
    let likebar = document.getElementById("likebar");
    let likebarmovies = document.getElementById("likebarmovies");
    let likedMoviesTitles = likebarmovies.getElementsByTagName('p');


    let index = 0;
    for(let i = 0; i < likedMoviesTitles.length; i++) {
        if(likedMoviesTitles[i].textContent === movie.title){

           likebarmovies.removeChild(likedMoviesTitles[i]);

        movieVerwijderenVanLiked(movie);
        break;
        }
    }
}

const MovieVerwijderenVanDisliked = (movie) => {
    const index = dislikedMovies.findIndex(m => m.title === movie.title);
    if(index != -1){
        dislikedMovies.splice(index, 1);
    }
}

const movieVerwijderenVanLiked = (movie) =>{
    const index = likedMovies.findIndex(m => m.title === movie.title);
    if(index != -1){
        likedMovies.splice(index, 1);
    }
}

const likeCounterVerhogen = () =>{
let likecounter = document.getElementById("like");
let aantal = parseInt(likecounter.textContent);
aantal++;
likecounter.textContent = aantal;
}

const dislikeCounterVerhogen = () =>{
    let dislikecounter = document.getElementById("dislike");
    let aantal = parseInt(dislikecounter.textContent);
    aantal++;
    dislikecounter.textContent = aantal;

}

const dislikeCounterVerminderen = () => {
    let dislikecounter = document.getElementById("dislike");
    let aantal = parseInt(dislikecounter.textContent);
    if(aantal > 0) {
        aantal--;
    }
    dislikecounter.textContent = aantal;
}

const likeCounterVerminderen = () =>{
    let likecounter = document.getElementById("like");
    let aantal = parseInt(likecounter.textContent);
    if(aantal > 0) {
        aantal--;
    }
    likecounter.textContent = aantal;
}



const unlikeMovie = (movie, likeButton, dislikeButton) => {
    likeButton.style.color = 'gray';
    movieVerwijderenVanLijst(movie);
    movieVerwijderenVanLiked(movie);
    likeCounterVerminderen();
    likedMoviesBewaren();
}

const undislikeMovie = (movie, likeButton, dislikeButton) => {
    dislikeButton.style.color = 'gray';
    MovieVerwijderenVanDisliked(movie);
    dislikeCounterVerminderen();
    dislikedMoviesBewaren();
}


window.addEventListener("load", setup);
