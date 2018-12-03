<template>
  <div class="field">
    <label>{{ label }}</label>
    <select :value="value" @change="updateValue($event.target.value);">
      <option v-for="option in options" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
import InputBaseMixin from "./InputBaseMixin";
export default {
  name: "List",
  mixins: [InputBaseMixin],
  props: {
    options: Array
  }
};
</script>
