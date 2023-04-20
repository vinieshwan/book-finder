# frozen_string_literal: true

# Book Author model
class BookAuthor < ApplicationRecord
  belongs_to :book
  belongs_to :author
end
