<template>
  <div id="documentation">
    <aside class="sidebar">
      <document-list
        @axis="showAxis"
        @gettingStarted="showGettingStarted"
        @background="showBackground"
        @grid="showGrid"
        @legend="showLegend"
        @margin="showMargin"
        @menu="showMenu"
        @title="showTitle"
        @area="showArea"
        @bar1="showBar1"
        @bar2="showBar2"
        @polar="showPolar"
        @radar="showRadar"
        @scatter="showScatter"
      />
    </aside>
    
    <div style="width: 1000px; text-align: start; margin-bottom: 100px; margin-left: 200px;">
      <div style="padding-left: 150px;">
        <h1>SSART Documentation</h1>
        <br>
        <hr>
        <getting-started
          v-if="isShowGettingStarted"
        />
        <axis
          v-if="isShowAxis"
        />
        <background
          v-if="isShowBackground"
        />
        <grid
          v-if="isShowGrid"
        />
        <legend-document
          v-if="isShowLegend"
        />
        <margin
          v-if="isShowMargin"
        />
        <menu-document
          v-if="isShowMenu"
        />
        <title-document
          v-if="isShowTitle"
        />
        <area-chart
          v-if="isShowArea"
        />
        <bar-1
          v-if="isShowBar1"
        />
        <bar-2
          v-if="isShowBar2"
        />
        <polar-chart
          v-if="isShowPolar"
        />
        <radar-chart
          v-if="isShowRadar"
        />
        <scatter-chart
          v-if="isShowScatter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Axis from './documentations/Axis.vue'
import DocumentList from './DocumentList.vue'
import Background from './documentations/Background.vue'
import Grid from './documentations/Grid.vue'
import Margin from './documentations/Margin.vue'
import TitleDocument from './documentations/TitleDocument.vue'
import MenuDocument from './documentations/MenuDocument.vue'
import LegendDocument from './documentations/LegendDocument.vue'
import GettingStarted from './documentations/GettingStarted.vue'
import AreaChart from './documentations/AreaChart.vue'
import Bar1 from './documentations/Bar1.vue'
import Bar2 from './documentations/Bar2.vue'

import PolarChart from './documentations/PolarChart.vue'
import RadarChart from './documentations/RadarChart.vue'
import ScatterChart from './documentations/ScatterChart.vue'

export default {
  name: 'Documentation',
  components: {
    DocumentList,
    Axis,
    Background,
    Grid,
    Margin,
    TitleDocument,
    MenuDocument,
    LegendDocument,
    GettingStarted,
    AreaChart,
    Bar1,
    Bar2,
    PolarChart,
    RadarChart,
    ScatterChart,
  },
  data() {
    return {
      isShowAxis: false,
      isShowGettingStarted: true,
      isShowBackground: false,
      isShowGrid: false,
      isShowLegend: false,
      isShowMargin: false,
      isShowMenu: false,
      isShowTitle: false,
      isShowArea : false,
      isShowBar1 : false,
      isShowBar2 : false,
      isShowPolar: false,
      isShowRadar: false,
      isShowScatter: false
    }
  },
  methods: {
    hiddenAll: function() {
      this.isShowAxis = false
      this.isShowGettingStarted = false
      this.isShowBackground = false
      this.isShowGrid = false
      this.isShowLegend = false
      this.isShowMargin = false
      this.isShowMenu = false
      this.isShowTitle = false
      this.isShowArea = false
      this.isShowBar1 = false
      this.isShowBar2 = false
      this.isShowPolar = false
      this.isShowRadar = false
      this.isShowScatter = false
    },
    showAxis: function() {
      this.hiddenAll()
      this.isShowAxis = true
    },
    showGettingStarted: function() {
      this.hiddenAll()
      this.isShowGettingStarted = true
    },
    showBackground: function() {
      this.hiddenAll()
      this.isShowBackground = true
    },
    showGrid: function() {
      this.hiddenAll()
      this.isShowGrid = true
    },
    showLegend: function() {
      this.hiddenAll()
      this.isShowLegend = true
    },
    showMargin: function() {
      this.hiddenAll()
      this.isShowMargin = true
    },
    showMenu: function() {
      this.hiddenAll()
      this.isShowMenu = true
    },
    showTitle: function() {
      this.hiddenAll()
      this.isShowTitle = true
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
  }
}
</script>

<style scoped>
  .sidebar {
    background-color: #fff;
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