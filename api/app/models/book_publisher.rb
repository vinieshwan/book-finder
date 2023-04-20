# frozen_string_literal: true

# Book Publisher model
class BookPublisher < ApplicationRecord
  belongs_to :book
  belongs_to :publisher
end
