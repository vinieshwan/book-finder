# frozen_string_literal: true

# Books controller
class BooksController < ApplicationController
  def isbn_conversion
    response = BooksUseCases::IsbnConversion.new(id: params[:id]).perform

    render Utils::Response.new(response, { status: :ok }).to_h
  end

  def show
    response = BooksUseCases::GetBook.new(id: params[:id]).perform

    render Utils::Response.new(response, { status: :ok }, BookSerializer).to_h
  end

  def which_isbn
    response = BooksUseCases::WhichIsbn.new(id: params[:id]).perform

    render Utils::Response.new(response, { status: :ok }).to_h
  end
end
