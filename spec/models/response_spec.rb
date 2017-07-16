require 'rails_helper'

RSpec.describe Response, type: :model do
  before(:each) do
    @response = Response.create(content: 'test', threat: '1')
  end

  it 'can be created with a threat level and content' do
    expect(@response).to be_valid
  end

  it 'threat level is saved properly' do
    expect(@response.threat).to eq('1')
  end

  it 'content is saved properly' do
    expect(@response.content).to eq('test')
  end

  it 'responses can be edited' do
    response_params = { content: 'test2', threat: '2'}
    @response.update(response_params)
    expect(@response.content).to eq('test2')
  end
end
