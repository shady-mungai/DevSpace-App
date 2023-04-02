class ApplicationController < ActionController::API
    include ActionController::Cookies
<<<<<<< HEAD
    def user 
        user = User.find_by(id: session[:user_id])
    end

    def save_user(id)
        session[:uid] = id
    end
    
    def authorize
        render json: { error: "Not authorized" }, status: 401 unless session.include? :user_id
    end

=======
>>>>>>> 71439411f8b8125aceaa49d65648e656f7179fc5
end
