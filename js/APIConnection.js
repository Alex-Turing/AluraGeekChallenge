export const API_URL = 'https://67783aba80a79bf91904405b.mockapi.io/products';

export async function GetProducts() 
{
    try 
    {
        const response = await fetch(API_URL);
        if (!response.ok) 
        {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        return products;
    }
    catch (error) 
    {
        console.error('Error while fetching products information:', error);
        return [];
    }
}

export async function AddProduct(product) 
{
    try 
    {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        if (!response.ok) 
        {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }
    catch (error) 
    {
        console.error('Error while adding a new product:', error);
        throw error;
    }
}

export async function DeleteProduct (productId) 
{
    try 
    {
        const response = await fetch(`${API_URL}/${productId}`, {
            method: 'DELETE',
        });
        if (!response.ok)
        {
            throw new Error(`Error eliminando el producto: ${response.status}`);
        }
        console.log(`Product with ID ${productId} deleted successfully.`);
    }
    catch (error)
    {
        console.error('Error while deleting a product:', error);
        throw error;
    }
}