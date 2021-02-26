<template>
<div>
  <v-text-field v-bind="$attrs" v-model="valuetemp"></v-text-field>
  </div>
</template>

<script>
export default {
  name: "textFieldInput",
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
