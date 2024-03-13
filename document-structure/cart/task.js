const cartProducts = document.querySelector('.cart__products');
const product = document.querySelectorAll('.product');
const controlDec = document.querySelectorAll('.product__quantity-control_dec');
const controlInc = document.querySelectorAll('.product__quantity-control_inc');
const quantityValue =  document.querySelectorAll('.product__quantity-value');
const productAdd = document.querySelectorAll('.product__add');

product.forEach((item, index) => { 
    let quantity = 1;
    
    controlInc[index].addEventListener('click', () => {
        if (quantity > 0) {
            quantity += 1;
            quantityValue[index].textContent = quantity;  
        }
    })
        
    controlDec[index].addEventListener('click', () => {
        if (quantity !== 1) {
            quantity -= 1;
            quantityValue[index].textContent = quantity;  
        }
    })
    
    productAdd[index].addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const img = item.children[1].getAttribute('src'); 
        const products = [...document.getElementsByClassName('cart__product')];
        const getProduct = products.find(product => product.dataset.id == id);

        if (getProduct) {
			let child = getProduct.children[1];
			child.textContent = +child.textContent + quantity;
		} else {
			cartProducts.insertAdjacentHTML('afterBegin', `
            <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${img}">
            <div class="cart__product-count">${quantity}</div>
            </div>`);
		}

        quantity = 1;
		quantityValue[index].textContent = quantity;
		return quantity;
	});
    
})