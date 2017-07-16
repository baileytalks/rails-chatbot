class HomeController < ApplicationController
  def index
    @messages = Message.all
    if @messages.blank?
      @array = @messages.order("RANDOM()")
    else
      @array = [{content: 'test'}, {content: 'test'}, {content: 'test'}, {content: 'test'}, {content: 'test'}, {content: 'test'}, {content: 'test'},]
    end
  end
end
