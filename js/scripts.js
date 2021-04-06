
//Business LOgic

function Ticket(movieTime, movieAge, viewerAge) { //builds object with values #3
  this.movieAge = movieAge;
  this.viewerAge = viewerAge;
  this.movieTime = movieTime;
}

Ticket.prototype.ticketPrice = function () { //calc ticket price using method on object return price #5

  let myPrice = this.movieTime + this.movieAge + this.viewerAge;
  return myPrice;
}


//User Logic

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();

    const convertMovieTime = parseInt($("#movie-time").val()); //gathering values from userForm #1
    const convertMovieAge = parseInt($("#movie-age").val());
    const convertViewerAge = parseInt($("#viewer-age").val());

    let moviePrice = new Ticket(convertMovieTime, convertMovieAge, convertViewerAge) //calling constructor and passing values gathered #2
    $("#output").text(`Your movie will start at ${$("#movie-time option:selected").text()} and cost $${moviePrice.ticketPrice()}.00`); //call ticket price after object construction #4
  })
})