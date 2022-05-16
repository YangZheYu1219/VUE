<template>
	<h1>UserId: {{$route.params.userId}}</h1>
	<div>Name: {{userInfo.name}}</div>
	<div>email: {{userInfo.email}}</div>
	<hr>

	<router-link :to="`/users/${$route.params.userId}/todos`">{{userInfo.username}}的todo</router-link>
	<router-view/>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		computed: {
			userId(){
				return this.$route.params.userId
			}
		},
		watch: {
			userId: function(newId) {
				this.fetchUserInfo(newId)
			}
		},
		mounted() {
			let userId = this.$route.params.userId
			this.fetchUserInfo(userId)
		},
		methods: {
			fetchUserInfo(userId) {
				axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
				.then(response => (this.userInfo = response.data))
			}
		}
	}
</script>