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
  def navbar_item(text_or_url, url = nil, &block)
    if url
      text = text_or_url
    else
      text = nil
      url = text_or_url
    end

    item_class = (current_page.url == url) ? "active" : ""
    content_tag :li, class: item_class do
      if text
        content_tag :a, text, href: url
      else
        content_tag :a, href: url, &block
      end
    end
  end
end

set :css_dir, 'stylesheets'

set :images_dir, 'images'

set :markdown_engine, :redcarpet
set :markdown, :footnotes => true, :smartypants => true, :autolink => true, :superscript => true, :fenced_code_blocks => true

activate :autoprefixer

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

aws_creds = Aws::SharedCredentials.new(profile_name: 'neil').credentials

activate :s3_sync do |s3_sync|
  s3_sync.bucket                     = 'gamewrap.interactiveliterature.org' # The name of the S3 bucket you are targeting. This is globally unique.
  s3_sync.region                     = 'us-east-1'     # The AWS region for your bucket.
  s3_sync.aws_access_key_id          = aws_creds.access_key_id
  s3_sync.aws_secret_access_key      = aws_creds.secret_access_key
  s3_sync.path_style                 = true
  s3_sync.index_document             = 'index.html'
  s3_sync.error_document             = 'error.html'
end

activate :cdn do |cdn|
  cdn.cloudfront = {
    access_key_id: aws_creds.access_key_id,
    secret_access_key: aws_creds.secret_access_key,
    distribution_id: 'E54CA6RGBP7HW'
  }
  cdn.after_build = true
end
