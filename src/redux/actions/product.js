import {
    GET_PRODUCT,
    GET_PRODUCTS,
    GET_FILTERED_PRODUCTS
} from './actionTypes';



export const setProducts = (products) => {
    
    localStorage.setItem('@EcommerceFashionista:products', JSON.stringify(products));
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export const getProduct = (code_color) => {

    const products = JSON.parse(localStorage.getItem('@EcommerceFashionista:products'));
    localStorage.setItem('@EcommerceFashionista:code', JSON.stringify(code_color));
    const product = products.find(el => el.code_color === code_color);  
    
    return {
        type: GET_PRODUCT,
        payload: product
    }
}

export const filterList = (name) => {
    const products = JSON.parse(localStorage.getItem('@EcommerceFashionista:products'));
    return {
        type: GET_FILTERED_PRODUCTS,
        payload: /^ *$/.test(name) ? [] : products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
    }
}


