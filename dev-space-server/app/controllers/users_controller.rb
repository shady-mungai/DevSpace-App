class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            save_user(user.email)
            render json: {message: "Registration was successful",status: :created}
        else
            render json: {message: "Something went wrong during registration",status: :unprocessable_entity, data: user.errors}
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
