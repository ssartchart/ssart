<template>
  <div>
    <ul id="doculist">
      <li>
        <span class="ListSpan" @click="gettingStarted">Getting Started</span>
      </li>
      <li>
        <span class="ListSpan" @click="showChart">Charts</span>
        <ul v-if="isShowChart">
          <li class="underList">
            <span class="underListSpan">Area</span>            
          </li>
          <li class="underList">
            <span class="underListSpan">Bar1</span>
          </li>
          <li class="underList">
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
          <li class="underList">
            <span class="underListSpan">Polar</span>
          </li>
          <li class="underList">
            <span class="underListSpan">Radar</span>
          </li>
          <li class="underList">
            <span class="underListSpan">Scatter</span>
          </li>
        </ul>
      </li>
      <li>
        <span class="ListSpan" @click="showConfig">Configuration</span>
        <ul v-if="isShowConfig">
          <li class="underList">
            <span class="underListSpan" @click="axis">Axis</span>
          </li>
          <li class="underList">
            <span class="underListSpan" @click="background">Background</span>
          </li>
          <li class="underList">
            <span class="underListSpan" @click="grid">Grid</span>
          </li>
          <li class="underList">
            <span class="underListSpan" @click="legend">Legend</span>
          </li>
          <li class="underList">
            <span class="underListSpan" @click="margin">Margin</span>
          </li>
          <li class="underList">
            <span class="underListSpan" @click="menu">Menu</span>
          </li>
          <li class="underList">
            <span class="underListSpan" @click="title">Title</span>
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
    showChart: function() {
      this.isShowChart = !this.isShowChart
    },
    showConfig: function() {
      this.isShowConfig = !this.isShowConfig
    },
    axis: function() {
      this.$emit('axis')
    },
    gettingStarted: function() {
      this.$emit('gettingStarted')
    },
    background: function() {
      this.$emit('background')
    },
    grid: function() {
      this.$emit('grid')
    },
    legend: function() {
      this.$emit('legend')
    },
    margin: function() {
      this.$emit('margin')
    },
    menu: function() {
      this.$emit('menu')
    },
    title: function() {
      this.$emit('title')
    }
  }
  
}
</script>

<style>
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
}

.underListSpan {
  margin-left: 70px;
}
</style>