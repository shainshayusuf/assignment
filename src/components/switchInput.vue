<template>
  <div>
    <v-switch v-bind="$attrs" v-model="valuetemp"></v-switch>
  </div>
</template>

<script>
export default {
  name: "switchInput",
  props: {
    value: [Boolean],
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
