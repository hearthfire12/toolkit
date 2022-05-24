<template>
  <section>
    <h1 class="text-3xl font-bold underline">Word counted: {{ count }}</h1>
    <textarea v-model="content" class="w-full border"></textarea>
  </section>
</template>

<script>
export default {
  data() {
    return {
      content: null,
      count: 0,
    };
  },
  watch: {
    content(newValue, oldValue) {
      if (newValue != oldValue) {
        this.count = this.countWords(newValue);
      }
    },
  },
  methods: {
    countWords(str) {
      return str.split(/\W/).filter(function (n) {
        return n != "";
      }).length;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>