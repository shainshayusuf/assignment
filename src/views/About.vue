<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

export default {
  name: 'About',
  props:['data'],
  created(){
    console.log(this.data);
  }
}
</script>
