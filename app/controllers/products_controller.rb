class ProductsController < ApplicationController
  def new
  end

  def index
    @products = Product.all
  end
   
  def create
    @product = Product.new(product_params)
    @product.save
    redirect_to @product
  end
  
  def show
    @product = Product.find(params[:id])
  end

  def product_params
   params.require(:product).permit(:title, 
                                    :short, 
                                    :long, 
                                    :images, 
                                    :featured, 
                                    :in_stock)
  end


end
