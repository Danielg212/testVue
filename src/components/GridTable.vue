<template>
  <div class="grid-table">
    <table>
      <tr>
        <th v-for="col in columns">{{col}}</th>
      </tr>
        <tr v-for="item in dataTable" :id="item.id">
          <template v-for="col in columns">
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border-bottom: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>
