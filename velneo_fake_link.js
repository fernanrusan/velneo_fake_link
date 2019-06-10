var VelneoFakeLink = (function(){
	/********************************************
	 * PRIVATE PROPERTIES                       *
	 ********************************************/

	var _el = '';

	/********************************************
	 * PRIVATE METHODS                          *
	 ********************************************/

	/* none */
	
	return {
		/********************************************
		 * PUBLIC PROPERTIES                        *
		 ********************************************/

		/* none */

		/********************************************
		 * PUBLIC METHODS                           *
		 ********************************************/
		init: function() {
			_el = document.createElement('a');
			_el.setAttribute('href', '#'); // creamos <a href="#"></a> para poder lanzar el evento a Velneo
			document.body.appendChild(_el); // añadimos <a href="#"></a> al documento (DOM)
		},

		dispatchLinkClickedEvent: function(object) { // método que dispara el evento "Link Clicked" que puede recoger Velneo.
			var data = JSON.stringify(object);
			
			_el.setAttribute('href', '?' + data);
			// disparamos la señal para velneo -> LinkClicked
			//_el.dispatchEvent(new Event('click')); // funcional hasta la v22 incluida
			_el.dispatchEvent(new MouseEvent('click')); // funcional a partir de la v23 incluida
			//_el.click(); // funcional a partir de la v23 incluida			
		}
	};
})();