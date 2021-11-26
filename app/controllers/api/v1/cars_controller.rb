class Api::V1::CarsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # before_action :authorize_request

  def index
    @cars = Car.all
    render json: { cars: @cars, code: 200 }
    # render json:{ cars: @cars, code: 1, requested_by: @current_user[:username]}
  end

  def create
    @car = Car.new(cars_params)
    if @car.save
      render json: {
        message: 'Car Added',
        code: 201
      }
    else
      render json: {
        message: @car.errors.messages
      }
    end
  end

  private

  def cars_params
    params.permit(:name, :model, :description, :price, :image)
  end
end
