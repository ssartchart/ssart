<template>
  <div>
    <ul>
      <li class="underList" @click="area">
        <span class="underListSpan">Area</span>            
      </li>
      <li class="underList" @click="bar1">
        <span class="underListSpan">Bar1</span>
      </li>
      <li class="underList" @click="bar2">
        <span class="underListSpan">Bar2</span>
      </li>
      <li class="underList" @click="bubble">
        <span class="underListSpan">Bubble</span>
      </li>
      <li class="underList" @click="circle">
        <span class="underListSpan">Circle</span>
      </li>
      <li class="underList" @click="line">
        <span class="underListSpan">Line</span>
      </li>
      <li class="underList" @click="polar">
        <span class="underListSpan">Polar</span>
      </li>
      <li class="underList" @click="radar">
        <span class="underListSpan">Radar</span>
      </li>
      <li class="underList" @click="scatter">
        <span class="underListSpan">Scatter</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChartSampleList',
  components: {

  },
  data() {
    return {
    }
  },
  methods: {
    allNormal: function() {
      const underList = document.getElementsByClassName("underList")
      const underListSpan = document.getElementsByClassName("underListSpan")
      for (let i = 0; i < underList.length; i++) {
        underListSpan[i].style.fontWeight = "normal"
      }
      for (let i = 0; i < underListSpan.length; i++) {
        underListSpan[i].style.fontWeight = "normal"
      }
    },
    bubble: function(e) {
      this.allNormal()
      this.$emit('bubble')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    circle: function(e) {
      this.allNormal()
      this.$emit('circle')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    line: function(e) {
      this.allNormal()
      this.$emit('line')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    area: function(e) {
      this.allNormal()
      this.$emit('area')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    polar: function(e) {
      this.allNormal()
      this.$emit('polar')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    bar1: function(e) {
      this.allNormal()
      this.$emit('bar1')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    radar: function(e) {
      this.allNormal()
      this.$emit('radar')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    bar2: function(e) {
      this.allNormal()
      this.$emit('bar2')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    scatter: function(e) {
      this.allNormal()
      this.$emit('scatter')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    }
  }
}
</script>

<style scoped>
#doculist {
  min-height: 850px;
  margin: 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-top: 10px;
  padding-left: 0 !important;
  background-color: #f1f1f1;
  height: 100%;
}

li {
  display: block;
  color: #000;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: start;
  line-height: 35px;
}

.underList {
  background: #f5f5f5;
}

.ListSpan {
  margin-left: 20px;
  user-select: none;
  cursor: pointer;
}

.underListSpan {
  margin-left: 70px;
  user-select: none;
  cursor: pointer;
}
</style>