class AddContactIdToNickname < ActiveRecord::Migration[5.2]
  def change
    add_column :nicknames, :contact_id, :integer
  end
end
