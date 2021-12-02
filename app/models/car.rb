class Car < ApplicationRecord
  include ImageUploader::Attachment(:image)
  has_many :reservations, dependent: :destroy, class_name: 'Reservation', foreign_key: 'car_id'
  attribute :imageData

  validates :name, presence: true
  validates :model, presence: true
  validates :description, presence: true
  validates :price, presence: true
  # rubocop:disable all
  def imageData
    image_url
  end
  # rubocop:enable all
end
