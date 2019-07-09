Rails.application.routes.draw do
  get "index" => "user#index"
  get "user/show" => "user#show"
end
