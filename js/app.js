let moviesUrl = 'http://www.omdbapi.com/?s=batman&apikey=48f53faf'


$.get(moviesUrl,function(movies){
   
    $(movies.Search).each(function(index,movie){
        let box = $('<div>')
        let li = $('<li>')
        let img = $('<img>')
        let button = $('<button>')
        button.attr("value",movie.imdbID)
        button.html(movie.Title).addClass("buttonStyle")
        img.attr("src",movie.Poster).addClass("imgStyle")
        li.html(button).addClass("movieStyle")
        box.addClass("holder").append(img,li)
        $('#movieList').append(box)
    })
    
})

$('#movieHolderBox').on('click','button',function(){
    $('#movieDisplayBox').html('')
    $('#dataDisplayBox').html('')
    let link = `http://www.omdbapi.com/?i=${this.value}&apikey=48f53faf`
    
    $.get(link,function(movies){
        let rating = `<p><strong>Rated:</strong>  ${movies.Rated} </p>`
        let plot = `<p><strong>Plot:</strong>  ${movies.Plot} </p>`
        let release = `<p><strong>Released on:</strong>  ${movies.Released} </p>`    
        let bigPictureHolder = $('<div>')
        let title = `<h2>${movies.Title}</h2>`
        let bigImage = $('<img>')
        bigImage.attr("src",movies.Poster).addClass("bigImgStyle")
        bigPictureHolder.append(title,bigImage)
        $('#movieDisplayBox').append(bigPictureHolder)
        $('#dataDisplayBox').append(rating,release,plot)
    })
          

    
})
    
    