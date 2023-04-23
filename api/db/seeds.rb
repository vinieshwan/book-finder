# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


def load_data_from_json(file)
  file_data = File.read(file)
  JSON.parse(file_data)
end

def create_publisher(publishers)
  publishers.each do |publisher|
    Publisher.create(id: publisher['id'], name: publisher['name'])
  end
end

def create_book(books)
  books.each do |book|
    Book.create(
      id: book['id'],
      title: book['title'],
      isbn: book['isbn'],
      price: book['price'],
      currency: book['currency'],
      publication_year: book['publication_year'],
      edition: book['edition'],
      image: book['image']
    )
  end
end

def create_author(authors)
  authors.each do |author|
    Author.create(
      id: author['id'],
      firstname: author['firstname'],
      middlename: author['middlename'],
      lastname: author['lastname']
    )
  end
end

def create_book_publisher(book_publishers)
    book_publishers.each do |book_publisher|
      BookPublisher.create(book_id: book_publisher['book_id'], publisher_id: book_publisher['publisher_id'])
    end
end

def create_book_author(book_authors)
    book_authors.each do |book_author|
      BookAuthor.create(book_id: book_author['book_id'], author_id: book_author['author_id'])
    end
end

create_publisher(load_data_from_json("#{__dir__}/jsons/publisher.json"))
create_book(load_data_from_json("#{__dir__}/jsons/book.json"))
create_author(load_data_from_json("#{__dir__}/jsons/author.json"))
create_book_publisher(load_data_from_json("#{__dir__}/jsons/book_publisher.json"))
create_book_author(load_data_from_json("#{__dir__}/jsons/book_author.json"))