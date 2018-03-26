//2000 data, 2009 data
var revenue_2000 = [2.49];
var spending_2000 = [2.2];
var sur_def_2000 = [0.290];
var gdp_2000 = [12.5];

var revenue_2009 = [2.1];
var spending_2009 = [3.52];
var sur_def_2009 = [-1.41];
var gdp_2009 = [14.4];

var rev_2000 = d3.select("#revenue-2000").selectAll("div").data(revenue_2000).enter().append("div").style("width", 0).style("left", "50%").transition().duration(500);
rev_2000.style("width", function(d){return d * 3.33 + "%";});
rev_2000.text(function(d){ return "Revenue: $" + d + " T";});

var spend_2000 = d3.select("#spending-2000").selectAll("div").data(spending_2000).enter().append("div").style("width", 0).style("right", "50%").transition().duration(500);
spend_2000.style("width", function(d){ return d * 3.33 + "%";});
spend_2000.style("background-color", function(d){ return "red";});
spend_2000.text(function(d){return "Spending: $" + d + " T";});

var sd_2000 = d3.select("#surdef-2000").selectAll("div").data(sur_def_2000).enter().append("div").style("width", 0).style(sur_def_2000[0] > 0 ? "left" : "right", "50%").transition().duration(500);
sd_2000.style("width", function(d){ return d > 0 ? d * 3.33 + "%" : -d * 3.33 + "%"});
sd_2000.style("background-color", function(d){ return d > 0 ? "green" : "red";});
sd_2000.text(function(d){return d > 0 ? "Surplus: $" + d + " T" : "Deficit: $" + d + " T";});

var gedepe_2000 = d3.select("#gdp-2000").selectAll("div").data(gdp_2000).enter().append("div").style("width", 0).style("left", "50%").transition().duration(500);
gedepe_2000.style("width", function(d){ return d * 3.33 + "%"});
gedepe_2000.text(function(d) {return "GDP: $" + d + " T";});

var rev_2009 = d3.select("#revenue-2009").selectAll("div").data(revenue_2009).enter().append("div").style("width", 0).style("left", "50%").transition().duration(500);
rev_2009.style("width", function(d){return d * 3.33 + "%";});
rev_2009.text(function(d){ return "Revenue: $" + d + " T";});

var spend_2009 = d3.select("#spending-2009").selectAll("div").data(spending_2009).enter().append("div").style("width", 0).style("right", "50%").transition().duration(500);
spend_2009.style("width", function(d){ return d * 3.33 + "%";});
spend_2009.style("background-color", function(d){ return "red";});
spend_2009.text(function(d){return "Spending: $" + d + " T";});

var sd_2009 = d3.select("#surdef-2009").selectAll("div").data(sur_def_2009).enter().append("div").style("width", 0).style(sur_def_2009[0] > 0 ? "left" : "right", "50%").transition().duration(500);
sd_2009.style("width", function(d){ return d > 0 ? d * 3.33 + "%" : -d * 3.33 + "%"});
sd_2009.style("background-color", function(d){ return d > 0 ? "green" : "red";});
sd_2009.text(function(d){return d > 0 ? "Surplus: $" + d + " T" : "Deficit: $" + d + " T";});

var gedepe_2009 = d3.select("#gdp-2009").selectAll("div").data(gdp_2009).enter().append("div").style("width", 0).style("left", "50%").transition().duration(500);
gedepe_2009.style("width", function(d){ return d * 3.33 + "%"});
gedepe_2009.text(function(d) {return "GDP: $" + d + " T";});