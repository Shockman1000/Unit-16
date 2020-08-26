// @TODO: YOUR CODE HERE!

var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 760 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

d3.csv("assets/js/data.csv").then(function(data) {
    var x = d3.scaleLinear()
        .domain([5, 25])
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    
    var y = d3.scaleLinear()
        .domain([20, 38])
        .range([ height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));
    
    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
          .attr("cx", function (d) { return x(d.poverty); } )
          .attr("cy", function (d) { return y(d.obesity); } )
          .attr("r", 8)
          .style("fill", "#69b3a2")
    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
          .text(function(d) {return d.abbr;})
          .attr("x", function(d) {return x(d.poverty) - 7;})
          .attr("y", function(d) {return y(d.obesity) + 3;})
          .attr("font-size", "10px")
});