require 'rails_helper'

def http_login
  user = 'admin'
  pw = 'alienz'
  request.env['HTTP_AUTHORIZATION'] = ActionController::HttpAuthentication::Basic.encode_credentials(user,pw)
end

describe AdminController do
  render_views

  before(:each) do
    http_login
  end

  describe "GET 'admin'" do
    it "should be successful" do
      get 'index'
      response.should be_success
    end
  end

end
