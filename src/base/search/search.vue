<template>
  <div class="search">
    <svg-icon class="icon-search" icon-class="search"></svg-icon>
    <input ref="search" class="box" :placeholder="placeholder" v-model="query" >
  </div>
</template>

<script>
import { debounce } from '@/assets/js/util'
export default {
  data() {
    return {
      query: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入关键字'
    }
  },
  methods: {
    setQuery(query) {
      this.query = query
    },
    clear() {
      this.query = ''
    },
    blurInput() {
      this.$refs.search.blur()
    }
  },
  created() {
    // 截留函数，逻辑如上面
    this.$watch('query', debounce((newQuery) => {
      this.$emit('query', newQuery)
    }, 800))
  }
}
</script>
