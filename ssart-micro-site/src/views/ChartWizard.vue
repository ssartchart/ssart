<template> 
  <div>
    <div className="pane top-pane">
      <div class="editor-title">
        <span>HTML</span>
        <span>Javascript</span>
        <span>CSS</span>
        <button
          type="button"
          class="expand-collapse-btn"
          @click="1"
        >
          I/O
      </button>
    </div>
      <Editor :displayName="displayName" /> 
    </div> 
    <div className="pane">
      <iframe
      />
    </div>
  </div>
</template>

<script>
import Editor from './Editor.vue';

// component
export default {
  components: {
    Editor
  },
  data () {
    return {
      displayName: "Javascript"
    }
  }
}
</script>

<style scoped>
.top-pane {
  background-color: hsl(111, 6%, 25%);
}

.pane {
  height: 50vh;
  display: flex;
}

.editor-container {
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0rem .5rem 0rem .5rem;
  /* background-color: hsl(225, 6%, 25%); */
}

.editor-container.collapsed {
  flex-grow: 0;
}

.editor-container.collapsed .CodeMirror-scroll {
  position: absolute;
  overflow: hidden !important;
}

.expand-collapse-btn {
  margin-left: .5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.editor-title {
  /* display: flex;
  justify-content: space-between; */
  background-color: hsl(225, 6%, 13%);
  background-image: linear-gradient(hsl(225, 6%, 13%));
  color: white;
  margin: 0rem .5rem 0rem .5rem;  
  padding: .5rem .5rem .0rem 1rem;
  border-top-right-radius: .5rem;
  border-top-left-radius: .5rem;
}

.CodeMirror {
  height: 100% !important;
}

.code-mirror-wrapper {
  flex-grow: 1;
  border-bottom-right-radius: .5rem;
  border-bottom-left-radius: .5rem;
  overflow: hidden;
}

</style>