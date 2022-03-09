
(function () {
	'use strict'; {
	  let app = new Vue({
		el: '#app',
		newItem: '',
		data: {
		  todos: []
		},
		watch: {
		  todos: {
			handler: function () {
			  localStorage.setItem('todos', JSON.stringify(this.todos));
			},
			deep: true
		  }
		},
		mounted: function () {
		  this.todos = JSON.parse(localStorage.getItem('todos')) || [];
		},
		methods: {
		  addItem: function () {
			let item = {
			  title: this.newItem,
			  isDone: false,
			}
			this.todos.push(item);
			this.newItem = '';
		  },
		  deleteItem: function () {
			if (!confirm('チェックした項目を削除しますか？')) {
			  return;
			}
			this.todos = this.remaining;
		  },
		  editItem: function (index) {
			$('.update').eq(index).toggle();
		  }
		},
		computed: {
		  remaining: function () {
			return this.todos.filter(function (todo) {
			  return !todo.isDone;
			});
		  }
		}
	  });
	}
  })();