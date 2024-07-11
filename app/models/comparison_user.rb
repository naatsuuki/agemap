class ComparisonUser < ApplicationRecord
  validates :name, presence: true
  validates :birth_year, presence: true, numericality: { only_integer: true, greater_than: 0 }
end
