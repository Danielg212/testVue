<template>
  <div class="grid-table">
     <div  class="col-filters">
        <template v-for="checkbox in columns">
              <input type="checkbox" :id="checkbox" :value="checkbox" v-model="checkModel">
              <label :for="checkbox">{{checkbox}}</label>
          </template>
     </div> 
   
    <table>
      <tr>
        <th v-for="col in checkModel">{{col}}</th>
      </tr>
        <tr v-for="item in dataTable" :id="item.id" @click="onClick(item)">
          <template v-for="col in checkModel">
          <td>{{item[col.toLowerCase()]}}</td>
          </template>
        </tr>

    </table>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GridTableComponent extends Vue {

    @Prop() private dataTable!:Array<any>
    private columns:Array<string> =['Date','Name','Address']
    private checkModel:any = this.columns


     isChecked(vale) :Boolean {
      return this.checkModel.includes(vale)
    }

    onClick(item){
      this.$store.commit('update', item)
    }
}
</script>

<style scoped lang="scss">

  .col-filters{
    display: flex;
    flex-direction: row;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;

    tr:hover{
      cursor: pointer;
      background:aliceblue;
    }
  }

  td, th {
    border-bottom: 1px solid #dddddd;
    text-align: left;
    padding: 12px;
  }
</style>
