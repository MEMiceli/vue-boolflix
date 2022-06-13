<template>
    <form class="input-group" @submit.prevent="searching">
        <input type="text" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" v-model="searchText" required/>
        <button type="submit" class="btn btn-outline-primary">search</button>
    </form>
</template>

<script>
import axios from 'axios';
import data from '../../shared/data';
export default {
    name:'SearchBar',
    data(){
        return{
            data,
            searchText:'',
        }
    },
    methods:{
        searching(){
            axios.get('https://api.themoviedb.org/3/search/movie',{
                params:{
                    api_key:'093da68c34711cf715f097616d53b2ae',
                    query: this.searchText,
                    language: 'it-IT',
                }
            }).then((response) => {
                data.films = response.data.results;
                this.searchText='';
                console.log(response.data.results);
            }).catch((error) => {
                console.log(error);
            }),
            axios.get('https://api.themoviedb.org/3/search/tv',{
                params:{
                    api_key:'093da68c34711cf715f097616d53b2ae',
                    query: this.searchText,
                    language: 'it-IT',
                }
            }).then((response) => {
                data.tv = response.data.results;
                this.searchText='';
                console.log(response.data.results);
            }).catch((error) => {
                console.log(error);
            })


        }
    }

}
</script>

<style scoped lang="scss">

</style>