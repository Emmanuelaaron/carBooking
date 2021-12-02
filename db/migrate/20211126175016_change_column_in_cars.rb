class ChangeColumnInCars < ActiveRecord::Migration[6.1]
  def change
    change_table :cars do |t|
      t.change :image_data, :string
    end
  end
end
