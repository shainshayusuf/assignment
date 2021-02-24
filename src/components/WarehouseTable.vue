<template>
  <v-card>
    <v-card-title>
      Warehouse List
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search Warehouse "
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="loadedWarehouse"
      :search="search"
      @click:row="handleClick"
    >
      <template v-slot:item.is_live="{ item }">
        <v-chip small :color="item.is_live !== true ? 'red' : 'green'" dark>{{
          item.is_live === true ? "Available" : "Not available"
        }}</v-chip>
      </template>
      <template v-slot:item.is_registered="{ item }">
        <v-chip small :color="item.is_registered !== true ? 'red' : 'green'" dark>{{
          item.is_registered === true ? "Yes" : "No"
        }}</v-chip>
      </template>
      <template v-slot:body.append>
        <tr>
          <td colspan="2"></td>

          <td>
            <v-autocomplete
              v-model="city"
              :items="uniqueCities"
              label="City Filter"
              clearable
            ></v-autocomplete>
          </td>
          <td>
            <v-autocomplete
              v-model="cluster"
              :items="uniqueCluster"
              label="Cluster Filter"
              clearable
            ></v-autocomplete>
          </td>
          <td colspan="2"></td>
          <td>
            <v-text-field
              v-model="space"
              type="number"
              label="More than"
            ></v-text-field>
          </td>
        </tr> </template
    ></v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "WarehouseTable",
  data() {
    return {
      search: "",
      city: "",
      cluster: "",
      space: "",
      uniqueCities: [],
      uniqueCluster: [],
    };
  },

  computed: {
    ...mapGetters(["loadedWarehouse"]),
    headers() {
      return [
        { text: "Warehouse Name", value: "name" },
        { text: "Registered", value: "is_registered", filterable: false },
        {
          text: "City",
          value: "city",

          filter: (value) => {
            if (!this.city) return true;

            return value.toLowerCase() === this.city.toLowerCase();
          },
        },
        {
          text: "Cluster Name",
          value: "cluster",
          filter: (value) => {
            if (!this.cluster) return true;

            return value.toLowerCase() === this.cluster.toLowerCase();
          },
        },
        { text: "Code", value: "code", filterable: false },
        { text: "Type", value: "type", filterable: false },
        {
          text: "Space available",
          value: "space_available",
          filter: (value) => {
            if (!this.space) return true;

            return value > parseInt(this.space);
          },
        },
        { text: "Status", value: "is_live", filterable: false },
      ];
    },
  },
  methods: {
    filterUnique() {
      let arr = [],
        arrCluster = [];
      this.loadedWarehouse.forEach((val) => {
        arr.push(val.city);
        arrCluster.push(val.cluster);
      });
      this.uniqueCities = [...new Set(arr)];
      this.uniqueCluster = [...new Set(arrCluster)];
    },
    handleClick(value) {
      this.$router.push({
        name: "WarehouseEdit",
        params: {
          data: value,
          city: this.uniqueCities,
          cluster: this.uniqueCluster,
        },
      });
    },
  },
  created() {
    this.filterUnique();
    // console.log(this.loadedWarehouse);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
