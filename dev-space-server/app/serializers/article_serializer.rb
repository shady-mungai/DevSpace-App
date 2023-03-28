class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :topic_language, :content
  has_one :user
end
