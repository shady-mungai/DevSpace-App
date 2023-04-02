class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :topic_language, :content

  has_one :user
  has_many :reviews

  has_many :tags
end