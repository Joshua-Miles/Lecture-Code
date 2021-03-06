require 'bundler/setup'
Bundler.require # <- Require all of our gems


if ENV['ACTIVE_RECORD_ENV'] == 'test'
  # Mock Database
  # Fake Database to use while our tests run
  ActiveRecord::Base.logger = nil
  ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: ":memory:"
  )
else
  ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: "db/development.sqlite"
  )
end

require_all 'app' # <- Require all of our models