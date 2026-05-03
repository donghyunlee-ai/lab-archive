# Code from http://movb.de/jekyll-details-support.html

module Jekyll
  module Tags
    class DetailsTag < Liquid::Block
      def initialize(tag_name, markup, tokens)
        super
        @caption = markup
      end

      def render(context)
        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
        caption = converter.convert(@caption).gsub(/<\/?p[^>]*>/, '').chomp
        body = super(context)
        "<details markdown=\"1\"><summary>#{caption}</summary>\n#{body}</details>"
      end

    end
  end
end

Liquid::Template.register_tag('details', Jekyll::Tags::DetailsTag)