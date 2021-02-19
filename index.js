



fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(json => {
    var content = ` 
<div class="card">
<img src="sawsaw" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">Country name: ahmad</h5>
<p class="card-text">Capital is: samir </p>
<p class="card-text"><small class="text-muted">Population is sondos</small></p>
</div>
`


    for (let i = 0; i < json.length; i++) {
      if (json[i].name!="Israel") {
        
      
      var x = document.createElement('div')
      x.className = "col-lg-4 col-md-6";
      var z = content.replace("sawsaw", json[i].flag)
      z = z.replace("ahmad", json[i].name)
      z = z.replace("samir", json[i].capital)
      z = z.replace("sondos", json[i].population)

      x.innerHTML = z
      document.getElementById('insertimage').appendChild(x) }
    }
  }
  )
