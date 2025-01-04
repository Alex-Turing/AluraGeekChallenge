import { AddProduct, GetProducts, DeleteProduct } from './APIConnection.js'; 

async function LoadProducts() 
{
    try 
    {
        const products = await GetProducts();
        console.log('Productos cargados:', products);
        if (Array.isArray(products) && products.length > 0) 
        {
            products.forEach(CreateProductCard);
        } 
        else 
        {
            console.log('No hay productos para mostrar');
            alert('No hay productos disponibles');
        }
    } 
    catch (err) 
    {
        console.error('Error al cargar los productos:', err);
    }
}

function SetProductForm() 
{
    const form = document.getElementById('product-form');
    if (form) 
    {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const productName = document.getElementById('product-name').value.trim();
            const productPrice = document.getElementById('product-price').value.trim();
            const productImage = document.getElementById('product-image').value.trim();

            if(!productName || isNaN(productPrice) || !productImage)
            {
                alert('Por favor llene todos los campos correctamente.');
                return;
            }

            if(productName && productPrice && productImage) 
            {
                try 
                {
                    const newProduct = {
                        nombre: productName,
                        precio: parseInt(productPrice),
                        imagen: productImage,
                        trashCanImage: './assets/delete.png',
                    };

                    await AddProduct(newProduct);
                    document.querySelector('.my-products__cards__container').innerHTML = '';

                    await LoadProducts();
                    form.reset();
                } 
                catch (err) 
                {
                    console.error('Error al agregar el producto:', err);
                }
            }
        });
    } 
    else 
    {
        console.warn('Formulario no encontrado en el DOM.');
    }
}

function CreateProductCard(product)
{
    const container = document.querySelector('.my-products__cards__container');
    const card = document.createElement('div');
    card.classList.add('products__container');

    card.innerHTML = `
        <div class="card-image__container">
            <img src="${product.imagen}" alt="${product.nombre}" />
        </div>
        <div class="card-container--info">
            <p>${product.nombre}</p>
            <div class="card-container--value">
                <p>$ ${product.precio}</p>
                <button
                    id="trash"
                    class="trashIcon"
                    data-id="${product.id}" 
                    style="border:none; background:none; cursor:pointer;">
                    <img src="./assets/delete.png" alt="Delete" style="border:none;"/>
                </button>
            </div>
        </div>`;
    container.appendChild(card);

    const trashButton = card.querySelector('#trash');
    trashButton.addEventListener('click', async (e) => {
        e.preventDefault();
        await DeleteProduct(product.id);
        container.removeChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    LoadProducts();
    SetProductForm();
});