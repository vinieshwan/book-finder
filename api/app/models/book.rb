# frozen_string_literal: true

# Book model
class Book < ApplicationRecord
  has_many :book_authors
  has_many :authors, through: :book_authors

  has_many :book_publishers
  has_many :publishers, through: :book_publishers

  validates :title, presence: true
  validates :isbn, presence: true
  validates :price, presence: true
  validates :currency, presence: true
  validates :publication_year, presence: true
end
