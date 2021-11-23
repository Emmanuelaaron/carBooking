class Api::V1::CarsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @cars = Car.all;
    render json: @cars
  end
end
