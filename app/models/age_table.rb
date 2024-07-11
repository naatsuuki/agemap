class AgeTable < ApplicationRecord
  belongs_to :user
  has_many :comparison_users

  validates :table_title, presence: true
end
