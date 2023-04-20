# frozen_string_literal: true

module Utils
  # Handles response format
  class Response
    def initialize(response, opts, serializer = nil)
      @response = response
      @opts = opts
      @serializer = serializer
    end

    # rubocop: todo Metrics/MethodLength
    def to_h
      if @response.is_a? ErrorResponses::Error
        return {
          json: @response.as_json,
          status: @response.status
        }
      end

      {
        json: @response,
        each_serializer: @serializer,
        status: @opts[:status]
      }
    end
    # rubocop: enable Metrics/MethodLength
  end
end
