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
    let link = `http://www.omdbapi.com/?i=${this.value}&apikey=48f53faf`
    console.log(link)
    $.get(link,function(movies){
        console.log(movies.Title)
    })
          

    
})
    
    

















//THIS WORKS

/*
  $.get(moviesUrl,function(movies){   
     $(movies.Search).each(function(index,movie){
         
         if (clickedMovie.html()=== movie.Title){
             console.log(movie.Title)
             let bigPictureHolder = $('<div>')
             let bigImage = $('<img>')
             bigImage.attr("src",movie.Poster).addClass("bigImgStyle")
             bigPictureHolder.append(bigImage)
             $('#movieDisplayBox').append(bigPictureHolder)
             
         } 
         }
     )})


*/










// everything here
//movie.Year, movie.imdbID, movie.Poster
//  $(movies.Search).each(function(index,movie){
//        let box = $('<div>')
//        let li = $('<li>')
//        let img = $('<img>')
//        img.attr("src",movie.Poster).addClass("imgStyle")
//        li.html(movie.Title).addClass("movieStyle")
//        box.addClass("holder").append(img,li)
//        $('#movieList').append(box)
//    })
//    

