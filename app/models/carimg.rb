class Carimg < ApplicationRecord
  include ImageUploader::Attachment(:image)
end
