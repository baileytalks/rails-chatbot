json.extract! response, :id, :content, :created_at, :updated_at
json.url response_url(response, format: :json)
