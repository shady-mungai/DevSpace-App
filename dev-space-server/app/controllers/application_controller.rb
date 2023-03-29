class ApplicationController < ActionController::API
    include ActionController::Cookies
    def user 
        user = User.find_by(id: session[:user_id])
    end

    def save_user(id)
        session[:uid] = id
    end
end
