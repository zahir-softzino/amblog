<template>
  <div class="home">
    <h2>Home</h2>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>

  </div>
  
</template>

<script>
import getPosts from '@/composables/getPosts'
import PostList from '@/components/PostList.vue'

export default {
  components: { PostList },
  name: 'HomeView',
  
  setup(){
    const {posts, error, load} = getPosts()

    load() 

    return {posts, error}
  }


}
</script>
