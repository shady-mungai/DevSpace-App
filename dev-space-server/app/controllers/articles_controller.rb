class ArticlesController < ApplicationController 

    def index
      articles = Article.all
      render json: articles
    end

    # POST create a new article
    def create
      article = user.articles.create!(article_params)
      if article
        render json: article,status: :created
      else
        render json: {error: article.errors.full_messages}, status: :unprocessable_entity
      end
    end

    #PUT update an article

    def update
      article = Article.find_by(id:params[:id])
      if article
        article.update(article_params)
        render json: article,status: :accepted
      else
        render json: {error: "Article not found"}, status: :unprocessable_entity
      end
    end
  
    private
    def article_params
      params.permit(:title,:topic_language,:content)
    end
end