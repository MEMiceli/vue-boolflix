<template>
    <section>
        <div class="container">
            <div class="row ">
                <SearchBar/>
                <div class="col-12 col-sm-6 col-lg-3 mt-5" v-for="film in films" :key="film.index">
                    <ul>
                        <li>{{film.title}}</li>
                        <li>{{film.original_title}}</li>
                        <li>{{film.original_language}}</li>
                        <li>{{film.vote_average}}</li>
                    </ul>
                </div>
            </div> 
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import SearchBar from '../commons/SearchBar.vue'
export default {
    name: 'SectionLibrary',
    data(){
        return{
            films:[],
        }
    },
    components:{
        SearchBar,
    },
    created(){
        axios.get('https://api.themoviedb.org/3/search/movie',{
        params:{
            api_key:'093da68c34711cf715f097616d53b2ae',
            query:'attacco',
            language: 'it-IT',
        }
        }).then((response) => {
            this.films = response.data.results;
        }).catch((error) => {
            console.log(error);
        })
    }
    

}
</script>

<style>

</style>