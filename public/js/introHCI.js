'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	console.log("projectID = " + projectID);
	var url = $.get("https://lab6-acramer.herokuapp.com/project/"+ idNumber, callback);
	console.log(url);
	// /var htmlString = url.responseJSON[image]
	//var htmlString = $.get(url);
	//var htmlString = url.responseJSON.title + url.responseJSON.date + url.responseJSON.image + url.responseJSON.details;
	$(".project p").click(function(){
 	$("#" + projectID + " .details").html('<a href="#" class="thumbnail">' +
     '<p>' + url.responseJSON['title'] + '</p>' + '<img src="' + url.responseJSON['image'] + '" class="detailImage">' +
   
    '<p><small>' + url.responseJSON['date'] +
    '</small></p></a>' + '<p>' + url.responseJSON['summary'] + '</p>');

 	//url.responseJSON.title + url.responseJSON.date + url.responseJSON.image + url.responseJSON.summary
});

}

function addProject(result) {
  var projectHTML = '<a href="#" class="thumbnail">' +
    '<img src="' + result['image'] + '" class="img">' +
    '<p>' + result['title'] + '</p>' +
    '<p><small>' + result['date'] +
    '</small></p></a>';
}

function callback(result)
{
	console.log(result);
}
