$(document).ready(function(){
		
$("#order-form").validate( {
    
    submitHandler: function(form) {
      
      form.submit();
    },
    //rules section for form
    rules: {
      "your-name": {
         required: true,
         maxlength: 128
      },
      
    //payment rules section
      "card-holder-name": {
         required: true,
         maxlength: 128
      },
      
      "card-number": {
         required: true,
         creditcard: true
      },
      
      "expiry-month": {
         required: true
      },
      
      "expiry-year": {
         required: true
      },
      
      "cvv": {
         required: true,
         maxlength: 3,
         minlength: 3,
         digits: true
      },

			
		}
			})
})