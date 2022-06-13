<template>
    <section>
        <div class="container">
            <div class="row ">
                <SearchBar/>
                <h2>Films</h2>
                <div class="container">
                    <ul class="row">
                        <li class="col-12 col-sm-6 col-lg-3 mt-5" v-for="film in data.films" :key="film.index">
                            <ul>
                                <li>Titolo:{{film.title}}</li>
                                <li>Titolo Originale:{{film.original_title}}</li>
                                <li>Lingua Originale {{film.original_language}}</li>
                                <li>Voto{{film.vote_average}}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <h2>Series tv</h2>
                <div class="container">
                    <ul class="row">
                        <li class="col-12 col-sm-6 col-lg-3 mt-5" v-for="serie in data.tv" :key="serie.index">
                            <ul>
                                <li>Original Name:{{serie.original_name}}</li>
                                <!-- <li>Titolo Originale:{{serie.original_title}}</li> -->
                                <li>Lingua Originale {{serie.original_language}}</li>
                                <li>Voto{{serie.vote_average}}</li>
                                <img src="https://image.tmdb.org/t/p/" alt="">
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