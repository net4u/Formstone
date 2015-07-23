/*! formstone v0.7.8 [upload.js] 2015-07-23 | MIT License | formstone.it */

!function(a,b){"use strict";function c(a){if(b.support.file){var c="";c+='<div class="'+p.target+'">',c+=a.label,c+="</div>",c+='<input class="'+p.input+'" type="file"',a.maxQueue>1&&(c+=" "+p.multiple),c+=">",this.addClass(p.base).append(c),a.$input=this.find(o.input),a.queue=[],a.total=0,a.uploading=!1,this.on(q.click,o.target,a,e).on(q.dragEnter,a,g).on(q.dragOver,a,h).on(q.dragLeave,a,i).on(q.drop,o.target,a,j),a.$input.on(q.change,a,f)}}function d(a){b.support.file&&(a.$input.off(q.namespace),this.off([q.click,q.dragEnter,q.dragOver,q.dragLeave,q.drop].join(" ")).removeClass(p.base).html(""))}function e(a){a.stopPropagation(),a.preventDefault();var b=a.data;b.$input.trigger(q.click)}function f(a){a.stopPropagation(),a.preventDefault();var b=a.data,c=b.$input[0].files;c.length&&k(b,c)}function g(a){a.stopPropagation(),a.preventDefault();var b=a.data;b.$el.addClass(p.dropping)}function h(a){a.stopPropagation(),a.preventDefault();var b=a.data;b.$el.addClass(p.dropping)}function i(a){a.stopPropagation(),a.preventDefault();var b=a.data;b.$el.removeClass(p.dropping)}function j(a){a.preventDefault();var b=a.data,c=a.originalEvent.dataTransfer.files;b.$el.removeClass(p.dropping),k(b,c)}function k(a,b){for(var c=[],d=0;d<b.length;d++){var e={index:a.total++,file:b[d],name:b[d].name,size:b[d].size,started:!1,complete:!1,error:!1,transfer:null};c.push(e),a.queue.push(e)}a.uploading||(r.on(q.beforeUnload,function(){return a.leave}),a.uploading=!0),a.$el.trigger(q.start,[c]),l(a)}function l(a){var b=0,c=[];for(var d in a.queue)!a.queue.hasOwnProperty(d)||a.queue[d].complete||a.queue[d].error||c.push(a.queue[d]);a.queue=c;for(var e in a.queue)if(a.queue.hasOwnProperty(e)){if(!a.queue[e].started){var f=new FormData;f.append(a.postKey,a.queue[e].file);for(var g in a.postData)a.postData.hasOwnProperty(g)&&f.append(g,a.postData[g]);m(a,a.queue[e],f)}if(b++,b>=a.maxQueue)return;d++}0===b&&(r.off(q.beforeUnload),a.uploading=!1,a.$el.trigger(q.complete))}function m(b,c,d){c.size>=b.maxSize?(c.error=!0,b.$el.trigger(q.fileError,[c,"Too large"]),l(b)):(c.started=!0,c.transfer=a.ajax({url:b.action,data:d,type:"POST",contentType:!1,processData:!1,cache:!1,xhr:function(){var d=a.ajaxSettings.xhr();return d.upload&&d.upload.addEventListener("progress",function(a){var d=0,e=a.loaded||a.position,f=a.total;a.lengthComputable&&(d=Math.ceil(e/f*100)),b.$el.trigger(q.fileProgress,[c,d])},!1),d},beforeSend:function(){b.$el.trigger(q.fileStart,[c])},success:function(a){c.complete=!0,b.$el.trigger(q.fileComplete,[c,a]),l(b)},error:function(a,d,e){c.error=!0,b.$el.trigger(q.fileError,[c,e]),l(b)}}))}var n=b.Plugin("upload",{widget:!0,defaults:{customClass:"",action:"",label:"Drag and drop files or click to select",leave:"You have uploads pending, are you sure you want to leave this page?",maxQueue:2,maxSize:5242880,postData:{},postKey:"file"},classes:["input","target","multiple","dropping"],methods:{_construct:c,_destruct:d}}),o=n.classes,p=o.raw,q=n.events,r=(n.functions,b.$window);q.complete="complete",q.fileStart="filestart",q.fileProgress="fileprogress",q.fileComplete="filecomplete",q.fileError="fileerror",q.start="start"}(jQuery,Formstone);