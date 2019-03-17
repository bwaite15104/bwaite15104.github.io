
			// set the dimensions of the canvas
			var margin = {top: 20, right: 20, bottom: 70, left: 40},
		    	width = 350 - margin.left - margin.right,
		    	height = 250 - margin.top - margin.bottom;

		    //set the ranges
		    var x = d3.scaleBand().rangeRound([0, width]).padding(.1);
		    var y = d3.scaleLinear().range([height, 0]);

			// define the axis
			var xAxis = d3.axisBottom(x);
		 	var yAxis = d3.axisLeft(y);

			// add the SVG element
			var svg = d3.select("#chart0")
				.append("svg")
				.attr("preserveAspectRatio", "xMinYMin meet")
				.attr("viewBox", "0 0 350 250")
		    	.append("g")
		    	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			// load the data
			d3.json("dc_crime_data.php").then(function(data) {

			    data.forEach(function(d) {
			        d.OFFENSE = d.OFFENSE;
			        d.TOTAL = +d.TOTAL;
			    });

				// add axis
				svg.append("g")
				  .attr("class", "x axis")
				  .attr("transform", "translate(0," + height + ")")
				  .call(xAxis)
				.selectAll("text")
				  .style("text-anchor", "end")
				  .attr("dx", "-.8em")
				  .attr("dy", "-.55em")
				  .attr("transform", "rotate(-90)" )
				  .attr("class", "axis-style");

				svg.append("g")
				  .attr("class", "y axis")
				  .call(yAxis)
				  .append("text")
				  .attr("transform", "rotate(-90)")
				  .attr("y", 0 - (margin.top / 2))
				  .attr("dy", ".71em")
				  .style("text-anchor", "middle")
				  .text("Frequency")
				  .attr("class", "axis-style");

			  //add title
			  svg.append("text")
        		.attr("x", (width / 2))             
        		.attr("y", 0 - (margin.top / 2))
        		.attr("text-anchor", "middle")  
        		.attr("class", "axis-style")
        		.text("Frequency of Crimes");

			  // Add bar chart
			  svg.selectAll("bar")
			      .data(data)
			      .enter()
			      .append("rect")
			      .attr("x", function(d) { return x(d.OFFENSE); })
			      .attr("y", function(d) { return y(d.TOTAL); })
			      .attr("width", x.bandwidth())
			      .attr("height", function(d) { return height - y(d.TOTAL); })
			      .attr("fill", "steelblue")
			      .attr("class", "bar")

				});

				// Set the dimensions of the canvas / graph
				var	margin2 = {top: 30, right: 20, bottom: 30, left: 50},
					width2 = 350 - margin2.left - margin2.right,
					height2 = 250 - margin2.top - margin2.bottom;

				// Parse the date / time
				var	parseDate = d3.timeParse("%Y-%m-%d");

		    	var x2 = d3.scaleTime().range([0, width2]);
		    	var y2 = d3.scaleLinear().range([height2, 0]);

					// define the axis
				var xAxis2 = d3.axisBottom(x2);
		 		var yAxis2 = d3.axisLeft(y2);


				// Define the scaleLinear
				var	valueline = d3.line()
					.x(function(d) { return x2(d.REPORT_DAT); })
					.y(function(d) { return y2(d.TOTAL); });
				    
				// Adds the svg canvas
				var	chart1 = d3.select("#chart1")
					.append("svg")
					.attr("preserveAspectRatio", "xMinYMin meet")
					.attr("viewBox", "0 0 350 250")
					.append("g")
						.attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

				// Get the data
				d3.json("dc_crime_data2.php").then(function(data) {

				    data.forEach(function(d) {
				        d.REPORT_DAT = parseDate(d.REPORT_DAT);
				        d.TOTAL = +d.TOTAL;
				    });


					// Scale the range of the data
					x2.domain(d3.extent(data, function(d) { return d.REPORT_DAT; }));
					y2.domain([0, d3.max(data, function(d) { return d.TOTAL; })]);

					// Add the valueline path.
					chart1.append("path")
						.data([data])
						.attr("class", "line")
						.attr("d", valueline);

					// Add the X Axis
					chart1.append("g")
						.attr("class", "x axis")
						.attr("transform", "translate(0," + height2 + ")")
						.call(xAxis2);

					// Add the Y Axis
					chart1.append("g")
						.attr("class", "y axis")
						.call(yAxis2);

				});

				// Get the data
				d3.json("dc_crime_data3.php").then(function(data) {

					// show total crimes data value
					d3.select("#chart2")
						.selectAll("p")
						.data(data)
						.enter()
						.append("p")
						.text(function(d) {return d.TOTAL;})
						.attr("class", "summary-text-num")
						.attr("text-anchor", "middle");

				});

				// Get the data
				d3.json("dc_crime_data3.php").then(function(data) {

					// show total crimes data value
					d3.select("#chart3")
						.selectAll("p")
						.data(data)
						.enter()
						.append("p")
						.text(function(d) {return d.TOTAL;})
						.attr("class", "summary-text-num")
						.attr("text-anchor", "middle");

				});

				// Get the data
				d3.json("dc_crime_data3.php").then(function(data) {

					// show total crimes data value
					d3.select("#chart4")
						.selectAll("p")
						.data(data)
						.enter()
						.append("p")
						.text(function(d) {return d.TOTAL;})
						.attr("class", "summary-text-num")
						.attr("text-anchor", "middle");

				});

				// Get the data
				d3.json("dc_crime_data3.php").then(function(data) {

					// show total crimes data value
					d3.select("#chart5")
						.selectAll("p")
						.data(data)
						.enter()
						.append("p")
						.text(function(d) {return d.TOTAL;})
						.attr("class", "summary-text-num")
						.attr("text-anchor", "middle");

				});