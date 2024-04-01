<template>
  <div class="home">
    <!-- <h2>Home</h2> -->
    <div v-if="error">
      {{ error }}
    </div>
    <div class="row">
      <div class="col-md-8">
        <div v-if="posts.length">
          <PostList :posts="posts" class="posts" />
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
      <div class="col-md-4 tags">
        <h3>#Tags</h3>
        <p>#web #website #app #Mobile #NEWS</p>
      </div>
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

<style scoped>
  /* .posts{
    margin-bottom: 50px;
  }

  .posts posts{
    padding-bottom: 50px;
  } */


  .tags h3{
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #59F;
  }
  .tags p{
    font-size: 22px;
    color: rgb(149, 149, 151);
  }
</style>