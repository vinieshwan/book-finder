# frozen_string_literal: true

module Utils
  # Handles conversion
  class Isbn
    class << self
      def isbn_10?(isbn)
        return false if /[A-WYZa-z]+/ =~ isbn

        number = isbn_cleanup(isbn)

        return false if number.length != 10

        checkdigit = isbn10_checkdigit(number)

        return false if checkdigit.positive?

        true
      end

      def isbn_13?(isbn)
        return false if /[A-Za-z]+/ =~ isbn

        number = isbn_cleanup(isbn)

        return false if number.length != 13

        checkdigit = isbn13_checkdigit(number)

        return false if checkdigit.positive?

        true
      end

      def to_isbn10(isbn)
        number = isbn_cleanup(isbn).drop(3)
        number.pop

        checkdigit = 11 - isbn10_checkdigit(number)

        number.push(checkdigit == 10 ? 'X' : checkdigit)

        number.join.insert(1, '-').insert(5, '-').insert(11, '-')
      end

      def to_isbn13(isbn)
        number = isbn_cleanup("978#{isbn}")
        number.pop

        checkdigit = 10 - isbn13_checkdigit(number)

        number.push(checkdigit == 10 ? 0 : checkdigit)

        number.join.insert(3, '-').insert(5, '-').insert(11, '-').insert(15, '-')
      end

      private

      def isbn_cleanup(isbn)
        isbn.gsub(/[-\s]*/, '').split('')
      end

      def isbn10_checkdigit(isbn)
        sum = 0

        isbn.each_with_index do |number, index|
          sum += (number == 'X' ? 10 : number).to_i * (10 - index)
        end

        sum % 11
      end

      def isbn13_checkdigit(isbn)
        sum = 0

        isbn.each_with_index do |number, index|
          sum += number.to_i * (index.even? ? 1 : 3)
        end

        sum % 10
      end
    end
  end
end
