class Api::V1::CarsController < ApplicationController
  skip_before_action :verify_authenticity_token

  before_action :authorize_request

  def index
    @cars = Car.all
    render json: { cars: @cars, code: 1 }
    # render json:{ cars: @cars, code: 1, requested_by: @current_user[:username]}
  end
end
