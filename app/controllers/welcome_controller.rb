# app/controllers/welcome_controller.rb
class WelcomeController < ApplicationController
  def index
    @user = User.new
    @comparison_user = ComparisonUser.new
  end
end
