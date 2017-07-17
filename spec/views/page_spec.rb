require 'rails_helper'

RSpec.feature 'Page', type: :feature do
  scenario 'will have a footer on home page' do
    visit '/'
    expect(page.source).to include('<footer>')
  end

  scenario 'alien will have started the chat when human user opens page' do
    visit '/'
    expect(page.source).to include('Greetings')
  end

  scenario 'chat option boxes appear when human user opens page' do
    visit '/'
    expect(page.source).to include('options')
  end
end
