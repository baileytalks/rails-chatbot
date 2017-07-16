Rails.application.routes.draw do
  get 'home/index'

  root 'home#index'

  resources :responses
  resources :messages
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
