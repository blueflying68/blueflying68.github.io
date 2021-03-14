<<<<<<< HEAD
require 'compass/import-once/activate'
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "stylesheets"
=======
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
>>>>>>> 6315e33 (modify)
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"

<<<<<<< HEAD
# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false

preferred_syntax = :scss
=======
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


>>>>>>> 6315e33 (modify)
