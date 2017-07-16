class AdminController < ApplicationController
  http_basic_authenticate_with :name => "admin", :password => "alienz", only: :index

  def index
  end
end
