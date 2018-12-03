<template>
  <div class="field">
    <label>{{ label }}</label>
    <input
      type="text"
      :value="value"
      @input="updateValue($event.target.value);"
    />
  </div>
</template>

<script>
import InputBaseMixin from "./InputBaseMixin";
export default {
  name: "List",
  mixins: [InputBaseMixin]
};
</script>
