document.querySelectorAll('button').forEach(function(button) {
    var query = button.dataset.call;
    button.addEventListener('click', function() {
        ajaxCall(query).then(function(response) {
            // temp set timeout for affect
            setTimeout(function() {
                // hide canvas
                document.getElementById('loadingCanvas').classList.add('hidden');
                // clear interval
                stopLoading();
                // put generated html in table
                document.getElementById('tableWrapper').innerHTML = response;
                // add event listeners for sortable table
                createSortableTable();
        }, 250);
        }).catch(function() {
          // Game over pal
        });
    });
});

function ajaxCall(query) {
    // set queryParam from clicked buttons data attribute - change to send body and let server deal with query params
    var toCall = query === 'all' ? 'request-data' : 'request-data?type="' + query + '"';
    // start the canvas animation
    document.getElementById('loadingCanvas').classList.remove('hidden');
    startLoading();
    // ajax request
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('POST', toCall);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send();
    request.onerror = reject;
    request.onload = function() {
        resolve(this.responseText);
    };
  });
}

function createSortableTable() {
    var allTableHeadings = document.querySelectorAll('th');
    document.querySelectorAll('th').forEach(function(tableHeading, index) {
        allTableHeadings[index].addEventListener('click', function() {
            sortTable(index, this.parentNode.parentNode.parentNode);
        });
    });
}

function sortTable(n, table) {
      var rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      switching = true;
      dir = 'asc';
      while (switching) {
        switching = false;
        rows = table.getElementsByTagName('tr');
        for (i = 1; i < (rows.length - 1); i++) {
              shouldSwitch = false;
              x = rows[i].getElementsByTagName('td')[n];
              y = rows[i + 1].getElementsByTagName('td')[n];
              if (dir === 'asc') {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                          shouldSwitch = true;
                          break;
                }
            } else if (dir === 'desc') {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                      shouldSwitch = true;
                      break;
                }
              }
        }
        if (shouldSwitch) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
              switchcount ++;
        } else {
          if (switchcount === 0 && dir === 'asc') {
                dir = 'desc';
                switching = true;
                }
            }
        }
}
