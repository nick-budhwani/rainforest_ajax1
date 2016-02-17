class ProductsController < ApplicationController
  def index
    @products = if params[:search]
                                      #ILIKE makes the search case insensitive
      # Product.where('name ILIKE ?', "%#{params[:search]}%") #%% lets rails sanitize the code
      Product.where("LOWER(name) LIKE LOWER (?)", "%#{params[:search]}%")
    else
      Product.all
    end

    respond_to do |format|
      format.html
      format.json
    end

  end
    # respond_to do |format| #how we decide what we can and cannot respond to
    #   format.html do
    #     if request.xhr?
    #       render @products
    #     end
    #   format.js
    #   #default will render app/views/products/index.js.erb
    #
    #   format.json { render json: @products }
    #
    #   format.xml
    #
    # end

    #rails checks to see if AJAX sent a request
  #   if request.xhr? #will render the template one time for every product in the list
  #     render @products
  #   end
  # end
  #
  def show
    @product = Product.find(params[:id])

    if current_user
      @review = @product.reviews.build
    end
  end

  def new
    @product = Product.new
  end

  def edit
    @product = Product.find(params[:id])
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      redirect_to products_url
    else
      render :new
    end
  end

  def update
    @product = Product.find(params[:id])

    if @product.update_attributes(product_params)
      redirect_to product_path(@product)
    else
      render :edit
    end
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    redirect_to products_path
  end

  private
  def product_params
    params.require(:product).permit(:name, :description, :price_in_cents)
  end
end
