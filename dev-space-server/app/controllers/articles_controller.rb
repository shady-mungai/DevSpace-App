class ArticlesController < ApplicationController
    # GET all articles
    def index 
      articles = Article.all
      render json: articles
    end
  
    # POST create a new article
    def create
      article = Article.create!(article_params)
      if article
        render json: article, status: :created
      else
        render json: {error: article.errors.full_messages}, status: :unprocessable_entity
      end
    end
  
    private
  
    def article_params
      params.permit(:title,:topic_language,:content,:user_id)
    end
  end