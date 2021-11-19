class Image < ApplicationRecord
  include ImageUploader::Attachment(:image)
end
