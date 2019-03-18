
import movies from './api.js';




function gettingMovies() {

  movies.getMovies().then((movies) => {

    console.log('Here are all the movies:');

    $('button').toggleClass("hide");

    $('h1').toggleClass("hide");

    $('h3').toggleClass("hide");

    $('input').toggleClass("hide");



    let html = `<div class="row">`;

    movies.forEach(({title, rating, id, img, genre}) => {

      let stringID = id + "";

        html += `
        <div class="col-sm-6 col-3-md movies view overlay zoom p-0" data-toggle="modal" data-target="#exampleModalCenter">
            <span>ID: ${id}</span>           
            <img src="../${img}" alt="imgg" style="max-width: 100%; height: auto" class="m-0 p-0 img-fluid">
            <div class="mask flex-center rgba-red-strong">
            </div>
        </div>`;

      // html += "<div ";
      //
      // html += "class=\"col-sm-6 col-3-md movies\"";
      //
      // html += " style=\"background-image:";
      //
      // html += ` url(../${img})\"`;
      //
      // html += ">";
      //
      // html += `<p class="top-left">id#${id}</p>`;
      //
      // html += `<p class="title">${title}</p>`;
      //
      // html += `<p class="genre">${genre}</p>`;
      //
      // html += `<p class="rating">rating: ${rating}</p>`;
      //
      // html += "</div>";


    });

    $(".clean").html(html + "</div>");

  }).catch((error) => {

    alert('Oh no! Something went wrong.\nCheck the console for details.')

    console.log(error);

  });

}

gettingMovies();

$("#add").on("click", () => {

  let addTitle = $("#addTitle").val();

  let addGenre = $("#addGenre").val();

  let addRating = $("#addRating").val();

  alert(`The movie being added is:\n\nTitle: ${addTitle}\nGenre: ${addGenre}\nRating: ${addRating}`);


  movies.addMovie(addTitle, addRating, addGenre);

  
  $(".clean").html("<p id='image'><img src='https://i.gifer.com/SjyG.gif' alt='loading'></p>");

  $('button').toggleClass("hide");

  $('input').toggleClass("hide");

  $('h1').toggleClass("hide");

  $('h3').toggleClass("hide");

  gettingMovies();

});




$(`#delete`).on("click",  () => {

      let deleteID = prompt("Please enter the ID of the movie you want to delete.");

      movies.deletingMovie(deleteID);

      $(".clean").html("<p id='image'><img src='https://i.gifer.com/SjyG.gif' alt='loading'></p>");

      $('button').toggleClass("hide");

      $('input').toggleClass("hide");

      $('h1').toggleClass("hide");

      $('h3').toggleClass("hide");

      gettingMovies();


});

$(`#idToEdit`).on("keyup", () => {

  let editID = $("#idToEdit").val();

   console.log(movies.getMovies().then(function(data){

   console.log(data[editID - 1]);

   $("#addTitle").val(data[editID -1].title);

   $("#addGenre").val(data[editID -1].genre);

   $("#addRating").val(data[editID -1].rating);

   let img = data[editID-1].img;

   $("#edit").on("click", function (){

     movies.editMovie($("#addTitle").val(), $("#addGenre").val(), $("#addRating").val(), img, editID);

     $(".clean").html("<p id='image'><img src='https://i.gifer.com/SjyG.gif' alt='loading'></p>");

     $('button').toggleClass("hide");

     $('input').toggleClass("hide");

     $('h1').toggleClass("hide");

     $('h3').toggleClass("hide");

     gettingMovies();

   });

 }));

});



