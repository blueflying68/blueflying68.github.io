Encoding.default_external = 'utf-8'
require 'susy'
require 'breakpoint'
require 'compass/import-once/activate'
require 'susy'
require 'breakpoint'
require 'compass/import-once/activate'
# Require any additional compass plugins here.


http_path = "/"
css_dir = ""
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"

output_style = :expanded
sourcemap = false

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true
relative_assets = false
sass_options = {:debug_info=>false}

line_comments = false

preferred_syntax = :scss
fireapp_coffeescripts_dir = "coffeescripts"
fireapp_coffeescript_options = {:bare=>false}
fireapp_livescripts_dir = "livescripts"
fireapp_livescript_options = {:bare=>false}
fireapp_minifyjs_on_build = false
fireapp_always_report_on_build = false
sass_options = {:debug_info=>false}

Sass::Script::Number.precision=8


