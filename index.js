



fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(json => {
    var content = ` 
<div class="card">
<img src="sawsaw" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">Country name: Names</h5>
<h5 class="card-title">Native name: Natives</h5>
<p class="card-text">Capital is: Caps </p>
<p class="card-text">Region is: Regs </p>
<p class="card-text"><small class="text-muted">Population is PoP</small></p>
</div>
`


    for (let i = 0; i < json.length; i++) {
      if (json[i].name!="Israel") {
        
      
      var x = document.createElement('div')
      x.className = "col-lg-3 col-md-4  col-sm-6";
      var z = content.replace("sawsaw", json[i].flag)
      z = z.replace("Names", json[i].name)
      z = z.replace("Caps", json[i].capital)
      z = z.replace("PoP", json[i].population)
      z = z.replace("Natives", json[i].nativeName)
      z = z.replace("Regs", json[i].region)
      x.innerHTML = z
      document.getElementById('insertimage').appendChild(x) }
    }
  }
  )
