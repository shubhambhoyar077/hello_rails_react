Rails.application.routes.draw do
  root "greetings#index"
  get '/api/greeting', to: 'greetings#greeting'

end
