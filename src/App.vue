<template>
  <div class="app">
    <h1>Add a superpower</h1>
    <form @submit.prevent="addSuperpower">
      <AppInput v-model="superpower" name="superpower" label="Superpower" />
      <button type="submit">Submit</button>
    </form>
    <h1>Add a hero</h1>
    <form @submit.prevent="addHero">
      <AppInput v-model="hero.name" name="name" label="Name" />
      <AppSelect
        v-model="hero.superpower"
        name="superpower"
        label="Superpower"
        :options="superpowers"
      />
      <AppTextarea
        v-model="hero.description"
        name="description"
        label="Description"
      />
      <button type="submit">Submit</button>
    </form>
    <h1>Superheroes</h1>
    <List :options="heroes" />
  </div>
</template>

<script>
// import List from "./components/List";
import AppTextarea from "./components/AppTextarea";
import AppInput from "./components/AppInput";
import AppSelect from "./components/AppSelect";
import List from "./components/List";

const hero = {
  name: "",
  superpower: "none",
  description: ""
};

export default {
  name: "App",
  components: {
    AppSelect,
    AppInput,
    AppTextarea,
    List
  },
  data() {
    return {
      hero: Object.assign({}, hero),
      heroes: [],
      superpower: "",
      superpowers: [
        "none",
        "flying",
        "mind control",
        "invisibility",
        "healing",
        "invulnerability",
        "precognition",
        "telepathy"
      ]
    };
  },
  methods: {
    addHero() {
      this.heroes.push(this.hero);
      this.hero = Object.assign({}, hero);
    },
    addSuperpower() {
      this.superpowers.push(this.superpower);
      this.superpower = "";
    }
  }
};
</script>

<style>
label {
  display: block;
}
div.field {
  margin-bottom: 1em;
}
</style>
