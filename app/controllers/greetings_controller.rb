class GreetingsController < ApplicationController
  def index; end

  def greeting
    greeting = Greeting.all.sample
    render json: greeting
  end
end
