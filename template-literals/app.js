
let News = document.getElementById("news")

let articlesLi = news.articles.map(function(article){
    // console.log(article.title)
    // console.log(article.description)
    // console.log(article.url)
    // console.log(article.urlToImage)
    // console.log(article.publishedAt)
    let liItem = 
                `<li> 

                <b>${article.title}</b>
                <p>${article.description}</p>
                <a href = ${article.url}>
                <img class="imgs" src =${article.urlToImage} >
                </a>
                <p>${article.content}</p>
                <p>Published: ${article.publishedAt}</p>

                </li>`
    return liItem
})

News.innerHTML = articlesLi.join(' ')
console.log(articlesLi)