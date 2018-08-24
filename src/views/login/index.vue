<template>
  <div style="background-color: red">
    {{ $t('route.dashboard') }}
    <div @click="handleLanguage">切换语言</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  inject: ['reload'],
  methods: {
    handleLanguage() {
      this.$i18n.locale = 'zh'
      this.$store.dispatch('setLanguage', 'zh')
      this.reload()
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  }
}
</script>

<style scoped>

</style>
