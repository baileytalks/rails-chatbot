Rails.application.routes.draw do
  root 'home#index'

  get 'admin', :to => 'admin#index'

  resources :responses
  resources :messages
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
