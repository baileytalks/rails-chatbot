class HomeController < ApplicationController
  def index
    @messages = Message.all
  end
end
