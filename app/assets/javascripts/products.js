// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on('ready page:load', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = @('#search').val();

    $.getScript('/products?search=' + searchValue);

  });
});


// function display_search_results() {
// //readyState === 4 means that the asynchronous request completed successfully
//      if (this.readyState === 4) {
//        console.log(this);
//        document.getElementById('products').innerHTML = this.responseText;
//      }
//    }
//   //  grabbing that element
//    var form = document.getElementById('search-form');
//    // listening to the form for an event in this case a submit event
//    form.addEventListener('submit', function(event) {
//      //first thing to do is prevent the full default when request is sent
//      //don't want browser to submit the form...i'll do it myself
//      event.preventDefault();
//      //grabbing the search box value that user entered
//      var searchValue = document.getElementById('search').value;
//
//      var xhr = new XMLHttpRequest();  // XHR this object allows me to send and recieve requests to the server
//      //set up the properties of the object above
//      xhr.onload = display_search_results; //.onload is a callback function
//      xhr.open('GET', '/products?search=' + searchValue, true); //sending a get request...the true at the end is to make it asynchronous
//      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
//      xhr.send();
//    });
// });
//
// //below in .ajax refactors the code above
// // $.ajax {
// //   type: 'GET',
// //   url: $(this).attr('action'),
// //   data: { search: $('#search').val() },
// //   dataType: 'script', //tells the server the type of data you want returned...can be html, json etc.
// //   success: function(data) {
// //     $('#products').html(data);
// //   }
// // }
