class User < ApplicationRecord
    has_secure_password
    #validations
    validates :password_digest, presence: true
    validates :username, uniqueness: true,presence: true
    validates :email, presence: true, uniqueness: true
    
    # relationships
    has_many :articles
    has_many :reviews
end
