<template>
    <div class="x-select">
      <div class="cube-select" :class="{ 'cube-select_disabled': disabled }" @click="showPicker">
        <span class="x-select-title">{{ title }}</span>
        <svg-icon class="x-select-right" icon-class="right2"></svg-icon>
        <span v-if="selectedText" class="cube-select-text">{{ selectedText }}</span>
        <span v-else class="cube-select-placeholder">{{ placeholder }}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'message-popup',
  props: {
    title: {
      type: String,
      default: ''
    },
    popTile: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    options: {
      type: Array,
      default: []
    },
    selectedText: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  computed: {
    /**
     * @Author: wuxuebin
     * @Date: 2018-08-24 19:21:39
     * @Desc: 兼容数组格式
     */
    adaptOptions() {
      return [this.options.map(item => {
        if (typeof item !== 'object') {
          item = {
            value: item,
            text: item
          }
        }
        return item
      })]
    }
  },
  methods: {
    showPicker() {
      this.picker.show()
    },
    change(val, index, text) {
      this.selectedText = val
      this.$emit('input', val)
      this.$emit('change', { val: val, index: index, text: text })
    },
    cancel() {
      this.$emit('cancel')
    }
  },
  mounted() {
    this.picker = this.$createPicker({
      title: '',
      data: this.adaptOptions,
      onSelect: (val, index, text) => {
        this.change(val[0], index[0], text[0])
      },
      onCancel: () => {
        this.cancel()
      }
    })
  }
}
</script>

<style lang="scss" scope>
.x-select {
  .x-select-title {
    padding-right: .2rem;
  }
  .x-select-right {
    float: right;
    color: #cccccc;
    font-size: .14rem;
  }
}
</style>
