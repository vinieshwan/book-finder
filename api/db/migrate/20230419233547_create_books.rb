class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :isbn, null: false
      t.decimal :price, null: false
      t.string :currency, null: false
      t.integer :publication_year, null: false
      t.string :image
      t.string :edition

      t.timestamps
    end
    add_index :books, :isbn
  end
end
