angular.module('timeLine_app', []) 

	.controller('mainCtrl', function() {


		this.timeLineData = [
			{
				//date of the event
				date: {		
					y: 1993,	//year
					m: 8,		//month
					d: 1,		//day
				},
				info: "my first timeline marker",
				place: "",

				//returns the position for which the dot should placed along the timeline
				getleft() { return calcD(this.date.y, this.date.m, this.date.d) } 
			},

			{
				date: {
					y: 2000,	
					m: 9,
					d: 1,
				},
				info: "Moved to QQQ",
				place: "",
				getleft() { return calcD(this.date.y, this.date.m, this.date.d) },
			},

			{
				date: {
					y: 2006,
					m: 3,
					d: 1,
				},
				info: "Graduated from XXX",
				place: "Germany",
				getleft() { return calcD(this.date.y, this.date.m, this.date.d) },

			},

			{
				date: {
					y: 2008,
					m: 5,
					d: 1,
				},
				info: "Went to school ZZZ",
				place: "London - England",
				getleft() { return calcD(this.date.y, this.date.m, this.date.d) },

			},


			{
				date: {
					y: 2012,
					m: 9,
					d: 1,
				},
				info: "Travelled to YYY",
				place: "Europe",
				getleft() { return calcD(this.date.y, this.date.m, this.date.d) },
			},



			//this will be the last marker in the timeline signifiying the present date
			{
				date: {
					y: new Date().getFullYear(),
					m: new Date().getMonth(),
					d: new Date().getDay()
				},
				info: "Presently living in",
				place: "...",
				getleft() { return calcD(this.date.y, this.date.m, this.date.d) },
			}
		];

		

		/** 
		caculates the numbers of days from today's date, and any given date 
		y: the year of the event, format yyyy (ie: 2012)
		m: the month of the event, where january  = 0, and december = 11
		d: the day of the event

		return: A value  between 0 and 100
		IMPORTANT: please chage timeLineStartDate to specify when your time line should begin
		*/
		function calcD(y,m,d) {

			var msPerDay = 86400.0*1000; //miliseconds per day

			var targetDate = new Date(y,m,d).getTime()/msPerDay; 	//desired date obj in seconds
			var timeLineEndDate = new Date().getTime()/msPerDay;  		 //todays date in seconds from january 1 1970
			var timeLineStartDate = new Date(1993,09,1).getTime()/msPerDay;  // date for which the timeline begins

			
			var daysSinceBeginning = Math.floor( timeLineEndDate - timeLineStartDate); //the number of days since the timelineStartDate



			//return the difference in days as a unit
			return ( (daysSinceBeginning - Math.floor(timeLineEndDate - targetDate)) / (daysSinceBeginning/100.0) ) ;
		}
		
	});