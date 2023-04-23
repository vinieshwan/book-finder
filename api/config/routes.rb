Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  scope :api do
    resources :books, only: [:show]
    get '/books/isbn_conversion/:id', to: 'books#isbn_conversion'
    get '/books/which_isbn/:id', to: 'books#which_isbn'
  end
end
