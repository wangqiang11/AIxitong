import { defineComponent, toRaw, shallowRef, computed, ref, readonly, onMounted, watch, normalizeClass, onBeforeUnmount, h as h$1, useSSRContext, useAttrs, reactive, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import p from 'video.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

function g(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);}return t}var d={src:{type:String,onChange:function(e,n){return e.src(n)}},width:{type:Number,onChange:function(e,n){return e.width(n)},onEvent:function(e,n){e.on(["playerresize","resize"],(function(){return n(e.width())}));}},height:{type:Number,onChange:function(e,n){return e.height(n)},onEvent:function(e,n){e.on(["playerresize","resize"],(function(){return n(e.height())}));}},preload:{type:String,onChange:function(e,n){return e.preload(n)}},loop:{type:Boolean,onChange:function(e,n){return e.loop(n)}},muted:{type:Boolean,onChange:function(e,n){return e.muted(n)},onEvent:function(e,n){return e.on("volumechange",(function(){return n(e.muted())}))}},poster:{type:String,onChange:function(e,n){return e.poster(n)},onEvent:function(e,n){return e.on("posterchange",(function(){return n(e.poster())}))}},controls:{type:Boolean,onChange:function(e,n){return e.controls(n)},onEvent:function(e,n){e.on("controlsenabled",(function(){return n(!0)})),e.on("controlsdisabled",(function(){return n(!1)}));}},autoplay:{type:[Boolean,String],onChange:function(e,n){return e.autoplay(n)}},crossorigin:{type:String,onChange:function(e,n){return e.crossOrigin(n)}},crossOrigin:{type:String,onChange:function(e,n){return e.crossOrigin(n)}},playsinline:{type:Boolean,onChange:function(e,n){return e.playsinline(n)}},playsInline:{type:Boolean,onChange:function(e,n){return e.playsinline(n)}}},f={id:{type:String},sources:{type:Array,onChange:function(e,n){return e.src(n)}},tracks:{type:Array,onChange:function(e,n){for(var t=e.remoteTextTracks(),r=(null==t?void 0:t.length)||0;r--;)e.removeRemoteTextTrack(t[r]);e.ready((function(){n.forEach((function(n){return e.addRemoteTextTrack(n,!1)}));}));}},textTrackSettings:{type:Object,onChange:function(e,n){return e.textTrackSettings.options(n)}},language:{type:String,onChange:function(e,n){return e.language(n)},onEvent:function(e,n){return e.on("languagechange",(function(){return n(e.language())}))}},languages:{type:Object},playbackRates:{type:Array,onChange:function(e,n){return e.playbackRates(null!=n?n:[])},onEvent:function(e,n){e.on("playbackrateschange",(function(){return n(e.playbackRates())}));}},audioOnlyMode:{type:Boolean,onChange:function(e,n){return e.audioOnlyMode(n)}},audioPosterMode:{type:Boolean,onChange:function(e,n){return e.audioPosterMode(n)}},responsive:{type:Boolean,onChange:function(e,n){return e.responsive(n)}},breakpoints:{type:Object,onChange:function(e,n){return e.breakpoints(n)}},fluid:{type:Boolean,onChange:function(e,n){return e.fluid(n)}},fill:{type:Boolean,onChange:function(e,n){return e.fill(n)}},aspectRatio:{type:String,onChange:function(e,n){return e.aspectRatio(n)}},fullscreen:{type:Object},liveui:{type:Boolean},liveTracker:{type:Object},disablePictureInPicture:{type:Boolean,onChange:function(e,n){return e.disablePictureInPicture(n)}},notSupportedMessage:{type:String},normalizeAutoplay:{type:Boolean},noUITitleAttributes:{type:Boolean},preferFullWindow:{type:Boolean},suppressNotSupportedError:{type:Boolean},techCanOverridePoster:{type:Boolean},reportTouchActivity:{type:Boolean},techOrder:{type:Array},inactivityTimeout:{type:Number},userActions:{type:Object},plugins:{type:Object},restoreEl:{type:[Boolean,Object]},"vtt.js":{type:String}},v={children:{type:[Array,Object]},controlBar:{type:Object,onChange:function(e,n){return e.controlBar.options(n)}}},y={html5:{type:Object}},h={volume:{type:Number,onChange:function(e,n){return e.volume(n)},onEvent:function(e,n){return e.on("volumechange",(function(){return n(e.volume())}))}},playbackRate:{type:Number,onChange:function(e,n){e.playbackRate(n),e.defaultPlaybackRate(n);},onEvent:function(e,n){e.on("ratechange",(function(){n(e.playbackRate());}));}},options:{type:Object}},b=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),f),v),y),h),m=Object.keys(b),O=Object.assign(Object.assign(Object.assign(Object.assign({},{loadstart:"onLoadStart",suspend:"onSuspend",abort:"onAbort",error:"onError",emptied:"onEmptied",stalled:"onStalled",loadedmetadata:"onLoadedMetadata",loadeddata:"onLoadedData",canplay:"onCanPlay",canplaythrough:"onCanPlayThrough",playing:"onPlaying",waiting:"onWaiting",seeking:"onSeeking",seeked:"onSeeked",ended:"onEnded",durationchange:"onDurationChange",timeupdate:"onTimeUpdate",progress:"onProgress",play:"onPlay",pause:"onpause",ratechange:"onRateChange",resize:"onResize",volumechange:"onVolumeChange"}),{posterchange:"onPosterChange",languagechange:"onLanguageChange",fullscreenchange:"onFullscreenChange",playbackrateschange:"onPlaybackRatesChange",controlsdisabled:"onControlsDisabled",controlsenabled:"onControlsEnabled",enterFullWindow:"onEnterFullWindow",exitFullWindow:"onExitFullWindow",enterpictureinpicture:"onEnterPictureInPicture",leavepictureinpicture:"onLeavePictureInPicture",sourceset:"onSourceSet",texttrackchange:"onTextTrackChange",textdata:"onTextData",useractive:"onUserActive",userinactive:"onUserInactive",usingcustomcontrols:"onUsingCustomControls",usingnativecontrols:"onUsingNativeControls",dispose:"onDispose"}),{beforepluginsetup:"onBeforePluginSetup",pluginsetup:"onPluginSetup"}),{componentresize:"onComponentResize",playerresize:"onPlayerResize",ready:"onReady",tap:"onTap"}),k=Object.keys(O);Object.values(O);var C=function(e){var n,t=null==e?void 0:e.trim().replace(/\s+/g," ");return t&&null!==(n=t.split(" "))&&void 0!==n?n:[]},j={src:{getter:function(e){return e.src()}},currentSrc:{getter:function(e){return e.currentSrc()}},currentSource:{getter:function(e){return e.currentSource()}},width:{events:["resize","playerresize"],getter:function(e){return e.width()}},height:{events:["resize","playerresize"],getter:function(e){return e.height()}},currentWidth:{events:["resize","playerresize"],getter:function(e){return e.currentWidth()}},currentHeight:{events:["resize","playerresize"],getter:function(e){return e.currentHeight()}},videoWidth:{events:["resize","playerresize"],getter:function(e){return e.videoWidth()}},videoHeight:{events:["resize","playerresize"],getter:function(e){return e.videoHeight()}},controls:{events:["controlsdisabled","controlsenabled"],getter:function(e){return e.controls()}},volume:{events:["volumechange"],getter:function(e){return e.volume()}},muted:{events:["volumechange"],getter:function(e){return e.muted()}},poster:{events:["posterchange"],getter:function(e){return e.poster()}},seeking:{events:["seeking"],getter:function(e){return e.seeking()}},paused:{events:["pause","play","playing"],getter:function(e){return e.paused()}},ended:{events:["ended","play"],getter:function(e){return e.ended()}},currentTime:{events:["timeupdate"],getter:function(e){return e.currentTime()}},duration:{events:["durationchange"],getter:function(e){return e.duration()}},playbackRate:{events:["ratechange"],getter:function(e){return e.playbackRate()}},playbackRates:{events:["playbackrateschange"],getter:function(e){return e.playbackRates()}},isFullscreen:{events:["fullscreenchange"],getter:function(e){return e.isFullscreen()}},isInPictureInPicture:{events:["enterpictureinpicture","leavepictureinpicture"],getter:function(e){return e.isInPictureInPicture()}},isLive:{getter:function(e){var n;return null===(n=e.liveTracker)||void 0===n?void 0:n.isLive()}},language:{events:["languagechange"],getter:function(e){return e.language()}},userActive:{events:["useractive","userinactive"],getter:function(e){return e.userActive()}},readyState:{events:["loadeddata"],getter:function(e){return e.readyState()}},networkState:{events:["loadeddata","error"],getter:function(e){return e.networkState()}},error:{events:["loadeddata","error"],getter:function(e){return e.error()}},buffered:{events:["progress"],getter:function(e){return e.buffered()}},bufferedPercent:{events:["progress"],getter:function(e){return e.bufferedPercent()}},played:{events:["timeupdate"],getter:function(e){return e.played()}},seekable:{events:["progress","seeked"],getter:function(e){return e.seekable()}},audioTracks:{getter:function(e){var n;return null===(n=e.audioTracks)||void 0===n?void 0:n.call(e)}},videoTracks:{getter:function(e){var n;return null===(n=e.videoTracks)||void 0===n?void 0:n.call(e)}},textTracks:{getter:function(e){var n;return null===(n=e.textTracks)||void 0===n?void 0:n.call(e)}}},P=m.filter((function(e){return Boolean(b[e].onEvent)})),S=function(e){return "update:"+e},E=k.concat(P.map(S)),T=m.reduce((function(e,n){var t,r=b[n],o=Array.isArray(r.type)?r.type:[r.type],a=Object.assign({},r);return o.includes(Boolean)&&(a.default=void 0),Object.assign(Object.assign({},e),((t={})[n]=a,t))}),{}),B=defineComponent({name:"VueVideoPlayer",props:Object.assign(Object.assign({},T),{class:[String,Object,Array]}),emits:E.concat(["mounted"],["unmounted"]),setup:function(e,d){var f=toRaw(e),v=f.class,y=g(f,["class"]),h=shallowRef(!1),O=shallowRef(null),E=shallowRef(null),T=computed((function(){return E.value?E.value.player:null})),B=ref(null),R=computed((function(){return B.value?readonly(B.value):null}));return onMounted((function(){var n,t=function(e){var n,t=e.props,r=e.element,o=e.className,a=e.onEvent,i=t.options;void 0===i&&(i={});var u=g(t,["options"]),c={};Object.keys(u).forEach((function(e){var n=u[e];void 0!==n&&(c[e]=n);}));var l=Object.assign(Object.assign({},c),i),s=l.volume,d=l.playbackRate,f=g(l,["volume","playbackRate"]),v=Object.assign(Object.assign({},f),{playsinline:null!==(n=f.playsinline)&&void 0!==n?n:f.playsInline}),y=p(r,v,(function(){var e=this;k.forEach((function(n){e.on(n,(function(e){a(n,e);}));})),f.src&&!f.sources&&this.src(f.src),s&&Number.isFinite(s)&&this.volume(s),d&&Number.isFinite(d)&&(this.defaultPlaybackRate(d),setTimeout((function(){e.playbackRate(d);}),0));}));o&&C(o).map((function(e){return y.addClass(e)}));var h=function(e){var n;null===(n=y.options)||void 0===n||n.call(y,null!=e?e:{});};return {player:y,dispose:function(){return y.dispose()},updateClassNames:function(e,n){C(e).map((function(e){return y.removeClass(e)})),C(n).map((function(e){return y.addClass(e)}));},updateOptions:h,updatePropOption:function(e,n){var t,r,o;h(((t={})[e]=n,t)),null===(o=null===(r=b[e])||void 0===r?void 0:r.onChange)||void 0===o||o.call(r,y,n);}}}({element:O.value,props:y,onEvent:d.emit});n={player:t.player,onEvent:d.emit},P.forEach((function(e){var t,r;null===(r=null===(t=b[e])||void 0===t?void 0:t.onEvent)||void 0===r||r.call(t,n.player,(function(t){n.onEvent(S(e),t);}));})),watch((function(){return e.class}),(function(e,n){var r=normalizeClass(n),o=normalizeClass(e);t.updateClassNames(r,o);}),{immediate:!0}),watch((function(){return e.options}),(function(e){return t.updateOptions(null!=e?e:{})}),{deep:!0}),m.filter((function(e){return "options"!==e})).forEach((function(n){watch((function(){return e[n]}),(function(e){return t.updatePropOption(n,e)}),{deep:!0});})),function(e,n){var t=Object.keys(j),r=t.reduce((function(n,t){var r;return Object.assign(Object.assign({},n),((r={})[t]=j[t].getter(e),r))}),{playing:!1,waiting:!1}),o=function(e,t){r[e]=t,n.onUpdate(e,t,Object.assign({},r));};e.on(["pause","ended"],(function(){o("playing",!1);})),e.on(["play","playing"],(function(){o("playing",!0);})),e.on("waiting",(function(){o("waiting",!0);var n=e.currentTime(),t=function(){n!==e.currentTime()&&(o("waiting",!1),e.off("timeupdate",t));};e.on("timeupdate",t);})),t.forEach((function(n){var t,r=j[n];e.on(["loadstart","loadedmetadata"].concat(null!==(t=r.events)&&void 0!==t?t:[]),(function(){o(n,r.getter(e));}));})),n.onInit(Object.assign({},r));}(t.player,{onInit:function(e){B.value=e;},onUpdate:function(e,n){B.value&&(B.value[e]=n);}}),E.value=t,h.value=!0,d.emit("mounted",{video:O.value,player:T.value,state:R.value});})),onBeforeUnmount((function(){E.value&&(E.value.dispose(),E.value=null,B.value=null,d.emit("unmounted"));})),function(){var e,n;return h$1("div",{"data-vjs-player":"",class:normalizeClass(v)},[h$1("video",{class:["video-js","v-video-player"],ref:O}),h.value&&(null===(n=(e=d.slots).default)||void 0===n?void 0:n.call(e,{video:O.value,player:T.value,state:R.value}))])}}}),R=B;

const Play = "\u64AD\u653E";
const Pause = "\u6682\u505C";
const Duration = "\u65F6\u957F";
const LIVE = "\u76F4\u64AD";
const Loaded = "\u52A0\u8F7D\u5B8C\u6210";
const Progress = "\u8FDB\u5EA6";
const Fullscreen = "\u5168\u5C4F";
const Mute = "\u9759\u97F3";
const Unmute = "\u5F00\u542F\u97F3\u6548";
const Subtitles = "\u5B57\u5E55";
const Captions = "\u5185\u5D4C\u5B57\u5E55";
const Chapters = "\u8282\u76EE\u6BB5\u843D";
const Descriptions = "\u63CF\u8FF0";
const Close = "\u5173\u95ED";
const Replay = "\u91CD\u65B0\u64AD\u653E";
const Text = "\u6587\u5B57";
const White = "\u767D";
const Black = "\u9ED1";
const Red = "\u7EA2";
const Green = "\u7EFF";
const Blue = "\u84DD";
const Yellow = "\u9EC4";
const Magenta = "\u7D2B\u7EA2";
const Cyan = "\u9752";
const Background = "\u80CC\u666F";
const Window = "\u7A97\u53E3";
const Transparent = "\u900F\u660E";
const Opaque = "\u4E0D\u900F\u660E";
const None = "\u65E0";
const Raised = "\u6D6E\u96D5";
const Depressed = "\u538B\u4F4E";
const Uniform = "\u5747\u5300";
const Dropshadow = "\u4E0B\u9634\u5F71";
const Casual = "\u8212\u9002";
const Script = "\u624B\u5199\u4F53";
const Reset = "\u91CD\u7F6E";
const Done = "\u5B8C\u6210";
const zhCn = {
  Play,
  Pause,
  "Current Time": "\u5F53\u524D\u65F6\u95F4",
  Duration,
  "Remaining Time": "\u5269\u4F59\u65F6\u95F4",
  "Stream Type": "\u5A92\u4F53\u6D41\u7C7B\u578B",
  LIVE,
  Loaded,
  Progress,
  Fullscreen,
  "Non-Fullscreen": "\u9000\u51FA\u5168\u5C4F",
  "Picture-in-Picture": "\u753B\u4E2D\u753B",
  "Exit Picture-in-Picture": "\u9000\u51FA\u753B\u4E2D\u753B",
  Mute,
  Unmute,
  "Playback Rate": "\u64AD\u653E\u901F\u5EA6",
  Subtitles,
  "subtitles off": "\u5173\u95ED\u5B57\u5E55",
  Captions,
  "captions off": "\u5173\u95ED\u5185\u5D4C\u5B57\u5E55",
  Chapters,
  "Close Modal Dialog": "\u5173\u95ED\u5F39\u7A97",
  Descriptions,
  "descriptions off": "\u5173\u95ED\u63CF\u8FF0",
  "Audio Track": "\u97F3\u8F68",
  "You aborted the media playback": "\u89C6\u9891\u64AD\u653E\u88AB\u7EC8\u6B62",
  "A network error caused the media download to fail part-way.": "\u7F51\u7EDC\u9519\u8BEF\u5BFC\u81F4\u89C6\u9891\u4E0B\u8F7D\u4E2D\u9014\u5931\u8D25\u3002",
  "The media could not be loaded, either because the server or network failed or because the format is not supported.": "\u89C6\u9891\u56E0\u683C\u5F0F\u4E0D\u652F\u6301\u6216\u8005\u670D\u52A1\u5668\u6216\u7F51\u7EDC\u7684\u95EE\u9898\u65E0\u6CD5\u52A0\u8F7D\u3002",
  "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "\u7531\u4E8E\u89C6\u9891\u6587\u4EF6\u635F\u574F\u6216\u662F\u8BE5\u89C6\u9891\u4F7F\u7528\u4E86\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u7684\u529F\u80FD\uFF0C\u64AD\u653E\u7EC8\u6B62\u3002",
  "No compatible source was found for this media.": "\u65E0\u6CD5\u627E\u5230\u6B64\u89C6\u9891\u517C\u5BB9\u7684\u6E90\u3002",
  "The media is encrypted and we do not have the keys to decrypt it.": "\u89C6\u9891\u5DF2\u52A0\u5BC6\uFF0C\u65E0\u6CD5\u89E3\u5BC6\u3002",
  "Play Video": "\u64AD\u653E\u89C6\u9891",
  Close,
  "Modal Window": "\u5F39\u7A97",
  "This is a modal window": "\u8FD9\u662F\u4E00\u4E2A\u5F39\u7A97",
  "This modal can be closed by pressing the Escape key or activating the close button.": "\u53EF\u4EE5\u6309ESC\u6309\u952E\u6216\u542F\u7528\u5173\u95ED\u6309\u94AE\u6765\u5173\u95ED\u6B64\u5F39\u7A97\u3002",
  ", opens captions settings dialog": ", \u5F00\u542F\u6807\u9898\u8BBE\u7F6E\u5F39\u7A97",
  ", opens subtitles settings dialog": ", \u5F00\u542F\u5B57\u5E55\u8BBE\u7F6E\u5F39\u7A97",
  ", opens descriptions settings dialog": ", \u5F00\u542F\u63CF\u8FF0\u8BBE\u7F6E\u5F39\u7A97",
  ", selected": ", \u9009\u62E9",
  "captions settings": "\u5B57\u5E55\u8BBE\u5B9A",
  "Audio Player": "\u97F3\u9891\u64AD\u653E\u5668",
  "Video Player": "\u89C6\u9891\u64AD\u653E\u5668",
  Replay,
  "Progress Bar": "\u8FDB\u5EA6\u6761",
  "Volume Level": "\u97F3\u91CF",
  "subtitles settings": "\u5B57\u5E55\u8BBE\u5B9A",
  "descriptions settings": "\u63CF\u8FF0\u8BBE\u5B9A",
  Text,
  White,
  Black,
  Red,
  Green,
  Blue,
  Yellow,
  Magenta,
  Cyan,
  Background,
  Window,
  Transparent,
  "Semi-Transparent": "\u534A\u900F\u660E",
  Opaque,
  "Font Size": "\u5B57\u4F53\u5C3A\u5BF8",
  "Text Edge Style": "\u5B57\u4F53\u8FB9\u7F18\u6837\u5F0F",
  None,
  Raised,
  Depressed,
  Uniform,
  Dropshadow,
  "Font Family": "\u5B57\u4F53\u5E93",
  "Proportional Sans-Serif": "\u6BD4\u4F8B\u65E0\u7EC6\u4F53",
  "Monospace Sans-Serif": "\u5355\u95F4\u9694\u65E0\u7EC6\u4F53",
  "Proportional Serif": "\u6BD4\u4F8B\u7EC6\u4F53",
  "Monospace Serif": "\u5355\u95F4\u9694\u7EC6\u4F53",
  Casual,
  Script,
  "Small Caps": "\u5C0F\u578B\u5927\u5199\u5B57\u4F53",
  Reset,
  "restore all settings to the default values": "\u6062\u590D\u5168\u90E8\u8BBE\u5B9A\u81F3\u9884\u8BBE\u503C",
  Done,
  "Caption Settings Dialog": "\u5B57\u5E55\u8BBE\u5B9A\u7A97\u53E3",
  "Beginning of dialog window. Escape will cancel and close the window.": "\u6253\u5F00\u5BF9\u8BDD\u7A97\u53E3\u3002Escape\u952E\u5C06\u53D6\u6D88\u5E76\u5173\u95ED\u5BF9\u8BDD\u7A97\u53E3",
  "End of dialog window.": "\u7ED3\u675F\u5BF9\u8BDD\u7A97\u53E3",
  "Seek to live, currently behind live": "\u5C1D\u8BD5\u76F4\u64AD\uFF0C\u5F53\u524D\u4E3A\u5EF6\u65F6\u64AD\u653E",
  "Seek to live, currently playing live": "\u5C1D\u8BD5\u76F4\u64AD\uFF0C\u5F53\u524D\u4E3A\u5B9E\u65F6\u64AD\u653E",
  "progress bar timing: currentTime={1} duration={2}": "{1}/{2}",
  "{1} is loading.": "\u6B63\u5728\u52A0\u8F7D {1}\u3002",
  "No content": "\u65E0\u5185\u5BB9"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      required: true
    },
    height: String,
    width: String
  },
  setup(__props, { expose: __expose }) {
    p.addLanguage("zh-CN", zhCn);
    const attr = useAttrs();
    const playerRef = shallowRef();
    const options = reactive({
      muted: false,
      //静音
      autoplay: false,
      loop: false,
      //循环播放
      volume: 0.5,
      //默认音量大小
      controls: true,
      language: "zh-CN",
      ...attr
    });
    const isClient = ref(false);
    const play = () => {
      playerRef.value.play();
    };
    const pause = () => {
      playerRef.value.pause();
    };
    __expose({
      play,
      pause
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isClient)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "video-player",
          style: {
            width: __props.width,
            height: __props.height
          }
        }, _attrs))} data-v-179f75d0>`);
        _push(ssrRenderComponent(unref(R), mergeProps({
          class: "w-full h-full vjs-default-skin vjs-big-play-centered",
          ref_key: "playerRef",
          ref: playerRef
        }, options, { src: __props.src }), null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/video-player/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-179f75d0"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=index-DVLwoLV9.mjs.map
