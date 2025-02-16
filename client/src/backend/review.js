import AxiosHelper from "../utils/axios.helper.js";

const apiUrl = import.meta.env.VITE_API_URL;
export class ReviewService{

    async createReview({ProductId, star, Comment}) {//test this
        try {
          const data = { 
            ProductId,
            star,
            Comment
           };
          return await AxiosHelper(`${apiUrl}/review/post-review`, data, "post");
        } catch (error) {
          console.error("error while creating review:", error);
        }
      }
    

      async getReviews(ProductId){
        try {
          const data = {
            ProductId
          };
           return await AxiosHelper(`${apiUrl}/review/get-reviews`, data, "post");
        } catch (error) {
          console.error("Error fetching user:", error);
        }
        return null;
      }


}
const reviewService = new ReviewService();
export default reviewService;
