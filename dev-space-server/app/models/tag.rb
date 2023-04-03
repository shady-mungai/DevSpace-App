class Tag < ApplicationRecord
    #many-to-many relationship btw tags and articles
    has_many :article_tags, dependent: :destroy
    has_many :articles, through: :article_tags
end
