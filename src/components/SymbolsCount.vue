<template>
  <section>
    <h1 class="text-3xl font-bold underline">Symbols counted: {{ count }}</h1>
    <input
      type="checkbox"
      id="shouldCountSpacesInput"
      v-model="shouldCountSpaces"
      text="test"
    />
    <label for="shouldCountSpacesInput">Should Count Spaces</label>
    <textarea v-model="content" class="w-full border"></textarea>
  </section>
</template>

<script>
export default {
  data() {
    return {
      content: null,
      shouldCountSpaces: true,
      count: 0,
    };
  },
  watch: {
    content(newValue, oldValue) {
      if (newValue != oldValue) {
        this.updateSymbolsCounter();
      }
    },
    shouldCountSpaces(newValue, oldValue) {
      if (newValue != oldValue) {
        this.updateSymbolsCounter();
      }
    },
  },
  methods: {
    updateSymbolsCounter() {
      this.count = this.countSymbols(this.content, this.shouldCountSpaces);
    },
    countSymbols(str, shouldCountSpaces) {
      if (shouldCountSpaces) {
        return str.length;
      }

      return str.split(" ").join("").length;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>