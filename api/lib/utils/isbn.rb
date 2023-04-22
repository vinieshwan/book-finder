# frozen_string_literal: true

module Utils
  # Handles conversion
  class Isbn
    # rubocop: todo Metrics/ClassLength
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

        hyphenate_isbn(number.join)
      end

      def to_isbn13(isbn)
        number = isbn_cleanup("978#{isbn}")
        number.pop

        checkdigit = 10 - isbn13_checkdigit(number)

        number.push(checkdigit == 10 ? 0 : checkdigit)

        hyphenate_isbn(number.join)
      end

      private

      # rubocop: todo Metrics/AbcSize, Metrics/CyclomaticComplexity, Metrics/MethodLength, Metrics/PerceivedComplexity
      def hyphenate_isbn(isbn)
        prefix = isbn.length == 13 ? "#{isbn[0...3]}-" : ''
        group = isbn.length == 13 ? isbn[3..] : isbn

        rg = group[0...1].to_i
        re = group[1...3].to_i
        pe = group[1...5].to_i

        case rg
        when 0, 3, 4
          case re
          when 0...20
            regex = /(\d)(\d{2})(\d{6})(\w)/
          when 0...70
            regex = /(\d)(\d{3})(\d{5})(\w)/
          when 0...85
            regex = /(\d)(\d{4})(\d{4})(\w)/
          when 0...90
            regex = /(\d)(\d{5})(\d{3})(\w)/
          when 0...95
            regex = /(\d)(\d{6})(\d{2})(\w)/
          when 0..99
            regex = /(\d)(\d{7})(\d)(\w)/
          end
        when 1
          case pe
          when 0...1000
            regex = /(\d)(\d{2})(\d{6})(\w)/
          when 0...4000
            regex = /(\d)(\d{3})(\d{5})(\w)/
          when 0...5500
            regex = /(\d)(\d{4})(\d{4})(\w)/
          when 0...8698
            regex = /(\d)(\d{5})(\d{3})(\w)/
          when 0...9990
            regex = /(\d)(\d{6})(\d{2})(\w)/
          when d4..9999
            regex = /(\d)(\d{7})(\d)(\w)/
          end
        when 2
          case re
          when 0...20
            regex = /(\d)(\d{2})(\d{6})(\w)/
          when 0...70
            regex = /(\d)(\d{3})(\d{5})(\w)/
          when 0...84
            regex = /(\d)(\d{4})(\d{4})(\w)/
          when 0...90
            regex = /(\d)(\d{5})(\d{3})(\w)/
          when 0...95
            regex = /(\d)(\d{6})(\d{2})(\w)/
          when 0..99
            regex = /(\d)(\d{7})(\d)(\w)/
          end
        when 9
          d2 = group[2...4] if group[1...2].zero?

          case d2
          when 0...20
            regex = /(\d{2})(\d{2})(\d{5})(\w)/
          when 0...50
            regex = /(\d{2})(\d{3})(\d{4})(\w)/
          when 0...70
            regex = /(\d{2})(\d{4})(\d{3})(\w)/
          when 0...80
            regex = /(\d{2})(\d{5})(\d{2})(\w)/
          when 0..81
            regex = /(\d{2})(\d{6})(\d)(\w)/
          end

          d2 = group[3...5] if group[1...3] == 65

          case d2
          when 0...20
            regex = /(\d{3})(\d{2})(\d{4})(\w)/
          when 0...70
            regex = /(\d{3})(\d{3})(\d{3})(\w)/
          when 0...90
            regex = /(\d{3})(\d{4})(\d{2})(\w)/
          when 0..95
            regex = /(\d{3})(\d{5})(\d)(\w)/
          end

          d2 = group[3...5] if group[1...3] == 81

          case d2
          when 0...20
            regex = /(\d{3})(\d{2})(\d{4})(\w)/
          when 0...30
            regex = /(\d{3})(\d{3})(\d{3})(\w)/
          when 0..40
            regex = /(\d{3})(\d{4})(\d{2})(\w)/
          end
        end

        "#{prefix}#{group.gsub(regex, '\1-\2-\3-\4')}"
      end
      # rubocop: enable Metrics/AbcSize, Metrics/CyclomaticComplexity, Metrics/MethodLength, Metrics/PerceivedComplexity

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
    # rubocop: enable Metrics/ClassLength
  end
end
