class Car < ApplicationRecord
  include ImageUploader::Attachment(:image)
  has_many :reservations, class_name: 'Reservation', foreign_key: 'car_id'
  validates :name, presence: true
  validates :model, presence: true
  validates :description, presence: true
  validates :price, presence: true
end
