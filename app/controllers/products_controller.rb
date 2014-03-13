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
    @product.short = @product.short.html_safe
    @product.long = @product.long.html_safe
  end

  def product_params
   params.require(:product).permit(:title, 
                                    :short, 
                                    :long, 
                                    :images, 
                                    :featured, 
                                    :in_stock)
  end

  
  def destroy
    @product = Product.find(params[:id])
    @product.destroy

    redirect_to products_path
  end
  
  
  
  def edit
    @product = Product.find(params[:id])
  end
  
  def update
    @product = Product.find(params[:id])

    if @product.update(params[:product].permit(:title, 
                                    :short, 
                                    :long, 
                                    :images, 
                                    :featured, 
                                    :in_stock))
      redirect_to @product
    else
      render 'edit'
    end
  end
end
