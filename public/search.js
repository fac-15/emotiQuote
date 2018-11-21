// js to go here
const form = document.getElementById('search-form');
const test = document.getElementById('test');
test.addEventListener('click', displayStr());


function displayStr(){

}


document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if (xhr.status === 200){
                var data = JSON.parse(xhr.responseText);
                for (var blogPost in data) {
                    // post
                    console.log(data[blogPost]);
                }
            } else {
                console.error(xhr.responseText);
            }
        }
    }
    xhr.open('GET', 'sample_data.json', true);
    xhr.send();
    }
}
  