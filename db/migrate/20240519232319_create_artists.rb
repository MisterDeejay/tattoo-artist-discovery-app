class CreateArtists < ActiveRecord::Migration[7.1]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.text :biography
      t.string :style
      t.string :contact_info
      t.string :website
      t.string :instagram_handle
      t.float :rating, default: 0.0
      t.integer :reviews_count, default: 0
      t.timestamps
    end

    add_index :artists, :name
    add_index :artists, :instagram_handle, unique: true
  end
end
