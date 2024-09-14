var app={loadReason:"startup",version:function(){return chrome.runtime.getManifest().version},homepage:function(){return""}};app.tab={open:function(e){chrome.tabs.create({url:e,active:!0})}},chrome.runtime.onInstalled.addListener((e=>{"install"===e.reason?config.addon.state="dark":"update"===e.reason&&chrome.storage.local.get(null,(function(e){config.addon.state=e.state,update(config.addon.state)}))})),chrome.runtime.onMessage.addListener((function(e,t,o){"top"===e.message&&o(t.tab.url),"createScheme"===e.message&&(o({schemeName:e.schemeName,schemeParams:e.schemeParams}),chrome.storage.local.get({colorSchemes:{}},(function(t){var o=t.colorSchemes;o[e.schemeName]=e.schemeParams,chrome.storage.local.set({colorSchemes:o,activeScheme:e.schemeName||""},(function(){}))}))),"renameScheme"===e.message&&chrome.storage.local.get({colorSchemes:{}},(function(t){const a=t.colorSchemes,n={...t.colorSchemes[e.prevSchemeName]};delete a[e.prevSchemeName],a[e.newSchemeName]=n,chrome.storage.local.set({colorSchemes:a},(function(){o({schemeName:e.newSchemeName,colorSchemes:t.colorSchemes})}))})),"deleteScheme"===e.message&&chrome.storage.local.get({colorSchemes:{}},(function(t){const a={},n=t.colorSchemes;delete n[e.schemeToDelete],a.colorSchemes=n,e.isActive&&(a.activeScheme=""),chrome.storage.local.set(a,(function(){o({colorSchemes:t.colorSchemes})}))})),"setActiveScheme"===e.message&&(o({activeScheme:e.schemeToActivate}),chrome.storage.local.get({activeScheme:""},(function(t){chrome.storage.local.set({activeScheme:e.schemeToActivate},(function(){}))})))})),app.storage=function(){var e={};return chrome.storage.onChanged.addListener((function(){chrome.storage.local.get(null,(function(t){e=t}))})),setTimeout((function(){chrome.storage.local.get(null,(function(t){e=t}))}),300),{read:function(t){return e[t]},write:function(t,o){var a={};e[t]=o,a[t]=o,chrome.storage.local.set(a)}}}(),app.button=function(){var e;return chrome.action.onClicked.addListener((function(){e&&e()})),{onCommand:function(t){e=t},set icon(e){chrome.action.setIcon(e)},set label(e){chrome.action.setTitle({title:e})}}}();var config={};config.welcome={set open(e){app.storage.write("support",e)},get version(){return app.storage.read("version")},set version(e){app.storage.write("version",e)},get open(){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");return void 0!==app.storage.read("support")?app.storage.read("support"):!e}},config.addon={set state(e){app.storage.write("state",e)},get state(){return void 0!==app.storage.read("state")?app.storage.read("state"):"light"}},chrome.webNavigation.onHistoryStateUpdated.addListener((e=>{0===e.frameId&&chrome.tabs.query({active:!0},(t=>{chrome.tabs.sendMessage(t[0].id,{action:"URLChanged",url:e.url},(()=>{}))}))}));var hostname=function(e){var t=(e=e.replace("www.","")).indexOf("//")+2;if(t>1){var o=e.indexOf("/",t);return o>0||(o=e.indexOf("?",t))>0?e.substring(t,o):e.substring(t)}return e},update=function(e){app.button.label="Current State: "+e.toUpperCase(),app.button.icon={path:{32:"/assets/icons/"+e+"/32.png",64:"/assets/icons/"+e+"/64.png"}}};app.button.onCommand((function(){config.addon.state="dark"===config.addon.state?"light":"dark",update(config.addon.state)})),chrome.contextMenus.onClicked.addListener((function(e){if("dark-mode-context-menu"===e.menuItemId){var t=e.pageUrl;chrome.storage.local.get({whitelist:[]},(function(e){var o=e.whitelist;o.push(hostname(t)),o=o.filter((function(e,t,o){return e&&o.indexOf(e)===t})),chrome.storage.local.set({whitelist:o},(function(){}))}))}})),setTimeout((function(){update(config.addon.state)}),300),chrome.contextMenus.create({contexts:["page"],id:"dark-mode-context-menu",title:"Exclude from Dark Mode"});