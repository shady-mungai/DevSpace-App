Rails.application.routes.draw do
  resources :users, only: [:index, :show]
 # post '/login',to: 'users#login'
<<<<<<< HEAD
   post '/signup',to: 'users#signup'
   delete "/logout", to: "sessions#logout"
   post "/login", to: "sessions#login"
   resources :tags, only:[:index]
   resources :reviews, only: [:create]
   resources :articles, only:[:index,:show,:destroy]
=======
  post '/signup',to: 'users#signup'
  delete "/logout", to: "sessions#logout"
  post "/login", to: "sessions#login"
  # resources :tags
  # resources :reviews
   resources :articles, only:[:index]
>>>>>>> 71439411f8b8125aceaa49d65648e656f7179fc5

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
