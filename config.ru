require 'rack'
require 'rack/contrib/try_static'
require 'rack/contrib/static_cache'

use Rack::TryStatic,
  root: ".",  # static files root dir
  urls: %w[/],     # match all requests 
  try: ['.html', 'index.html', '/index.html'] # try these postfixes sequentially
use Rack::StaticCache,
  root: ".",
  urls: ["/"]

# otherwise 404 NotFound
run lambda {|env| [404, {'Content-Type' => 'text/html'}, ['whoops! Not Found']]}
