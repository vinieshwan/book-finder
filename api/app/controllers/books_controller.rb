# frozen_string_literal: true

# Books controller
class BooksController < ApplicationController
  def show
    response = BooksUseCases::GetBook.new(id: params[:id]).perform

    render Utils::Response.new(response, { status: :ok }, BookSerializer).to_h
  end
end
