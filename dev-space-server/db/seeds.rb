puts "Started seeedddingg!!"
# users 
user = User.create(
  username: "shadzz",
  email: "shadrackmungai10@gmail.com",
  password: "123",
  bio: "Full-stack dev who loves Ruby"
)

Article.create([
  { 
    title: "Ruby on Rails for Beginners", 
    topic_language: "Ruby", 
    content: "Ruby on Rails is a popular web framework for building web applications. It's easy to use and comes with many built-in features that make development faster and more efficient. In this article, we'll cover the basics of Ruby on Rails and show you how to get started with building your first web application.", 
    user_id: 1
  },
  {
    title: "Python for Machine Learning",
    topic_language: "Python",
    content: "Python is a powerful programming language that is widely used for machine learning and artificial intelligence. In this article, we'll show you how to use Python to build your own machine learning models, including how to preprocess data, build models, and evaluate their performance.",
    user_id: 1
  },
  {
    title: "JavaScript for Front-End Development",
    topic_language: "JavaScript",
    content: "JavaScript is a scripting language that is commonly used for front-end development. It allows developers to create interactive and dynamic web pages that can respond to user input. In this article, we'll show you the basics of JavaScript and how to use it to create dynamic web pages and web applications.",
    user_id: 1
  },
  {
    title: "Kotlin for Android Development",
    topic_language: "Kotlin",
    content: "Kotlin is a modern programming language that is used for Android development. It offers many features that make development faster and more efficient, including null safety, extension functions, and data classes. In this article, we'll show you how to use Kotlin to build your own Android applications.",
    user_id: 1
  },
  {
    title: "How to Build a RESTful API with Ruby on Rails",
    topic_language: "Ruby",
    content: "RESTful APIs are a popular way to build web services that can be accessed by other applications. Ruby on Rails makes it easy to build RESTful APIs using the built-in features of the framework. In this article, we'll show you how to build a RESTful API using Ruby on Rails and test it using tools like Postman.",
    user_id: 1
  },
  {
    title: "Building a Chatbot with Python and NLTK",
    topic_language: "Python",
    content: "Chatbots are becoming more and more common on websites and mobile applications. In this article, we'll show you how to build your own chatbot using Python and the Natural Language Toolkit (NLTK). We'll cover the basics of natural language processing and show you how to use NLTK to create a chatbot that can understand and respond to user input.",
    user_id: 1
  },
  {
    title: "Building Interactive Web Applications with React",
    topic_language: "JavaScript",
    content: "React is a popular JavaScript library for building interactive web applications. It allows developers to create reusable components that can be easily combined to create complex user interfaces. In this article, we'll show you how to use React to build your own interactive web applications.",
    user_id: 1
  },
  {
    title: "Building Android Apps with Java",
    topic_language: "Java",
    content:"Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today. Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.",
    user_id: 1
  }])


  Tag.create(
    name:"Front-End"
  )
  Tag.create(
    name: "Coding"
  )
  Tag.create(
    name: "Software development"
  )
  Tag.create(
    name:"Back-end"
  )
  Tag.create(
    name:"Fullstack"
  )
  Tag.create(
    name:"Javascript"
  )
  Tag.create(
    name:"Web development"
  )
  Tag.create(
    name:"UI/UX"
  )
  
  user.reviews.create([
    { article_id: 1, content: "Great introduction to Ruby on Rails!" },
    { article_id: 2, content: "Very helpful tutorial on Python machine learning!" },
    { article_id: 3, content: "JavaScript for front-end development made easy!" },
    { article_id: 4, content: "Kotlin for Android is awesome!" },
    { article_id: 5, content: "Clear and concise tutorial on building a RESTful API with Ruby on Rails!" },
    { article_id: 6, content: "Building a chatbot with Python and NLTK was easier than I thought!" },
    { article_id: 7, content: "React is a great library for building interactive web applications!" },
    { article_id: 8, content: "Java is still a solid choice for building Android apps!" }
  ])

  user2 = User.create(
    username: "stevoo",
    email: "steve.mbugua@student.moringaschool.com",
    password: "123",
    bio: "I am a goat at UI design"
  )
  
  Article.create([
    { 
      title: "Swift for iOS Development", 
      topic_language: "Swift", 
      content: "Swift is a powerful programming language for iOS development. In this article, we'll show you how to use Swift to build your own iOS applications, including how to use Xcode, create user interfaces, and handle data.",
      user_id: user2.id
    },
    {
      title: "Java for Web Development",
      topic_language: "Java",
      content: "Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today. Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.",
      user_id: user2.id
    },
    {
      title: "C# for Game Development",
      topic_language: "C#",
      content: "C# is a popular programming language for game development. In this article, we'll show you how to use C# to build your own games, including how to use the Unity game engine, create game objects, and handle user input.",
      user_id: user2.id
    },
    {
      title: "PHP for Web Development",
      topic_language: "PHP",
      content: "PHP is a server-side scripting language that is widely used for web development. In this article, we'll show you how to use PHP to build your own web applications, including how to handle user input, access databases, and work with APIs.",
      user_id: user2.id
    },
    {
      title: "TypeScript for Front-End Development",
      topic_language: "TypeScript",
      content: "TypeScript is a superset of JavaScript that adds static typing and other features to make front-end development easier and more efficient. In this article, we'll show you how to use TypeScript to build your own web applications, including how to create components, work with data, and handle events.",
      user_id: user2.id
    },
    {
      title: "Rust for Systems Programming",
      topic_language: "Rust",
      content: "Rust is a systems programming language that is designed for speed, safety, and concurrency. In this article, we'll show you how to use Rust to build your own low-level applications, including how to manage memory, create threads, and work with network sockets.",
      user_id: user2.id
    },
    {
      title: "Go for Cloud-Native Development",
      topic_language: "Go",
      content: "Go is a programming language that is designed for building scalable, cloud-native applications. In this article, we'll show you how to use Go to build your own cloud-native applications, including how to work with containers, handle HTTP requests, and scale your application.",
      user_id: 1
    },
    {
      title: "Ruby for Web Scraping",
      topic_language: "Ruby",
      content:"Ruby is a scripting language that is commonly used for web scraping. In this article, we'll show you how to use Ruby to scrape websites and extract data, including how to use libraries like Nokogiri and Mechanize, handle HTTP requests, and parse HTML and XML documents.",
      user_id: user2.id
    }
  ]
  )

  user2.reviews.create([
    { article_id: 9, content: "Great introduction to Ruby on Rails!" },
    { article_id: 10, content: "Very helpful tutorial on Python machine learning!" },
    { article_id: 11, content: "JavaScript for front-end development made easy!" },
    { article_id: 12, content: "Kotlin for Android is awesome!" },
    { article_id: 13, content: "Clear and concise tutorial on building a RESTful API with Ruby on Rails!" },
    { article_id: 14, content: "Building a chatbot with Python and NLTK was easier than I thought!" },
    { article_id: 15, content: "React is a great library for building interactive web applications!" },
    { article_id: 16, content: "Java is still a solid choice for building Android apps!" }
  ])
  

# Retrieve all articles and tags
articles = Article.all
tags = Tag.all

# Iterate through all articles and assign a random tag to each article
articles.each do |article|
  ArticleTag.create(article_id: article.id, tag_id: tags.sample.id)
end


  puts "Commmmmmmmmmpleted seeddddinggg"