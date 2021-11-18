class City < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_many :reservations, class_name: 'Reservation', foreign_key: 'user_id'
end
