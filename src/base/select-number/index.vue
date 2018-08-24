<template>
    <div class="tws-main-div">
        <span class="reduce-btn" @click="reduceNumber">
          <!--<i class="el-icon-minus">-</i>-->
          <svg-icon icon-class="jian2"></svg-icon>
        </span>
        <span class="increase-btn" @click="increaseNumber">
          <svg-icon icon-class="jia"></svg-icon>
        </span>
        <div>
          <input
            v-model="currentVal"
            type="number"
            pattern="[0-9]*"
            onkeyup="value=value.replace(/[^\d]/g, '')"
            v-on:input="handleInput($event)"
            @focus="handleFocus($event)"
            :disabled="inputDisabled"
            autocomplete="off"
            class="number-text" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'SelectNumber',
  props: {
    max: {
      type: Number,
      default: 9999
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    inputDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentVal: 0
    }
  },
  methods: {
    reduceNumber() {
      this.currentVal = Number(this.currentVal)
      if (this.currentVal > this.min) {
        this.currentVal -= this.step
        this.$emit('input', this.currentVal)
      }
    },
    increaseNumber() {
      this.currentVal = Number(this.currentVal)
      if (this.currentVal < this.max) {
        this.currentVal += this.step
        this.$emit('input', this.currentVal)
      }
    },
    handleFocus(e) {
      if (e.currentTarget.value === '0') {
        e.currentTarget.select()
      }
    },
    handleKeyup(e) {
      this.currentVal = e.currentTarget.value.replace(/[^\d]/g, '')
    },
    handleInput(e) {
      if (e.currentTarget.value.length > 4) {
        this.currentVal = e.currentTarget.value.slice(0, 4)
      }
    }
  },
  mounted() {
    let initVal = Number(this.value)
    if (isNaN(initVal)) return
    if (initVal >= this.max) initVal = this.max
    if (initVal <= this.min) initVal = this.min
    this.currentVal = initVal
  }
}
</script>
