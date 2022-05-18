<template>
  <div>
    <ul id="doculist">
      <li class="ListSpan" @click="gettingStarted">
        <span id="gettingStarted" style="font-weight: bold;">Getting Started</span>
      </li>
      <li>
        <span class="ListSpan" @click="showChart">Charts</span>
        <ul v-show="isShowChart">
          <li class="underList" @click="area">
            <span class="underListSpan">Area</span>            
          </li>
          <li class="underList" @click="bar1">
            <span class="underListSpan">Bar1</span>
          </li>
          <li class="underList" @click="bar2">
            <span class="underListSpan">Bar2</span>
          </li>
          <li class="underList">
            <span class="underListSpan">Bubble</span>
          </li>
          <li class="underList">
            <span class="underListSpan">Circle</span>
          </li>
          <li class="underList">
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
      </li>
      <li>
        <span class="ListSpan" @click="showConfig">Configuration</span>
        <ul v-show="isShowConfig">
          <li class="underList" @click="axis">
            <span class="underListSpan">Axis</span>
          </li>
          <li class="underList" @click="background">
            <span class="underListSpan">Background</span>
          </li>
          <li class="underList" @click="grid">
            <span class="underListSpan">Grid</span>
          </li>
          <li class="underList" @click="legend">
            <span class="underListSpan">Legend</span>
          </li>
          <li class="underList" @click="margin">
            <span class="underListSpan">Margin</span>
          </li>
          <li class="underList" @click="menu">
            <span class="underListSpan">Menu</span>
          </li>
          <li class="underList" @click="title">
            <span class="underListSpan">Title</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DocumentList',
  components: {

  },
  data() {
    return {
      isShowChart: false,
      isShowConfig: false
    }
  },
  methods: {
    showChart: function(e) {
      this.isShowChart = !this.isShowChart
      if (e.target.style.fontWeight === "bold") {
        e.target.style.fontWeight = "normal"
      } else {
        e.target.style.fontWeight = "bold"
      }
    },
    showConfig: function(e) {
      this.isShowConfig = !this.isShowConfig
      if (e.target.style.fontWeight === "bold") {
        e.target.style.fontWeight = "normal"
      } else {
        e.target.style.fontWeight = "bold"
      }
    },
    allNormal: function() {
      const underList = document.getElementsByClassName("underList")
      const underListSpan = document.getElementsByClassName("underListSpan")
      for (let i = 0; i < underList.length; i++) {
        underListSpan[i].style.fontWeight = "normal"
      }
      for (let i = 0; i < underListSpan.length; i++) {
        underListSpan[i].style.fontWeight = "normal"
      }
      document.getElementById("gettingStarted").style.fontWeight = "normal"
    },
    axis: function(e) {
      this.allNormal()
      this.$emit('axis')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    gettingStarted: function() {
      this.allNormal()
      this.$emit('gettingStarted')
      document.getElementById("gettingStarted").style.fontWeight = "bold"
    },
    background: function(e) {
      this.allNormal()
      this.$emit('background')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    grid: function(e) {
      this.allNormal()
      this.$emit('grid')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    legend: function(e) {
      this.allNormal()
      this.$emit('legend')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    margin: function(e) {
      this.allNormal()
      this.$emit('margin')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    menu: function(e) {
      this.allNormal()
      this.$emit('menu')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    title: function(e) {
      this.allNormal()
      this.$emit('title')
      e.target.style.fontWeight = "bold"
      if (e.target.firstChild.className==="underListSpan") {
        e.target.firstChild.style.fontWeight = "bold"
      }
    },
    area: function(e) {
      this.allNormal()
      // console.log("chk")
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