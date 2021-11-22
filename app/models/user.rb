class User < ApplicationRecord
  has_many :reservations, class_name: 'Reservation', foreign_key: 'user_id'
  validates :username, presence: true, uniqueness: true
end
