<template>
  <div class="UserDetails">
      <span class="title">UserDetails</span>
    <div class="label">Date: {{user.date}}</div>
    <div class="label">Name: {{ user.name}}</div>
    <div class="label">address: {{ user.address}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class UserDetailsComponent extends Vue {
  private selectedUser:UserDetails = {} as UserDetails;
  mounted(){
    this.selectedUser = this.$store.getters.user
   }

   get user(){
     return  this.$store.getters.user;
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.UserDetails{
    border: 1px solid #b9b0b0;
    border-radius: 4px;
    text-align: justify;
    position: relative;
    padding: 5px;
    .title{
      position: absolute;
      top: -9px;
    right: 11px;
    background: white;
    font-weight: bold;
    }
    .label{
      padding: 3px;
    }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
