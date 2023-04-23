# frozen_string_literal: true

module BooksUseCases
  # Use case for converting a book number
  class WhichIsbn < ApplicationUseCases
    class InvalidParameterError < StandardError; end

    def initialize(id:)
      @id = id.strip
    end

    def valid?
      valid_isbn_10? || valid_isbn_13?
    end

    def perform
      raise InvalidParameterError unless valid?

      return 10 if valid_isbn_10?

      13
    rescue InvalidParameterError
      Utils::ErrorResponses::BadRequest.create(
        detail: 'Invalid isbn-13 number provided.'
      )
    end

    private

    def valid_isbn_10?
      Utils::Isbn.isbn_10?(@id)
    end

    def valid_isbn_13?
      Utils::Isbn.isbn_13?(@id)
    end
  end
end
