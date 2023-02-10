
    var weekD = 7;


    var dayCal=prompt("Enter a number?");
    find(dayCal);
	function find(dayCal) {
		var year, week, day;


		year=parseInt(dayCal/365.25);
		week=parseInt((dayCal%365.25)/weekD);
		day=(dayCal%365.25)%weekD;

		alert("Years = "+year+"\n"+"Weeks = "+week+"\n"+"Days = "+day);

		document.getElementById("y").innerHTML=(year);
		document.getElementById("w").innerHTML=(week);
		document.getElementById("d").innerHTML=(day);

	}