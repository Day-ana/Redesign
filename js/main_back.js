/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {



	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();
	// alert(0);


	$("#ctaAlert").on("click", function(e){

		alert("new");
		return false;

	});

	$("#open-button").click();
	// var ContentArray = ["work", "play" ,"about", "contact"]

	// console.log(ContentArray);

	var vid = document.getElementById("bgvid");
	var pauseButton = document.querySelector("#polina button");
	function vidFade() {
	  vid.classList.add("stopfade");
	}

	vid.addEventListener('ended', function()
	{
	// only functional if "loop" is removed 
	vid.pause();
	// to capture IE10
	vidFade();
	}); 

	pauseButton.addEventListener("click", function() {
	  vid.classList.toggle("stopfade");
	  if (vid.paused) {
	    vid.play();
	    pauseButton.innerHTML = "Pause";
	  } else {
	    vid.pause();
	    pauseButton.innerHTML = "Paused";
	  }
	})

	var trainsOepration = 8;
	// var trainNumber =1;

	// while (trainNumber <= trainsOepration){

	// 	console.log("train #" + trainNumber + " is runnin.");
	// 	trainNumber++;

	// };

	// for (var trainNumer =5; trainNumer > trainsOepration; trainNumer--){

	// 	console.log("train #" + trainNumber + " is running.");
	// 	// trainNumber--;
	// };

	// var value1 = 1;
	// var value2 = 9;
	// if( value1 < value2){

	// 	console.log(value1 + " is less than " + value2);

	// }
	//  else
	//  {
	//  	console.log(value1 + " is greater than or = to " + value2);
	//  }

	// var diff = function(a,b){

	// 	return a*a - b*b;

	// };
	// console.log(diff);

	// var greeting = function(){
	// 	alert("Thanks for visiting hell!\n" +" Hope you have a hell of a day. ");

	// };



	// var greeting;

	// var newCustomer = true;

	// if( newCustomer ){

	// 	greeting = function(){
	// 		alert("Thanks for visiting hell!\n" +" Hope you have a hell of a day. ");
	// 	};

	// }else{
	// 	greeting = function(){
	// 		alert("Welcome back to hell!\n" +" I feel for you. ");
	// 	};
	// }



	// closeTerminal( greeting );

	// 	function closeTerminal( message ){

	// 		message();

	// };
	// console.log((10 * 3) / ( 2 + 3 * 6));
	// console.log("this is a stingf lakdjl lkdjald l".length);

	var bookArray = ["Great Expecation", "The Remain of the Day", "Peter Pan"];

	var myBox = {height:6, width: 8, length: 10, volume:480,
	material: "carboard",
	contents: bookArray,
	"# of Books": 0};
	
	myBox.width = 60;

	myBox.volume = myBox.length * myBox.width * myBox.height;
	// myBox.contents.push("The Hell Book");
	
	myBox.weight = 50;
	myBox.destination1 = "Miami";

	function addBook(box, name, writer)
	{
		
		box["# of Books"]++;
		box["book" + box["# of Books"]] = {title: name, author: writer};

	}

	addBook(myBox, "Blissful Existence", "Chaotic Writer");
	addBook(myBox, "Blissful Existence2", "Dayana");
	addBook(myBox, "Lets go Dogs", "Braddock Bites");


	// console.log(myBox.width);
	// console.log(myBox.volume);
	// console.log(myBox.contents);
	console.log(myBox["destination1"]);

	console.log(myBox.book1.title);







})();


