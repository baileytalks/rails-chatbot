class HomeController < ApplicationController
  def index
    @message = Message.order("RANDOM()").first
    @response = Response.order("RANDOM()").first
  end
end
