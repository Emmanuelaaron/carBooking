class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    if body_params
      @user = User.new(body_params)
      if @user.save
        token = AuthenticateUser.new(body_params[:username]).call
        token['message'] = 'User Created Succesfuly, Welcome ' + body_params[:username] + '!'
        token['code'] = 200
        render json: token
      else
        render json: { message: 'User is already in use', code: 409 }
      end
    else
      render json: { message: 'User information not sent!', code: 204 }
    end
  end

  def login
    if body_params
      @user = User.find_by(body_params)
      if @user
        token = AuthenticateUser.new(body_params[:username]).call
        token['message'] = 'Logged in Succesfuly, Welcome back ' + body_params[:username] + '!'
        token['code'] = 200
        render json: token
      else
        render json: { message: 'Invalid username', code: 201 }
      end
    else
      render json: { message: 'User information not sent!', code: 204 }
    end
  end

  private

  def body_params
    params.permit(:username)
  end
end
