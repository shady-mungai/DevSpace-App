class Article < ApplicationRecord
  # one article can belong to a user
  belongs_to :user

  #many-to-many relationship btw tags and articles
  has_many :article_tags, dependent: :destroy
  has_many :tags, through: :article_tags
  
  #has many reviews
  has_many :reviews, dependent: :destroy
end