Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create]
 # post '/login',to: 'users#login'

  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  # resources :tags
  # resources :reviews
   resources :articles, only:[:index]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
