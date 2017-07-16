class HomeController < ApplicationController
  def index
    @messages = Message.all
    @firstresponses = Response.order("RANDOM()").first
    @responses = Response.all
  end
end
