(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[246],{72232:function(e,t,s){"use strict";s.d(t,{Z:function(){return h}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"backdrop-blur-2xl bg-dark-N16 cursor-pointer fixed h-14 right-6 rounded-full transition-opacity w-14",style:{opacity:e.showBackToTopOpacity,bottom:`${e.showBackToTopBottom}px`},on:{click:function(t){return t.stopPropagation(),e.scrollToTop.apply(null,arguments)}}},[t("img",{staticClass:"mx-auto",style:{marginTop:"23px"},attrs:{src:s(80779)}})])},i=[];const r=22,o=56,c=window.innerHeight;var n={name:"BackToTop",data(){return{showBackToTopBottom:-o,showBackToTopOpacity:0}},computed:{scrollableEl(){return this.$el.parentElement}},beforeUnmount(){this.scrollableEl.removeEventListener("scroll",this.onScroll)},mounted(){this.scrollableEl.addEventListener("scroll",this.onScroll)},methods:{onScroll(e){const t=c,{scrollTop:s}=e.target,a=s-t;if(a>0){this.showBackToTopOpacity=1;let e=-o+a;e>r&&(e=r),this.showBackToTopBottom=e}else this.showBackToTopOpacity=0},scrollToTop(){this.scrollableEl.scrollTo(0,0)}}},p=n,l=s(1001),u=(0,l.Z)(p,a,i,!1,null,null,null),h=u.exports},28331:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"inline"},[t("img",{ref:"icon",staticClass:"h-4 inline-block mb-1 mx-2 w-4",attrs:{src:s(10442)(`./help_${e.iconColor}.svg`)},on:{mouseout:e.hide,mouseover:e.show}}),e.display?t("div",{staticClass:"absolute z-10",class:[e.inset],on:{mouseout:e.hide,mouseover:e.show}},[t("div",{staticClass:"m-4 mt-1 transition-opacity",class:[e.opacityClass]},[t("div",{staticClass:"bg-dark-N16 h-4 rotate-45 rounded-sm w-4",style:{marginLeft:`${e.offsetLeft}px`}}),t("div",{staticClass:"-mt-2 bg-dark-N16 leading-5 px-6 py-5 rounded-lg shadow-md text-dark-N77 text-sm",class:[e.contentMargin]},[e._t("default")],2)])]):e._e()])},i=[],r=s(20144),o=r.ZP.extend({name:"OperaExplainIcon",props:{contentMargin:{default:"",type:String},iconColor:{default:"gray",type:String},inset:{default:"",type:String}},data(){return{display:!1,hideTimeout:null,offsetLeft:0,opacityClass:"opacity-0"}},watch:{display(){this.adjustCaretMargin()}},methods:{adjustCaretMargin(){const e=this.$refs.icon;if(e){const t=16,s=e.offsetLeft-t;this.$nextTick((()=>{this.offsetLeft=s}))}},hide(){const e=100;this.hideTimeout=window.setTimeout((()=>{this.display=!1}),e),this.opacityClass="opacity-0"},show(){clearTimeout(this.hideTimeout),this.opacityClass="opacity-100",this.display=!0}}}),c=o,n=s(1001),p=(0,n.Z)(c,a,i,!1,null,null,null),l=p.exports},96767:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"t-crypto_backup_benefits"},[t("p",[e._v(e._s(e.$t("cryptoBackup.backupBenefits.backingUpAllowsYouTo")))]),t("ul",{staticClass:"list-disc mx-4"},e._l(e.benefits,(function(s,a){return t("li",{key:`benefit-${a+1}`},[e._v(e._s(s))])})),0),t("br"),t("i18n",{attrs:{path:"termsOfService.thisServiceIsProvidedByOperaNorway",tag:"p"},scopedSlots:e._u([{key:"operaTerms",fn:function(){return[t("a",{staticClass:"cursor-pointer t-tos-opera_norway-click text-brand-primary",on:{click:function(t){return e.$platform.createNewTab({url:"https://legal.opera.com/terms/"})}}},[e._v(e._s(e.$t("termsOfService.operaTerms")))])]},proxy:!0}])})],1)},i=[],r=s(20144),o=r.ZP.extend({name:"CryptoBackupBenefitsText",computed:{benefits(){return[this.$t("cryptoBackup.backupBenefits.restoreWallet"),this.$t("cryptoBackup.backupBenefits.haveSeedPhraseBackedUp"),this.$t("cryptoBackup.backupBenefits.checkPhrase")]}}}),c=o,n=s(1001),p=(0,n.Z)(c,a,i,!1,null,null,null),l=p.exports},82403:function(e,t,s){"use strict";s.d(t,{Z:function(){return p}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex items-center justify-center relative"},[t("input",{staticClass:"absolute appearance-none bg-white block border-4 h-6 rounded-full toggle-checkbox w-6",class:e.disabled?"cursor-not-allowed":"cursor-pointer",attrs:{name:"toggle",type:"checkbox"},domProps:{checked:e.checked}}),t("label",{staticClass:"flex h-6 relative select-none w-12",class:e.disabled?"cursor-not-allowed":"cursor-pointer",attrs:{for:"toggle"}},[t("span",{staticClass:"absolute h-full left-0 rounded-full top-0 w-full",class:{"bg-accent":e.checked,"bg-dark-N20":!e.checked}}),t("span",{staticClass:"absolute bg-white border-2 duration-300 ease-in-out flex h-6 items-center justify-center rounded-full transition-transform w-6",class:{"right-0":e.checked,"border-accent":e.checked,"border-dark-N20":!e.checked}})])])},i=[],r={name:"OperaToggle",props:{checked:{default:!1,type:Boolean},disabled:{default:!1,type:Boolean}}},o=r,c=s(1001),n=(0,c.Z)(o,a,i,!1,null,null,null),p=n.exports},93091:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("footer",{staticClass:"w-full",class:[e.textColor,e.textSize]},[t("i18n",{attrs:{path:"termsOfService.operaWalletByBlueboard",tag:"p"},scopedSlots:e._u([{key:"blueboardTermsOfService",fn:function(){return[t("a",{staticClass:"t-tos_footer-tos_link text-brand-primary",on:{click:function(t){return e.$platform.createNewTab({url:"https://www.opera.com/terms/crypto"})}}},[e._v(e._s(e.$t("termsOfService.blueboardTermsOfService")))])]},proxy:!0}])})],1)},i=[],r=s(20144),o=r.ZP.extend({name:"TermsOfServiceFooter",props:{textColor:{required:!0,type:String},textSize:{default:"text-xs",required:!1,type:String}}}),c=o,n=s(1001),p=(0,n.Z)(c,a,i,!1,null,null,null),l=p.exports},30246:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return U}});var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"flex flex-col justify-between tracking-wide"},[t("div",[t("top-bar",{attrs:{"back-override":e.back,"test-parent-name":"settings_view",title:e.$t("general.settings")}}),t("div",{staticClass:"mx-8 my-5"},[t("div",{staticClass:"flex flex-wrap gap-2"},e._l(e.options,(function(s){return t("li",{key:s.key,staticClass:"bg-dark-N77 bg-opacity-5 cursor-pointer flex hover:bg-opacity-10 py-4 rounded-xl",class:[`t-settings_view-options-${s.key}`,""+("tile"===s.type?"px-2":"px-5"),s.addClass,e.settingsItemClass(s.type).item],on:{click:function(t){return e.clickItem(s)}}},[t("div",{staticClass:"flex flex-wrap items-center",class:[e.settingsItemClass(s.type).wrapper]},[t("img",{class:[s.iconAddClass,e.settingsItemClass(s.type).image],attrs:{src:s.icon}}),t("div",{staticClass:"flex flex-col"},[t("span",[e._v(e._s(e.$t(s.title)))]),e.isOperaServiceActive(s.key)?t("p",{staticClass:"overflow-hidden text-dark-N77 text-xs truncate w-64"},[e._v(" "+e._s(e.operaAccount.email)+" ")]):e._e()]),"tile"!==s.type?t("div",{staticClass:"flex-grow"}):e._e(),s.addInfo?t("span",{staticClass:"font-semibold pl-2 text-brand-primary text-sm"},[e._v(" "+e._s(e.$t(s.addInfo))+" ")]):e._e(),s.addText&&"activate"===s.type&&!e.isOperaServiceActive(s.key)?t("opera-explain-icon",{staticClass:"-mr-2",attrs:{"content-margin":"ml-32",inset:"right-4"}},["cryptoBackupBenefitsText"===s.addText?t("crypto-backup-benefits-text",{staticClass:"whitespace-pre-line"}):t("p",{staticClass:"whitespace-pre-line"},[e._v(" "+e._s(s.addText)+" ")])],1):e._e()],1),t("div",{staticClass:"flex-grow"}),"toggle"===s.type?t("opera-toggle",{attrs:{checked:s.checked}}):e._e()],1)})),0)]),t("language-select-dialog",{ref:"langDialog"}),e.showBackupPopup?t("wallet-backup-popup",{on:{hide:e.hideBackupPopup,proceed:e.backupProceed}}):e._e(),t("div",{staticClass:"mt-4"},e._l(e.links,(function(s){return t("li",{key:s.key,staticClass:"flex flex-col font-semibold mx-8 p-4",class:[`t-settings_view-links-${s.key}`,s.addClass]},[t("p",{staticClass:"cursor-pointer",on:{click:function(t){return e.clickItem(s)}}},[e._v(e._s(e.$t(s.title)))]),s.addText?t("p",{staticClass:"font-normal mt-1.5 text-dark-N77 text-xs tracking-[-0.005em]"},[e._v(" "+e._s(s.addText)+" ")]):e._e()])})),0)],1),t("div",{staticClass:"space-y-3"},[t("p",{staticClass:"px-12 text-dark-N77"},[e._v(e._s(e.$t("general.version"))+" "+e._s(e.walletVersion))]),t("terms-of-service-footer",{staticClass:"pb-5 px-12",attrs:{"text-color":"text-dark-N77"}})],1)])},i=[],r=(s(57658),s(75546)),o=s(20629),c=s(96767),n=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.showing,expression:"showing"}],staticClass:"bg-background bottom-0 fixed left-0 overflow-y-scroll pb-20 right-0 top-0 z-30"},[t("top-bar",{attrs:{"emit-back":"","test-parent-name":"language_select_dialog",title:e.$t("general.language")},on:{back:function(t){e.showing=!1}}}),t("div",{staticClass:"px-4 py-4"},[t("opera-input",{staticClass:"t-language_select_dialog-search",attrs:{placeholder:e.$t("general.search"),"prepend-icon":"icon-search text-brand-primary text-opacity-40",type:"search",value:e.search},on:{input:e.updateSearch}})],1),t("ul",{staticClass:"px-4 py-4"},e._l(e.languagesList,(function(s){return t("li",{key:s.value,staticClass:"bg-dark-N16 border border-opacity-10 cursor-pointer flex items-center mb-2 px-4 py-3 rounded-lg",class:[`t-language_select_dialog-${s.value}`,{"border-brand-primary border-opacity-100":e.currentLang===s.value,"border-black":e.currentLang!==s.value}],on:{click:function(t){return e.switchLanguage(s)}}},[t("span",[e._v(e._s(s.label))])])})),0),t("back-to-top")],1)},p=[],l=s(64925),u=s(72232),h=s(14957),d=s(69790),g=s(69986),k=s(77700),f={name:"LanguageSelectDialog",components:{BackToTop:u.Z,OperaInput:h.Z,TopBar:g.Z},data(){return{currentLang:this.$i18n.locale,loading:!1,messages:this.$i18n.messages,search:"",showing:!1}},computed:{languages(){return Object.entries(this.messages).sort(((e,t)=>e[1].nativeName.localeCompare(t[1].nativeName))).map((e=>{const t=e[1].nativeName,[s]=e;return{label:t,value:s}})).filter((e=>e.value.includes("-"))).filter((e=>!("Español (Latinoamericano)"===e.label&&"es-419"!==e.value)))},languagesList(){return this.languages.filter((e=>e.label.toLowerCase().includes(this.search.toLowerCase())))}},async created(){await(0,l.gd)(),this.messages=this.$i18n.messages},methods:{finishLanguageSwitch(){this.$router.push("/"),setTimeout((()=>window.location.reload()))},show(){this.showing=!0},switchLanguage(e){d.Z.sendStatsEvent(d.Z.types.CLICK,"wt_set_lang",{language:e.value}),k.Z.setItem("locale",e.value),this.$i18n.locale=e.value,this.finishLanguageSwitch()},updateSearch(e){this.search=e}}},v=f,m=s(1001),y=(0,m.Z)(v,n,p,!1,null,null,null),w=y.exports,b=s(28331),C=s(82403),x=s(93091),_=s(20144),B=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("transition",{attrs:{name:"fade"}},[t("div",{staticClass:"bg-black bg-opacity-50 fixed flex inset-0 items-center justify-center t-wallet_backup_popup-background z-10"},[t("div",{staticClass:"bg-modal flex flex-col items-center m-12 max-w-screen-sm px-9 py-10 rounded-2xl space-y-12 t-wallet_backup_popup w-full"},[t("div",{staticClass:"flex flex-col relative w-full"},[t("img",{staticClass:"-right-3 -top-4 absolute cursor-pointer h-3 t-wallet_backup_popup-close w-3",attrs:{src:s(50420)},on:{click:function(t){return e.$emit("hide")}}}),t("h2",{staticClass:"break-words font-bold max-w-xs text-center text-xl"},[e._v(" "+e._s(e.$t("general.walletBackup"))+" ")])]),t("crypto-backup-benefits-text",{staticClass:"leading-5 max-w-xs text-dark-N77 text-sm whitespace-pre-line"}),t("div",{staticClass:"flex flex-col items-center w-full"},[t("primary-button",{staticClass:"flex-1 t-wallet_backup_popup-proceed",attrs:{icon:"",title:e.$t("general.backupWithOpera")},on:{click:function(t){return e.$emit("proceed")}}},[t("img",{staticClass:"mr-3.5",attrs:{src:s(11075)}})]),t("br"),t("outlined-button",{staticClass:"flex-1 t-wallet_backup_popup-cancel",attrs:{title:e.$t("general.cancel")},on:{click:function(t){return e.$emit("hide")}}})],1)],1)])])},$=[],O=s(13891),S=s(25319),A=_.ZP.extend({name:"WalletBackupPopup",components:{CryptoBackupBenefitsText:c.Z,OutlinedButton:O.Z,PrimaryButton:S.Z}}),T=A,P=(0,m.Z)(T,B,$,!1,null,null,null),Z=P.exports,N=s(39624),L=s(59876),I=s(9502),E=_.ZP.extend({name:"SettingsView",components:{CryptoBackupBenefitsText:c.Z,LanguageSelectDialog:w,OperaExplainIcon:b.Z,OperaToggle:C.Z,TermsOfServiceFooter:x.Z,TopBar:g.Z,WalletBackupPopup:Z},data(){return{showBackupPopup:!1}},computed:{...(0,o.Se)({ethereumAddress:"ethereumAddress",isOperaAccountLoggedIn:"isOperaAccountLoggedIn",isOperaServiceActive:"isOperaServiceActive",isOperaServiceAvailable:"isOperaServiceAvailable",operaAccount:"operaAccount",operaAccountSessionError:"operaAccountSessionError",operaServicesSupported:"operaServicesSupported",walletBackups:"walletBackups"}),hideCashback(){return this.hideCryptoBackup||!this.isOperaServiceAvailable(r.SupportedOperaServices.Cashback)},hideCryptoBackup(){return!this.isOperaServiceAvailable(r.SupportedOperaServices.CryptoBackup)},isCryptoBackupActive(){return this.isOperaServiceActive("cryptoBackup")},isOperaAccountActive(){return this.isOperaServiceActive(r.SupportedOperaServices.OperaAccount)},isOperaCashbackActive(){return this.isOperaServiceActive(r.SupportedOperaServices.Cashback)},links(){return[{click:()=>this.$platform.createNewTab({url:"https://opera.atlassian.net/servicedesk/customer/portal/20"}),key:"support",stats:"wt_set_support",title:"general.support"},{click:()=>this.$router.push("/licenses"),key:"licenses",title:"general.thirdPartyLicenses"},{addClass:"text-red",addText:this.$t("views.settingsView.settingsWillBeReset"),click:()=>this.showSignOutPopup(),key:"signout",stats:"wt_set_signout",title:"general.signOut"}]},options(){return[{click:()=>this.$router.push("/networks"),icon:s(30795),key:"network",title:"general.networksAndTokens",type:"tile"},{click:()=>this.showRecovery(),icon:s(17873),key:"backup",title:"general.backupPhrase",type:"tile"},{addInfo:this.$store.getters.fioHandle()?"":"fio.freeRegistration",click:async()=>await this.showFio(),icon:s(18202),iconAddClass:this.$store.getters.isLoading("fio")?"animate-pulse":"",key:"fio",title:"general.fioHandle",type:"tile"},{click:()=>this.$platform.createNewTab({url:"https://opr.as/eip2"}),hidden:!this.$store.getters.showRegisterOperaDomainOption,icon:s(12126),key:"ud",title:"general.registerOperaUd",type:"tile"},{click:()=>this.showLangDialog(),icon:s(33687),key:"language",title:"general.language",type:"tile"},{click:()=>this.$router.push("/restore"),hidden:!0,icon:s(14964),key:"importWallet",stats:"wt_set_import",title:"general.importWallet",type:"tile"},{addClass:"mt-6 w-full self-center text-base text-left",checked:this.$store.getters.showNews,click:async()=>{const{showNews:e}=this.$store.getters,{options:t,$store:s}=this,a=t.find((e=>"news"===e.key));await s.dispatch("setShowNews",e?"off":"on"),a.checked=e},icon:s(58893),key:"news",title:"general.showCryptoFeeds",type:"toggle"},{addClass:""+(this.isCryptoBackupActive?"":"text-dark-N77 truncate"),addInfo:this.isCryptoBackupActive?"general.remove":"general.backup",addText:"cryptoBackupBenefitsText",click:()=>this.checkOperaIdentityPrivateSupport(this.goCryptoBackup),hidden:this.hideCryptoBackup,icon:s(59624)(`./cryptobackup_${this.isCryptoBackupActive?"backedup":"backup"}.svg`),key:"cryptoBackup",stats:this.isCryptoBackupActive?"wt_set_backup_remove":"wt_set_backup_backup",title:this.isCryptoBackupActive?"cryptoBackup.seedPhraseBackedUp":"general.operaBackup",type:"activate"},{addClass:""+(this.isOperaCashbackActive?"":"text-dark-N77 truncate"),addInfo:this.isOperaCashbackActive?"":"general.connect",addText:this.$t("cashback.cashbackLinkInfo"),click:()=>this.checkOperaIdentityPrivateSupport(this.goOperaCashback),hidden:this.hideCashback,icon:s(45704),key:"cashback",stats:this.isCryptoBackupActive?"wt_set_cashback_disconnect":"wt_set_cashback_connect",title:this.isOperaCashbackActive?"cashback.cashbackActive":"cashback.cashback",type:"activate"}].filter((e=>!e.hidden))},walletVersion(){return window.chrome.runtime.getManifest().version}},async mounted(){d.Z.sendStatsEvent(d.Z.types.CLICK,"wt_setting_btn"),this.$root.$on("autoActivateCryptoBackup",this.goCryptoBackup),this.$root.$on("autoActivateCashback",this.goOperaCashback),this.$route.params.initCashbackActivation&&this.goOperaCashback(),await this.prepareFioOption(),await this.$store.dispatch("getOperaDomainRegistrationStatus")},methods:{...(0,o.nv)(["addWalletBackup","getWalletBackups","getPerpetualCashbackConnectionStatus","removeWalletBackup","setAutoActivateNextOperaService","setCashbackActive","setOperaServiceActive","stopOperaAccountAuthorization"]),back(){this.$router.push({name:"Overview"})},async backupProceed(){try{this.$progress.show(),this.$progress.inflate("high"),await this.addWalletBackup(),await this.setOperaServiceActive({active:!0,serviceName:r.SupportedOperaServices.CryptoBackup}),d.Z.sendStatsEvent(d.Z.types.CLICK,"wt_set_backup_backuped"),this.showGenericAckPopup(this.$t("cryptoBackup.walletHasBeenBackedUp"))}catch(e){this.showBackupFailedPopup(e)}finally{this.hideBackupPopup(),this.$progress.hide()}},checkOperaIdentityPrivateSupport(e){L.Z.operaApiSupported(L.C.IdentityPrivate)?e():(this.$popupManager=null,this.$popupManager={cancelButtonTitle:this.$t("general.cancel"),confirmButtonTitle:this.$t("general.update"),confirmedCallback:()=>this.$platform.createNewTab({url:N["default"].browserUpdateURI}),description:this.$t("general.operaBrowserUpdateRequestDescription",{version:98}),popupType:"info",title:this.$t("general.operaBrowserUpdateRequestTitle"),type:"general"})},clickItem(e){e.stats&&d.Z.sendStatsEvent(d.Z.types.CLICK,e.stats),e.click()},goCryptoBackup(){if(this.isOperaServiceActive("operaAccount")){if(this.isCryptoBackupActive)return this.showRemoveCryptoBackupPopup();this.initShowBackupPopup()}else this.setAutoActivateNextOperaService("cryptoBackup"),this.showOperaAccountAuthPopup()},async goOperaCashback(){if(this.isOperaServiceActive(r.SupportedOperaServices.OperaPoints))return await this.$router.push({name:"OperaPoints"});if(this.isOperaAccountActive)if(await this.getPerpetualCashbackConnectionStatus()){if(this.operaAccountSessionError)return this.showOperaAccountSessionErrorPopup(),!1;await this.setCashbackActive(),this.stopOperaAccountAuthorization(),this.showGenericAckPopup(this.$t("cashback.cashbackHasBeenActivated"))}else await this.$router.push({name:"CashbackOnboarding"});else this.operaServicesSupported&&this.isOperaAccountLoggedIn&&await this.getPerpetualCashbackConnectionStatus()?(this.showOperaAccountAuthPopup(),this.$router.push({name:"OperaPoints"})):(this.$popupManager=null,this.$popupManager={cancelButtonTitle:this.$t("general.cancel"),confirmButtonTitle:this.$t("general.logIn"),confirmedCallback:()=>{this.setAutoActivateNextOperaService(r.SupportedOperaServices.Cashback),this.showOperaAccountAuthPopup()},description:this.$t("operaAccount.operaAccountRequiredForCashback"),popupType:"confirm",title:this.$t("operaAccount.operaAuthorization"),type:"general"})},hideBackupPopup(){this.showBackupPopup=!1,this.stopOperaAccountAuthorization()},async initShowBackupPopup(){const e=await this.getWalletBackups();if(e.length){const t=e.at(0).evm_address;t!==this.ethereumAddress&&(this.showBackupFailedPopup(this.$t("cryptoBackup.operaAccountAlreadyHasWalletBackup",{email:this.operaAccount.email,walletAddress:I.Z.elideAddress(t)})),await this.setOperaServiceActive({active:!1,serviceName:r.SupportedOperaServices.CryptoBackup}),await this.stopOperaAccountAuthorization())}else this.showBackupPopup=!0},logOut(){this.$wallet.unload(),window.location.reload()},async prepareFioOption(){const{dispatch:e,getters:t}=this.$store;t.getTimesLoaded({fio:"handles"})||await e("fetchFioHandles")},settingsItemClass(e){const t={image:"h-6 w-6 mr-4",item:"w-full",wrapper:"w-full text-left justify-between"},s={image:"h-8 w-8 mx-10",item:"h-32 w-32 text-xs",wrapper:"text-center justify-center"};return["toggle","activate"].includes(e??"")?t:"tile"===e?s:{image:"",item:"",wrapper:""}},showBackupFailedPopup(e){this.$popupManager={confirmButtonTitle:this.$t("general.ok"),description:e.message??e,popupType:"error",title:this.$t("cryptoBackup.backupFailed"),type:"general"}},showBrowserUpdateRequest(){this.$popupManager={cancelButtonTitle:this.$t("general.cancel"),confirmButtonTitle:this.$t("general.update"),confirmedCallback:()=>this.$platform.createNewTab({url:N["default"].browserUpdateURI}),description:this.$t("general.operaBrowserUpdateRequestDescription",{version:98}),popupType:"info",title:this.$t("general.operaBrowserUpdateRequestTitle"),type:"general"}},async showFio(){const{getters:e}=this.$store;if(e.isLoading("fio.handles"))return;const t=e.fioHandle();t?this.$router.push({name:"FioConnect",query:{handle:t}}):this.$router.push({name:"FioRegister",params:{successOverride:async()=>{await this.$store.dispatch("fetchFioHandles"),this.$router.push({name:"Settings"})}},query:{hasOperaDomain:"false"}})},showGenericAckPopup(e){this.$popupManager={description:e,title:this.$t("general.youAreAllSet"),type:"ack"}},showLangDialog(){const e=this.$refs.langDialog;e.show()},showOperaAccountAuthPopup(){this.$popupManager={type:"operaAccountAuth"}},showOperaAccountSessionErrorPopup(){this.$popupManager={description:this.$t("cashback.cashbackConnectError"),popupType:"error",title:this.$t("errors.generic.somethingWentWrongShort"),type:"general"}},showRecovery(){this.$router.push({name:"BackupRevealWarning"})},showRemoveCryptoBackupPopup(){this.$popupManager=null,this.$popupManager={cancelButtonTitle:this.$t("general.cancel"),confirmButtonTitle:this.$t("general.confirm"),confirmedCallback:async()=>{try{this.$progress.show(),this.$progress.inflate("high"),await this.removeWalletBackup(),await this.setOperaServiceActive({active:!1,serviceName:r.SupportedOperaServices.CryptoBackup}),this.showGenericAckPopup(this.$t("cryptoBackup.removeWalletBackupSuccessInfo"))}catch(e){this.$popupManager={confirmButtonTitle:this.$t("general.ok"),description:e.message??e,popupType:"error",title:this.$t("errors.generic.somethingWentWrongShort"),type:"general"}}finally{this.hideBackupPopup(),this.$progress.hide()}},description:this.$t("cryptoBackup.removeWalletBackupInfo"),popupType:"error",title:this.$t("cryptoBackup.removeWalletBackup"),type:"general"}},showSignOutPopup(){this.$popupManager=null,this.$popupManager={cancelButtonTitle:this.$t("general.cancel"),confirmButtonTitle:this.$t("general.confirm"),confirmedCallback:()=>this.logOut(),description:this.$t("views.settingsView.signOutWarning"),popupType:"confirm",title:this.$t("views.settingsView.signOut?"),type:"general"}},termsOfServiceClick(){d.Z.sendStatsEvent(d.Z.types.CLICK,"wt_set_term")}}}),W=E,M=(0,m.Z)(W,a,i,!1,null,null,null),U=M.exports},59624:function(e,t,s){var a={"./cryptobackup_backedup.svg":18983,"./cryptobackup_backup.svg":56203};function i(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=59624},10442:function(e,t,s){var a={"./help_cyan.svg":32375,"./help_gray.svg":87980,"./help_outlined.svg":77865,"./help_outlined_gray.svg":56391};function i(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=10442},45704:function(e,t,s){"use strict";e.exports=s.p+"img/cashback.c4599857.svg"},80779:function(e,t,s){"use strict";e.exports=s.p+"img/chevron_up.316e082e.svg"},77865:function(e,t,s){"use strict";e.exports=s.p+"img/help_outlined.73bf57c3.svg"},58893:function(e,t,s){"use strict";e.exports=s.p+"img/cc.aca1a1de.svg"},18202:function(e,t,s){"use strict";e.exports=s.p+"img/fio_handle.b1d53b26.svg"},14964:function(e,t,s){"use strict";e.exports=s.p+"img/import_wallet.07c43928.svg"},33687:function(e,t,s){"use strict";e.exports=s.p+"img/language.d2d2f226.svg"},30795:function(e,t,s){"use strict";e.exports=s.p+"img/network.dc85aa41.svg"},12126:function(e,t,s){"use strict";e.exports=s.p+"img/ud.b36519bf.svg"}}]);