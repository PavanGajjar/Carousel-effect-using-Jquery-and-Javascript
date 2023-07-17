"use strict";

const FADE_DISTANCE = 205;

$(document).ready( () => {
	
	$("small").text($("small").text().replace("YourName", "Pavan Gajjar"));
	$("small").text($("small").text().replace("Student Number Here", "8890300"));

	const slider = $("#image_list");                     // slider = ul element
	let leftProperty = 0;
	let newLeftProperty = 0;
	
	// the click event handler for the right button						
	$("#right_button").click( () => { 
		// get value of current left property
		leftProperty = parseInt(slider.css("left"));
		
		// determine new value of left property
		if (leftProperty - 300 <= -900) {
			newLeftProperty = 0; }
		else {
			newLeftProperty = leftProperty - 300; 
		}
		
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);
	});  // end click
	
	// the click event handler for the left button
	$("#left_button").click( () => {
		// get value of current right property
		leftProperty = parseInt(slider.css("left"));
		
		// determine new value of left property
		if (leftProperty < 0) {
			newLeftProperty = leftProperty + 300;
		} else {
			newLeftProperty = -600;
		}
		
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);				
	});  // end click
	
	$("#image_list a img").click((event) => {
		event.preventDefault();

		let clickedImgSrc = event.target.src.replace(event.target.baseURI, ""); // remove base url from the string and get only image path
		if (clickedImgSrc != $("#image").attr("src")) {

			$("#image").animate({ opacity: 0, marginLeft: `-=${FADE_DISTANCE}` }, 1000, () => {
				$("#image").attr("src", clickedImgSrc); // set src to main image
				$("#image").css("margin-left", `+=${FADE_DISTANCE*2}`); // set margin manually for animation
				$("#image").animate({ opacity: 1, marginLeft: `-=${FADE_DISTANCE}` }, 1000); // set animation
			});
		}
	});
	
}); // end ready