class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user
            render json: user, status: :created 
        else
            render json: {error: "try again"}
        end
    end

    def index 
        users = User.all
        render json: users, status: :ok
    end

    def show
       user = User.find(params[:id])
       render json: user,include: :articles, status: :ok

    end

    def get_user 
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:username, :email, :password,:bio)
    end
end
