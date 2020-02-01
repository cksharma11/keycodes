// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e27661){if((e27661 instanceof Error)){
var e = e27661;
return "Error: Unable to stringify";
} else {
throw e27661;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__27664 = arguments.length;
switch (G__27664) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27662_SHARP_){
if(typeof p1__27662_SHARP_ === 'string'){
return p1__27662_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__27662_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27667 = arguments.length;
var i__4731__auto___27668 = (0);
while(true){
if((i__4731__auto___27668 < len__4730__auto___27667)){
args__4736__auto__.push((arguments[i__4731__auto___27668]));

var G__27669 = (i__4731__auto___27668 + (1));
i__4731__auto___27668 = G__27669;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27666){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27666));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27671 = arguments.length;
var i__4731__auto___27672 = (0);
while(true){
if((i__4731__auto___27672 < len__4730__auto___27671)){
args__4736__auto__.push((arguments[i__4731__auto___27672]));

var G__27673 = (i__4731__auto___27672 + (1));
i__4731__auto___27672 = G__27673;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27670){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27670));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27674){
var map__27675 = p__27674;
var map__27675__$1 = (((((!((map__27675 == null))))?(((((map__27675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27675):map__27675);
var message = cljs.core.get.call(null,map__27675__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27675__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24678__auto___27754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___27754,ch){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___27754,ch){
return (function (state_27726){
var state_val_27727 = (state_27726[(1)]);
if((state_val_27727 === (7))){
var inst_27722 = (state_27726[(2)]);
var state_27726__$1 = state_27726;
var statearr_27728_27755 = state_27726__$1;
(statearr_27728_27755[(2)] = inst_27722);

(statearr_27728_27755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (1))){
var state_27726__$1 = state_27726;
var statearr_27729_27756 = state_27726__$1;
(statearr_27729_27756[(2)] = null);

(statearr_27729_27756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (4))){
var inst_27679 = (state_27726[(7)]);
var inst_27679__$1 = (state_27726[(2)]);
var state_27726__$1 = (function (){var statearr_27730 = state_27726;
(statearr_27730[(7)] = inst_27679__$1);

return statearr_27730;
})();
if(cljs.core.truth_(inst_27679__$1)){
var statearr_27731_27757 = state_27726__$1;
(statearr_27731_27757[(1)] = (5));

} else {
var statearr_27732_27758 = state_27726__$1;
(statearr_27732_27758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (15))){
var inst_27686 = (state_27726[(8)]);
var inst_27701 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27686);
var inst_27702 = cljs.core.first.call(null,inst_27701);
var inst_27703 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27702);
var inst_27704 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27703)].join('');
var inst_27705 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27704);
var state_27726__$1 = state_27726;
var statearr_27733_27759 = state_27726__$1;
(statearr_27733_27759[(2)] = inst_27705);

(statearr_27733_27759[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (13))){
var inst_27710 = (state_27726[(2)]);
var state_27726__$1 = state_27726;
var statearr_27734_27760 = state_27726__$1;
(statearr_27734_27760[(2)] = inst_27710);

(statearr_27734_27760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (6))){
var state_27726__$1 = state_27726;
var statearr_27735_27761 = state_27726__$1;
(statearr_27735_27761[(2)] = null);

(statearr_27735_27761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (17))){
var inst_27708 = (state_27726[(2)]);
var state_27726__$1 = state_27726;
var statearr_27736_27762 = state_27726__$1;
(statearr_27736_27762[(2)] = inst_27708);

(statearr_27736_27762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (3))){
var inst_27724 = (state_27726[(2)]);
var state_27726__$1 = state_27726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27726__$1,inst_27724);
} else {
if((state_val_27727 === (12))){
var inst_27685 = (state_27726[(9)]);
var inst_27699 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27685,opts);
var state_27726__$1 = state_27726;
if(inst_27699){
var statearr_27737_27763 = state_27726__$1;
(statearr_27737_27763[(1)] = (15));

} else {
var statearr_27738_27764 = state_27726__$1;
(statearr_27738_27764[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (2))){
var state_27726__$1 = state_27726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27726__$1,(4),ch);
} else {
if((state_val_27727 === (11))){
var inst_27686 = (state_27726[(8)]);
var inst_27691 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27692 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27686);
var inst_27693 = cljs.core.async.timeout.call(null,(1000));
var inst_27694 = [inst_27692,inst_27693];
var inst_27695 = (new cljs.core.PersistentVector(null,2,(5),inst_27691,inst_27694,null));
var state_27726__$1 = state_27726;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27726__$1,(14),inst_27695);
} else {
if((state_val_27727 === (9))){
var inst_27686 = (state_27726[(8)]);
var inst_27712 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27713 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27686);
var inst_27714 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27713);
var inst_27715 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27714)].join('');
var inst_27716 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27715);
var state_27726__$1 = (function (){var statearr_27739 = state_27726;
(statearr_27739[(10)] = inst_27712);

return statearr_27739;
})();
var statearr_27740_27765 = state_27726__$1;
(statearr_27740_27765[(2)] = inst_27716);

(statearr_27740_27765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (5))){
var inst_27679 = (state_27726[(7)]);
var inst_27681 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27682 = (new cljs.core.PersistentArrayMap(null,2,inst_27681,null));
var inst_27683 = (new cljs.core.PersistentHashSet(null,inst_27682,null));
var inst_27684 = figwheel.client.focus_msgs.call(null,inst_27683,inst_27679);
var inst_27685 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27684);
var inst_27686 = cljs.core.first.call(null,inst_27684);
var inst_27687 = figwheel.client.autoload_QMARK_.call(null);
var state_27726__$1 = (function (){var statearr_27741 = state_27726;
(statearr_27741[(8)] = inst_27686);

(statearr_27741[(9)] = inst_27685);

return statearr_27741;
})();
if(cljs.core.truth_(inst_27687)){
var statearr_27742_27766 = state_27726__$1;
(statearr_27742_27766[(1)] = (8));

} else {
var statearr_27743_27767 = state_27726__$1;
(statearr_27743_27767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (14))){
var inst_27697 = (state_27726[(2)]);
var state_27726__$1 = state_27726;
var statearr_27744_27768 = state_27726__$1;
(statearr_27744_27768[(2)] = inst_27697);

(statearr_27744_27768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (16))){
var state_27726__$1 = state_27726;
var statearr_27745_27769 = state_27726__$1;
(statearr_27745_27769[(2)] = null);

(statearr_27745_27769[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (10))){
var inst_27718 = (state_27726[(2)]);
var state_27726__$1 = (function (){var statearr_27746 = state_27726;
(statearr_27746[(11)] = inst_27718);

return statearr_27746;
})();
var statearr_27747_27770 = state_27726__$1;
(statearr_27747_27770[(2)] = null);

(statearr_27747_27770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (8))){
var inst_27685 = (state_27726[(9)]);
var inst_27689 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27685,opts);
var state_27726__$1 = state_27726;
if(cljs.core.truth_(inst_27689)){
var statearr_27748_27771 = state_27726__$1;
(statearr_27748_27771[(1)] = (11));

} else {
var statearr_27749_27772 = state_27726__$1;
(statearr_27749_27772[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24678__auto___27754,ch))
;
return ((function (switch__24583__auto__,c__24678__auto___27754,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24584__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24584__auto____0 = (function (){
var statearr_27750 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27750[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24584__auto__);

(statearr_27750[(1)] = (1));

return statearr_27750;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24584__auto____1 = (function (state_27726){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_27726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e27751){if((e27751 instanceof Object)){
var ex__24587__auto__ = e27751;
var statearr_27752_27773 = state_27726;
(statearr_27752_27773[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27774 = state_27726;
state_27726 = G__27774;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24584__auto__ = function(state_27726){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24584__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24584__auto____1.call(this,state_27726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24584__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24584__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___27754,ch))
})();
var state__24680__auto__ = (function (){var statearr_27753 = f__24679__auto__.call(null);
(statearr_27753[(6)] = c__24678__auto___27754);

return statearr_27753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___27754,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27775_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27775_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27781 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27781){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27777 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27778 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27779 = true;
var _STAR_print_fn_STAR__temp_val__27780 = ((function (_STAR_print_newline_STAR__orig_val__27777,_STAR_print_fn_STAR__orig_val__27778,_STAR_print_newline_STAR__temp_val__27779,sb,base_path_27781){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__27777,_STAR_print_fn_STAR__orig_val__27778,_STAR_print_newline_STAR__temp_val__27779,sb,base_path_27781))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27779;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27780;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27778;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27777;
}}catch (e27776){if((e27776 instanceof Error)){
var e = e27776;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27781], null));
} else {
var e = e27776;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27781))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27782){
var map__27783 = p__27782;
var map__27783__$1 = (((((!((map__27783 == null))))?(((((map__27783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27783):map__27783);
var opts = map__27783__$1;
var build_id = cljs.core.get.call(null,map__27783__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27783,map__27783__$1,opts,build_id){
return (function (p__27785){
var vec__27786 = p__27785;
var seq__27787 = cljs.core.seq.call(null,vec__27786);
var first__27788 = cljs.core.first.call(null,seq__27787);
var seq__27787__$1 = cljs.core.next.call(null,seq__27787);
var map__27789 = first__27788;
var map__27789__$1 = (((((!((map__27789 == null))))?(((((map__27789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27789):map__27789);
var msg = map__27789__$1;
var msg_name = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27787__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27786,seq__27787,first__27788,seq__27787__$1,map__27789,map__27789__$1,msg,msg_name,_,map__27783,map__27783__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27786,seq__27787,first__27788,seq__27787__$1,map__27789,map__27789__$1,msg,msg_name,_,map__27783,map__27783__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27783,map__27783__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27791){
var vec__27792 = p__27791;
var seq__27793 = cljs.core.seq.call(null,vec__27792);
var first__27794 = cljs.core.first.call(null,seq__27793);
var seq__27793__$1 = cljs.core.next.call(null,seq__27793);
var map__27795 = first__27794;
var map__27795__$1 = (((((!((map__27795 == null))))?(((((map__27795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27795):map__27795);
var msg = map__27795__$1;
var msg_name = cljs.core.get.call(null,map__27795__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27793__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27797){
var map__27798 = p__27797;
var map__27798__$1 = (((((!((map__27798 == null))))?(((((map__27798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27798):map__27798);
var on_compile_warning = cljs.core.get.call(null,map__27798__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27798__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27798,map__27798__$1,on_compile_warning,on_compile_fail){
return (function (p__27800){
var vec__27801 = p__27800;
var seq__27802 = cljs.core.seq.call(null,vec__27801);
var first__27803 = cljs.core.first.call(null,seq__27802);
var seq__27802__$1 = cljs.core.next.call(null,seq__27802);
var map__27804 = first__27803;
var map__27804__$1 = (((((!((map__27804 == null))))?(((((map__27804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27804):map__27804);
var msg = map__27804__$1;
var msg_name = cljs.core.get.call(null,map__27804__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27802__$1;
var pred__27806 = cljs.core._EQ_;
var expr__27807 = msg_name;
if(cljs.core.truth_(pred__27806.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27807))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27806.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27807))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27798,map__27798__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24678__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto__,msg_hist,msg_names,msg){
return (function (state_27896){
var state_val_27897 = (state_27896[(1)]);
if((state_val_27897 === (7))){
var inst_27816 = (state_27896[(2)]);
var state_27896__$1 = state_27896;
if(cljs.core.truth_(inst_27816)){
var statearr_27898_27945 = state_27896__$1;
(statearr_27898_27945[(1)] = (8));

} else {
var statearr_27899_27946 = state_27896__$1;
(statearr_27899_27946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (20))){
var inst_27890 = (state_27896[(2)]);
var state_27896__$1 = state_27896;
var statearr_27900_27947 = state_27896__$1;
(statearr_27900_27947[(2)] = inst_27890);

(statearr_27900_27947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (27))){
var inst_27886 = (state_27896[(2)]);
var state_27896__$1 = state_27896;
var statearr_27901_27948 = state_27896__$1;
(statearr_27901_27948[(2)] = inst_27886);

(statearr_27901_27948[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (1))){
var inst_27809 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27896__$1 = state_27896;
if(cljs.core.truth_(inst_27809)){
var statearr_27902_27949 = state_27896__$1;
(statearr_27902_27949[(1)] = (2));

} else {
var statearr_27903_27950 = state_27896__$1;
(statearr_27903_27950[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (24))){
var inst_27888 = (state_27896[(2)]);
var state_27896__$1 = state_27896;
var statearr_27904_27951 = state_27896__$1;
(statearr_27904_27951[(2)] = inst_27888);

(statearr_27904_27951[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (4))){
var inst_27894 = (state_27896[(2)]);
var state_27896__$1 = state_27896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27896__$1,inst_27894);
} else {
if((state_val_27897 === (15))){
var inst_27892 = (state_27896[(2)]);
var state_27896__$1 = state_27896;
var statearr_27905_27952 = state_27896__$1;
(statearr_27905_27952[(2)] = inst_27892);

(statearr_27905_27952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (21))){
var inst_27845 = (state_27896[(2)]);
var inst_27846 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27847 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27846);
var state_27896__$1 = (function (){var statearr_27906 = state_27896;
(statearr_27906[(7)] = inst_27845);

return statearr_27906;
})();
var statearr_27907_27953 = state_27896__$1;
(statearr_27907_27953[(2)] = inst_27847);

(statearr_27907_27953[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (31))){
var inst_27875 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27896__$1 = state_27896;
if(inst_27875){
var statearr_27908_27954 = state_27896__$1;
(statearr_27908_27954[(1)] = (34));

} else {
var statearr_27909_27955 = state_27896__$1;
(statearr_27909_27955[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (32))){
var inst_27884 = (state_27896[(2)]);
var state_27896__$1 = state_27896;
var statearr_27910_27956 = state_27896__$1;
(statearr_27910_27956[(2)] = inst_27884);

(statearr_27910_27956[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (33))){
var inst_27871 = (state_27896[(2)]);
var inst_27872 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27873 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27872);
var state_27896__$1 = (function (){var statearr_27911 = state_27896;
(statearr_27911[(8)] = inst_27871);

return statearr_27911;
})();
var statearr_27912_27957 = state_27896__$1;
(statearr_27912_27957[(2)] = inst_27873);

(statearr_27912_27957[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (13))){
var inst_27830 = figwheel.client.heads_up.clear.call(null);
var state_27896__$1 = state_27896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27896__$1,(16),inst_27830);
} else {
if((state_val_27897 === (22))){
var inst_27851 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27852 = figwheel.client.heads_up.append_warning_message.call(null,inst_27851);
var state_27896__$1 = state_27896;
var statearr_27913_27958 = state_27896__$1;
(statearr_27913_27958[(2)] = inst_27852);

(statearr_27913_27958[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (36))){
var inst_27882 = (state_27896[(2)]);
var state_27896__$1 = state_27896;
var statearr_27914_27959 = state_27896__$1;
(statearr_27914_27959[(2)] = inst_27882);

(statearr_27914_27959[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (29))){
var inst_27862 = (state_27896[(2)]);
var inst_27863 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27864 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27863);
var state_27896__$1 = (function (){var statearr_27915 = state_27896;
(statearr_27915[(9)] = inst_27862);

return statearr_27915;
})();
var statearr_27916_27960 = state_27896__$1;
(statearr_27916_27960[(2)] = inst_27864);

(statearr_27916_27960[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (6))){
var inst_27811 = (state_27896[(10)]);
var state_27896__$1 = state_27896;
var statearr_27917_27961 = state_27896__$1;
(statearr_27917_27961[(2)] = inst_27811);

(statearr_27917_27961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (28))){
var inst_27858 = (state_27896[(2)]);
var inst_27859 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27860 = figwheel.client.heads_up.display_warning.call(null,inst_27859);
var state_27896__$1 = (function (){var statearr_27918 = state_27896;
(statearr_27918[(11)] = inst_27858);

return statearr_27918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27896__$1,(29),inst_27860);
} else {
if((state_val_27897 === (25))){
var inst_27856 = figwheel.client.heads_up.clear.call(null);
var state_27896__$1 = state_27896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27896__$1,(28),inst_27856);
} else {
if((state_val_27897 === (34))){
var inst_27877 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27896__$1 = state_27896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27896__$1,(37),inst_27877);
} else {
if((state_val_27897 === (17))){
var inst_27836 = (state_27896[(2)]);
var inst_27837 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27838 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27837);
var state_27896__$1 = (function (){var statearr_27919 = state_27896;
(statearr_27919[(12)] = inst_27836);

return statearr_27919;
})();
var statearr_27920_27962 = state_27896__$1;
(statearr_27920_27962[(2)] = inst_27838);

(statearr_27920_27962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (3))){
var inst_27828 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27896__$1 = state_27896;
if(inst_27828){
var statearr_27921_27963 = state_27896__$1;
(statearr_27921_27963[(1)] = (13));

} else {
var statearr_27922_27964 = state_27896__$1;
(statearr_27922_27964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (12))){
var inst_27824 = (state_27896[(2)]);
var state_27896__$1 = state_27896;
var statearr_27923_27965 = state_27896__$1;
(statearr_27923_27965[(2)] = inst_27824);

(statearr_27923_27965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (2))){
var inst_27811 = (state_27896[(10)]);
var inst_27811__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27896__$1 = (function (){var statearr_27924 = state_27896;
(statearr_27924[(10)] = inst_27811__$1);

return statearr_27924;
})();
if(cljs.core.truth_(inst_27811__$1)){
var statearr_27925_27966 = state_27896__$1;
(statearr_27925_27966[(1)] = (5));

} else {
var statearr_27926_27967 = state_27896__$1;
(statearr_27926_27967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (23))){
var inst_27854 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27896__$1 = state_27896;
if(inst_27854){
var statearr_27927_27968 = state_27896__$1;
(statearr_27927_27968[(1)] = (25));

} else {
var statearr_27928_27969 = state_27896__$1;
(statearr_27928_27969[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (35))){
var state_27896__$1 = state_27896;
var statearr_27929_27970 = state_27896__$1;
(statearr_27929_27970[(2)] = null);

(statearr_27929_27970[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (19))){
var inst_27849 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27896__$1 = state_27896;
if(inst_27849){
var statearr_27930_27971 = state_27896__$1;
(statearr_27930_27971[(1)] = (22));

} else {
var statearr_27931_27972 = state_27896__$1;
(statearr_27931_27972[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (11))){
var inst_27820 = (state_27896[(2)]);
var state_27896__$1 = state_27896;
var statearr_27932_27973 = state_27896__$1;
(statearr_27932_27973[(2)] = inst_27820);

(statearr_27932_27973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (9))){
var inst_27822 = figwheel.client.heads_up.clear.call(null);
var state_27896__$1 = state_27896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27896__$1,(12),inst_27822);
} else {
if((state_val_27897 === (5))){
var inst_27813 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27896__$1 = state_27896;
var statearr_27933_27974 = state_27896__$1;
(statearr_27933_27974[(2)] = inst_27813);

(statearr_27933_27974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (14))){
var inst_27840 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27896__$1 = state_27896;
if(inst_27840){
var statearr_27934_27975 = state_27896__$1;
(statearr_27934_27975[(1)] = (18));

} else {
var statearr_27935_27976 = state_27896__$1;
(statearr_27935_27976[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (26))){
var inst_27866 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27896__$1 = state_27896;
if(inst_27866){
var statearr_27936_27977 = state_27896__$1;
(statearr_27936_27977[(1)] = (30));

} else {
var statearr_27937_27978 = state_27896__$1;
(statearr_27937_27978[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (16))){
var inst_27832 = (state_27896[(2)]);
var inst_27833 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27834 = figwheel.client.heads_up.display_exception.call(null,inst_27833);
var state_27896__$1 = (function (){var statearr_27938 = state_27896;
(statearr_27938[(13)] = inst_27832);

return statearr_27938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27896__$1,(17),inst_27834);
} else {
if((state_val_27897 === (30))){
var inst_27868 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27869 = figwheel.client.heads_up.display_warning.call(null,inst_27868);
var state_27896__$1 = state_27896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27896__$1,(33),inst_27869);
} else {
if((state_val_27897 === (10))){
var inst_27826 = (state_27896[(2)]);
var state_27896__$1 = state_27896;
var statearr_27939_27979 = state_27896__$1;
(statearr_27939_27979[(2)] = inst_27826);

(statearr_27939_27979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (18))){
var inst_27842 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27843 = figwheel.client.heads_up.display_exception.call(null,inst_27842);
var state_27896__$1 = state_27896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27896__$1,(21),inst_27843);
} else {
if((state_val_27897 === (37))){
var inst_27879 = (state_27896[(2)]);
var state_27896__$1 = state_27896;
var statearr_27940_27980 = state_27896__$1;
(statearr_27940_27980[(2)] = inst_27879);

(statearr_27940_27980[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27897 === (8))){
var inst_27818 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27896__$1 = state_27896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27896__$1,(11),inst_27818);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24678__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24583__auto__,c__24678__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24584__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24584__auto____0 = (function (){
var statearr_27941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27941[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24584__auto__);

(statearr_27941[(1)] = (1));

return statearr_27941;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24584__auto____1 = (function (state_27896){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_27896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e27942){if((e27942 instanceof Object)){
var ex__24587__auto__ = e27942;
var statearr_27943_27981 = state_27896;
(statearr_27943_27981[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27982 = state_27896;
state_27896 = G__27982;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24584__auto__ = function(state_27896){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24584__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24584__auto____1.call(this,state_27896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24584__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24584__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto__,msg_hist,msg_names,msg))
})();
var state__24680__auto__ = (function (){var statearr_27944 = f__24679__auto__.call(null);
(statearr_27944[(6)] = c__24678__auto__);

return statearr_27944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto__,msg_hist,msg_names,msg))
);

return c__24678__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24678__auto___28011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___28011,ch){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___28011,ch){
return (function (state_27997){
var state_val_27998 = (state_27997[(1)]);
if((state_val_27998 === (1))){
var state_27997__$1 = state_27997;
var statearr_27999_28012 = state_27997__$1;
(statearr_27999_28012[(2)] = null);

(statearr_27999_28012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27998 === (2))){
var state_27997__$1 = state_27997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27997__$1,(4),ch);
} else {
if((state_val_27998 === (3))){
var inst_27995 = (state_27997[(2)]);
var state_27997__$1 = state_27997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27997__$1,inst_27995);
} else {
if((state_val_27998 === (4))){
var inst_27985 = (state_27997[(7)]);
var inst_27985__$1 = (state_27997[(2)]);
var state_27997__$1 = (function (){var statearr_28000 = state_27997;
(statearr_28000[(7)] = inst_27985__$1);

return statearr_28000;
})();
if(cljs.core.truth_(inst_27985__$1)){
var statearr_28001_28013 = state_27997__$1;
(statearr_28001_28013[(1)] = (5));

} else {
var statearr_28002_28014 = state_27997__$1;
(statearr_28002_28014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27998 === (5))){
var inst_27985 = (state_27997[(7)]);
var inst_27987 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27985);
var state_27997__$1 = state_27997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27997__$1,(8),inst_27987);
} else {
if((state_val_27998 === (6))){
var state_27997__$1 = state_27997;
var statearr_28003_28015 = state_27997__$1;
(statearr_28003_28015[(2)] = null);

(statearr_28003_28015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27998 === (7))){
var inst_27993 = (state_27997[(2)]);
var state_27997__$1 = state_27997;
var statearr_28004_28016 = state_27997__$1;
(statearr_28004_28016[(2)] = inst_27993);

(statearr_28004_28016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27998 === (8))){
var inst_27989 = (state_27997[(2)]);
var state_27997__$1 = (function (){var statearr_28005 = state_27997;
(statearr_28005[(8)] = inst_27989);

return statearr_28005;
})();
var statearr_28006_28017 = state_27997__$1;
(statearr_28006_28017[(2)] = null);

(statearr_28006_28017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__24678__auto___28011,ch))
;
return ((function (switch__24583__auto__,c__24678__auto___28011,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24584__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24584__auto____0 = (function (){
var statearr_28007 = [null,null,null,null,null,null,null,null,null];
(statearr_28007[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24584__auto__);

(statearr_28007[(1)] = (1));

return statearr_28007;
});
var figwheel$client$heads_up_plugin_$_state_machine__24584__auto____1 = (function (state_27997){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_27997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e28008){if((e28008 instanceof Object)){
var ex__24587__auto__ = e28008;
var statearr_28009_28018 = state_27997;
(statearr_28009_28018[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28019 = state_27997;
state_27997 = G__28019;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24584__auto__ = function(state_27997){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24584__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24584__auto____1.call(this,state_27997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24584__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24584__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___28011,ch))
})();
var state__24680__auto__ = (function (){var statearr_28010 = f__24679__auto__.call(null);
(statearr_28010[(6)] = c__24678__auto___28011);

return statearr_28010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___28011,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24678__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto__){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto__){
return (function (state_28025){
var state_val_28026 = (state_28025[(1)]);
if((state_val_28026 === (1))){
var inst_28020 = cljs.core.async.timeout.call(null,(3000));
var state_28025__$1 = state_28025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28025__$1,(2),inst_28020);
} else {
if((state_val_28026 === (2))){
var inst_28022 = (state_28025[(2)]);
var inst_28023 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28025__$1 = (function (){var statearr_28027 = state_28025;
(statearr_28027[(7)] = inst_28022);

return statearr_28027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28025__$1,inst_28023);
} else {
return null;
}
}
});})(c__24678__auto__))
;
return ((function (switch__24583__auto__,c__24678__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24584__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24584__auto____0 = (function (){
var statearr_28028 = [null,null,null,null,null,null,null,null];
(statearr_28028[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24584__auto__);

(statearr_28028[(1)] = (1));

return statearr_28028;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24584__auto____1 = (function (state_28025){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_28025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e28029){if((e28029 instanceof Object)){
var ex__24587__auto__ = e28029;
var statearr_28030_28032 = state_28025;
(statearr_28030_28032[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28033 = state_28025;
state_28025 = G__28033;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24584__auto__ = function(state_28025){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24584__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24584__auto____1.call(this,state_28025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24584__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24584__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto__))
})();
var state__24680__auto__ = (function (){var statearr_28031 = f__24679__auto__.call(null);
(statearr_28031[(6)] = c__24678__auto__);

return statearr_28031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto__))
);

return c__24678__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24678__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto__,figwheel_version,temp__5720__auto__){
return (function (state_28040){
var state_val_28041 = (state_28040[(1)]);
if((state_val_28041 === (1))){
var inst_28034 = cljs.core.async.timeout.call(null,(2000));
var state_28040__$1 = state_28040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28040__$1,(2),inst_28034);
} else {
if((state_val_28041 === (2))){
var inst_28036 = (state_28040[(2)]);
var inst_28037 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_28038 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_28037);
var state_28040__$1 = (function (){var statearr_28042 = state_28040;
(statearr_28042[(7)] = inst_28036);

return statearr_28042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28040__$1,inst_28038);
} else {
return null;
}
}
});})(c__24678__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__24583__auto__,c__24678__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24584__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24584__auto____0 = (function (){
var statearr_28043 = [null,null,null,null,null,null,null,null];
(statearr_28043[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24584__auto__);

(statearr_28043[(1)] = (1));

return statearr_28043;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24584__auto____1 = (function (state_28040){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_28040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e28044){if((e28044 instanceof Object)){
var ex__24587__auto__ = e28044;
var statearr_28045_28047 = state_28040;
(statearr_28045_28047[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28048 = state_28040;
state_28040 = G__28048;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24584__auto__ = function(state_28040){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24584__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24584__auto____1.call(this,state_28040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24584__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24584__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto__,figwheel_version,temp__5720__auto__))
})();
var state__24680__auto__ = (function (){var statearr_28046 = f__24679__auto__.call(null);
(statearr_28046[(6)] = c__24678__auto__);

return statearr_28046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto__,figwheel_version,temp__5720__auto__))
);

return c__24678__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__28049){
var map__28050 = p__28049;
var map__28050__$1 = (((((!((map__28050 == null))))?(((((map__28050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28050):map__28050);
var file = cljs.core.get.call(null,map__28050__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28050__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28050__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28052 = "";
var G__28052__$1 = (cljs.core.truth_(file)?[G__28052,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28052);
var G__28052__$2 = (cljs.core.truth_(line)?[G__28052__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28052__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__28052__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28052__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28053){
var map__28054 = p__28053;
var map__28054__$1 = (((((!((map__28054 == null))))?(((((map__28054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28054):map__28054);
var ed = map__28054__$1;
var exception_data = cljs.core.get.call(null,map__28054__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28054__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_28057 = (function (){var G__28056 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28056)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__28056;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_28057);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28058){
var map__28059 = p__28058;
var map__28059__$1 = (((((!((map__28059 == null))))?(((((map__28059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28059):map__28059);
var w = map__28059__$1;
var message = cljs.core.get.call(null,map__28059__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28061 = cljs.core.seq.call(null,plugins);
var chunk__28062 = null;
var count__28063 = (0);
var i__28064 = (0);
while(true){
if((i__28064 < count__28063)){
var vec__28071 = cljs.core._nth.call(null,chunk__28062,i__28064);
var k = cljs.core.nth.call(null,vec__28071,(0),null);
var plugin = cljs.core.nth.call(null,vec__28071,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28077 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28061,chunk__28062,count__28063,i__28064,pl_28077,vec__28071,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28077.call(null,msg_hist);
});})(seq__28061,chunk__28062,count__28063,i__28064,pl_28077,vec__28071,k,plugin))
);
} else {
}


var G__28078 = seq__28061;
var G__28079 = chunk__28062;
var G__28080 = count__28063;
var G__28081 = (i__28064 + (1));
seq__28061 = G__28078;
chunk__28062 = G__28079;
count__28063 = G__28080;
i__28064 = G__28081;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28061);
if(temp__5720__auto__){
var seq__28061__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28061__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28061__$1);
var G__28082 = cljs.core.chunk_rest.call(null,seq__28061__$1);
var G__28083 = c__4550__auto__;
var G__28084 = cljs.core.count.call(null,c__4550__auto__);
var G__28085 = (0);
seq__28061 = G__28082;
chunk__28062 = G__28083;
count__28063 = G__28084;
i__28064 = G__28085;
continue;
} else {
var vec__28074 = cljs.core.first.call(null,seq__28061__$1);
var k = cljs.core.nth.call(null,vec__28074,(0),null);
var plugin = cljs.core.nth.call(null,vec__28074,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28086 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28061,chunk__28062,count__28063,i__28064,pl_28086,vec__28074,k,plugin,seq__28061__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28086.call(null,msg_hist);
});})(seq__28061,chunk__28062,count__28063,i__28064,pl_28086,vec__28074,k,plugin,seq__28061__$1,temp__5720__auto__))
);
} else {
}


var G__28087 = cljs.core.next.call(null,seq__28061__$1);
var G__28088 = null;
var G__28089 = (0);
var G__28090 = (0);
seq__28061 = G__28087;
chunk__28062 = G__28088;
count__28063 = G__28089;
i__28064 = G__28090;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__28092 = arguments.length;
switch (G__28092) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__28093_28098 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__28094_28099 = null;
var count__28095_28100 = (0);
var i__28096_28101 = (0);
while(true){
if((i__28096_28101 < count__28095_28100)){
var msg_28102 = cljs.core._nth.call(null,chunk__28094_28099,i__28096_28101);
figwheel.client.socket.handle_incoming_message.call(null,msg_28102);


var G__28103 = seq__28093_28098;
var G__28104 = chunk__28094_28099;
var G__28105 = count__28095_28100;
var G__28106 = (i__28096_28101 + (1));
seq__28093_28098 = G__28103;
chunk__28094_28099 = G__28104;
count__28095_28100 = G__28105;
i__28096_28101 = G__28106;
continue;
} else {
var temp__5720__auto___28107 = cljs.core.seq.call(null,seq__28093_28098);
if(temp__5720__auto___28107){
var seq__28093_28108__$1 = temp__5720__auto___28107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28093_28108__$1)){
var c__4550__auto___28109 = cljs.core.chunk_first.call(null,seq__28093_28108__$1);
var G__28110 = cljs.core.chunk_rest.call(null,seq__28093_28108__$1);
var G__28111 = c__4550__auto___28109;
var G__28112 = cljs.core.count.call(null,c__4550__auto___28109);
var G__28113 = (0);
seq__28093_28098 = G__28110;
chunk__28094_28099 = G__28111;
count__28095_28100 = G__28112;
i__28096_28101 = G__28113;
continue;
} else {
var msg_28114 = cljs.core.first.call(null,seq__28093_28108__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_28114);


var G__28115 = cljs.core.next.call(null,seq__28093_28108__$1);
var G__28116 = null;
var G__28117 = (0);
var G__28118 = (0);
seq__28093_28098 = G__28115;
chunk__28094_28099 = G__28116;
count__28095_28100 = G__28117;
i__28096_28101 = G__28118;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28123 = arguments.length;
var i__4731__auto___28124 = (0);
while(true){
if((i__4731__auto___28124 < len__4730__auto___28123)){
args__4736__auto__.push((arguments[i__4731__auto___28124]));

var G__28125 = (i__4731__auto___28124 + (1));
i__4731__auto___28124 = G__28125;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28120){
var map__28121 = p__28120;
var map__28121__$1 = (((((!((map__28121 == null))))?(((((map__28121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28121):map__28121);
var opts = map__28121__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28119){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28119));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e28126){if((e28126 instanceof Error)){
var e = e28126;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e28126;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__28127){
var map__28128 = p__28127;
var map__28128__$1 = (((((!((map__28128 == null))))?(((((map__28128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28128):map__28128);
var msg_name = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1579862708352
