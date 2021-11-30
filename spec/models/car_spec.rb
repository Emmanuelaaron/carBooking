require 'rails_helper'

RSpec.describe Car, type: :model do
  it 'car require name, model, description, price' do
    Car.create(name: 'Ford', model: 'mustang', description: '1971 black with silver line', price: 450_000)
    expect(Car.all.length).to eq(1)
  end
end
