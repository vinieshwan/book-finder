# frozen_string_literal: true

module BooksUseCases
  # Use case for retrieving book details
  class GetBook < ApplicationUseCases
    class InvalidParameterError < StandardError; end
    class ResourceNotFoundError < StandardError; end

    def initialize(id:)
      @id = id
    end

    def validate
      Utils::Validator.isbn_13?(@id)
    end

    # rubocop: todo Metrics/MethodLength
    def perform
      raise InvalidParameterError if validate.nil?
      raise ResourceNotFoundError if book.empty?

      book
    rescue ResourceNotFoundError
      Utils::ErrorResponses::ResourceNotFound.create(
        detail: 'Book number does not exist.'
      )
    rescue InvalidParameterError
      Utils::ErrorResponses::BadRequest.create(
        detail: 'Invalid isbn-13 number provided.'
      )
    end
    # rubocop: enable Metrics/MethodLength

    private

    def book
      @book ||= Book.includes(:authors, :publishers).where(books: { isbn: @id })
    end
  end
end
