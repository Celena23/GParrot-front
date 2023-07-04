<template>
  <NavBar/>
  <TestimonialsExtract/>
<!--  <div id="containerForm">-->
<!--<Testimonials/>-->
<!--  </div>-->
  <Footer/>

  </template>

  <script setup lang="ts">

  import Testimonials from "@/components/Testimonials.vue";
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
  import TestimonialsExtract from "@/components/TestimonialsExtract.vue";
  </script>

  <style>
  #containerForm{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 100%;
  }

  </style>

