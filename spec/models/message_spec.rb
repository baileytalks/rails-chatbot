require 'rails_helper'

RSpec.describe Message, type: :model do
  it 'can be created' do
    message = Message.create(content: 'test')
    expect(message).to be_valid
  end
end
