# frozen_string_literal: true

module Utils
  # Handles response format
  class Validator
    # rubocop: todo Layout/LineLength
    def self.isbn_13?(number)
      /(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$/ =~ number
    end
    # rubocop: enable Layout/LineLength
  end
end
