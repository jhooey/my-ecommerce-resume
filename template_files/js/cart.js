
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
			
			this.$formAddToCart = this.$element.find( "form.add-to-cart" );
			this.$formCart = this.$element.find( "#shopping-cart" );
			this.$checkoutCart = this.$element.find( "#checkout-cart" );
			this.$checkoutOrderForm = this.$element.find( "#checkout-order-form" );
			this.$shoppingCartActions = this.$element.find( "#shopping-cart-actions" );
			this.$updateCartBtn = this.$shoppingCartActions.find( "#update-cart" );
			this.$emptyCartBtn = this.$shoppingCartActions.find( "#empty-cart" );
			this.$userDetails = this.$element.find( "#user-details-content" );
			
			// object containing patterns for form validation
			this.requiredFields = {
				expression: {
					value: /^([\w-\.]+)@((?:[\w]+\.)+)([a-z]){2,4}$/
				},

				str: {
					value: ""
				}

			};
			
			// public methods invocation
			
			
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
		}
	};

	$(function() {
		var shop = new $.Shop( "#shopify-resume" ); // object's instance
	});

})( jQuery );
