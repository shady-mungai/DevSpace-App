class ApplicationController < ActionController::API
    include ActionController::Cookies

    def save_user(email)
        session[:email] = email
    end
end
