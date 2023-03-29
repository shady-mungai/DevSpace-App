class UsersController < ApplicationController

    def index 
        users = User.all
        render json: users, status: :ok
    end

    def show
       # get_user,include: reviews
       # render json: super, include: reviews 
       user = User.find(session[:user_id])
       render json: user, status: :ok

    end

    # sign up to the application by creating your data to our db

    def create 
        user = User.create!(prod_params)
        if user
            WelcomeMailer.welcome_email(user).deliver_now
            #sign up to login 
            #session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {error: user.errors.full_messages}, status: :unprocessible_entity 
        end
    end


     private

    def prod_params
        params.permit(:username,:email,:password,:bio)
    end


end
