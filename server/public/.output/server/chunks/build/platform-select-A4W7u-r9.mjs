import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, reactive, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const light_api = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%3e%3cg%20id='icon_api'%20transform='translate(-890%20-392)'%3e%3cg%20id='\u77E9\u5F62_8335'%20data-name='\u77E9\u5F62%208335'%20transform='translate(890%20392)'%20fill='%23fff'%20stroke='%23f2f2f2'%20stroke-width='1'%3e%3crect%20width='44'%20height='44'%20rx='6'%20stroke='none'/%3e%3crect%20x='0.5'%20y='0.5'%20width='43'%20height='43'%20rx='5.5'%20fill='none'/%3e%3c/g%3e%3cpath%20id='api-fill_1_'%20data-name='api-fill%20(1)'%20d='M132,105.634l-1.455-1.455a.269.269,0,0,0-.2-.079.284.284,0,0,0-.2.079l-2.611,2.611a6.871,6.871,0,0,0-8.7.834l-3.5,3.5a.275.275,0,0,0,0,.388l9.324,9.324a.269.269,0,0,0,.2.079.29.29,0,0,0,.2-.079l3.5-3.5a6.87,6.87,0,0,0,.834-8.7L132,106.025A.28.28,0,0,0,132,105.634Zm-11.626,13.654a.275.275,0,0,0-.388,0l-2.285,2.285-3.1-3.1,2.289-2.289a.275.275,0,0,0,0-.388l-1.249-1.249a.275.275,0,0,0-.388,0l-2.289,2.289-1.476-1.476a.269.269,0,0,0-.2-.079.29.29,0,0,0-.2.079l-3.493,3.5a6.87,6.87,0,0,0-.834,8.7l-2.611,2.611a.275.275,0,0,0,0,.388l1.455,1.455a.269.269,0,0,0,.2.079.284.284,0,0,0,.2-.079l2.611-2.611a6.871,6.871,0,0,0,8.7-.834l3.5-3.5a.275.275,0,0,0,0-.388l-1.476-1.476,2.289-2.289a.275.275,0,0,0,0-.388Z'%20transform='translate(793.925%20295.9)'%20fill='%237e4fe8'/%3e%3c/g%3e%3c/svg%3e";
const light_enterprise_wechat = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%3e%3cg%20id='icon_Enterprise_wechat'%20data-name='icon_Enterprise%20wechat'%20transform='translate(-182%20-269)'%3e%3cg%20id='\u77E9\u5F62_8331'%20data-name='\u77E9\u5F62%208331'%20transform='translate(182%20269)'%20fill='%23fff'%20stroke='%23f2f2f2'%20stroke-width='1'%3e%3crect%20width='44'%20height='44'%20rx='6'%20stroke='none'/%3e%3crect%20x='0.5'%20y='0.5'%20width='43'%20height='43'%20rx='5.5'%20fill='none'/%3e%3c/g%3e%3cg%20id='\u4F01\u5FAE'%20transform='translate(126%20140.448)'%3e%3cpath%20id='\u8DEF\u5F84_24797'%20data-name='\u8DEF\u5F84%2024797'%20d='M658.468,730.24c0,.02.02.02.02.04.02.02.04.04.06.04a.529.529,0,0,0,.12.1,4.952,4.952,0,0,1,1.359,2.538.44.44,0,0,0,.02.16.583.583,0,0,0,.04.18,1.665,1.665,0,0,0,.42.719,1.611,1.611,0,0,0,2.278-2.278,1.792,1.792,0,0,0-.779-.44c-.04,0-.06-.02-.1-.02s-.06-.02-.1-.02a4.939,4.939,0,0,1-2.6-1.379l-.16-.16a.363.363,0,0,0-.54,0A.377.377,0,0,0,658.468,730.24Z'%20transform='translate(-575.822%20-572.273)'%20fill='%23fb6500'/%3e%3cpath%20id='\u8DEF\u5F84_24798'%20data-name='\u8DEF\u5F84%2024798'%20d='M804.48,640.956c.02,0,.02-.02.04-.02.02-.02.04-.04.04-.06a.531.531,0,0,0,.1-.12A4.952,4.952,0,0,1,807.2,639.4a.439.439,0,0,0,.16-.02.583.583,0,0,0,.18-.04,1.665,1.665,0,0,0,.719-.42,1.611,1.611,0,0,0-2.278-2.278,1.792,1.792,0,0,0-.44.779c0,.04-.02.06-.02.1s-.02.06-.02.1a4.939,4.939,0,0,1-1.379,2.6l-.16.16a.363.363,0,0,0,0,.54A.375.375,0,0,0,804.48,640.956Z'%20transform='translate(-716.737%20-481.751)'%20fill='%230082ef'/%3e%3cpath%20id='\u8DEF\u5F84_24799'%20data-name='\u8DEF\u5F84%2024799'%20d='M715.2,494.5c0-.02-.02-.02-.02-.04-.02-.02-.04-.04-.06-.04a.53.53,0,0,0-.12-.1,4.952,4.952,0,0,1-1.359-2.538.441.441,0,0,0-.02-.16.584.584,0,0,0-.04-.18,1.665,1.665,0,0,0-.42-.719A1.611,1.611,0,0,0,710.88,493a1.792,1.792,0,0,0,.779.44c.04,0,.06.02.1.02s.06.02.1.02a4.939,4.939,0,0,1,2.6,1.379l.16.16a.363.363,0,0,0,.54,0A.375.375,0,0,0,715.2,494.5Z'%20transform='translate(-626.214%20-340.388)'%20fill='%232dbc00'/%3e%3cpath%20id='\u8DEF\u5F84_24800'%20data-name='\u8DEF\u5F84%2024800'%20d='M568.737,584.228c-.02,0-.02.02-.04.02-.02.02-.04.04-.04.06a.531.531,0,0,0-.1.12,4.952,4.952,0,0,1-2.538,1.359.441.441,0,0,0-.16.02.584.584,0,0,0-.18.04,1.665,1.665,0,0,0-.719.42,1.611,1.611,0,0,0,2.278,2.278,1.792,1.792,0,0,0,.44-.779c0-.04.02-.06.02-.1s.02-.06.02-.1a4.938,4.938,0,0,1,1.379-2.6l.16-.16a.363.363,0,0,0,0-.54A.377.377,0,0,0,568.737,584.228Z'%20transform='translate(-484.851%20-431.358)'%20fill='%23fc0'/%3e%3cpath%20id='\u8DEF\u5F84_24801'%20data-name='\u8DEF\u5F84%2024801'%20d='M86.284,145a9.633,9.633,0,0,0-1.8-2.538,12.094,12.094,0,0,0-7.375-3.5,13.354,13.354,0,0,0-1.519-.08,12.706,12.706,0,0,0-8.874,3.577,9.633,9.633,0,0,0-1.8,2.538,8.8,8.8,0,0,0-.919,3.9,9.189,9.189,0,0,0,1.539,5.016,14.253,14.253,0,0,0,2.378,2.658l-.46,1.919-.14.54c-.02.06-.04.1-.06.16a.865.865,0,0,1-.02.1v.08a.9.9,0,0,0,.9.9.806.806,0,0,0,.44-.12h.02c.02-.02.04-.02.06-.04l3.318-1.659a13.284,13.284,0,0,0,2.158.42,11.9,11.9,0,0,0,1.459.08,13.117,13.117,0,0,0,1.519-.08,13.806,13.806,0,0,0,2.918-.68,2.016,2.016,0,0,1-.3-.14,1.616,1.616,0,0,1-.8-1.559,10.106,10.106,0,0,1-2.079.44c-.44.04-.859.08-1.279.08-.4,0-.819-.02-1.219-.06a1.375,1.375,0,0,1-.26-.04,11.354,11.354,0,0,1-1.639-.34.934.934,0,0,0-.34-.06,1.088,1.088,0,0,0-.54.14c-.02.02-.04.02-.08.04l-2.1,1.239c-.04.02-.06.04-.1.04a.137.137,0,0,1-.14-.14l.08-.32c.02-.08.06-.2.1-.34.1-.36.22-.839.32-1.2a1.013,1.013,0,0,0,.04-.26.911.911,0,0,0-.34-.7,3.842,3.842,0,0,1-.34-.26c-.18-.14-.34-.3-.52-.46a8.853,8.853,0,0,1-1.2-1.419,7.148,7.148,0,0,1-1.219-3.957,6.975,6.975,0,0,1,.719-3.1,7.878,7.878,0,0,1,1.439-2.039,9.946,9.946,0,0,1,6.136-2.878c.42-.04.839-.06,1.219-.06a9.354,9.354,0,0,1,1.279.08,10.108,10.108,0,0,1,6.1,2.878,7.878,7.878,0,0,1,1.439,2.039,6.953,6.953,0,0,1,.719,3.078,1.939,1.939,0,0,1-.02.34,1.608,1.608,0,0,1,1.979.24l.08.08c.02-.22.02-.46.02-.68A8.9,8.9,0,0,0,86.284,145Z'%20fill='%230079de'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const light_wx = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='none'%20version='1.1'%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%3e%3cdefs%3e%3cclipPath%20id='master_svg0_1076_15330'%3e%3crect%20x='6'%20y='6'%20width='32'%20height='32'%20rx='6'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%3e%3cg%3e%3crect%20x='0'%20y='0'%20width='44'%20height='44'%20rx='6'%20fill='%23FFFFFF'%20fill-opacity='1'/%3e%3crect%20x='0.5'%20y='0.5'%20width='43'%20height='43'%20rx='5.5'%20fill-opacity='0'%20stroke-opacity='1'%20stroke='%23F2F2F2'%20fill='none'%20stroke-width='1'/%3e%3c/g%3e%3cg%20clip-path='url(%23master_svg0_1076_15330)'%3e%3cg%3e%3cpath%20d='M26.381687499999998,9.58217528125Q24.6360675,8.87548828125,21.9993775,8.87548828125Q19.3628075,8.87548828125,17.6171875,9.68495728125L26.3843475,18.60523828125L26.381687499999998,9.58217528125Z'%20fill='%23FB5453'%20fill-opacity='1'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M31.35108875,12.80592453125Q29.41584875,10.97070753125,27.54484365,10.31689453125L27.48046875,22.569194531249998L34.05580875,16.340024531250002C34.05580875,16.34267453125,33.28909875,14.64114453125,31.35112875,12.80595453125L31.35108875,12.80592453125Z'%20fill='%236468F1'%20fill-opacity='1'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M34.3294625,17.5244140625L25.2890625,26.1730740625L34.4349025,26.1730740625Q35.1520925,24.4506040625,35.1520925,21.847474062499998Q35.1493725,19.2470040625,34.3294625,17.5244140625Z'%20fill='%235283F0'%20fill-opacity='1'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M27.76950125,33.7403778125Q29.544901250000002,33.0265678125,31.458031249999998,31.2215678125Q33.37123125,29.4166578125,34.054931249999996,27.6750698125L21.26953125,27.6142578125L27.76950125,33.7403778125Z'%20fill='%2300B2FE'%20fill-opacity='1'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M17.61968803,34.4753384375Q19.3654375,35.181898437499996,22.0019975,35.181898437499996Q24.6412175,35.181898437499996,26.3843175,34.3724584375L17.6171875,25.4521484375L17.61968803,34.4753384375Z'%20fill='%2366D020'%20fill-opacity='1'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M13.01322375,31.25147125Q14.94865375,33.08688125,16.81965375,33.74058125L16.88393375,21.48828125L10.30859375,27.71734125C10.31121874,27.71484125,11.07793775,29.416251250000002,13.01322375,31.25147125Z'%20fill='%239AD122'%20fill-opacity='1'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M9.56503125,17.5244140625Q8.84765625,19.2465040625,8.84765625,21.8487240625Q8.84765625,24.4511040625,9.66778125,26.1730740625L18.71065625,17.5270710025L9.56503125,17.5270710025L9.56503125,17.5244140625Z'%20fill='%23FFC71A'%20fill-opacity='1'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M16.59403375,10.31689453125Q14.81859375,11.03073853125,12.90547375,12.83564453125Q10.99228175,14.64058453125,10.30859375,16.38233453125L23.09399375,16.44302453125L16.59403375,10.31689453125Z'%20fill='%23FF7612'%20fill-opacity='1'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const light_js = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%3e%3cg%20id='icon_JS'%20transform='translate(-182%20-269)'%3e%3cg%20id='\u77E9\u5F62_8334'%20data-name='\u77E9\u5F62%208334'%20transform='translate(182%20269)'%20fill='%23fff'%20stroke='%23f2f2f2'%20stroke-width='1'%3e%3crect%20width='44'%20height='44'%20rx='6'%20stroke='none'/%3e%3crect%20x='0.5'%20y='0.5'%20width='43'%20height='43'%20rx='5.5'%20fill='none'/%3e%3c/g%3e%3cg%20id='\u7EC4_19218'%20data-name='\u7EC4%2019218'%20transform='translate(-0.714%20-3)'%3e%3cpath%20id='\u8DEF\u5F84_24802'%20data-name='\u8DEF\u5F84%2024802'%20d='M.714,0H25.449L23.2,25.164,13.058,28,2.9,25.164Z'%20transform='translate(192%20280)'%20fill='%23d2b414'/%3e%3cpath%20id='\u8DEF\u5F84_24803'%20data-name='\u8DEF\u5F84%2024803'%20d='M204.357,281.918h10.13l-1.911,21.768-8.219,2.189Z'%20transform='translate(0.725%200.119)'%20fill='%23fed402'/%3e%3cpath%20id='\u8DEF\u5F84_24804'%20data-name='\u8DEF\u5F84%2024804'%20d='M205.376,285.027h7.707l-.213,3.006h-5.19v4.355l5.054-.473-.757,7.9-6.828,1.77v-2.956L210,297.4l.207-2.434-4.83.838Z'%20transform='translate(0.774%200.313)'%20fill='%23fff'/%3e%3cpath%20id='\u8DEF\u5F84_24805'%20data-name='\u8DEF\u5F84%2024805'%20d='M201.363,285.027h2.524v16.666l-7.263-2.1v-2.977l4.74,1.423Z'%20transform='translate(0.243%200.313)'%20fill='%23fff'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const light_public_account = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%3e%3cdefs%3e%3clinearGradient%20id='linear-gradient'%20x1='0.5'%20x2='0.5'%20y2='1'%20gradientUnits='objectBoundingBox'%3e%3cstop%20offset='0'%20stop-color='%2300ea66'/%3e%3cstop%20offset='1'%20stop-color='%2300cb57'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='icon_Public_account'%20data-name='icon_Public%20account'%20transform='translate(-890%20-392)'%3e%3crect%20id='\u77E9\u5F62_8332'%20data-name='\u77E9\u5F62%208332'%20width='44'%20height='44'%20rx='6'%20transform='translate(890%20392)'%20fill='%23d9ffea'/%3e%3cg%20id='icon_Public_account-2'%20data-name='icon_Public%20account'%20transform='translate(708%20123)'%3e%3cg%20id='\u77E9\u5F62_8334'%20data-name='\u77E9\u5F62%208334'%20transform='translate(182%20269)'%20fill='%23fff'%20stroke='%23f2f2f2'%20stroke-width='1'%3e%3crect%20width='44'%20height='44'%20rx='6'%20stroke='none'/%3e%3crect%20x='0.5'%20y='0.5'%20width='43'%20height='43'%20rx='5.5'%20fill='none'/%3e%3c/g%3e%3cg%20id='\u7EC4_19216'%20data-name='\u7EC4%2019216'%3e%3ccircle%20id='\u692D\u5706_947'%20data-name='\u692D\u5706%20947'%20cx='9'%20cy='9'%20r='9'%20transform='translate(195%20282)'%20fill='%23fff'/%3e%3cpath%20id='\u516C\u4F17\u53F7'%20d='M100,85.325l-2.635-2.636V78.964a2.5,2.5,0,0,0-2.5-2.5H91.134L88.5,73.827a2.509,2.509,0,0,0-3.539,0l-2.635,2.635H78.6a2.5,2.5,0,0,0-2.5,2.5v3.725l-2.635,2.635a2.509,2.509,0,0,0,0,3.539L76.1,91.5v3.725a2.5,2.5,0,0,0,2.5,2.5h3.725l2.635,2.636a2.509,2.509,0,0,0,3.539,0l2.635-2.636H94.86a2.5,2.5,0,0,0,2.5-2.5V91.5L100,88.864a2.5,2.5,0,0,0,0-3.539Zm-6.828-.718-8.12,6.874a1.252,1.252,0,0,1-.811.3.743.743,0,0,1-.111-.006,1.238,1.238,0,0,1-.851-.443L80.15,87.582a1.25,1.25,0,1,1,1.918-1.6l2.32,2.781L91.554,82.7a1.252,1.252,0,1,1,1.615,1.912Z'%20transform='translate(117.269%20203.902)'%20fill='url(%23linear-gradient)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const light_web = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%3e%3cg%20id='icon_WEB'%20transform='translate(-182%20-269)'%3e%3cg%20id='\u77E9\u5F62_8331'%20data-name='\u77E9\u5F62%208331'%20transform='translate(182%20269)'%20fill='%23fff'%20stroke='%23f2f2f2'%20stroke-width='1'%3e%3crect%20width='44'%20height='44'%20rx='6'%20stroke='none'/%3e%3crect%20x='0.5'%20y='0.5'%20width='43'%20height='43'%20rx='5.5'%20fill='none'/%3e%3c/g%3e%3cg%20id='\u7EC4_19219'%20data-name='\u7EC4%2019219'%3e%3cpath%20id='\u5F00\u53D1_1_'%20data-name='\u5F00\u53D1%20(1)'%20d='M88.5,160.34h-21a3.272,3.272,0,0,0-3.5,3.146v3.146H92v-3.146a3.272,3.272,0,0,0-3.5-3.146Z'%20transform='translate(126%20119.66)'%20fill='%23b9c7ff'/%3e%3cpath%20id='\u5F00\u53D1_1_2'%20data-name='\u5F00\u53D1%20(1)'%20d='M64,179.173a3.272,3.272,0,0,0,3.5,3.146h21a3.272,3.272,0,0,0,3.5-3.146V167.662H64Z'%20transform='translate(126%20119.66)'%20fill='%236c8aff'/%3e%3crect%20id='\u77E9\u5F62_8339'%20data-name='\u77E9\u5F62%208339'%20width='12'%20height='2'%20rx='1'%20transform='translate(192%20289.15)'%20fill='%23fff'/%3e%3crect%20id='\u77E9\u5F62_8340'%20data-name='\u77E9\u5F62%208340'%20width='20'%20height='2'%20rx='1'%20transform='translate(192%20293.15)'%20fill='%23fff'/%3e%3cg%20id='\u7EC4_19221'%20data-name='\u7EC4%2019221'%3e%3crect%20id='\u77E9\u5F62_8336'%20data-name='\u77E9\u5F62%208336'%20width='2'%20height='2'%20rx='1'%20transform='translate(192%20282.15)'%20fill='%23fff'/%3e%3crect%20id='\u77E9\u5F62_8337'%20data-name='\u77E9\u5F62%208337'%20width='2'%20height='2'%20rx='1'%20transform='translate(195%20282.15)'%20fill='%23fff'/%3e%3crect%20id='\u77E9\u5F62_8338'%20data-name='\u77E9\u5F62%208338'%20width='2'%20height='2'%20rx='1'%20transform='translate(198%20282.15)'%20fill='%23fff'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const light_yd = "" + buildAssetsURL("light_yd.Cor8rgS7.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "platform-select",
  __ssrInlineRender: true,
  emits: ["click-item"],
  setup(__props, { emit: __emit }) {
    const platformLists = reactive([
      {
        name: "WebAPP",
        lists: [
          {
            name: "\u7F51\u9875",
            icon: light_web,
            desc: "\u7528\u6237\u5728\u6B64\u94FE\u63A5\u53EF\u4EE5\u76F4\u63A5\u548C\u60A8\u7684\u667A\u80FD\u4F53\u804A\u5929",
            key: "web",
            disabled: false
          },
          {
            name: "JS\u5D4C\u5165",
            icon: light_js,
            desc: "\u53EF\u6DFB\u52A0\u5230\u7F51\u7AD9\u7684\u4EFB\u4F55\u4F4D\u7F6E\uFF0C\u5C06\u6B64 iframe \u6DFB\u52A0\u5230 html \u4EE3\u7801\u4E2D",
            key: "js",
            disabled: false
          },
          {
            name: "\u5FAE\u4FE1\u516C\u4F17\u53F7",
            icon: light_public_account,
            desc: "\u53EF\u5728\u5FAE\u4FE1\u516C\u4F17\u53F7\u540E\u53F0\u914D\u7F6E\uFF0C\u63D0\u4F9B\u667A\u80FD\u4F53\u670D\u52A1",
            key: "oa",
            disabled: false
          },
          {
            name: "\u670B\u53CB\u5708\u6D77\u62A5",
            icon: light_wx,
            desc: "\u7528\u6237\u626B\u7801\u540E\uFF0C\u53EF\u76F4\u63A5\u548C\u60A8\u7684\u667A\u80FD\u4F53\u804A\u5929",
            key: "web",
            disabled: false
          }
        ]
      },
      {
        name: "API\u5BF9\u63A5",
        lists: [
          {
            name: "API\u8C03\u7528",
            icon: light_api,
            desc: "\u7528\u6237\u5728\u6B64\u94FE\u63A5\u53EF\u4EE5\u76F4\u63A5\u548C\u60A8\u7684\u667A\u80FD\u4F53\u804A\u5929",
            key: "api",
            disabled: false
          },
          {
            name: "\u4F01\u4E1A\u5FAE\u4FE1",
            icon: light_enterprise_wechat,
            desc: "\u7528\u6237\u5728\u6B64\u94FE\u63A5\u53EF\u4EE5\u76F4\u63A5\u548C\u60A8\u7684\u667A\u80FD\u4F53\u804A\u5929",
            key: "qwx",
            disabled: false
          },
          {
            name: "\u5F71\u5200RPA",
            icon: light_yd,
            desc: "\u901A\u8FC7\u5F71\u5200RPA\u5728\u5FAE\u4FE1\u6216\u4F01\u4E1A\u5FAE\u4FE1\u4E2D\u6A21\u62DF\u4EBA\u7C7B\u64CD\u4F5C\u9F20\u6807\u952E\u76D8\u8FDB\u884C\u667A\u80FD\u4F53\u804A\u5929",
            key: "yd",
            disabled: false
          }
          // {
          //   name: 'QQ',
          //   icon: light_qq,
          //   desc: '用户在此链接可以直接和您的智能体聊天',
          //   disabled: true
          // },
          //
          // {
          //   name: '钉钉',
          //   icon: light_dingtalk,
          //   desc: '用户在此链接可以直接和您的智能体聊天',
          //   disabled: true
          // },
          //
          // {
          //   name: 'APP',
          //   icon: light_app,
          //   desc: '用户在此链接可以直接和您的智能体聊天',
          //   disabled: true
          // },
          // {
          //   name: '小程序',
          //   icon: light_small_program,
          //   desc: '用户在此链接可以直接和您的智能体聊天',
          //   disabled: true
          // }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(unref(platformLists), (item, index) => {
        _push(`<div><div class="text-xl font-medium mb-[20px]">${ssrInterpolate(item.name)}</div><div class="flex flex-wrap justify-stretch mx-[-10px]"><!--[-->`);
        ssrRenderList(item.lists, (i, idx) => {
          _push(`<div class="px-[10px] sm:w-[50%] w-full mb-[20px]"><div class="bg-page hover:bg-primary-light-9 h-full flex items-center rounded-[12px] px-[20px] py-[15px] cursor-pointer"><img${ssrRenderAttr("src", i.icon)} class="w-[44px] h-[44px]"><div class="ml-[15px]"><div class="text-tx-primary text-xl font-medium flex items-center">${ssrInterpolate(i.name)} `);
          if (i.disabled) {
            _push(`<div class="bg-[#EFF0F1] text-tx-regular text-xs px-[10px] py-[2px] rounded ml-[10px] dark:bg-br-light"> \u5373\u5C06\u5F00\u653E </div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="text-tx-secondary mt-[6px]">${ssrInterpolate(i.desc)}</div></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/robot/_components/app-release/platform-select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=platform-select-A4W7u-r9.mjs.map
