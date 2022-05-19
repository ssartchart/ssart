<template>
  <div id="documentation">
    <aside class="sidebar">
      <chart-sample-list
        @bubble="showBubble"
        @circle="showCircle"               
        @line="showLine"
        @area="showArea"
        @bar1="showBar1"
        @bar2="showBar2"
        @polar="showPolar"
        @radar="showRadar"
        @scatter="showScatter"
      />
    </aside>

    <div style="width: 1400px; text-align: start; margin-bottom: 100px; margin-left: 200px; margin-top:100px;">
      <div style="padding-left: 150px;">
        <h1>SSART Sample</h1>
        <br>
        <hr>
        <area-sample
          v-if="isShowArea"
        />
        <bar-1-sample
          v-if="isShowBar1"
        />
        <bar-2-sample
          v-if="isShowBar2"
        />
        <bubble-sample
          v-if="isShowBubble"
        />
        <circle-sample
          v-if="isShowCircle"
        />
        <line-sample
          v-if="isShowLine"
        />
        <polar-sample
          v-if="isShowPolar"
        />
        <radar-sample
          v-if="isShowRadar"
        />
        <scatter-sample
          v-if="isShowScatter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ChartSampleList from './ChartSampleList.vue'
import AreaSample from './chartSamples/AreaSample.vue'
import Bar1Sample from './chartSamples/Bar1Sample.vue'
import Bar2Sample from './chartSamples/Bar2Sample.vue'
import BubbleSample from './chartSamples/BubbleSample.vue'
import CircleSample from './chartSamples/CircleSample.vue'
import LineSample from './chartSamples/LineSample.vue'
import PolarSample from './chartSamples/PolarSample.vue'
import RadarSample from './chartSamples/RadarSample.vue'
import ScatterSample from './chartSamples/ScatterSample.vue'

export default {
  components: { ChartSampleList, AreaSample, Bar1Sample, Bar2Sample, BubbleSample, CircleSample, LineSample, PolarSample, RadarSample, ScatterSample },
  name: 'ChartSample',
  data() {
    return {
      isShowBubble: false,
      isShowCircle: false,
      isShowLine: false,
      isShowArea : true,
      isShowBar1 : false,
      isShowBar2 : false,
      isShowPolar: false,
      isShowRadar: false,
      isShowScatter: false
    }
  },
  methods: {
    hiddenAll: function() {
      this.isShowBubble = false
      this.isShowCircle = false
      this.isShowLine = false
      this.isShowArea = false
      this.isShowBar1 = false
      this.isShowBar2 = false
      this.isShowPolar = false
      this.isShowRadar = false
      this.isShowScatter = false

      window.scrollTo(0, 0);
    },
    showBubble: function() {
      this.hiddenAll()
      this.isShowBubble = true
    },
    showCircle: function() {
      this.hiddenAll()
      this.isShowCircle = true
    },
    showLine: function() {
      this.hiddenAll()
      this.isShowLine = true
    },
    showArea: function() {
      this.hiddenAll()
      this.isShowArea = true
    },
    showBar1: function() {
      this.hiddenAll()
      this.isShowBar1 = true
    },
    showBar2: function() {
      this.hiddenAll()
      this.isShowBar2 = true
    },
    showPolar: function() {
      this.hiddenAll()
      this.isShowPolar = true
    },
    showRadar: function() {
      this.hiddenAll()
      this.isShowRadar = true
    },
    showScatter: function() {
      this.hiddenAll()
      this.isShowScatter = true
    }
  },
  created() {
    const field = this.$route.query.field

    if(field == "Area") {
      this.isShowArea = true
    } else if(field == "Bar1") {
      this.isShowBar1 = true
    } else if(field == "Bar2") {
      this.isShowBar2 = true
    } else if(field == "Bubble") {
      this.isShowBubble = true
    } else if(field == "Circle") {
      this.isShowCircle = true
    } else if(field == "Line") {
      this.isShowLine = true
    } else if(field == "Polar") {
      this.isShowPolar = true
    } else if(field == "Radar") {
      this.isShowRadar = true
    } else if(field == "Scatter") {
      this.isShowScatter = true
    } else {
      this.isShowArea = true
    }
    window.scrollTo(0, 0)
  }
}
</script>

<style>
  .sidebar {
    background-color: #f1f1f1;
    width: 15rem;
    position: fixed;
    z-index: 10;
    margin: 0;
    top: 4.25rem;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    border-right: 1px solid #eaecef;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>