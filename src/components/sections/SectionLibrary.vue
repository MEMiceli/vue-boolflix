<template>
    <section>
        <div class="container">
            <div class="row ">
                <SearchBar @searching="filtergenre"/>
                <AlbumItem class="col-12 col-sm-6 col-lg-3 mt-5" v-for="album in albumsearched" :key="album.index" :album="album"/>
            </div> 
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SectionLibrary',
    data(){
        return{
            films:[],
        }
    },
    components:{

    },
    created()
    

}
</script>

<style>

</style>