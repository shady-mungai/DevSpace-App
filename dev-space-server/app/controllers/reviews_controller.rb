class ReviewsController < ApplicationController
    before_action :authorize

    def create 
        review = user.articles.reviews.create(review_params)
    end
    

    private 
    def review_params
        params.permit(:content,:likes)
    end
end
