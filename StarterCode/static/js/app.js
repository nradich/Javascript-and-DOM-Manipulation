// from data.js
var tableData = data;


//selecting the ufo-table
const ufoTable = d3.select('#ufo-table');

const columns = ['datetime','city', 'state', 'country', 'shape', 'durationMinutes', 'comments' ];

const tbody = ufoTable.append('tbody');


// create a row for each object in the table
var rows = tbody.selectAll('tr')
        .data(tableData)
        .enter()
        .append('tr');

// create a cell for each row  

const cells = rows.selectAll('td')
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
            })
            




// now have to input data with a for each function

//then work on button/search functionality 


// YOUR CODE HERE!
