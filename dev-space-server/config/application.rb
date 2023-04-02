require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module DevSpaceServer
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 71439411f8b8125aceaa49d65648e656f7179fc5

  config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*' # Change this to the domain(s) you want to allow
      resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options]
    end
  end

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
<<<<<<< HEAD
=======
=======
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.action_dispatch.cookies_same_site_protection = :strict
>>>>>>> 62099abee15e1a8a5c1d0afa7d5b10783e9a7fa4
>>>>>>> 71439411f8b8125aceaa49d65648e656f7179fc5
  end
end
