<template>
  <div>
    <v-autocomplete
      v-bind="$attrs"
      v-model="valuetemp"
      auto-select-first
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  name: "autocompleteInput",
  props: {
    value: [String, Array, Number],
  },
  data() {
    return {
      valuetemp: this.value,
    };
  },
  watch: {
    valuetemp: {
      handler() {
        this.$emit("input", this.valuetemp);
      },
      immediate: true,
    },
  },
};
</script>
