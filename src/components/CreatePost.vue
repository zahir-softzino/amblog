<template>
  <form>
      <label for="emial">Email</label>
      <input type="email" v-model="email" id="email" required>

      <label for="password">password</label>
      <input type="password" v-model="password" id="password" required>

      <label for="Role">Role:</label>
      <select v-model="role" id="">
          <option value="designer">Designer</option>
          <option value="Developer">Developer</option>
      </select>

      <label for="">Skills</label>
      <input type="text" v-model="tempSkill" @keyup.alt="addskill" placeholder="press alt and ',' to input">

      <div v-for="skill in skills" :key="skill" :class="pill">
          <span @click="deleteSkill(skill)">{{ skill }}</span>

      </div>

      <div class="terms">
          <input type="checkbox" v-model="term" required>
          <label for="Accept terms and conditions.">Accept terms and conditions.</label>
      </div>


      <!-- <div>
          <input type="checkbox" v-model="names" id="" value="zahir">
          <label for="">zahir</label>
      </div>
      <div>
          <input type="checkbox" v-model="names" id="" value="anis">
          <label for="">anis</label>
      </div>
      <div>
          <input type="checkbox" v-model="names" id="" value="akash">
          <label for="">akash</label>
      </div>
      <div>
          <input type="checkbox" v-model="names" id="" value="nihal">
          <label for="">nihal</label>
      </div> -->
  </form>

  <p>email: {{ email }}</p>
  <p>password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms: {{ term }}</p>
  <p>Names: {{ names }}</p>
  <p>skills: {{ skills }}</p>
</template>

<script>
export default {
  setup(){

  },
  data(){
        return{
            email: '',
            password: '',
            role: 'designer',
            term: false,
            skills: [],
            tempSkill: '',
        }
    },
    methods:{
        addskill(e){
            if(e.key === ',' && this.tempSkill){
                if(!this.skills.includes(this.tempSkill)){
                    this.skills.push(this.tempSkill);
                }
                this.tempSkill = '';
            }
        },
        deleteSkill(skill){
            this.skills = this.skills.filter((item) => {
                return skill !== item
            })
        }
    }
}
</script>

<style>
  form{
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label{
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 1em;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    input, select{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    input[type="checkbox"]{
        display: inline-block;
        width: 16px;
        margin:0 10px 0 0;
        position: relative;
        top: 2px;
    }
</style>