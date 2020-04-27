let heroList = document.getElementById("heroList")


let request = new XMLHttpRequest()

request.onload = function(){
    let result = JSON.parse(this.responseText)
    let liItems = result.Search.map((movie) => {
        return `<div class="card" style="width: 20rem;">
                <img src="${movie.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">${movie.Year}</p>
                <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-info" role="button">IMDB</a>
                </div>
                </div>
                </div>`
}) 
heroList.innerHTML = liItems.join(" ")
console.log(liItems)
}

request.open("GET", "http://www.omdbapi.com/?s=thor&apikey=c2e5fb12")
request.send()

