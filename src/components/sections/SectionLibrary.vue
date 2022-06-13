<template>
    <section>
        <div class="container">
            <div class="row ">
                <SearchBar/>
                <div>
                    <ul>
                        <li class="col-12 col-sm-6 col-lg-3 mt-5" v-for="film in films.data" :key="film.index">
                        <ul>
                            <li>Titolo:{{film.title}}</li>
                            <li>Titolo Originale:{{film.original_title}}</li>
                            <li>Lingua Originale{{film.original_language}}</li>
                            <li>Voto{{film.vote_average}}</li>
                        </ul>
                    </li>
                </ul>
                </div>
                
                
            </div> 
        </div>
    </section>
</template>

<script>

import SearchBar from '../commons/SearchBar.vue'
import data from '../../shared/data'
export default {
    name: 'SectionLibrary',
    data(){
        return{
            data,
           
        }
    },
    components:{
        SearchBar,
    },
    methods:{
    
       
    },
    

}
</script>

<style>

</style>