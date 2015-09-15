# Dynamic Timeline

The distance between the markers of this timeline changes dynamically with the current date.<br> Meaning that if you were to create a timline
today, for each subsequent day, the timeline would self-adjust each marker to maintain the proportional distace between each other.<br>
<b>Without</b> you having to do any changes to the script!
#### Using this timeline
<ol>
 <li> Add the three files to your project folder. <br> <i>
 If your app is already running AngularJS, then simply inject your existing app with</i> `timeLine_app.js` <i>
 as a controller and remove ng-app from the</i> `body` <i>tag </i>
 <li> In app.js change the variable `timeLineStartDate`, to the date you wish your timeline to start <br>
  for example ` var timeLineStartDate = new Date(1999, 00, 15)... ` this will result in the timeline starting on <b>January</b> 15, 1999
<li>Add marker objects to `timeLineData = []` </li></ol> <br>
This is an example of a timeline consisting of three markers: 
```javascript
  this.timeLineData = [
    {
			date: {		
				y: 1999,	//year
				m: 8,		//month
				d: 1,		//day
			},
			info: "my first timeline marker",
			place: "",
			getleft() { return calcD(this.date.y, this.date.m, this.date.d) } 
		},

		{
			date: {
				y: 2010,	
				m: 9,
				d: 1,
			},
			info: "Moved to a new city",
			place: "Toronto - Ontario",
			getleft() { return calcD(this.date.y, this.date.m, this.date.d) },
		},

		{
			date: {
				y: 2006,
				m: 3,
				d: 1,
			},
			info: "Graduated from McMaster University",
			place: "Hamilton - Ontario",
			getleft() { return calcD(this.date.y, this.date.m, this.date.d) },
		}
  ];
  
  
