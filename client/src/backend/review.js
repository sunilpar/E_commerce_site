import AxiosHelper from "../utils/axios.helper.js";

export class ReviewService{

    async createReview({ProductId, star, comment}) {//test this
        try {
          const data = { 
            ProductId,
            star,
            Comment: comment
           };
          return await AxiosHelper("/api/review/post-review", data, "post");
        } catch (error) {
          console.error("error while creating user:", error);
        }
      }
    

      async getReviews(ProductId){
        try {
          const data = {
            ProductId
          };
           return await AxiosHelper("/api/review/get-reviews", data, "post");
        } catch (error) {
          console.error("Error fetching user:", error);
        }
        return null;
      }


}
const reviewService = new ReviewService();
export default reviewService;
