// I'm sure this could be simplified, and I'm open to suggestions.  I'm still learning about front end development.

//Autotools Default Values
AutoTools.setDefaultValues({
titleText1: "%par1 Axis Waveform",
titleSize1: 20,
titleColor1: "#78C0E0",
titlePos1: "out",
curvedGraph1: "line",
animationChoice1: false,
bgColor1: "#0A2239",
yMax1: "%maxy",
yMin1: "%miny",
maxLineColor1: "#BFEDEF",
minLineColor1: "#85FFC7",
xLabels1: "%data()",
yMaxLabels1: "%data()",
yMinLabels1: "",
axesTitles1: "out",
xAxisTitle1: "Time",
yAxisTitle1: "%par1 Axis",
axesColor1: "#7a78e2",
numOfLinesY1: 11,
lineThickness1: 1,
titleText2: "Graph 2",
titleSize2: 25,
titleColor2: "#090809",
titlePos2: "in",
curvedGraph2: "line",
animationChoice2: false,
bgColor2: "#0A2239",
yMax2: "",
yMin2: "",
maxLineColor2: "#BFEDEF",
minLineColor2: "#85FFC7",
xLabels2: "a,b,c,d,e,f,g,h,i,j",
yMaxLabels2: "20,23,56,34,87,48,10,83,23,2",
yMinLabels2: "",
axesTitles2: "in",
xAxisTitle2: "dependent",
yAxisTitle2: "independent",
axesColor2: "#7a78e2",
numOfLinesY2: 11,
lineThickness2: 5,
titleText3: "Graph 3",
titleSize3: 15,
titleColor3: "#ffffff",
titlePos3: "none",
curvedGraph3: "line",
animationChoice3: true,
bgColor3: "#0A2239",
yMax3: "%zdata()",
yMin3: "",
maxLineColor3: "#BFEDEF",
minLineColor3: "#85FFC7",
xLabels3: "h,e,l,l,o,!c",
yMaxLabels3: "%zdata()",
yMinLabels3: "",
axesTitles3: "out",
xAxisTitle3: "stuff",
yAxisTitle3: "numbers",
axesColor3: "#7a78e2",
numOfLinesY3: 11,
lineThickness3: 1,
numCharts: 1,
gapSize: "25",
fontFam: "arial",
});

//set gaps
document.querySelector('#chart2').style.marginTop=gapSize+"px";
document.querySelector('#chart3').style.marginTop=gapSize+"px";

// Load Charts and the corechart package.
google.charts.load('current', {'packages':['corechart']});

//check to see how many charts to show
//remove the other divs
//draw the correct number of charts

if(numCharts == 1){
  var graphData1 = AutoTools.fieldsToObject("xLabels1","yMaxLabels1","yMinLabels1");
  var parent = document.getElementById("stuff");
  var child2 = document.getElementById("chart2");
  var child3 = document.getElementById("chart3");
  parent.removeChild(child2);
  parent.removeChild(child3);
  google.charts.setOnLoadCallback(drawChart1);
} else if(numCharts == 2){
  var graphData1 = AutoTools.fieldsToObject("xLabels1","yMaxLabels1","yMinLabels1");
  var graphData2 = AutoTools.fieldsToObject("xLabels2","yMaxLabels2","yMinLabels2");
  var parent = document.getElementById("stuff");
  var child3 = document.getElementById("chart3");
  parent.removeChild(child3);
  google.charts.setOnLoadCallback(drawChart1);
  google.charts.setOnLoadCallback(drawChart2);
} else {
  var graphData1 = AutoTools.fieldsToObject("xLabels1","yMaxLabels1","yMinLabels1");
  var graphData2 = AutoTools.fieldsToObject("xLabels2","yMaxLabels2","yMinLabels2");
  var graphData3 = AutoTools.fieldsToObject("xLabels3","yMaxLabels3","yMinLabels3");
  google.charts.setOnLoadCallback(drawChart1);
  google.charts.setOnLoadCallback(drawChart2);
  google.charts.setOnLoadCallback(drawChart3);
};

// Callback that draws the chart1.
function drawChart1() {
// Create the data table for chart.
var data = new google.visualization.DataTable();
data.addColumn('string', xAxisTitle1);
data.addColumn('number', yAxisTitle1);
data.addColumn('number', yAxisTitle1);

var rows = graphData1.map(row => [row.xLabels1, Number.parseFloat(row.yMaxLabels1),Number.parseFloat(row.yMinLabels1)]);
data.addRows(rows);

// Set chart options
var options = {
fontName: fontFam,
chartArea:{left:'15%', width:'70%', height:'70%'},
title: titleText1,
titleTextStyle: {color: titleColor1, fontSize: Number.parseInt(titleSize1)},
titlePosition : titlePos1,
curveType : curvedGraph1,
legend: { position: 'none' },
backgroundColor: bgColor1,
vAxis: {
viewWindow: {max: yMax1, min:yMin1},
title: yAxisTitle1,
textStyle: {color: axesColor1},
titleTextStyle:{italic: false, color: axesColor1},
gridlines: {color: axesColor1, count: numOfLinesY1},
baselineColor: axesColor1},
animation: {startup: animationChoice1,
duration:1000,
easing:'inAndOut'},
hAxis: {
title: xAxisTitle1,
textStyle: {color: axesColor1},
titleTextStyle:{italic: false, color: axesColor1}},
axisTitlesPosition: axesTitles1,
colors: [maxLineColor1,minLineColor1],
lineWidth: lineThickness1,
};

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.LineChart(document.getElementById('chart1'));
chart.draw(data, options);
}


// Callback that draws the chart2.
function drawChart2() {
// Create the data table for chart.
var data = new google.visualization.DataTable();
data.addColumn('string', xAxisTitle2);
data.addColumn('number', yAxisTitle2);
data.addColumn('number', yAxisTitle2);

var rows = graphData2.map(row => [row.xLabels2, Number.parseFloat(row.yMaxLabels2),Number.parseFloat(row.yMinLabels2)]);
data.addRows(rows);

// Set chart options
var options = {
fontName: fontFam,
chartArea:{left:'15%', width:'70%', height:'70%'},
title: titleText2,
titleTextStyle: {color: titleColor2, fontSize: Number.parseInt(titleSize2)},
titlePosition : titlePos2,
curveType : curvedGraph2,
legend: { position: 'none' },
backgroundColor: bgColor2,
vAxis: {
viewWindow: {max: yMax2, min:yMin2},
title: yAxisTitle2,
textStyle: {color: axesColor2},
titleTextStyle:{italic: false, color: axesColor2},
gridlines: {color: axesColor2, count: numOfLinesY2},
baselineColor: axesColor2},
animation: {startup: animationChoice2,
duration:1000,
easing:'inAndOut'},
hAxis: {
title: xAxisTitle2,
textStyle: {color: axesColor2},
titleTextStyle:{italic: false, color: axesColor2}},
axisTitlesPosition: axesTitles2,
colors: [maxLineColor2,minLineColor2],
lineWidth: lineThickness2,
};

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.LineChart(document.getElementById('chart2'));
chart.draw(data, options);
}


// Callback that draws the chart3.
function drawChart3() {
// Create the data table for chart.
var data = new google.visualization.DataTable();
data.addColumn('string', xAxisTitle3);
data.addColumn('number', yAxisTitle3);
data.addColumn('number', yAxisTitle3);

var rows = graphData3.map(row => [row.xLabels3, Number.parseFloat(row.yMaxLabels3),Number.parseFloat(row.yMinLabels3)]);
data.addRows(rows);

// Set chart options
var options = {
fontName: fontFam,
chartArea:{left:'15%', width:'70%', height:'70%'},
title: titleText3,
titleTextStyle: {color: titleColor3, fontSize: Number.parseInt(titleSize3)},
titlePosition : titlePos3,
curveType : curvedGraph3,
legend: { position: 'none' },
backgroundColor: bgColor3,
vAxis: {
viewWindow: {max: yMax3, min:yMin3},
title: yAxisTitle3,
textStyle: {color: axesColor3},
titleTextStyle:{italic: false, color: axesColor3},
gridlines: {color: axesColor3, count: numOfLinesY3},
baselineColor: axesColor3},
animation: {startup: animationChoice3,
duration:1000,
easing:'inAndOut'},
hAxis: {
title: xAxisTitle3,
textStyle: {color: axesColor3},
titleTextStyle:{italic: false, color: axesColor3}},
axisTitlesPosition: axesTitles3,
colors: [maxLineColor3,minLineColor3],
lineWidth: lineThickness3,
};

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.LineChart(document.getElementById('chart3'));
chart.draw(data, options);
}
