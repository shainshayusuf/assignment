<template>
  <div class="home">

    <WarehouseTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import WarehouseTable from '@/components/WarehouseTable.vue'

export default {
  name: 'Home',
  components: {
    WarehouseTable
  }
}
</script>
