require 'rails_helper'

RSpec.describe 'Users', type: :request do
  describe 'GET /api/v1/newuser' do
    it 'let you create a new user' do
      post '/api/v1/new-user', params: { username: 'jaar' }
      expect(JSON.parse(response.body)['code']).to eq(200)
    end

    it 'let you create only one user with the same username' do
      post '/api/v1/new-user', params: { username: 'jaar' }
      post '/api/v1/new-user', params: { username: 'jaar' }
      expect(JSON.parse(response.body)['code']).to eq(409)
    end

    it 'wont let you create a user with an empty value' do
      post '/api/v1/new-user', params: { username: '' }
      expect(JSON.parse(response.body)['code']).to eq(204)
    end
  end

  describe 'GET /api/v1/login' do
    it 'let you log in with an existing username' do
      post '/api/v1/new-user', params: { username: 'jaar' }
      post '/api/v1/login', params: { username: 'jaar' }
      expect(JSON.parse(response.body)['code']).to eq(200)
    end

    it 'let you log if user exist' do
      post '/api/v1/login', params: { username: 'jaar' }
      expect(JSON.parse(response.body)['code']).to eq(201)
    end

    it 'wont let you log in with empty information' do
      post '/api/v1/login', params: { username: '' }
      expect(JSON.parse(response.body)['code']).to eq(204)
    end
  end
end
