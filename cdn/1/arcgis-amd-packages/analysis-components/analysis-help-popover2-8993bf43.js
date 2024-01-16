define(["exports","./index-ef555910","./index2-588b02d9","./helpmap-fb1ea8ef","./helpmap_enterprise-7a3381f0","./get-4ace6219"],(function(e,t,i,s,a,r){"use strict";const l={Standard:"standard",GeoAnalytics:"geoanalytics",Raster:"raster",Pipelines:"pipelines",Session:"session"},o="OnlineOnly",n=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisHelpPopoverClose=t.createEvent(this,"analysisHelpPopoverClose",7),this.analysisHelpPopoverSelectionChange=t.createEvent(this,"analysisHelpPopoverSelectionChange",7),this.environmentModifierClass=o,this.referenceElement=void 0,this.helpUrl=void 0,this.helpId=void 0,this.heading=void 0,this.isHelpFileExternalAsset=!1,this.portal=void 0,this.portalHelpMap=void 0,this.placement="auto",this.open=void 0,this.helpFileName=void 0,this.externalHelpMap=void 0,this.helpSrcdoc=void 0,this.learnMoreBaseUrl=void 0,this.learnMoreUrl=void 0,this.analysisEngine=l.Standard,this.offsetDistance=20,this.offsetSkidding=0,this.triggerDisabled=!1}async portalChange(e){void 0!==e&&e.isPortal&&void 0===this.portalHelpMap&&(this.portalHelpMap=await i.getPortalHelpMap(e)),this.environmentModifierClass=!0===e?.isPortal?"PortalOnly":o}async componentWillLoad(){({strings:this.strings,dir:this.dir,locale:this.locale}=await i.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath("."))),void 0!==this.portal&&await this.portalChange(this.portal)}componentDidLoad(){try{setTimeout((()=>requestAnimationFrame((()=>this.popoverElement?.setFocus()))),1),setTimeout((()=>{this.popoverElement?.reposition?.()}),i.UIDefaults.PopoverTimer)}catch(e){}}async reposition(){await(this.popoverElement?.reposition?.())}getContentStyleClass(e){let t="help-iframe-s";return(-1!==e.indexOf("Category")||-1!==e.indexOf("Tool")||-1!==e.indexOf("toolDescription"))&&(t="help-iframe-m"),t}getLocalizedLearnMoreUrl(){let e;if(void 0!==this.learnMoreBaseUrl){e="/"!==this.learnMoreBaseUrl.charAt(this.learnMoreBaseUrl.length-1)?this.learnMoreBaseUrl+"/":this.learnMoreBaseUrl;const t=this.locale.toLocaleLowerCase();!0===i.SupportedOnlineHelpLocales.includes(t)&&(e=e.replace(/(\/|^)(en)(\/|$)/,`$1${t}$3`))}return e}getLearnMoreUrlForWebAnalysis(){let e;if(void 0!==this.learnMoreBaseUrl){const t=!0===this.portal?.isPortal?a.helpMapEnterprise.map:s.helpMap.map,l=r.get(t,`${this.helpFileName}${i.formatAnalysisEngineSuffix(this.analysisEngine)}.${this.helpId}`);if(void 0!==l&&void 0!==this.learnMoreBaseUrl){const t=this.getLocalizedLearnMoreUrl();if(!0===this.portal?.isPortal&&void 0!==this.portalHelpMap?.m){e=`${t}${this.portalHelpMap.m[l]}`;const{restUrl:s}=this.portal;e=i.fixUrlForDemoApp(e,s)}else void 0!==this.portal&&!1!==this.portal?.isPortal||(e=`${t}analyze/${l}`)}}return e}getLearnMoreForCustomHelpMap(){let e;if(void 0!==this.externalHelpMap&&void 0!==this.helpId&&void 0!==this.helpFileName&&(e=r.get(this.externalHelpMap.map,`${this.helpFileName}.${this.helpId}`),void 0!==e&&void 0!==this.learnMoreBaseUrl)){const t="/"!==this.learnMoreBaseUrl.charAt(this.learnMoreBaseUrl.length-1)?this.learnMoreBaseUrl+"/":this.learnMoreBaseUrl;e=`${!0===this.isHelpFileExternalAsset?t:this.getLocalizedLearnMoreUrl()}${e}`}return e}getLearnMoreUrl(){let e;return void 0!==this.learnMoreBaseUrl?e=void 0!==this.externalHelpMap?this.getLearnMoreForCustomHelpMap():this.getLearnMoreUrlForWebAnalysis():void 0!==this.learnMoreUrl&&(e=this.learnMoreUrl),e}renderIframeUsingSrcDoc(){return t.h("iframe",{class:this.getContentStyleClass(this.helpId),id:this.helpId,title:this.heading??this.helpId,srcdoc:this.helpSrcdoc})}renderIframeUsingHelpUrl(){const e=!1===this.isHelpFileExternalAsset?t.getAssetPath(this.helpUrl):this.helpUrl,i=void 0!==e?`${e}#${this.helpId}-${this.environmentModifierClass}`:"";return t.h("iframe",{class:this.getContentStyleClass(this.helpId),id:this.helpId,title:this.heading??this.helpId,src:i})}render(){let e,i;if(void 0!==this.helpUrl)e=void 0!==this.helpSrcdoc?this.renderIframeUsingSrcDoc():this.renderIframeUsingHelpUrl(),i=this.getLearnMoreUrl();else{const s="toolDescription"===this.helpId?r.get(this.referenceElement?.getRootNode(),"host.webToolJSON.description"):this.referenceElement?.getAttribute("description");e=t.h("div",{class:"help-custom-tool-param"},t.h("p",null,s??"")),i=r.get(this.referenceElement?.getRootNode(),"host.webToolJSON.helpUrl")}return t.h(t.Host,{class:"analysis-popover js-app-flyout",dir:this.dir},t.h("calcite-popover",{overlayPositioning:"fixed",autoClose:!0,ref:e=>this.popoverElement=e,referenceElement:this.referenceElement??"analysis-tool",placement:this.placement,open:this.open,closable:!0,heading:this.heading??this.helpId,headingLevel:4,triggerDisabled:this.triggerDisabled,focusTrapDisabled:!0,label:this.heading??this.helpId??"",offsetDistance:this.offsetDistance,offsetSkidding:this.offsetSkidding,onCalcitePopoverClose:()=>this.analysisHelpPopoverClose.emit()},e,void 0!==i&&t.h("calcite-link",{rel:"help",target:"_blank",href:i,class:"learn-more"},this.strings.learnMoreLabel)))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get watchers(){return{portal:["portalChange"]}}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex;background-color:var(--calcite-color-foreground-1)}.help-iframe-s{padding:var(--analysis-quarter-spacing);min-height:var(--analysis-popover-content-min-height-s);max-height:var(--analysis-popover-content-max-height);border:0px}.help-iframe-m{padding:var(--analysis-quarter-spacing);min-height:var(--analysis-popover-content-min-height-m);max-height:var(--analysis-popover-content-max-height);border:0px}.help-custom-tool-param{font-size:12px;font-family:Verdana, Helvetica, sans-serif;overflow-y:auto;padding:var(--analysis-quarter-spacing);min-height:var(--analysis-popover-content-min-height-s);max-height:var(--analysis-popover-content-max-height);width:300px}.help-custom-tool-param p{margin:var(--analysis-half-spacing)}.learn-more{margin:var(--analysis-full-spacing)}"}},[1,"analysis-help-popover",{referenceElement:[16],helpUrl:[513,"help-url"],helpId:[513,"help-id"],heading:[513],isHelpFileExternalAsset:[516,"is-help-file-external-asset"],portal:[16],portalHelpMap:[16],placement:[513],open:[1540],helpFileName:[513,"help-file-name"],externalHelpMap:[16],helpSrcdoc:[513,"help-srcdoc"],learnMoreBaseUrl:[513,"learn-more-base-url"],learnMoreUrl:[513,"learn-more-url"],analysisEngine:[513,"analysis-engine"],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],triggerDisabled:[516,"trigger-disabled"],reposition:[64]},void 0,{portal:["portalChange"]}]);function h(){"undefined"!=typeof customElements&&["analysis-help-popover"].forEach((e=>{"analysis-help-popover"===e&&(customElements.get(e)||customElements.define(e,n))}))}h(),e.AnalysisEngine=l,e.AnalysisHelpPopover=n,e.defineCustomElement=h}));