class ApplicationController < ActionController::API
    # protect_from_forgery with: :null_session
    include ActionController::Cookies
    def user 
        user = User.find_by(id: session[:user_id])
    end

    def save_user(id)
        session[:uid] = id
    end
  
    
    def authorize
        render json: { error: "Not authorized" }, status: 401 unless session.include? :user_id
    end

end
