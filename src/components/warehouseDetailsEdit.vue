<template>
  <v-container fluid>
    <v-card style="border-radius: 15px">
      <v-card-title>Edit Details </v-card-title>
      <v-card-text>
        <v-flex xs12>
          <v-layout row wrap>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <v-text-field v-model="data.name" label="Warehouse Name">
              </v-text-field>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <v-autocomplete
                v-model="data.city"
                :items="city"
                label="Select City"
                clearable
              ></v-autocomplete>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <v-autocomplete
                v-model="data.cluster"
                :items="cluster"
                label="Select Cluster"
                clearable
              ></v-autocomplete>
            </v-flex>
            <v-spacer></v-spacer>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <v-layout row wrap>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <v-text-field v-model="data.space_available" type="number" label="Space available">
              </v-text-field>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <v-autocomplete
                v-model="data.type"
                :items="['Leasable Space','Warehouse Service']"
                label="Select Type"
                clearable
              ></v-autocomplete>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <v-text-field
                v-model="data.code"
                label="Code"
                type="text"
              ></v-text-field>
            </v-flex>
            <v-spacer></v-spacer>
          </v-layout>
        </v-flex>
        <v-flex xs12>
        <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex xs4>
          <v-switch
      v-model="data.is_registered"
      :label="`Registered: ${data.is_registered.toString() === 'true'?'Yes':'No'}`"
    ></v-switch>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs4>
          <v-switch
      v-model="data.is_live"
      :label="`Status: ${data.is_live.toString() === 'true'?'Available':'Not available'}`"
    ></v-switch>
        </v-flex>
        </v-layout>
        </v-flex>
      </v-card-text>
      <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="back()"
          >
            Back
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="submit()"
          >
            Save
          </v-btn>
        </v-card-actions>

    </v-card>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "DetailsEdit",
  props: ["data", "city", "cluster"],
  methods:{
    ...mapMutations([
     'update'
    ]),
    submit(){
     this.update(this.data);
     this.back();
    },
    back(){
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
  // created() {
  //   console.log(this.data);
  // },
};
</script>
