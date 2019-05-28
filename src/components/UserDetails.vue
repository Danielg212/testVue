<template>
  <div class="UserDetails">
      UserDetails
    <div class="label">Date: {{date}}</div>
    <div class="label">Name: {{name}}</div>
    <div class="label">address: {{address}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserDetailsComponent extends Vue {
    @Prop() private date!: string;
    @Prop() private name!: string;
    @Prop() private address!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
UserDetails{
    border: 1px solid #b9b0b0;
    text-align: left;
    border-radius: 4px;
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
