# frozen_string_literal: true

# Books serializer
class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :isbn, :price, :currency, :publication_year, :edition, :publisher, :authors

  def authors
    authors_list = object.authors.map do |author|
      "#{author.firstname} #{author.middlename} #{author.lastname}"
    end

    authors_list.join(', ')
  end

  def publisher
    object.publishers.first.name
  end
end
