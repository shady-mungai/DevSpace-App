class ArticlesController < ApplicationController
    before_action :authorize

    #GET all articles

    def index 
        articles = Article.all
        render json: articles
    end


end
