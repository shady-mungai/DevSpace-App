class Tag < ApplicationRecord
    #many-to-many relationship btw tags and articles
    has_many :article_tags
    has_many :articles, through: :article_tags
end
