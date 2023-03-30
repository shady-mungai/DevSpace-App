class ReviewsController < ApplicationController
    before_action :authorize

    def create 
        review = user.articles.reviews.create(review_params)
    end

    def destroy 
        review = Review.find_by(id: params[:id])
        if review 
            review.destroy 
        else 
            render json: { error: "Review not found"}
        end
    end
    

    private 
    def review_params
        params.permit(:content,:likes)
    end
end
