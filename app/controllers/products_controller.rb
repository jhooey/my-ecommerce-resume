class ProductsController < ApplicationController
  def new
  end
   
  def create
    render text: params[:product].inspect
  end
end
