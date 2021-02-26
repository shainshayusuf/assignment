<template>
  <v-container fluid>
    <v-card style="border-radius: 15px">
      <v-card-title>Edit Details </v-card-title>
      <v-card-text>
        <v-flex xs12>
          <v-layout row wrap>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <textFieldInput
                name="Warehouse"
                label="Warehouse Name"
                v-model="editData.name"
                :rules="[rules.required]"
              ></textFieldInput>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <autocompleteInput
                v-model="editData.city"
                :items="city"
                label="Select City"
                clearable
              ></autocompleteInput>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <autocompleteInput
                v-model="editData.cluster"
                :items="cluster"
                label="Select Cluster"
                clearable
              ></autocompleteInput>
            </v-flex>
            <v-spacer></v-spacer>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <v-layout row wrap>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <textFieldInput
                v-model="editData.space_available"
                type="number"
                label="Space available"
              >
              </textFieldInput>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <autocompleteInput
                v-model="editData.type"
                :items="['Leasable Space', 'Warehouse Service']"
                label="Select Type"
                clearable
              ></autocompleteInput>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs3>
              <textFieldInput
                v-model="editData.code"
                label="Code"
                type="text"
                :rules="[rules.required]"
              ></textFieldInput>
            </v-flex>
            <v-spacer></v-spacer>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <v-layout row wrap>
            <v-spacer></v-spacer>
            <v-flex xs4>
              <switchInput
                v-model="editData.is_registered"
                :label="
                  `Registered: ${
                    editData.is_registered.toString() === 'true' ? 'Yes' : 'No'
                  }`
                "
              ></switchInput>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs4>
              <switchInput
                v-model="editData.is_live"
                :label="
                  `Status: ${
                    editData.is_live.toString() === 'true'
                      ? 'Available'
                      : 'Not available'
                  }`
                "
              ></switchInput>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="back()">
          Back
        </v-btn>
        <v-btn color="blue darken-1" text @click="submit()" :disabled="!filled">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import textFieldInput from "./textFieldInput.vue";
import autocompleteInput from "./AutocompleteInput.vue";
import switchInput from "./switchInput.vue"
export default {
  name: "DetailsEdit",
  props: ["data", "city", "cluster"],
  data() {
    return {
      editData: Object.assign({}, this.data),
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  components: {
    textFieldInput,
    autocompleteInput,
    switchInput
  },
  computed: {
    filled() {
      return (
        this.editData.name.length > 0 &&
        this.editData.code.length > 0 
      );
    },
  },
  watch: {
    "editData.space_available": {
      handler(val) {
        this.editData.space_available = Number(val);
      },
    },
  },
  methods: {
    ...mapMutations(["update"]),
    submit() {
      this.update(this.editData);
      this.back();
    },
    back() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>
