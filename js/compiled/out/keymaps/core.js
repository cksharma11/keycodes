// Compiled by ClojureScript 1.10.520 {}
goog.provide('keymaps.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof keymaps !== 'undefined') && (typeof keymaps.core !== 'undefined') && (typeof keymaps.core.current_key_code !== 'undefined')){
} else {
keymaps.core.current_key_code = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"which","which",-1255268941),"-1",new cljs.core.Keyword(null,"key","key",-1516042587),"",new cljs.core.Keyword(null,"location","location",1815599388),"",new cljs.core.Keyword(null,"meta-key","meta-key",280559106),""], null));
}
keymaps.core.keycode = (function keymaps$core$keycode(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"keycode"], null),new cljs.core.Keyword(null,"which","which",-1255268941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,keymaps.core.current_key_code))], null);
});
keymaps.core.event = (function keymaps$core$event(name,value){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"event-wrapper"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"event-name"], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"event-value"], null),value], null)], null);
});
keymaps.core.events = (function keymaps$core$events(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"events"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [keymaps.core.event,"KEYCODE",new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,keymaps.core.current_key_code))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [keymaps.core.event,"LOCATION",new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,keymaps.core.current_key_code))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [keymaps.core.event,"META",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta-key","meta-key",280559106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,keymaps.core.current_key_code)))], null)], null);
});
keymaps.core.reset_state = (function keymaps$core$reset_state(event){
return cljs.core.reset_BANG_.call(null,keymaps.core.current_key_code,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"which","which",-1255268941),event.which,new cljs.core.Keyword(null,"key","key",-1516042587),event.key,new cljs.core.Keyword(null,"location","location",1815599388),event.location,new cljs.core.Keyword(null,"meta-key","meta-key",280559106),event.metaKey], null));
});
keymaps.core.view = (function keymaps$core$view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"view",new cljs.core.Keyword(null,"tabindex","tabindex",338877510),(1),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),keymaps.core.reset_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keymaps.core.keycode], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keymaps.core.events], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keymaps.core.view], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1579869311739
