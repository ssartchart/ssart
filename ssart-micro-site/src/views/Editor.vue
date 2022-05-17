<template>
  <div class="editor-container">
    <!-- <div class="editor-title">
      {{displayName}}
      <button
        type="button"
        class="expand-collapse-btn"
        @click="1"
      >
        I/O
      </button>
    </div> -->
    <codemirror class="html" v-model="code" :options="htmlOptions"></codemirror>
    <!-- <codemirror class="css" v-model="code" :options="cssOptions"></codemirror>
    <codemirror class="javascript" v-model="code" :options="jsOptions"></codemirror> -->

  </div>
</template>

<script>
// require component
import { codemirror } from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'
// require more codemirror resource...

// component
export default {
  name: "Editor",
  components: {
    codemirror
  },
  props: {
    displayName: String,
  },
  data () {
    return {
      code: 'const a = 10',
      htmlOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/html',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        // more codemirror options, 更多 codemirror 的高级配置...
      },
      cssOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/css',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        // more codemirror options, 更多 codemirror 的高级配置...
      },
      jsOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        // more codemirror options, 更多 codemirror 的高级配置...
      },
    }
  },
  methods: {
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focus!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror
    }
  },
  mounted() {
    // console.log('this is current codemirror object', this.codemirror)
    // you can use this.codemirror to do something...
  }
}
</script>

<style scoped>

</style>