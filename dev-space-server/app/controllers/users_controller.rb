class UsersController < ApplicationController

    def index 
        users = User.all
        render json: users, status: :ok
    end

    def show
       # get_user,include: reviews
       # render json: super, include: reviews 
       user = User.find(params[:id])
       render json: user,include: :articles, status: :ok

    end

    private

    def get_user 
        user = User.find(params[:id])
        render json: user, status: :ok
    end
end
