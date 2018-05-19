// declare object
var products = [];
var Item = function (name, price, count) {
	this.name = name;
	this.price = price;
	this.count = count;
};

// addProducts()
function addProducts(name, price, count) {

	for (var i in products) {
		if (products[i].name === name) {
			products[i].count += count;
			return;
		}
	}

	var item = new Item(name, price, count);
	products.push(item);
	saveProducts();
}

// removeProducst()
function removeProducts(name) {
	for (var i in products) {
		if (products[i].name === name) {
			products[i].count--;
			if (products[i].count === 0) {
				products.splice(i, 1);
			}
			break;
		}
	}
	saveProducts();
}

// removeProductsItemAll()
function removeProductsItemAll(name) {
	for (var i in products) {
		if (products[i].name === name) {
			products.splice(i, 1);
			break;
		}
	}
	saveProducts();
}

// listProducts()
function listProducts() {
	var productsCopy = [];
	for (var i in products) {
		var item = products[i];
		var itemCopy = {};
		for (var j in item) {
			itemCopy[j] = item[j];
		}
		productsCopy.push(itemCopy);
	}
	return productsCopy;
}

// countProducts()
function countProducts() {
	var countProduct = 0;
	for (var i in products) {
		countProduct += products[i].count;
	}
	return countProduct;
}

// totalPrice()
function totalPrice() {
	var total = 0;
	for (var i in products) {
		total += products[i].price * products[i].count;
	}
	return total;
}

// clearProducts()
function clearProducts() {
	products = [];
	saveProducts();
}

// saveProducts()
function saveProducts() {
	localStorage.setItem("ShoppingCart", JSON.stringify(products));
}

// loadProducts()
function loadProducts() {
	localStorage.getItem("ShoppingCart");
}

/* ============= TEST CONSOLE ============= */
// addProducts("Apple", 1500000, 1);
// addProducts("Apple", 1500000, 1);
// addProducts("Apple", 1500000, 1);
// addProducts("Xiaomi", 1000000, 4);
// addProducts("Oppo", 2000000, 1);

// removeProducts("Apple");
// removeProducts("Oppo");
// removeProductsItemAll("Apple");

//clearProducts();

// var array = listProducts();
// console.log(array);
// console.log(countProducts());
// console.log(totalPrice());
//console.log(products);

/*================ CHECK DATA ================*/
// var element = document.getElementsByClassName("products__infor");
// console.log(element[0].dataset.name);

/* ================ ADD DOM ================ */
// var element = document.getElementsByClassName("products__infor");

var addCart = document.getElementsByClassName("add-cart");
console.log(addCart);

function displayCart() {
	var html = document.getElementById("show-products");
	var cartArray = listProducts();
	var output = "";

	for(var i in cartArray) {
		output += `
		<tr>
			<td>${cartArray[i].name}</td>
			<td>${cartArray[i].price} VNĐ</td>
			<td>${cartArray[i].count}</td>
		</tr>`;
	}

	html.innerHTML += output;
}

//displayCart();

// addCart[0].addEventListener('click', function() {
// 	alert("WOW");
// }, true);

var cartlenght = addCart.length;
for(let i = 0; i < cartlenght; i++) {
	var nameProducts;
	var priceProducts
	addCart[i].addEventListener('click', function(event){
		event.preventDefault();
		nameProducts = addCart[i].dataset.name;
		priceProducts = addCart[i].dataset.price;
		console.log("In addEvent: " + nameProducts + ' - ' + priceProducts);
	}, true);
	console.log("Out addEvent: " + nameProducts + ' - ' + priceProducts);
	addProducts(nameProducts,priceProducts,1);
}

var array = listProducts();
console.log(array);
displayCart();
