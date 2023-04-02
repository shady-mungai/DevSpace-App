class User < ApplicationRecord
    #validations
    validates :password, presence: true
    validates :username, uniqueness: true,presence: true
    validates :email, presence: true, uniqueness: true
    
    # helper method to encrypt password
    has_secure_password

    # relationships
    has_many :articles
    has_many :reviews
end