function addRow(content,morecontent)
{
     if (!document.getElementsByTagName)
        return;
     tabBody = document.getElementsByTagName("tbody").item(0);
     row = document.createElement("tr");
     cell1 = document.createElement("td");
     cell2 = document.createElement("td");
     textnode1=document.createTextNode(content);
     textnode2=document.createTextNode(morecontent);
     cell1.appendChild(textnode1);
     cell2.appendChild(textnode2);
     row.appendChild(cell1);
     row.appendChild(cell2);
     tabBody.appendChild(row);
}

function drawTable() {

    var myTable = document.getElementById("listOfJobs");
    var tableBody = document.createElement("TBODY");

    var tableHeadings = new Array("Job", "Salary", "Hours", "Start Date", "Location", "Contact");

    var job = new Array();
    job[0] = new Array("Nanny", "13", "50", "7/14/2017", "40,40", "+1-631-123-4567");
    job[1] = new Array("Knight", "18", "100", "7/20/2017", "41,41", "+1-631-123-4567");
    job[2] = new Array("Driver", "16", "40", "8/14/2017", "42,42", "+1-631-123-4567");
    job[3] = new Array("Shopper", "15", "20", "7/14/2017", "44,44", "+1-631-123-4567");
    job[4] = new Array("Gardner", "14", "10", "5/14/2017", "45,45", "+1-631-123-4567");
    job[5] = new Array("Nanny", "13", "50", "7/14/2017", "40,40", "+1-631-123-4567");
    job[6] = new Array("Knight", "18", "100", "7/20/2017", "41,41", "+1-631-123-4567");
    job[7] = new Array("Driver", "16", "40", "8/14/2017", "42,42", "+1-631-123-4567");
    job[8] = new Array("Shopper", "15", "20", "7/14/2017", "44,44", "+1-631-123-4567");
    job[9] = new Array("Gardner", "14", "10", "5/14/2017", "45,45", "+1-631-123-4567");
    job[10] = new Array("Nanny", "13", "50", "7/14/2017", "40,40", "+1-631-123-4567");
    job[11] = new Array("Knight", "18", "100", "7/20/2017", "41,41", "+1-631-123-4567");
    job[12] = new Array("Driver", "16", "40", "8/14/2017", "42,42", "+1-631-123-4567");
    job[13] = new Array("Shopper", "15", "20", "7/14/2017", "44,44", "+1-631-123-4567");
    job[14] = new Array("Gardner", "14", "10", "5/14/2017", "45,45", "+1-631-123-4567");
    job[15] = new Array("Nanny", "13", "50", "7/14/2017", "40,40", "+1-631-123-4567");
    job[16] = new Array("Knight", "18", "100", "7/20/2017", "41,41", "+1-631-123-4567");
    job[17] = new Array("Driver", "16", "40", "8/14/2017", "42,42", "+1-631-123-4567");
    job[18] = new Array("Shopper", "15", "20", "7/14/2017", "44,44", "+1-631-123-4567");
    job[19] = new Array("Gardner", "14", "10", "5/14/2017", "45,45", "+1-631-123-4567");

    //Table headings
    var tr = document.createElement('TR');
    for (i = 0; i < tableHeadings.length; i++) {
        var th = document.createElement('TH');
        //th.width = '75';
        th.appendChild(document.createTextNode(tableHeadings[i]));
        tr.appendChild(th);
    }
    tableBody.appendChild(tr);

    //Table rows
    for (i = 0; i < job.length; i++) {
        var tr = document.createElement('TR');
        
        for (j = 0; j < job[i].length; j++) {
            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(job[i][j]));
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }

    myTable.appendChild(tableBody);
    //myTableDiv.appendChild(table);

}