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
                                <li>Lingua Originale {{film.original_language}} <lang-flag :iso="film.original_language" /></li>
                                <li>Voto{{vote}}</li>
                                <img :src="urlImage + (film.poster_path)"  alt="">
                            </ul>
                        </li>
                    </ul>
                </div>
                <h2>Series tv</h2>
                <div class="container">
                    <ul class="row">
                        <li class="col-12 col-sm-6 col-lg-3 mt-5" v-for="serie in data.tv" :key="serie.index">
                            <ul>
                                <li>Serie Name:{{serie.name}}</li>
                                <li>Original Name:{{serie.original_name}}</li>
                                <!-- <li>Titolo Originale:{{serie.original_title}}</li> -->
                                <li>Lingua Originale {{serie.original_language}} <lang-flag :iso="serie.original_language" /></li>
                                <li>Voto{{vote}}</li>
                                <img :src="urlImage + (serie.poster_path)"  alt="">
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
import LangFlag from 'vue-lang-code-flags';
export default {
    name: 'SectionLibrary',
    data(){
        return{
            data,
            urlImage: "https://image.tmdb.org/t/p/w500",
           
        }
    },
    components:{
        SearchBar,
        LangFlag,
    },
    methods:{
        vote(){
           return Math.ceil(this.info.vote_average / 2);
        }
       
       
    },
    

}
</script>

<style lang="scss">
img{
    width:100%;
    padding:2%;
}
ul {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}
h2 {
    text-align: center;
}
section{
    background-color: black;
    color: white;
}

</style>