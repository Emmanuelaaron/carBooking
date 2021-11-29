class Api::V1::CarsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # before_action :authorize_request

  def index
    @cars = Car.all
    @cars.map { |car| car[:image_data] = car.image_url }
    render json: { cars: @cars, code: 200 }
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

  def destroy
    @car = Car.find_by(id: params[:id])
    if @car
      @car.destroy
      render json: {
        message: 'Car deleted succesfully',
        code: 202
      }
    else
      render json: {
        message: 'Car does not exist',
        code: 204
      }
    end
  end

  private

  def cars_params
    params.permit(:name, :model, :description, :price, :image)
  end
end
