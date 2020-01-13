function humanReadable(seconds) {
// figure out the conversion from seconds to hours, minutes
// the left over are seconds
// push to a string so that : are in between each H, M, S 

if (seconds < 360000) {	
	var hours, minutes;
console.log ( (seconds % 3600) % 60 )	
	hours = Math.floor(seconds / 3600);
	minutes = Math.floor( (seconds % 3600) / 60);
	seconds = Math.floor( (seconds % 3600) % 60); 

	
	if (seconds.toString().length === 1 ) {
		seconds = "0" + seconds;
	}
	
	if (minutes.toString().length === 1 ) {
		minutes = "0" + minutes;
	}
	
	if (hours.toString().length === 1 ) {
		hours = "0" + hours;
	}
	
	return hours + ":" + minutes + ":" + seconds;
	
	} 
}

humanReadable(359999);