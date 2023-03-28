class User < ApplicationRecord
    has_secure_password
    validates :password, presence: true
    validates :username, uniqueness: true,presence: true
    validates :email, presence: true, uniqueness: true
end
