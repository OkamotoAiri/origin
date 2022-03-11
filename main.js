(function() {
	'use strict'; {
	  let app = new Vue({
		el: '#app',
		data: {
		  todos: [],
		  newItem: '',
		  isChecked: true
		},
		watch: {
		  todos: {
			handler: function() {
			  localStorage.setItem('todos', JSON.stringify(this.todos));
			},
			deep: true
		  }
		},
		mounted: function() {
		  this.todos = JSON.parse(localStorage.getItem('todos')) || [];
		},
		methods: {
		  addItem: function() {
			if (this.newItem == '') {
			  $('.error').show();
			  return;
			}
			let item = {
			  title: this.newItem,
			  isDone: false,
			}
			this.todos.push(item);
			this.newItem = '';
			$('.error').hide();
  
		  },
		  deleteItem: function() {
			if (!confirm('チェックした項目を削除しますか？')) {
			  return;
			}
			this.todos = this.remaining;
		  },
		  ditItem: function(index) {
			$('.update').eq(index).toggle();
		  }
		},
		computed: {
		  remaining: function() {
			return this.todos.filter(function(todo) {
			  return !todo.isDone;
			});
		  },
		}
	  });
	}
  
  })();
  
  
  // $('#checkAll').on('click',function(){
  
  // 	$('.checks').prop('checked',this.checked);
  // 	if ($('.checks').hasClass('done')){
  // 	}else{
  // 		$('.checks').addClass('done');
  // 	}
  
  // });