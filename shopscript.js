// document.getElementById("test").innerHTML = "Det funker!"

console.log(products)

let productsHTML ="<h2>Ninjago</h2>"

products.map(product => productsHTML += `  
<article>
<img src="website_images/PROD_${product.imagefile}" alt="${product.title}" />
<a href="#"> ${product.category}</a>
<h3>${product.title}</h3>
<span>${product.price}</span>
<button>Legg i handlekurv</button>
</article>`)

console.log(productsHTML)

const main = document.getElementsByTagName("main")
main[0].innerHTML=productsHTML;

// products.title
// var product = prodid 


// HandleVogn
// button.leggIHandlekurv
