// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29107){
var map__29108 = p__29107;
var map__29108__$1 = (((((!((map__29108 == null))))?(((((map__29108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29108):map__29108);
var m = map__29108__$1;
var n = cljs.core.get.call(null,map__29108__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29108__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29110_29142 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29111_29143 = null;
var count__29112_29144 = (0);
var i__29113_29145 = (0);
while(true){
if((i__29113_29145 < count__29112_29144)){
var f_29146 = cljs.core._nth.call(null,chunk__29111_29143,i__29113_29145);
cljs.core.println.call(null,"  ",f_29146);


var G__29147 = seq__29110_29142;
var G__29148 = chunk__29111_29143;
var G__29149 = count__29112_29144;
var G__29150 = (i__29113_29145 + (1));
seq__29110_29142 = G__29147;
chunk__29111_29143 = G__29148;
count__29112_29144 = G__29149;
i__29113_29145 = G__29150;
continue;
} else {
var temp__5720__auto___29151 = cljs.core.seq.call(null,seq__29110_29142);
if(temp__5720__auto___29151){
var seq__29110_29152__$1 = temp__5720__auto___29151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29110_29152__$1)){
var c__4550__auto___29153 = cljs.core.chunk_first.call(null,seq__29110_29152__$1);
var G__29154 = cljs.core.chunk_rest.call(null,seq__29110_29152__$1);
var G__29155 = c__4550__auto___29153;
var G__29156 = cljs.core.count.call(null,c__4550__auto___29153);
var G__29157 = (0);
seq__29110_29142 = G__29154;
chunk__29111_29143 = G__29155;
count__29112_29144 = G__29156;
i__29113_29145 = G__29157;
continue;
} else {
var f_29158 = cljs.core.first.call(null,seq__29110_29152__$1);
cljs.core.println.call(null,"  ",f_29158);


var G__29159 = cljs.core.next.call(null,seq__29110_29152__$1);
var G__29160 = null;
var G__29161 = (0);
var G__29162 = (0);
seq__29110_29142 = G__29159;
chunk__29111_29143 = G__29160;
count__29112_29144 = G__29161;
i__29113_29145 = G__29162;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29163 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29163);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29163)))?cljs.core.second.call(null,arglists_29163):arglists_29163));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29114_29164 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29115_29165 = null;
var count__29116_29166 = (0);
var i__29117_29167 = (0);
while(true){
if((i__29117_29167 < count__29116_29166)){
var vec__29128_29168 = cljs.core._nth.call(null,chunk__29115_29165,i__29117_29167);
var name_29169 = cljs.core.nth.call(null,vec__29128_29168,(0),null);
var map__29131_29170 = cljs.core.nth.call(null,vec__29128_29168,(1),null);
var map__29131_29171__$1 = (((((!((map__29131_29170 == null))))?(((((map__29131_29170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29131_29170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29131_29170):map__29131_29170);
var doc_29172 = cljs.core.get.call(null,map__29131_29171__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29173 = cljs.core.get.call(null,map__29131_29171__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29169);

cljs.core.println.call(null," ",arglists_29173);

if(cljs.core.truth_(doc_29172)){
cljs.core.println.call(null," ",doc_29172);
} else {
}


var G__29174 = seq__29114_29164;
var G__29175 = chunk__29115_29165;
var G__29176 = count__29116_29166;
var G__29177 = (i__29117_29167 + (1));
seq__29114_29164 = G__29174;
chunk__29115_29165 = G__29175;
count__29116_29166 = G__29176;
i__29117_29167 = G__29177;
continue;
} else {
var temp__5720__auto___29178 = cljs.core.seq.call(null,seq__29114_29164);
if(temp__5720__auto___29178){
var seq__29114_29179__$1 = temp__5720__auto___29178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29114_29179__$1)){
var c__4550__auto___29180 = cljs.core.chunk_first.call(null,seq__29114_29179__$1);
var G__29181 = cljs.core.chunk_rest.call(null,seq__29114_29179__$1);
var G__29182 = c__4550__auto___29180;
var G__29183 = cljs.core.count.call(null,c__4550__auto___29180);
var G__29184 = (0);
seq__29114_29164 = G__29181;
chunk__29115_29165 = G__29182;
count__29116_29166 = G__29183;
i__29117_29167 = G__29184;
continue;
} else {
var vec__29133_29185 = cljs.core.first.call(null,seq__29114_29179__$1);
var name_29186 = cljs.core.nth.call(null,vec__29133_29185,(0),null);
var map__29136_29187 = cljs.core.nth.call(null,vec__29133_29185,(1),null);
var map__29136_29188__$1 = (((((!((map__29136_29187 == null))))?(((((map__29136_29187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29136_29187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29136_29187):map__29136_29187);
var doc_29189 = cljs.core.get.call(null,map__29136_29188__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29190 = cljs.core.get.call(null,map__29136_29188__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29186);

cljs.core.println.call(null," ",arglists_29190);

if(cljs.core.truth_(doc_29189)){
cljs.core.println.call(null," ",doc_29189);
} else {
}


var G__29191 = cljs.core.next.call(null,seq__29114_29179__$1);
var G__29192 = null;
var G__29193 = (0);
var G__29194 = (0);
seq__29114_29164 = G__29191;
chunk__29115_29165 = G__29192;
count__29116_29166 = G__29193;
i__29117_29167 = G__29194;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__29138 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29139 = null;
var count__29140 = (0);
var i__29141 = (0);
while(true){
if((i__29141 < count__29140)){
var role = cljs.core._nth.call(null,chunk__29139,i__29141);
var temp__5720__auto___29195__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29195__$1)){
var spec_29196 = temp__5720__auto___29195__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29196));
} else {
}


var G__29197 = seq__29138;
var G__29198 = chunk__29139;
var G__29199 = count__29140;
var G__29200 = (i__29141 + (1));
seq__29138 = G__29197;
chunk__29139 = G__29198;
count__29140 = G__29199;
i__29141 = G__29200;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__29138);
if(temp__5720__auto____$1){
var seq__29138__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29138__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29138__$1);
var G__29201 = cljs.core.chunk_rest.call(null,seq__29138__$1);
var G__29202 = c__4550__auto__;
var G__29203 = cljs.core.count.call(null,c__4550__auto__);
var G__29204 = (0);
seq__29138 = G__29201;
chunk__29139 = G__29202;
count__29140 = G__29203;
i__29141 = G__29204;
continue;
} else {
var role = cljs.core.first.call(null,seq__29138__$1);
var temp__5720__auto___29205__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29205__$2)){
var spec_29206 = temp__5720__auto___29205__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29206));
} else {
}


var G__29207 = cljs.core.next.call(null,seq__29138__$1);
var G__29208 = null;
var G__29209 = (0);
var G__29210 = (0);
seq__29138 = G__29207;
chunk__29139 = G__29208;
count__29140 = G__29209;
i__29141 = G__29210;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__29211 = cljs.core.conj.call(null,via,t);
var G__29212 = cljs.core.ex_cause.call(null,t);
via = G__29211;
t = G__29212;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__29215 = datafied_throwable;
var map__29215__$1 = (((((!((map__29215 == null))))?(((((map__29215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29215):map__29215);
var via = cljs.core.get.call(null,map__29215__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29215__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29215__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29216 = cljs.core.last.call(null,via);
var map__29216__$1 = (((((!((map__29216 == null))))?(((((map__29216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29216):map__29216);
var type = cljs.core.get.call(null,map__29216__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29216__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29216__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29217 = data;
var map__29217__$1 = (((((!((map__29217 == null))))?(((((map__29217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29217):map__29217);
var problems = cljs.core.get.call(null,map__29217__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29217__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29217__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29218 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29218__$1 = (((((!((map__29218 == null))))?(((((map__29218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29218):map__29218);
var top_data = map__29218__$1;
var source = cljs.core.get.call(null,map__29218__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29223 = phase;
var G__29223__$1 = (((G__29223 instanceof cljs.core.Keyword))?G__29223.fqn:null);
switch (G__29223__$1) {
case "read-source":
var map__29224 = data;
var map__29224__$1 = (((((!((map__29224 == null))))?(((((map__29224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29224):map__29224);
var line = cljs.core.get.call(null,map__29224__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29224__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29226 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29226__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29226,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29226);
var G__29226__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29226__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29226__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29226__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29226__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29227 = top_data;
var G__29227__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29227,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29227);
var G__29227__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29227__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29227__$1);
var G__29227__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29227__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29227__$2);
var G__29227__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29227__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29227__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29227__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29227__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29228 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29228,(0),null);
var method = cljs.core.nth.call(null,vec__29228,(1),null);
var file = cljs.core.nth.call(null,vec__29228,(2),null);
var line = cljs.core.nth.call(null,vec__29228,(3),null);
var G__29231 = top_data;
var G__29231__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29231,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29231);
var G__29231__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29231__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29231__$1);
var G__29231__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__29231__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29231__$2);
var G__29231__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29231__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29231__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29231__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29231__$4;
}

break;
case "execution":
var vec__29232 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29232,(0),null);
var method = cljs.core.nth.call(null,vec__29232,(1),null);
var file = cljs.core.nth.call(null,vec__29232,(2),null);
var line = cljs.core.nth.call(null,vec__29232,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__29232,source__$1,method,file,line,G__29223,G__29223__$1,map__29215,map__29215__$1,via,trace,phase,map__29216,map__29216__$1,type,message,data,map__29217,map__29217__$1,problems,fn,caller,map__29218,map__29218__$1,top_data,source){
return (function (p1__29214_SHARP_){
var or__4131__auto__ = (p1__29214_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29214_SHARP_);
}
});})(vec__29232,source__$1,method,file,line,G__29223,G__29223__$1,map__29215,map__29215__$1,via,trace,phase,map__29216,map__29216__$1,type,message,data,map__29217,map__29217__$1,problems,fn,caller,map__29218,map__29218__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__29235 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29235__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29235,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29235);
var G__29235__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29235__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29235__$1);
var G__29235__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__29235__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29235__$2);
var G__29235__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29235__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29235__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29235__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29235__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29223__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29239){
var map__29240 = p__29239;
var map__29240__$1 = (((((!((map__29240 == null))))?(((((map__29240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29240):map__29240);
var triage_data = map__29240__$1;
var phase = cljs.core.get.call(null,map__29240__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29240__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29240__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29240__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29240__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29240__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29240__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29240__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__29242 = phase;
var G__29242__$1 = (((G__29242 instanceof cljs.core.Keyword))?G__29242.fqn:null);
switch (G__29242__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29243_29252 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29244_29253 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29245_29254 = true;
var _STAR_print_fn_STAR__temp_val__29246_29255 = ((function (_STAR_print_newline_STAR__orig_val__29243_29252,_STAR_print_fn_STAR__orig_val__29244_29253,_STAR_print_newline_STAR__temp_val__29245_29254,sb__4661__auto__,G__29242,G__29242__$1,loc,class_name,simple_class,cause_type,format,map__29240,map__29240__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29243_29252,_STAR_print_fn_STAR__orig_val__29244_29253,_STAR_print_newline_STAR__temp_val__29245_29254,sb__4661__auto__,G__29242,G__29242__$1,loc,class_name,simple_class,cause_type,format,map__29240,map__29240__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29245_29254;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29246_29255;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29243_29252,_STAR_print_fn_STAR__orig_val__29244_29253,_STAR_print_newline_STAR__temp_val__29245_29254,_STAR_print_fn_STAR__temp_val__29246_29255,sb__4661__auto__,G__29242,G__29242__$1,loc,class_name,simple_class,cause_type,format,map__29240,map__29240__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29243_29252,_STAR_print_fn_STAR__orig_val__29244_29253,_STAR_print_newline_STAR__temp_val__29245_29254,_STAR_print_fn_STAR__temp_val__29246_29255,sb__4661__auto__,G__29242,G__29242__$1,loc,class_name,simple_class,cause_type,format,map__29240,map__29240__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29237_SHARP_){
return cljs.core.dissoc.call(null,p1__29237_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29243_29252,_STAR_print_fn_STAR__orig_val__29244_29253,_STAR_print_newline_STAR__temp_val__29245_29254,_STAR_print_fn_STAR__temp_val__29246_29255,sb__4661__auto__,G__29242,G__29242__$1,loc,class_name,simple_class,cause_type,format,map__29240,map__29240__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29243_29252,_STAR_print_fn_STAR__orig_val__29244_29253,_STAR_print_newline_STAR__temp_val__29245_29254,_STAR_print_fn_STAR__temp_val__29246_29255,sb__4661__auto__,G__29242,G__29242__$1,loc,class_name,simple_class,cause_type,format,map__29240,map__29240__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29244_29253;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29243_29252;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29247_29256 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29248_29257 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29249_29258 = true;
var _STAR_print_fn_STAR__temp_val__29250_29259 = ((function (_STAR_print_newline_STAR__orig_val__29247_29256,_STAR_print_fn_STAR__orig_val__29248_29257,_STAR_print_newline_STAR__temp_val__29249_29258,sb__4661__auto__,G__29242,G__29242__$1,loc,class_name,simple_class,cause_type,format,map__29240,map__29240__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29247_29256,_STAR_print_fn_STAR__orig_val__29248_29257,_STAR_print_newline_STAR__temp_val__29249_29258,sb__4661__auto__,G__29242,G__29242__$1,loc,class_name,simple_class,cause_type,format,map__29240,map__29240__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29249_29258;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29250_29259;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29247_29256,_STAR_print_fn_STAR__orig_val__29248_29257,_STAR_print_newline_STAR__temp_val__29249_29258,_STAR_print_fn_STAR__temp_val__29250_29259,sb__4661__auto__,G__29242,G__29242__$1,loc,class_name,simple_class,cause_type,format,map__29240,map__29240__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29247_29256,_STAR_print_fn_STAR__orig_val__29248_29257,_STAR_print_newline_STAR__temp_val__29249_29258,_STAR_print_fn_STAR__temp_val__29250_29259,sb__4661__auto__,G__29242,G__29242__$1,loc,class_name,simple_class,cause_type,format,map__29240,map__29240__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29238_SHARP_){
return cljs.core.dissoc.call(null,p1__29238_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29247_29256,_STAR_print_fn_STAR__orig_val__29248_29257,_STAR_print_newline_STAR__temp_val__29249_29258,_STAR_print_fn_STAR__temp_val__29250_29259,sb__4661__auto__,G__29242,G__29242__$1,loc,class_name,simple_class,cause_type,format,map__29240,map__29240__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29247_29256,_STAR_print_fn_STAR__orig_val__29248_29257,_STAR_print_newline_STAR__temp_val__29249_29258,_STAR_print_fn_STAR__temp_val__29250_29259,sb__4661__auto__,G__29242,G__29242__$1,loc,class_name,simple_class,cause_type,format,map__29240,map__29240__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29248_29257;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29247_29256;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29242__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1579862646264
