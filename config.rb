###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

activate :directory_indexes do
  page "/submit-abstract.php", :directory_index => false
end

activate :external_pipeline,
  name: :webpack,
  command: build? ? "npm run build" : "npm start",
  source: ".tmp/dist",
  latency: 1

# Methods defined in the helpers block are available in templates
helpers do
  def navbar_item(current_page, text, url)
    item_class = (current_page.url == url) ? "active" : ""
    content_tag :li, class: item_class do
      content_tag :a, text, href: url
    end
  end
end

set :css_dir, 'stylesheets'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

activate :deploy do |deploy|
  deploy.deploy_method = :rsync
  deploy.host   = 'deploy@vps1.interconlarp.org'
  deploy.path   = '/var/www/gamewrap.interactiveliterature.org'
  # Optional Settings
  # deploy.port  = 5309 # ssh port, default: 22
  # deploy.clean = true # remove orphaned files on remote host, default: false
  # deploy.flags = '-rltgoDvzO --no-p --del' # add custom flags, default: -avz
end
