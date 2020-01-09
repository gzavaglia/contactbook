class CreateNicknames < ActiveRecord::Migration[5.2]
  def change
    create_table :nicknames do |t|
      t.string :nickname

      t.timestamps
    end
  end
end
