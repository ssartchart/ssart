<template>
  <div>
    <aside class="sidebar">
      <chart-list
        
      />
    </aside>
    <chart-wizart-information v-if="isShowInformation" />
    <div v-else class="wizard-container" style="text-align: start; margin-left: 260px;">
      <div style="margin-top: 100px">
        <h1># {{chartName}} Chart</h1>        
          <iframe
            ref="iframe"
            title="output"
            sandbox="allow-scripts allow-same-origin"
            frameBorder="0"
            width="100%"
            height="100%"        
            :srcdoc="renderSrc"
            @load="resizeIframe"                     
          />
          <div style="margin-bottom: 2rem; margin-left: 80%">            
            <a class="text-decoration-none" @click.prevent="goToDocumentation" href="#!" style="margin-left: 2rem; margin-top: 15px">
              Detail Docs
              <i class="bi bi-arrow-right"></i>
            </a>        
          </div>
      </div>
      <!-- <div class="row"><div class="col-1-2"><div class="form-input"><label for="spaceInput">Slide space</label> <input type="number" id="spaceInput" placeholder="Type number"></div> <div class="form-input"><label for="widthInput">Slide width</label> <input type="number" id="widthInput" placeholder="Type number"></div> <div class="form-input"><label for="heightInput">Slide height</label> <input type="number" id="heightInput" placeholder="Type number"></div> <div class="form-input"><label for="borderInput">Slide border</label> <input type="number" id="borderInput" placeholder="Type number"></div> <div class="form-input"><label for="perspectiveInput">Slide perspective</label> <input type="number" id="perspectiveInput" placeholder="Type number"></div> <div class="form-input"><label for="scalingInput">Slide scaling</label> <input type="number" id="scalingInput" placeholder="Type number"></div></div> <div class="col-1-2"><div class="form-input"><button class="button">Add Slide</button> <button class="button">Remove Slide</button></div> <div class="form-input"><button class="button">Show/hide Navigation</button></div> <div class="form-input"><label for="visibleInput">Number of visible</label> <input type="number" id="visibleInput" placeholder="Type number"></div> <div class="form-input"><label for="infiniteCheckbox">Infinite loop</label> <input type="checkbox" id="infiniteCheckbox"></div> <div class="form-input"><label for="disable3dCheckbox">Disable 3d</label> <input type="checkbox" id="disable3dCheckbox"></div> <div class="form-input"><label for="animationSpeedInput">Animation speed</label> <input type="number" id="animationSpeedInput" placeholder="Type number"></div> <div class="form-input"><label for="dirSelect">Direction</label> <select id="dirSelect"><option value="ltr">LTR</option> <option value="rtl">RTL</option></select></div></div></div> -->
      <div class="pane top-pane">
        <div class="editor-title" style="display:flex; justify-content: space-between">
          <div>
            <button @click="selectLanguage('HTML')" :class="displayName == 'HTML' ? 'active' : ''">HTML</button>
            <button @click="selectLanguage('Config')" :class="displayName == 'Config' ? 'active' : ''">Config</button>
            <button @click="selectLanguage('Data')" :class="displayName == 'Data' ? 'active' : ''">Data</button>
          </div>
          <div style="margin-right: 2rem; cursor: pointer" @click="doCopy">
            <i class="fa-solid fa-copy fa-2x" style="color:rgba(255, 255, 255, 0.55); margin-top: 5px" title="Copy"></i>
          </div>
        </div>
        <div class="editor-container">    
          <codemirror
            ref="HTML"
            v-if="displayName == 'HTML'" 
            class="html" 
            :options="htmlOptions"     
            :value="htmlCode"
            @ready="onCmReady"
            @focus="onCmFocus"
            @input="onCmCodeChange"
          ></codemirror>
          <codemirror
            ref="Config"
            v-if="displayName == 'Config'" 
            class="css"
            :options="configOptions" 
            :value="configCode"
            @ready="onCmReady"
            @focus="onCmFocus"
            @input="onCmCodeChange" 
          ></codemirror>
          <codemirror 
            ref="Data"
            v-if="displayName == 'Data'" 
            class="javascript"
            :options="dataOptions"  
            :value="dataCode"
            @ready="onCmReady"
            @focus="onCmFocus"
            @input="onCmCodeChange" 
          ></codemirror>
        </div>
      </div>       
    </div>
  </div>
</template>

<script>
// require component
import { codemirror } from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/addon/scroll/simplescrollbars.css'
import ChartList from './ChartList.vue'
import {
  verticalBarChart, 
  horizontalBarChart, 
  areaChart, 
  bubbleChart, 
  circleChart,
  lineChart,
  polarChart,
  radarChart,
  scatterChart,
  } from './chartScript'  
import ChartWizartInformation from './ChartWizartInformation.vue'
// component
export default {
  components: {
    codemirror,
    ChartList,
    ChartWizartInformation,    
  },
  data () {
    return {
      isShowInformation: false,
      chartName: "",
      srcdoc:``,
      displayName: 'Config',
      htmlCode: `<div id="ssart"></div>`,
      configCode: ``,
      dataCode: ``,
      htmlOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/html',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        styleActiveLine: true,
        foldGutter: true,
        lineWrapping: true,
        lint: true,
        // more codemirror options, 更多 codemirror 的高级配置...
      },
      configOptions: {
        // codemirror options
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        styleActiveLine: true,
        foldGutter: true,
        lineWrapping: true,
        lint: true,
        scrollbarStyle: 'simple'
        // more codemirror options, 更多 codemirror 的高级配置...
      },
      dataOptions: {
        // codemirror options
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        styleActiveLine: true,
        foldGutter: true,
        lineWrapping: true,
        lint: true,
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
      if (this.displayName === "HTML") {
        // console.log('this is new html code', newCode)
        this.htmlCode = newCode
      } else if (this.displayName === "Config") {
        // console.log('this is new css code', newCode)
        this.configCode = newCode
      } else if (this.displayName === "Data") {
        // console.log('this is new js code', newCode)
        this.dataCode = newCode
        // console.log('javascript', this.srcdoc)
      }
      // let script = `<html><body>${this.htmlCode}</body><style>${this.cssCode}</style><scr` + `ipt>${this.jsCode}</scr` + `ipt></html>`
      // this.srcdoc = script
    },
    selectLanguage (language) {
      this.displayName = language
    },
    resizeIframe () {
      let iframe = this.$refs.iframe         
      console.log(iframe.contentWindow.document.body.scrollHeight)
      if (iframe.contentWindow.document.body.scrollHeight < 650) {
        iframe.height = 500 + "px"
      } else {
        iframe.height = iframe.contentWindow.document.body.scrollHeight - 150 + 20 + "px";
      }
    },
    doCopy: function () {
      const content = this.$refs[this.displayName].codemirror.getDoc().getValue()
      this.$copyText(content).then(function (e) {
        alert('Copied')
        console.log(e)
      }, function (e) {
        alert('Can not copy')
        console.log(e)
      })
    },
    goToDocumentation: function () {
      if (this.$route.params.chartname === "vertical-bar-charts") {      
        this.$router.push('/document?field=Bar1')
      } else if (this.$route.params.chartname === "horizontal-bar-charts") {
        this.$router.push('/document?field=Bar2')
      } else if (this.$route.params.chartname === "area-charts") {
        this.$router.push('/document?field=Area')
      } else if (this.$route.params.chartname === "bubble-charts") {
        this.$router.push('/document?field=Bubble')
      } else if (this.$route.params.chartname === "circle-charts") {
        this.$router.push('/document?field=Circle')
      } else if (this.$route.params.chartname === "line-charts") {
        this.$router.push('/document?field=Line')
      } else if (this.$route.params.chartname === "polar-charts") {
        this.$router.push('/document?field=Polar')
      } else if (this.$route.params.chartname === "radar-charts") {
        this.$router.push('/document?field=Radar')
      } else if (this.$route.params.chartname === "scatter-charts") {
        this.$router.push('/document?field=Scatter')
      }
    },
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror
    },
    renderSrc() {      
      return `<html><body>${this.htmlCode}</body><style>#ssart{width: 100%; height: 100%; display: flex; justify-content: center;}</style>` +
      `<scr` + `ipt src="https://d3js.org/d3.v5.min.js"></scr` + `ipt>` +
      `<scr` + `ipt type="module">` +
      `import * as Chart from "https://cdn.jsdelivr.net/npm/ssart@1.0.11/src/index.js"
      ${this.dataCode}
      ${this.configCode}` +
      `</scr` + `ipt>`
      + `</html>`
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        // react to route changes...
        if (toParams.chartname === "information") {
          this.isShowInformation = true
          return
        } else {
          this.isShowInformation = false          
        }
        if (toParams.chartname === "vertical-bar-charts") {
          this.chartName = 'Vertical Bar'
          this.dataCode = verticalBarChart.data
          this.configCode = verticalBarChart.config
        } else if (toParams.chartname === "horizontal-bar-charts") {
          this.chartName = 'Horizontal Bar'
          this.dataCode = horizontalBarChart.data
          this.configCode = horizontalBarChart.config
        } else if (toParams.chartname === "area-charts") {
          this.chartName = 'Area'
          this.dataCode = areaChart.data
          this.configCode = areaChart.config
        } else if (toParams.chartname === "bubble-charts") {
          this.chartName = 'Bubble'
          this.dataCode = bubbleChart.data
          this.configCode = bubbleChart.config
        } else if (toParams.chartname === "circle-charts") {
          this.chartName = 'Circle'
          this.dataCode = circleChart.data
          this.configCode = circleChart.config
        } else if (toParams.chartname === "line-charts") {
          this.chartName = 'Line'
          this.dataCode = lineChart.data
          this.configCode = lineChart.config
        } else if (toParams.chartname === "polar-charts") {
          // console.log('Polar')
          this.chartName = 'Polar'
          this.dataCode = polarChart.data
          this.configCode = polarChart.config
        } else if (toParams.chartname === "radar-charts") {
          this.chartName = 'Radar'
          this.dataCode = radarChart.data
          this.configCode = radarChart.config
        } else if (toParams.chartname === "scatter-charts") {
          this.chartName = 'Scatter'
          this.dataCode = scatterChart.data
          this.configCode = scatterChart.config
        }
        return
      }
    )
    // console.log('this is current codemirror object', this.codemirror)
    // you can use this.codemirror to do something...
    if (this.$route.params.chartname === "information") {
        this.isShowInformation = true
        return
      } else {
        this.isShowInformation = false          
      } 
    if (this.$route.params.chartname === "vertical-bar-charts") {      
      this.chartName = 'Vertical Bar'
      this.dataCode = verticalBarChart.data
      this.configCode = verticalBarChart.config
    } else if (this.$route.params.chartname === "horizontal-bar-charts") {
      this.chartName = 'Horizontal Bar'
      this.dataCode = horizontalBarChart.data
      this.configCode = horizontalBarChart.config
    } else if (this.$route.params.chartname === "area-charts") {
      this.chartName = 'Area'
      this.dataCode = areaChart.data
      this.configCode = areaChart.config
    } else if (this.$route.params.chartname === "bubble-charts") {
      this.chartName = 'Bubble'
      this.dataCode = bubbleChart.data
      this.configCode = bubbleChart.config
    } else if (this.$route.params.chartname === "circle-charts") {
      this.chartName = 'Circle'
      this.dataCode = circleChart.data
      this.configCode = circleChart.config
    } else if (this.$route.params.chartname === "line-charts") {
      this.chartName = 'Line'
      this.dataCode = lineChart.data
      this.configCode = lineChart.config
    } else if (this.$route.params.chartname === "polar-charts") {
      this.chartName = 'Polar'
      // console.log('Polar')
      this.dataCode = polarChart.data
      this.configCode = polarChart.config
    } else if (this.$route.params.chartname === "radar-charts") {
      this.chartName = 'Radar'
      this.dataCode = radarChart.data
      this.configCode = radarChart.config
    } else if (this.$route.params.chartname === "scatter-charts") {
      this.chartName = 'Scatter'
      this.dataCode = scatterChart.data
      this.configCode = scatterChart.config
    }
  },
}
</script>

<style scoped> 
.CodeMirror-simplescroll-vertical {
  background: black; 
}
.wizard-container {
  /* background-color: hsl(225, 6%, 25%); */
  /* max-height: 1000px; */
}
.top-pane {
  /* background-color: hsl(225, 6%, 25%);   */
}

.pane {
  height: 50vh;
  /* display: flex; */
}

.editor-container {
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0rem .5rem 0rem .5rem;  
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
  /* background-image: linear-gradient(hsl(225, 6%, 13%)); */  
  margin: 0rem .5rem 0rem .5rem;  
  padding: .5rem .5rem .0rem 1rem;
  border-top-right-radius: .5rem;
  border-top-left-radius: .5rem;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}

.editor-title button {
  margin: 0 1rem;
  line-height: 3rem;
  text-decoration: none;
  color: white;
  background: hsl(225, 6%, 13%);    
  border-top: hsl(225, 6%, 13%);
  border-right: hsl(225, 6%, 13%);
  border-left: hsl(225, 6%, 13%);
  border-bottom: 3px solid hsl(225, 6%, 13%);    
}
.editor-title .active {
  border-bottom-color: #3080d0ed;
  border-width: 3px;
}
.code-mirror-wrapper {
  flex-grow: 1;
  border-bottom-right-radius: .5rem;
  border-bottom-left-radius: .5rem;
  overflow: hidden;
}

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
</style>