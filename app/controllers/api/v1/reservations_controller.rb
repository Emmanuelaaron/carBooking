class Api::V1::ReservationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  before_action :authorize_request

  def create
    user_id = @current_user[:id]
    @reservation = Reservation.new(date: "", car_id: "", city_id: "", user_id: user_id)
    if @reservation.save
      render json: { reservation: @reservation, code: 201}
    else
      render json: { message: 'Reservation not created', code: 409 }
    end
  end

  def index
    @cities = City.all
    @cars = Car.all
    render json: { cities: @cities,  cars: @cars, code: 200 }
  end
end