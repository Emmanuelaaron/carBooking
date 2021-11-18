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
    raise(ExceptionHandler::AuthenticationError, Message.invalid_credentials)
  end
end
