// import Details from '@/views/Details.vue'
import { ref } from 'vue'

const getPost = (id) =>{
    const post = ref([null])
    const error = ref(null)

    const load = async ()=>{
      try{
        let data = await fetch('http://localhost:3000/posts/' + id)
        if(!data.ok){
          throw Error('That post has been deleted')
        }
        post.value =  await data.json()
      }
      catch(err){
        error.value = err.message
        console.log(err.messahe)
      }
    }

    return { post, error, load}
}

export default getPost
