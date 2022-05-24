<template>
  <section>
    <h1 class="text-3xl font-bold underline">Json pretty</h1>
    <textarea v-model="content" class="w-full border"></textarea>
    <pre>{{ result }}</pre>
  </section>
</template>

<script>
export default {
  data() {
    return {
      content: null,
      result: null,
    };
  },
  watch: {
    content(newValue, oldValue) {
      if (newValue != oldValue) {
        this.result = this.prettyJson(newValue);
      }
    },
  },
  methods: {
    prettyJson(str) {
      try {
        str = str.replaceAll("'", '"');
        return JSON.stringify(JSON.parse(str), null, 2);
      } catch {
        return "not a valid json";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>