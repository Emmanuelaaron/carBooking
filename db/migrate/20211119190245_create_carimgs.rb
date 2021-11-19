class CreateCarimgs < ActiveRecord::Migration[6.1]
  def change
    create_table :carimgs do |t|
      t.string :image_data

      t.timestamps
    end
  end
end
