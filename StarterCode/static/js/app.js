// from data.js
var tableData = data;


//selecting the ufo-table
var ufoTable = d3.select('#ufo-table');

var columns = ['datetime','city', 'state', 'country', 'shape', 'durationMinutes', 'comments' ];

var tbody = ufoTable.append('tbody');


// create a row for each object in the table
var rows = tbody.selectAll('tr')
        .data(tableData)
        .enter()
        .append('tr');

// create a cell for each row  

var cells = rows.selectAll('td')
            .data( function(row){
                return columns.map(function(column){
                    return {column: column, value: row[column]}
                })
            })
            //input the data
            .enter()
            .append('td')
            .text(function(d,i){
                return d.value;
            });
            




// working with the button 
// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    //trying to match the inputted value with that in the stored data
    var filteredData = tableData.filter(data => data.datetime === inputValue);

    //seeing if this works
    //it does work, now how do i reflect that in the webpage
    console.log(filteredData);

    //trying to reflect the filtered data into the webpage
    //cells = filteredData; 
    tbody.selectAll('tr').remove();
    filteredData.forEach(function(obj){
        var rows = tbody.append("tr");
        Object.keys(obj).forEach(function(key){
            rows.append("td").text(obj[key]);
        })
    })
});

//clear the table, then input the filtered data



// now have to input data with a for each function

//then work on button/search functionality 


// YOUR CODE HERE!
