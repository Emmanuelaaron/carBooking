# frozen_string_literal: true

Rails.application.routes.draw do
 
  namespace :api do
    namespace :v1 do
      post '/newuser', to: "users#create"
      post '/login', to: "users#login"
      get '/home', to: "cars#index"
      post '/newcar', to: "cars#create"
      get '/carsNcities', to: "reservations#index"
      post '/reservations/new', to: "reservations#create"
    end
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
