let lijst = document.getElementById("movielist");
let likeCount = 0;
let dislikeCount = 0;
let likeBar = document.getElementById("likebar");

let likedMovies = [];
let dislikedMovies = [];

const setup = () => {
    const liked = localStorage.getItem("likedMovies");
    const disliked = localStorage.getItem("dislikedMovies");


    likedMovies = liked ? JSON.parse(liked) : [];
    dislikedMovies = disliked ? JSON.parse(disliked) : [];

    likeCount = likedMovies.length;
    dislikeCount = dislikedMovies.length;

    document.getElementById("like").textContent = likeCount;
    document.getElementById("dislike").textContent = dislikeCount;

    loadMovies();
    movieListVullen();
};


const loadMovies = () => {
    movies.forEach((movie) => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        const movieTitleDiv = document.createElement("div");
        movieTitleDiv.classList.add("title");
        movieTitleDiv.textContent = movie.title;

        let img = document.createElement("img");
        img.src = movie.imageUrl;
        img.classList.add("image");

        const movieDescription = document.createElement("div");
        movieDescription.classList.add("description");
        movieDescription.textContent = movie.description;

        const movieButtonsDiv = document.createElement("div");
        movieButtonsDiv.classList.add("buttons");

        let likeButton = document.createElement("button");
        let dislikeButton = document.createElement("button");

        likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i>';
        dislikeButton.innerHTML = '<i class="fas fa-thumbs-down"></i>';

        const likePart = document.createElement("div");
        likePart.appendChild(likeButton);

        const dislikePart = document.createElement("div");
        dislikePart.appendChild(dislikeButton);

        movieButtonsDiv.appendChild(likePart);
        movieButtonsDiv.appendChild(dislikePart);

        movieButtonsDiv.style.display = "flex";
        likePart.style.display = "flex";
        likePart.style.flexDirection = "row";
        likePart.style.alignItems = "center";

        dislikePart.style.display = "flex";
        dislikePart.style.flexDirection = "row";
        dislikePart.style.alignItems = "center";
        movieButtonsDiv.style.gap = "20px";

        likeButton.addEventListener('click', () => {
            const isLiked = likeButton.classList.contains('liked');
            if (!isLiked) {
                likeMovie(movie);
                unDislike(movie);
            } else {
                unLike(movie);
            }
        });

        dislikeButton.addEventListener('click', () => {
            const isDisliked = dislikeButton.classList.contains('disliked');
            if (!isDisliked) {
                dislikeMovie(movie);
                unLike(movie);
            } else {
                unDislike(movie);
            }
        });


        const likeMovie = (movie) => {
            if (!likedMovies.includes(movie)) {
                likedMovies.push(movie);
                likeCount = likedMovies.length;
                document.getElementById("like").textContent = likeCount;
            }
            localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
            localStorage.setItem("dislikedMovies", JSON.stringify(dislikedMovies));

            likeButton.classList.add('liked');
            dislikeButton.classList.remove('disliked');
            movieListVullen();
        };

        const dislikeMovie = (movie) => {
            if (!dislikedMovies.includes(movie)) {
                dislikedMovies.push(movie);
                const likeIndex = likedMovies.indexOf(movie);
                if (likeIndex !== -1) likedMovies.splice(likeIndex, 1);
                dislikeCount = dislikedMovies.length;
                likeCount = likedMovies.length;
                document.getElementById("dislike").textContent = dislikeCount;
                document.getElementById("like").textContent = likeCount;
            }

            localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
            localStorage.setItem("dislikedMovies", JSON.stringify(dislikedMovies));

            dislikeButton.classList.add('disliked');
            likeButton.classList.remove('liked');
            movieListVullen();
        };


        const unLike = (movie) => {
            likeButton.classList.remove('liked');
            const index = likedMovies.indexOf(movie);
            if (index !== -1) {
                likedMovies.splice(index, 1);
                likeCount = likedMovies.length;
                document.getElementById("like").textContent = likeCount;
                movieListVullen();
            }

            localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
            localStorage.setItem("dislikedMovies", JSON.stringify(dislikedMovies));

        };

        const unDislike = (movie) => {
            dislikeButton.classList.remove('disliked');
            const index = dislikedMovies.indexOf(movie);
            if(index !== -1){
                dislikedMovies.splice(index, 1);
                dislikeCount = dislikedMovies.length;
                document.getElementById("dislike").textContent = dislikeCount;
                movieListVullen();
            }

            localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
            localStorage.setItem("dislikedMovies", JSON.stringify(dislikedMovies));

        };

        movieDiv.appendChild(movieTitleDiv);
        movieDiv.appendChild(movieButtonsDiv);
        movieDiv.appendChild(img);
        movieDiv.appendChild(movieDescription);

        document.getElementById("movielist").appendChild(movieDiv);
    });
};

const movieListVullen = () => {
    const likeBarMovies = document.getElementById("likebarmovies");

    likeBarMovies.innerHTML = "";

    if (likedMovies.length > 0) {
        likeBarMovies.style.visibility = "visible";
    } else {
        likeBarMovies.style.visibility = "hidden";
    }

    likedMovies.forEach((movie) => {
        const movieElement = document.createElement("div");
        movieElement.textContent = movie.title;
        likeBarMovies.appendChild(movieElement);
    });
};

window.addEventListener("load", setup);
