class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    if body_params[:username] != ""
      @user = User.new(username: body_params[:username])
      if @user.save
        token = AuthenticateUser.new(body_params[:username]).call
        token['message'] = 'User Created Succesfuly!'
        token['code'] = 200
        render json: token
      else
        render json: { message: 'User is already in use', code: 409 }
      end
    end
  end

  def login
    if body_params[:username] != ""
      @user = User.find_by(username: body_params[:username])
      if @user
        token = AuthenticateUser.new(body_params[:username]).call
        token['message'] = 'Logged in Succesfuly!'
        token['code'] = 200
        render json: token
      else
        render json: { message: 'Invalid username', code: 201 }
      end
    end
  end

  private

  def body_params
    params.permit(:username)
  end
end
