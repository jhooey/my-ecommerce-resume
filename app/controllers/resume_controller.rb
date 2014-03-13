class ResumeController < ApplicationController
  def index
    @featured_products = Product.is_featured(true)
    @regular_products = Product.is_featured(false)
  end
end
