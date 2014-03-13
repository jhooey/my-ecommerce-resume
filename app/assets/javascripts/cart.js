(function( $ ) {
	$.Shop = function( element ) {
		this.$element = $( element ); // top-level element
		this.init();
	};

	$.Shop.prototype = {
		init: function() {
			// initializes properties and methods
			this.cartName = "resume-cart";
			this.storage = sessionStorage;
			
			this.$formAddToCart = this.$element.find( "form.add-to-cart" ); /////////////////////////////////////////
			this.$formCart = this.$element.find( "#shopping-cart" );		/////////////////////////////////////////
			this.$checkoutCart = this.$element.find( "#checkout-cart" );
			this.$checkoutOrderForm = this.$element.find( "#checkout-order-form" );
			this.$shoppingCartActions = this.$element.find( "#shopping-cart-actions" );
			this.$updateCartBtn = this.$shoppingCartActions.find( "#update-cart" );
			this.$emptyCartBtn = this.$shoppingCartActions.find( "#empty-cart" );
			this.$userDetails = this.$element.find( "#user-details-content" );
			
			this.createCart();
			this.handleAddToCartForm();
			//this.handleCheckoutOrderForm();
			//this.emptyCart();
			//this.updateCart();
			this.displayCart();
			//this.displayUserDetails();
			//this.populatePayPalForm();
			
		},
		// public methods invocation
		// Creates the cart keys in session storage

		createCart: function() {
			//tests whether our values have already been added to session storage
			if( this.storage.getItem( this.cartName ) == null ) {
		
				var cart = {};
				cart.items = [];
					
				this.storage.setItem( this.cartName, this._toJSONString( cart ));
			}
		},
		
		_emptyCart: function() {
			this.storage.clear();
		},
		
		/* Converts a JSON string to a JavaScript object
		 * @param str String the JSON string
		 * @returns obj Object the JavaScript object
		 */
		_toJSONObject: function( str ) {
			var obj = JSON.parse( str );
			return obj;
		},
		
		/* Converts a JavaScript object to a JSON string
		 * @param obj Object the JavaScript object
		 * @returns str String the JSON string
		 */
		_toJSONString: function( obj ) {
			var str = JSON.stringify( obj );
			return str;
		},
		
		/* Add an object to the cart as a JSON string
		 * @param values Object the object to be added to the cart
		 * @returns void
		 */
		_addToCart: function( values ) {
			var cart = this.storage.getItem( this.cartName );
			var cartObject = this._toJSONObject( cart );
			var cartCopy = cartObject;
			var items = cartCopy.items;
			items.push( values );
		
			this.storage.setItem( this.cartName, this._toJSONString( cartCopy ) );
		},
		
		/* Save the data entered by the user in the checkout form
		 * @param form Object the jQuery element of the checkout form
		 * @returns void
		 */
		_saveFormData: function( form ) {
			var self = this;
			var $visibleSet = form.find( "fieldset:visible" );
					
			$visibleSet.each(function() {
				var $set = $( this );
				var name = $( "#name", $set ).val();
				var email = $( "#email", $set ).val();
				var company = $( "#company", $set ).val();
				
				self.storage.setItem( "user-name", name );
				self.storage.setItem( "user-email", email );
				self.storage.setItem( "suer-company", company );
			});
		},
		
		// Adds items to shopping cart

		handleAddToCartForm: function() {
			var self = this;
			self.$formAddToCart.each(function() {
				var $form = $( this );
				var $product = $form.children("#item-information");
				var name = $product.children("header").children("h1").text().trim();
		
				$form.on( "submit", function() {
					self._addToCart({
						product: name,
					});
				});
			});
		},
		
		displayCart: function() {
			if( this.$formCart.length ) {
				this.$formCart.empty();
			
				var cart = this._toJSONObject( this.storage.getItem( this.cartName ) );
				var items = cart.items;
		
				for( var i = 0; i < items.length; ++i ) {
					this.$formCart.append( "<li class='item-name'>" + items[i].product + "</li>" );
				}
				if (!( this.$formCart.children().length > 0 )) {
				     this.$formCart.append( "<li class='no-items'>You have not selected any items yet</li>" );
				}
			} else if( this.$checkoutCart.length ) {
			/*
				var checkoutCart = this._toJSONObject( this.storage.getItem( this.cartName ) );
				var cartItems = checkoutCart.items;
				var $cartBody = this.$checkoutCart.find( "tbody" );
		
				for( var j = 0; j < cartItems.length; ++j ) {
					var cartItem = cartItems[j];
					var cartProduct = cartItem.product;
					var cartPrice = this.currency + " " + cartItem.price;
					var cartQty = cartItem.qty;
					var cartHTML = "<tr><td class='pname'>" + cartProduct + "</td>" + "<td class='pqty'>" + cartQty + "</td>" + "<td class='pprice'>" + cartPrice + "</td></tr>";
		
					$cartBody.html( $cartBody.html() + cartHTML );
				}
		
				var cartTotal = this.storage.getItem( this.total );
				var cartShipping = this.storage.getItem( this.shippingRates );
				var subTot = this._convertString( cartTotal ) + this._convertString( cartShipping );
		
				this.$subTotal[0].innerHTML = this.currency + " " + this._convertNumber( subTot );
				this.$shipping[0].innerHTML = this.currency + " " + cartShipping;
			*/		
			}
		}
		
		
	};

	$(function() {
		var shop = new $.Shop( "#shopify-resume" ); // object's instance
	});

})( jQuery );