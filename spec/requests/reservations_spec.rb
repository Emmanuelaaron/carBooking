require 'rails_helper'

RSpec.describe 'Reservations', type: :request do
  describe 'GET /api/v1/cars-and-cities' do
    before(:each) do
      post '/api/v1/new-user', params: { username: 'jaar' }
      @token = JSON.parse(response.body)['token']
      post '/api/v1/new-car',
           params: { name: 'Ford', model: 'mustang', description: '1971 classic black', price: 850_000 },
           headers: { Authorization: @token }
      City.create(name: 'New York')
    end

    it 'return all the cars and cities in one request' do
      get '/api/v1/cars-and-cities', params: {}, headers: { Authorization: @token }
      expect(JSON.parse(response.body)['cities'].length).to eq(1)
      expect(JSON.parse(response.body)['cars'].length).to eq(1)
    end

    it 'return token missing if token not sent' do
      get '/api/v1/cars-and-cities', params: {}
      expect(JSON.parse(response.body)['code']).to eq(404)
    end
  end

  describe 'GET /api/v1/cars-and-cities' do
    before(:each) do
      post '/api/v1/new-user', params: { username: 'jaar' }
      @token = JSON.parse(response.body)['token']
      @car = Car.create(name: 'Ford', model: 'mustang', description: '1971 classic black', price: 850_000)
      @city = City.create(name: 'New York')
    end

    it 'return all the cars and cities in one request' do
      post '/api/v1/reservations/new', params: { car_id: @car.id, city_id: @city.id, date: '2021-11-30' },
                                       headers: { Authorization: @token }
      expect(JSON.parse(response.body)['code']).to eq(201)
    end
  end
end
