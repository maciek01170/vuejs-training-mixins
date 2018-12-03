export default {
  props: {
    value: String,
    label: String,
    name: String
  },
  methods: {
    updateValue(payload) {
      this.$emit("input", payload);
    }
  }
};
