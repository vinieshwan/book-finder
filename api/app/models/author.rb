# frozen_string_literal: true

# Author model
class Author < ApplicationRecord
  has_many :book_authors
  has_many :books, through: :book_authors

  validates :firstname, presence: true
  validates :lastname, presence: true
end
