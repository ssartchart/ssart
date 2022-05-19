<template>
  <div>
    <ul id="chartList">
      <li :class="{ListSpan: true, active: this.$route.params.chartname == 'information'}" @click.prevent="$router.push({path: '/chart-wizard/information'}).catch(err => {}); scrollTop();">
        <span id="gettingStarted">Information</span>
      </li>
      <li :class="{ListSpan: true, active: this.$route.params.chartname == 'area-charts'}" @click.prevent="$router.push({path: '/chart-wizard/area-charts'}).catch(err => {}); scrollTop();" class="ListSpan">
        <span id="gettingStarted">Area Charts</span>
      </li>
      <li :class="{ListSpan: true, active: this.$route.params.chartname == 'horizontal-bar-charts'}" @click.prevent="$router.push({path: '/chart-wizard/horizontal-bar-charts'}).catch(err => {}); scrollTop();" class="ListSpan">
        <span id="gettingStarted">Horizontal Bar Charts</span>
      </li>
      <li :class="{ListSpan: true, active: this.$route.params.chartname == 'vertical-bar-charts'}" @click.prevent="$router.push({path: '/chart-wizard/vertical-bar-charts'}).catch(err => {}); scrollTop();" class="ListSpan">
        <span id="gettingStarted">Vertical Bar Charts</span>
      </li>
      <li :class="{ListSpan: true, active: this.$route.params.chartname == 'bubble-charts'}" @click.prevent="$router.push({path: '/chart-wizard/bubble-charts'}).catch(err => {}); scrollTop();" class="ListSpan">
        <span id="gettingStarted">Bubble Charts</span>
      </li>
      <li :class="{ListSpan: true, active: this.$route.params.chartname == 'circle-charts'}" @click.prevent="$router.push({path: '/chart-wizard/circle-charts'}).catch(err => {}); scrollTop();" class="ListSpan">
        <span id="gettingStarted">Circle Charts</span>
      </li>
      <li :class="{ListSpan: true, active: this.$route.params.chartname == 'line-charts'}" @click.prevent="$router.push({path: '/chart-wizard/line-charts'}).catch(err => {}); scrollTop();" class="ListSpan">
        <span id="gettingStarted">Line Charts</span>
      </li>
      <li :class="{ListSpan: true, active: this.$route.params.chartname == 'polar-charts'}" @click.prevent="$router.push({path: '/chart-wizard/polar-charts'}).catch(err => {}); scrollTop();" class="ListSpan">
        <span id="gettingStarted">Polar Charts</span>
      </li>
      <li :class="{ListSpan: true, active: this.$route.params.chartname == 'radar-charts'}" @click.prevent="$router.push({path: '/chart-wizard/radar-charts'}).catch(err => {}); scrollTop();" class="ListSpan">
        <span id="gettingStarted">Radar Charts</span>
      </li>
      <li :class="{ListSpan: true, active: this.$route.params.chartname == 'scatter-charts'}" @click.prevent="$router.push({path: '/chart-wizard/scatter-charts'}).catch(err => {}); scrollTop();" class="ListSpan">
        <span id="gettingStarted">Scatter Charts</span>
      </li>      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChartList',
  methods: {
    scrollTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
#chartList {
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
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: start;
  line-height: 35px;
}

.underList {
  background: #f5f5f5;
}

.ListSpan {
  margin-left: 50px;
  user-select: none;
  cursor: pointer;
}

.underListSpan {
  margin-left: 70px;
  user-select: none;
  cursor: pointer;
}
.active {
  color: #3080d0;
  font-weight: bold;
}
</style>