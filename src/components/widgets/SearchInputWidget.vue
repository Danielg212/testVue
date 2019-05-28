<template>
  <div class="widget">
   <input class="input-search" type="text" v-model="searchValue" :placeholder="'Search Table'" @input="$emit('input',searchValue)">

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SearchInputWidget extends Vue {
  @Prop() private msg!: string;
 private searchValue: string ='';

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-search{
      padding: 5px;
    margin: 0 auto;
    border: none;
    border: solid 1px #ccc;
    border-radius: 10px;
    border-radius: 10px;
}
</style>
