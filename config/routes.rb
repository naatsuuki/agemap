Rails.application.routes.draw do
  root 'welcome#index'

  resources :users, only: [:create]
  post '/api/create-age-table', to: 'users#create_age_table'
  post '/api/save-table', to: 'age_tables#save_table'  # 追加

  resources :age_tables, only: [:new, :create, :destroy]

  # 表の新規作成アクションに対するルートを追加
  get 'create_table', to: 'age_tables#new', as: 'create_table'

  # その他のルートを追加する場合にはここに記述する
end
