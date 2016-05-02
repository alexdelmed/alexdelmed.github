var load1 = function(){
	new Vue({
	  el: '#Edad',
	  data: {
	    message: '7'
	  }
	})
	new Vue({
	  el: '#Escuela',
	  data: {
	    message: 'Colegio Anáhuac Chapalita'
	  }
	})
	new Vue({
	  el: '#Nacionalidad',
	  data: {
	    message: 'Mexicano'
	  }
	})
var vm = new Vue({
  el: '#example',
  data: {
    name: 'Juan'
  },
  // define methods under the `methods` object
  methods: {
    greet: function (event) {
      // `this` inside methods point to the Vue instance
      alert('Cambios confirmados, gracias ' + this.name + '!')
      // `event` is the native DOM event
      //alert(event.target.tagName)
    }
  }
})
}