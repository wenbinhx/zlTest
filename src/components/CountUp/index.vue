<script>
import Countup from 'countup.js'

export default {
  name: 'countup',
  data() {
    return {
      rolling: false
    }
  },
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    start: {
      type: Boolean,
      default: true
    },
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    // number of decimal places in number
    decimals: {
      type: Number,
      default: 0
    },
    // duration in seconds
    duration: {
      type: Number,
      default: 2
    },
    refresh: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  render(h) {
    return h(this.tag, {}, [this.startVal])
  },
  watch: {
    start(val) {
      if (val) {
        this.rolling = true
        this._countup.start()
      }
    },
    endVal(val) {
      this.rolling = false
      this._countup.update(val)
    },
    refresh(val) {
      if (val && !this.rolling) {
        this.rolling = true
        this._countup = new Countup(this.$el, this.startVal, this.endVal, this.decimals, this.duration, this.options)
        this._countup.start()
        this.rolling = false
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._countup = new Countup(this.$el, this.startVal, this.endVal, this.decimals, this.duration, this.options)
      if (this.start) {
        this._countup.start()
      }
    })
  }
}
</script>
