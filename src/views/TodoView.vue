<template>
	<h1>User{{userId}}的Todo</h1>
	<ol>
		<li v-for="todo in todos">
		<h4>{{todo.title}}</h4>
		是否完成？ <input type="checkbox" v-model="todo.completed">
		</li>
	</ol>
</template>

<script>
	import axios from 'axios'
	export default {
  data(){
      return {
          todos: {}
      }
  },
  computed:{
      userId(){
          return this.$route.params.userId
      }
  },
  watch:{
      userId: function(newId){
        this.fetchTodos(newId);
      }
  },
  mounted(){
      let userId = this.$route.params.userId
      this.fetchTodos(userId);
  },
  methods:{
      fetchTodos(userId){
          axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
               .then(response => this.todos = response.data)
      }
  }
}
</script>