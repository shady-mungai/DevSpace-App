<<<<<<< HEAD
class ArticlesController < ApplicationController
    before_action :authorize

    #GET all articles

    def index 
        articles = Article.all
        render json: articles
    end

    def create 


end
=======
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
  
    private
  
    def article_params
      params.permit(:title,:topic_language,:content)
    end
end
>>>>>>> 62099abee15e1a8a5c1d0afa7d5b10783e9a7fa4
