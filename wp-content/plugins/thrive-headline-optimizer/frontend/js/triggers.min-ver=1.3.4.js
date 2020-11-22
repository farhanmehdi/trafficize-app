/*! Thrive Headline Optimizer - 2020-11-04
* http://www.thrivethemes.com/
* Copyright (c) 2020 Thrive Themes */

var THO_Front=THO_Front||{},ThriveGlobal=ThriveGlobal||{$j:jQuery.noConflict()};window.clearInterval(window.tho_title_interval),tho_change_titles(),ThriveGlobal.$j(function(){ThriveGlobal.$j(THO_Front).on("tho_log_event",function(a,b){if(b.variation=THO_Titles[b.post_id],void 0!==THO_Titles[b.post_id]){b.referrer=document.referrer,b.is_single=THO_Front.data.is_single;THO_Front.check_user_cookie(b)&&(THO_Front.update_cookie(b),ThriveGlobal.$j.ajax({url:THO_Front.data.log_url,data:b,type:"post"}))}}),"undefiend"!=typeof THO_Front.data&&THO_Front.data.log_engagements.length>0&&THO_Front.full_fast_log(THO_Front.data.log_engagements),ThriveGlobal.$j.each(THO_Front.data.active_triggers,function(a,b){THO_Front[a](b)}),ThriveGlobal.$j(document.body).on("updated_checkout",tho_change_titles),ThriveGlobal.$j(document.body).on("wc_fragments_refreshed",tho_change_titles),ThriveGlobal.$j(document.body).on("wc_fragments_loaded",tho_change_titles),ThriveGlobal.$j(document.body).on("added_to_cart",tho_change_titles)}),THO_Front.full_fast_log=function(a){var b={post_id:THO_Front.data.post_id,test_id:THO_Front.data.test_id,referrer:document.referrer,is_single:THO_Front.data.is_single,variation:THO_Titles[THO_Front.data.post_id]},c=[];for(var d in a)b.log_type=a[d]==THO_Front.data.const._e_click?THO_Front.data.const._engagement:THO_Front.data.const._impression,b.eng_type=a[d],THO_Front.check_user_cookie(b)&&c.push(a[d]);c.length>0&&(b.eng_type=c,THO_Front.update_cookie(b),ThriveGlobal.$j.ajax({url:THO_Front.data.log_url,data:b,type:"post"}))},THO_Front.click_through=function(a){},THO_Front.viewport=function(a){var b=ThriveGlobal.$j(window),c=function(a){if(a.offset().top+80<b.height()+b.scrollTop()&&a.offset().top+a.outerHeight()>b.scrollTop()+80){if(a.addClass("tho-viewport-triggered"),d.post_id=a.attr("data-post-id"),d.test_id=a.attr("data-test-id"),void 0===a.attr("click"))return;d.post_id!=THO_Front.data.post_id&&ThriveGlobal.$j(THO_Front).trigger("tho_log_event",d)}},d={eng_type:THO_Front.data.const._e_click,log_type:THO_Front.data.const._impression};ThriveGlobal.$j(document).ready(function(){var d=ThriveGlobal.$j(a+", ."+a);d.length&&(b.scroll(function(){d.each(function(){var a=ThriveGlobal.$j(this);a.hasClass("tho-viewport-triggered")||c(a)})}),d.each(function(){c(ThriveGlobal.$j(this))}))})},THO_Front.time_on_content_signal=function(a){var b=1e3*parseInt(a),c=!1,d={eng_type:THO_Front.data.const._e_time,post_id:THO_Front.data.post_id,test_id:THO_Front.data.test_id,log_type:THO_Front.data.const._engagement};setTimeout(function(){c||(ThriveGlobal.$j(THO_Front).trigger("tho_log_event",d),c=!0)},b)},THO_Front.scrolling_signal=function(a){var b=parseInt(a)/100,c=ThriveGlobal.$j(window),d={post_id:THO_Front.data.post_id,test_id:THO_Front.data.test_id,eng_type:THO_Front.data.const._e_scroll};ThriveGlobal.$j(function(){var a=!1,e=ThriveGlobal.$j("#"+THO_Front.data.end_of_content_id),f=function(){if(!a){var f=ThriveGlobal.$j("body").height()-c.height();e.length&&(f=e.offset().top-c.height()),(c.scrollTop()/f>=b||f<0)&&(d.eng_type=THO_Front.data.const._e_scroll,d.log_type=THO_Front.data.const._engagement,ThriveGlobal.$j(THO_Front).trigger("tho_log_event",d),a=!0)}};c.scroll(f),f()})},THO_Front.update_cookie=function(a){var b,c,d="tho_post_cookie_"+a.post_id,e=tho_get_cookie(d,!0);if(""==e&&(e={no_click:THO_Front.data.is_single.length&&a.post_id==THO_Front.data.post_id?1:0,impressions:[],engagements:[]}),a.eng_type instanceof Array)for(var f in a.eng_type)c=a.eng_type[f]==THO_Front.data.const._e_click?"engagements":"impressions",e[c].push(a.eng_type[f]);else c=a.log_type==THO_Front.data.const._engagement?"engagements":"impressions",e[c].push(a.eng_type);b={post_id:a.post_id,test_id:a.test_id,no_click:e.no_click,impressions:e.impressions,engagements:e.engagements},tho_set_cookie(d,b,!0)},THO_Front.check_user_cookie=function(a){var b="tho_post_cookie_"+a.post_id,c=tho_get_cookie(b,!0);return""==c?a.log_type==THO_Front.data.const._impression:c.test_id==a.test_id&&(!(c.impressions.indexOf(a.eng_type)>=0&&a.log_type==THO_Front.data.const._impression)&&(!(c.engagements.indexOf(a.eng_type)>=0&&a.log_type==THO_Front.data.const._engagement)&&(a.eng_type!=THO_Front.data.const._e_click||!c.no_click&&-1!==c.impressions.indexOf(a.eng_type))))},THO_Front.getEngagementName=function(a){switch(parseInt(a)){case 1:return"click";case 2:return"scroll";case 3:return"time";case 4:return"viewport";default:return"undetected"}};