class AddThreatlevelToResponses < ActiveRecord::Migration[5.1]
  def change
    add_column :responses, :threat, :text
  end
end
