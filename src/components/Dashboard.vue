<template>
  <div class="dashboard">
    <div class="top-section">
    <div class="item">
      <SearchInputWidget v-model="value" @input="onChange"></SearchInputWidget>
    </div>
  <div class="item">
    <UserDetailsComponent :userDetails="userDetails"></UserDetailsComponent>
  </div>
  </div>

   <div class="item">
    <GridTableComponent :dataTable="userList"></GridTableComponent>
  </div>
  
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SearchInputWidget from './widgets/SearchInputWidget.vue';
import GridTableComponent from './GridTable.vue';
import UserDetailsComponent from './UserDetails.vue';
import {UserDetails} from "@/models/models";



@Component({
  components: {
    SearchInputWidget,
    UserDetailsComponent,
    GridTableComponent
  },
})
export default class Dashboard extends Vue {
  private value: string = '';
  private timeoutId:number = 0;
  private userDetails:UserDetails = {} as UserDetails;
  private userDetailsList:Array<UserDetails> = [];
  private filterdData:Array<UserDetails> = [];

  mounted(){
    console.log("computed")
    fetch("https://jsonblob.com/api/jsonBlob/8b736f94-197f-11e9-bede-11a3fc81650d")
            .then(res=>res.json())
            .then(json => {
              this.userDetailsList = json as Array<UserDetails>
              this.filterdData = this.userDetailsList
            })
  }


   onChange(){

    this.filterdData = this.userDetailsList.filter(item=>{
      return item.name.includes(this.value) || item.address.includes(this.value) ;
    })
    
    //  if(this.timeoutId)clearTimeout(this.timeoutId);
    // this.timeoutId = setTimeout(() => {
    //   console.log(this.value);
    //   fetch(
    //     "https://jsonblob.com/api/jsonBlob/8b736f94-197f-11e9-bede-11a3fc81650d"
    //   ).then(res=>res.json())
    //   .then(json => {
    //       //console.log(json);
    //     })
    // }, 800);
  }

  get userList(){    
    return this.filterdData;
  }

  onCLick(userDetailsData :UserDetails){
    this.userDetails = userDetailsData;
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.dashboard{
  .top-section{
    display: flex;
    justify-content: space-between;
    margin: 10px;

    .item{
      flex:1;
    }
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
