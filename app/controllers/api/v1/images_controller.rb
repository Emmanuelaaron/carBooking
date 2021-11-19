class Api::V1::ImagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @image = Carimg.new(body_params)
    if @image.save
      render json: { message: "Image saved"}
    else
      render json: { message: "Image not saved"}
    end
  end

  private

  def body_params
    params.permit(:image)
  end
end
