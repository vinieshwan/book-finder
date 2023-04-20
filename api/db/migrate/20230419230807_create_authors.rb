class CreateAuthors < ActiveRecord::Migration[7.0]
  def change
    create_table :authors do |t|
      t.string :firstname, null: false
      t.string :middlename
      t.string :lastname, null: false

      t.timestamps
    end
  end
end
