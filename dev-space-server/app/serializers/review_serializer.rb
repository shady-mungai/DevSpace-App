class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes
  
  has_one :article
  has_one :user
end