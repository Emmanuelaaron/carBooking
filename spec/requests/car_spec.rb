require 'rails_helper'

RSpec.describe 'Cars', type: :request do
  describe 'GET /api/v1/home' do
    before(:each) do
      post '/api/v1/new-user', params: { username: 'jaar' }
      @token = JSON.parse(response.body)['token']
      post '/api/v1/new-car',
           params: { name: 'Ford', model: 'mustang', description: '1971 classic black', price: 850_000 },
           headers: { Authorization: @token }
      post '/api/v1/new-car',
           params: { name: 'Ford', model: 'Escape', description: '2010 grey echo boost', price: 8000 },
           headers: { Authorization: @token }
    end

    it 'return all the cars after validation token' do
      get '/api/v1/home', params: {}, headers: { Authorization: @token }
      expect(JSON.parse(response.body)['cars'].length).to eq(2)
    end
  end

  describe 'GET /api/v1/new-car' do
    before(:each) do
      post '/api/v1/new-user', params: { username: 'jaar' }
      @token = JSON.parse(response.body)['token']
    end

    it 'allow you to add new cars' do
      post '/api/v1/new-car',
           params: { name: 'Ford', model: 'mustang', description: '1971 classic black', price: 850_000 },
           headers: { Authorization: @token }
      expect(JSON.parse(response.body)['code']).to eq(201)
    end
  end

  describe 'GET /api/v1/cars/:id' do
    before(:each) do
      post '/api/v1/new-user', params: { username: 'jaar' }
      @token = JSON.parse(response.body)['token']
      post '/api/v1/new-car',
           params: { name: 'Ford', model: 'mustang', description: '1971 classic black', price: 850_000 },
           headers: { Authorization: @token }
    end

    it 'allows you to delete cars' do
      get '/api/v1/home', params: {}, headers: { Authorization: @token }
      id = JSON.parse(response.body)['cars'][0]['id']
      delete "/api/v1/cars/#{id}", params: {}, headers: { Authorization: @token }
      expect(JSON.parse(response.body)['code']).to eq(202)
    end
  end
end
