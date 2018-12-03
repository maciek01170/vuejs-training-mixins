<template>
  <div class="list">
    <div v-if="options.length">
      <ul v-for="(option, index) in options" :key="index">
        <li>
          <h4>{{ getHeader(index, option) }}</h4>
          <p v-if="option.description">{{ option.description }}</p>
        </li>
      </ul>
    </div>
    <div v-else><p>Nothing here yet, add a hero first!</p></div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    options: Array,
    label: String
  },
  methods: {
    getHeader(index, option) {
      return `${index + 1}. ${option.name} (${option.superpower})`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
