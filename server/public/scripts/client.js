$(document).ready(readyNow);

function readyNow() {
    //need button on click
    $(`#submit-btn`).on('click', submitGet);
    //need to update p tag text when page loads
    $(`.welcome`).append(`<p>The page has loaded</p>`);
}; //end readyNow

//button function
//need ajax GET request
function submitGet() {
    console.log('button clicked');
    $.ajax
}; //end submitGet