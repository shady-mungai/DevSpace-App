puts "Startted seeeding!!"

# create 10 users
10.times do
  User.create(
    username: Faker::Internet.username,
    email: Faker::Internet.email,
    password_digest: Faker::Internet.password,
    bio: Faker::Lorem.paragraph
  )
end

# create 20 articles with 1-3 tags each
20.times do
  article = Article.create(
    title: Faker::Lorem.sentence,
    topic_language: Faker::ProgrammingLanguage.name,
    content: Faker::Lorem.paragraphs,
    user_id: rand(1..10)
  )

  rand(1..3).times do
    tag = Tag.find_or_create_by(name: Faker::Lorem.word)
    article.tags << tag
  end
end

# create 50 reviews for random articles and users
50.times do
  Review.create(
    content: Faker::Lorem.paragraph,
    likes: rand(0..100),
    article_id: rand(1..20),
    user_id: rand(1..10)
  )
end


puts "Completeeed seediing!!!"