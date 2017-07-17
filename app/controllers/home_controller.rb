class HomeController < ApplicationController
  def index
    @messages = Message.all
    @array = @messages.order("RANDOM()")
  end
end
