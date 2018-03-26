//2000 data, 2009 data
var revenue = [2.49];
var spending = [2.2];
var sur_def = [290];
var gdp = [12.5];

var rev = d3.select("#revenue").selectAll("div").data(revenue).enter().append("div");
rev.style("width", function(d){return d * 100 + "px";});
rev.text(function(d){ return d;});

var spend = d3.select("#spending").selectAll("div").data(spending).enter().append("div");
spend.style("width", function(d){ return d * 100 + "px";});
spend.text(function(d){return d;});

var sd = d3.select("#surdef").selectAll("div").data(sur_def).enter().append("div");
sd.style("width", function(d){ return d + "px"});
sd.text(function(d){return d;});

var gedepe = d3.select("#gdp").selectAll("div").data(gdp).enter().append("div");
gedepe.style("width", function(d){ return d * 10 + "px"});
gedepe.text(function(d) {return d;});
