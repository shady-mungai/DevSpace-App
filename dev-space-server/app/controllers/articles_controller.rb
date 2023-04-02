<<<<<<< HEAD
=======
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
>>>>>>> 71439411f8b8125aceaa49d65648e656f7179fc5
class ArticlesController < ApplicationController 

  before_action :authorize

  #GET all articles

    def index 
      articles = Article.all
      render json: articles
    end

    #GET one article
    def show 
      article = Article.find(params[:id])
      if article
        render json: article, status: :ok
      else 
        render json: {error: "Article not found"},status: :not_found
      end
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
        render json: {error: "Article not found"}, status: :not_found
      end
    end

    #destroy
    def destroy
      article = Article.find_by(id:params[:id])
      if article
        article.reviews.destroy_all # delete all associated reviews
        article.destroy
        render json: []
      else
        render json: {error: "Article not found"}, status: :not_found
      end
    end
  
    private
    def article_params
      params.permit(:title,:topic_language,:content)
    end
end
<<<<<<< HEAD
=======
>>>>>>> 62099abee15e1a8a5c1d0afa7d5b10783e9a7fa4
>>>>>>> 71439411f8b8125aceaa49d65648e656f7179fc5
