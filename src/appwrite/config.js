import conf from "../conf/conf.js";
import { Client, ID, Databases, Query, Storage } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createProduct({ Product_Title, Description, Cover_Img, Review_Id, Book_Type ,Price:[],Tags:[], }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId1,
        ID.unique(),
        {
          Product_Title,
          Description,
          Cover_Img,
          Book_Type,
          Price:[],
          Review_Id,
          Tags:[],
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createProduct :: error: ", error);
    }
  }

  async updateProduct(Product_Id, { Product_Title, Description,Review_Id, Cover_Img, Book_Type,Price:[],Tags:[], }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId1,
        Product_Id,
        {
          Product_Title,
          Description,
          Cover_Img,
          Book_Type,
          Review_Id,
          Price:[],
          Tags:[],
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updateProduct :: error: ", error);
    }
  }

  async deleteProduct(Product_Id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId1,
        Product_Id
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteProduct :: error: ", error);
      return false;
    }
  }



  async getProduct(Product_Id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId1, 
        Product_Id
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error: ", error);
      return false;
    }
  }

  async getProducts(queries) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId1,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error: ", error);
      return false;
    }
  }

  //file upload services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId1,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error: ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId1, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error: ", error);
      return false;
    }
  }

  getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId1,
        fileId
    )
}
}

const service = new Service();

export default service;
