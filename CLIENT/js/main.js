var timer;

function productSearch(word) {
  
  fetch('http://localhost:8000/api/search', {
    method: 'POST', 
    body: JSON.stringify({keyword:word}), 
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => buildContent(response));
     

}
function validateTimer(value) {
  loader(true); 
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      productSearch(value);
    }, 700);
}
function buildContent(content) {
  loader(false);
  var content = content.data;
  var html = '';
    content.map(function(x,i) {
      html += '<tr>';
      html += '<td>'+x.title+'</td>';
      html += '<td>'+x.description+'</td>';
      html += '<td>'+x.startdate+'</td>';
      html += '<td>'+x.enddate+'</td>';
      html += '<td>$ '+x.price+'</td>';
      html += '<td><img src="'+x.image+'" alt=""></td>';
      html += '<td>'+x.sold+'</td>';
      html += '<td>'+x.tags+'</td>';
      html += '</tr>';
   });
   let elem = document.querySelector ( "#content-datatable" );
   elem.innerHTML = html;
  
}
function loadContent(args) {
  args ?  document.querySelector("#content-datatable").style.display = 'block' :  document.querySelector("#content-datatable").style.display = 'none';  
}
function loader(args) {
  args ?  document.querySelector(".preloader").style.display = 'block' :  document.querySelector(".preloader").style.display = 'none';
}
loader(false)




