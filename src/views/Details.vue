<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-if="post" class="details">
    <h2>{{ post.title }}</h2>
    <p class="pre">{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>

  </div>
</template>

<script>
import getPost from '../composables/getPost'

export default {
  props: ['id'],
  setup(props){
      const {post, error, load} = getPost(props.id)

      load()

      return { post, error}
  }
}
</script>

<style>
  .details{
    max-width: 1200px;
    /* margin: 0 auto; */
  }
  .details h2{
    font-weight: 900;
    font-size: 32px;
    color: #3b394f;
  }
  .details p{
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
    /* padding-bottom: 20px; */
  }
  

  .pre{
    white-space: pre-wrap;
  }
</style>