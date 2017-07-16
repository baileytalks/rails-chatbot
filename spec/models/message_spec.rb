require 'rails_helper'

RSpec.describe Message, type: :model do
  before(:each) do
    @message = Message.create(content: 'test', threat: '1')
  end

  it 'can be created with a threat level and content' do
    expect(@message).to be_valid
  end

  it 'threat level is saved properly' do
    expect(@message.threat).to eq('1')
  end

  it 'content is saved properly' do
    expect(@message.content).to eq('test')
  end

  it 'messages can be edited' do
    message_params = { content: 'test2', threat: '2'}
    @message.update(message_params)
    expect(@message.content).to eq('test2')
  end
end
