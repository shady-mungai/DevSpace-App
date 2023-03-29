class ArticlesController < ApplicationController
    #GET all articles
    def index 
        articles = Article.all
        render json: articles
    end
end
