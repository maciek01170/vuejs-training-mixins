<template>
  <div class="field">
    <label>{{ label }}</label>
    <textarea
      type="text"
      :value="value"
      @input="updateValue($event.target.value);"
    ></textarea>
  </div>
</template>

<script>
import InputBaseMixin from "./InputBaseMixin";
export default {
  name: "List",
  mixins: [InputBaseMixin]
};
</script>
