require 'rails_helper'

RSpec.describe Reservation, type: :model do
  describe 'Check reservation validations' do
    before(:each) do
      User.create(username: "testUser")
      Car.create(name:"bugatti", model:"chiron", description:"2018 blue car", price:439000000)
      City.create(name:"Montelibano")
    end

    it 'rejects empty date' do
      reservation1 = Reservation.new(car_id: 1, city_id: 1, user_id: 1, date: '')
      expect(reservation1.valid?).to eq(false)
    end

    it 'rejects empty car_id' do
      reservation1 = Reservation.new(car_id: '', city_id: 1, user_id: 1, date: '2021-11-1')
      expect(reservation1.valid?).to eq(false)
    end

    it 'rejects empty city_id' do
      reservation1 = Reservation.new(car_id: 1, city_id: '', user_id: 1, date: '2021-11-1')
      expect(reservation1.valid?).to eq(false)
    end

    it 'rejects empty user_id' do
      reservation1 = Reservation.new(car_id: 1, city_id: 1, user_id: '', date: '2021-11-1')
      expect(reservation1.valid?).to eq(false)
    end
  end

  describe "Check associations with other models" do
    it { should belong_to(:user)}
    it { should belong_to(:car)}
    it { should belong_to(:city)}
  end
end
