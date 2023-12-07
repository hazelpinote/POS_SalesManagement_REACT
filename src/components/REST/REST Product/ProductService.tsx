import axios from "axios";

const PRODUCT_BASE_URL = "https://dilven-pos-sales-management-database-2.onrender.com/product/getAllProduct";
const PRODUCT_NAME_BASE_URL = "https://dilven-pos-sales-management-database-2.onrender.com/product/getByProduct/?productname=";

class ProductService{
    getProduct() {
        return axios.get(PRODUCT_BASE_URL);
    }

    insertProduct(product: any){
        return axios.post(PRODUCT_BASE_URL, product);
    }

    findByProductname(productname: any){
        return axios.get(PRODUCT_NAME_BASE_URL + productname);
    }

    putProduct(product: any, productid: any){
        return axios.put(PRODUCT_BASE_URL + '/' + productid, product);
    }

    deleteProduct(productid: any){
        return axios.delete(PRODUCT_BASE_URL + '/' + productid);
    }
}

export default new ProductService()
