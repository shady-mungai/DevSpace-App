Rails.application.routes.draw do
  resources :users, only: [:index, :show]
 # post '/login',to: 'users#login'
  post '/signup',to: 'users#signup'
  delete "/logout", to: "sessions#logout"
  post "/login", to: "sessions#login"
  # resources :tags
  # resources :reviews
   resources :articles, only:[:index]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
