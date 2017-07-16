class AddThreatlevelToMessages < ActiveRecord::Migration[5.1]
  def change
    add_column :messages, :threat, :integer
  end
end
