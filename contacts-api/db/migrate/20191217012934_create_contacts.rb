class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.integer :user_id
      t.timestamps
    end
  end
end
