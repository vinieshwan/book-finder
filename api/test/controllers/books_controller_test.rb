require "test_helper"

class BooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @book = books(:one)
  end

  test "should successfully retrieve book details" do
    get "/api/books/#{@book.isbn}"

    assert_equal status, 200
  end

  test "should respond with status 404 if no found book using the provided isbn" do
    get "/api/books/978-1-60309-454-2"

    assert_equal status, 404
  end

  test "should respond with status 400 if the provided isbn number is invalid" do
    get "/api/books/sample"

    assert_equal status, 400
  end

  test "should successfully convert isbn" do
    get "/api/books/isbn_conversion/#{@book.isbn}"

    assert_equal status, 200
  end

  test "should respond with status 400 if the provided isbn number is invalid during conversion" do
    get "/api/books/isbn_conversion/sample"

    assert_equal status, 400
  end

  test "should successfully respond the type of isbn" do
    get "/api/books/which_isbn/#{@book.isbn}"

    assert_equal status, 200
  end

  test "should respond with status 400 if the provided isbn number is not a valid type" do
    get "/api/books/which_isbn/sample"

    assert_equal status, 400
  end
end
