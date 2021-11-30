require 'rails_helper'

RSpec.describe "Cars", type: :request do
  describe "GET /api/v1/home" do
    before(:each) do
      get '/api/v1/newuser', params: { :username => 'jaar'}
      @token JSON.parse(response.body)['token']
      post '/api/v1/new-car', params: { :username => ''}
    end

    it "let you create a new user" do
      
      get '/api/v1/home', params: { :username => 'jaar'}

      expect(JSON.parse(response.body)['code']).to eq(200)
    end

    it "let you create only one user with the same username" do
      post '/api/v1/newuser', params: { :username => 'jaar'}
      post '/api/v1/newuser', params: { :username => 'jaar'}
      expect(JSON.parse(response.body)['code']).to eq(409)
    end

    it "wont let you create a user with an empty value" do
      post '/api/v1/newuser', params: { :username => ''}
      expect(JSON.parse(response.body)['code']).to eq(204)
    end
  end
end
