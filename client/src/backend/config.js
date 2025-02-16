import AxiosHelper from "../utils/axios.helper.js";
const apiUrl = import.meta.env.VITE_API_URL;

export class Service {
  async createProduct({Title,CoverImage, Description, Pdf ,Audio,Tags, }) {
    try {
      const data = { 
        Title,
        CoverImage,
        Description,
        Pdf,
        Audio,
        Tags
       };
      return await AxiosHelper(`${apiUrl}/product/create-product`, data, "post");
    } catch (error) {
      console.error("error while creating product:", error);
    }
  }

  async updateProduct(Product_Id, { Title, Description,CoverImage, Pdf, Audio,Tags}) {
    try {
      const data = { 
        Product_Id,
        Title,
        Description,
        CoverImage,
        Pdf,
        Audio,
        Tags
       };
      return await AxiosHelper(`${apiUrl}/product/update-product`, data, "post");
    } catch (error) {
      console.error("error while updating product :", error);
    }
  }


  async getProduct(Product_Id) {
    try {
      const data = { 
        id:Product_Id
       };
      return await AxiosHelper(`${apiUrl}/product/get-product`, data, "post");
    } catch (error) {
      console.error("error while fetching product :", error);
    }
  }

  async getProducts(Titles) {
    try {
      const data = { 
        Titles
       };
      return await AxiosHelper(`${apiUrl}/product/get-products`, data, "post");
    } catch (error) {
      console.error("error while fetching products by titles :", error);
    }
  }

  async searchProductWithSuggestion(query) {
    try {
      const data = { 
        query
       };
      return await AxiosHelper(`${apiUrl}/product/get-suggestions`, data, "post");
    } catch (error) {
      console.error("error while searching products from given query :",query,"error:", error);
    }
  }
  async searchPage(query) {
    try {
      const data = { 
        query
       };
      return await AxiosHelper(`${apiUrl}/product/get-searchpage`, data, "post");
    } catch (error) {
      console.error("error while searching products page from:",query,"error:", error);
    }
  }


  async getProductsByid(ids) {
    try {
      const data = { 
        ids
       };
       
      return await AxiosHelper(`${apiUrl}/product/get-Byids`, data, "post");
    } catch (error) {
      console.error("error while fetching products by ids:", error);
    }
  } 

  async getProductsByTags(Tags) {
    try {
      const data = { 
        Tags
       };
       
      return await AxiosHelper(`${apiUrl}/product/get-realated-product`, data, "post");
    } catch (error) {
      console.error("error while getting realated products:", error);
    }
  } 
  
}

const service = new Service();

export default service;
