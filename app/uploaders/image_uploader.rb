class ImageUploader < Shrine 
    Attacher.validate do 
        validate_mime_type %W[image/jpeg image/png image/webp] 
        validate_max_size 1*2024*2024 
    end 
end 