class SessionsController < ApplicationController

    #POST to enable a user to login via finding user by email 
    #authentucating the user's password
    #storing their id via sessions
    def login
        
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { error: "User not found" }, status: :not_found
        end
   end

   #delete functionality that deletes the user's id from the sessions thus logging out user
    def logout 
       session.delete :user_id
       head :no_content
    end

end