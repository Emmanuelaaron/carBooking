class AuthenticateUser
  def initialize(username)
    @username = username
  end

  def call
    { token: JsonWebToken.encode(user_id: user.id), level: user.level } if user
  end

  private

  attr_reader :username

  def user
    user = User.find_by(username: @username)
    return user if user
    render json: { message: 'User does not exist!', code: 404}
  end
end
