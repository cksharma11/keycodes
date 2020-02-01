// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26793_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26793_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26794 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26795 = null;
var count__26796 = (0);
var i__26797 = (0);
while(true){
if((i__26797 < count__26796)){
var n = cljs.core._nth.call(null,chunk__26795,i__26797);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26798 = seq__26794;
var G__26799 = chunk__26795;
var G__26800 = count__26796;
var G__26801 = (i__26797 + (1));
seq__26794 = G__26798;
chunk__26795 = G__26799;
count__26796 = G__26800;
i__26797 = G__26801;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26794);
if(temp__5720__auto__){
var seq__26794__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26794__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26794__$1);
var G__26802 = cljs.core.chunk_rest.call(null,seq__26794__$1);
var G__26803 = c__4550__auto__;
var G__26804 = cljs.core.count.call(null,c__4550__auto__);
var G__26805 = (0);
seq__26794 = G__26802;
chunk__26795 = G__26803;
count__26796 = G__26804;
i__26797 = G__26805;
continue;
} else {
var n = cljs.core.first.call(null,seq__26794__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26806 = cljs.core.next.call(null,seq__26794__$1);
var G__26807 = null;
var G__26808 = (0);
var G__26809 = (0);
seq__26794 = G__26806;
chunk__26795 = G__26807;
count__26796 = G__26808;
i__26797 = G__26809;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__26810){
var vec__26811 = p__26810;
var _ = cljs.core.nth.call(null,vec__26811,(0),null);
var v = cljs.core.nth.call(null,vec__26811,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__26814){
var vec__26815 = p__26814;
var k = cljs.core.nth.call(null,vec__26815,(0),null);
var v = cljs.core.nth.call(null,vec__26815,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26827_26835 = cljs.core.seq.call(null,deps);
var chunk__26828_26836 = null;
var count__26829_26837 = (0);
var i__26830_26838 = (0);
while(true){
if((i__26830_26838 < count__26829_26837)){
var dep_26839 = cljs.core._nth.call(null,chunk__26828_26836,i__26830_26838);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26839;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26839));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26839,(depth + (1)),state);
} else {
}


var G__26840 = seq__26827_26835;
var G__26841 = chunk__26828_26836;
var G__26842 = count__26829_26837;
var G__26843 = (i__26830_26838 + (1));
seq__26827_26835 = G__26840;
chunk__26828_26836 = G__26841;
count__26829_26837 = G__26842;
i__26830_26838 = G__26843;
continue;
} else {
var temp__5720__auto___26844 = cljs.core.seq.call(null,seq__26827_26835);
if(temp__5720__auto___26844){
var seq__26827_26845__$1 = temp__5720__auto___26844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26827_26845__$1)){
var c__4550__auto___26846 = cljs.core.chunk_first.call(null,seq__26827_26845__$1);
var G__26847 = cljs.core.chunk_rest.call(null,seq__26827_26845__$1);
var G__26848 = c__4550__auto___26846;
var G__26849 = cljs.core.count.call(null,c__4550__auto___26846);
var G__26850 = (0);
seq__26827_26835 = G__26847;
chunk__26828_26836 = G__26848;
count__26829_26837 = G__26849;
i__26830_26838 = G__26850;
continue;
} else {
var dep_26851 = cljs.core.first.call(null,seq__26827_26845__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26851;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26851));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26851,(depth + (1)),state);
} else {
}


var G__26852 = cljs.core.next.call(null,seq__26827_26845__$1);
var G__26853 = null;
var G__26854 = (0);
var G__26855 = (0);
seq__26827_26835 = G__26852;
chunk__26828_26836 = G__26853;
count__26829_26837 = G__26854;
i__26830_26838 = G__26855;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26831){
var vec__26832 = p__26831;
var seq__26833 = cljs.core.seq.call(null,vec__26832);
var first__26834 = cljs.core.first.call(null,seq__26833);
var seq__26833__$1 = cljs.core.next.call(null,seq__26833);
var x = first__26834;
var xs = seq__26833__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26832,seq__26833,first__26834,seq__26833__$1,x,xs,get_deps__$1){
return (function (p1__26818_SHARP_){
return clojure.set.difference.call(null,p1__26818_SHARP_,x);
});})(vec__26832,seq__26833,first__26834,seq__26833__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26856 = cljs.core.seq.call(null,provides);
var chunk__26857 = null;
var count__26858 = (0);
var i__26859 = (0);
while(true){
if((i__26859 < count__26858)){
var prov = cljs.core._nth.call(null,chunk__26857,i__26859);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26868_26876 = cljs.core.seq.call(null,requires);
var chunk__26869_26877 = null;
var count__26870_26878 = (0);
var i__26871_26879 = (0);
while(true){
if((i__26871_26879 < count__26870_26878)){
var req_26880 = cljs.core._nth.call(null,chunk__26869_26877,i__26871_26879);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26880,prov);


var G__26881 = seq__26868_26876;
var G__26882 = chunk__26869_26877;
var G__26883 = count__26870_26878;
var G__26884 = (i__26871_26879 + (1));
seq__26868_26876 = G__26881;
chunk__26869_26877 = G__26882;
count__26870_26878 = G__26883;
i__26871_26879 = G__26884;
continue;
} else {
var temp__5720__auto___26885 = cljs.core.seq.call(null,seq__26868_26876);
if(temp__5720__auto___26885){
var seq__26868_26886__$1 = temp__5720__auto___26885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26868_26886__$1)){
var c__4550__auto___26887 = cljs.core.chunk_first.call(null,seq__26868_26886__$1);
var G__26888 = cljs.core.chunk_rest.call(null,seq__26868_26886__$1);
var G__26889 = c__4550__auto___26887;
var G__26890 = cljs.core.count.call(null,c__4550__auto___26887);
var G__26891 = (0);
seq__26868_26876 = G__26888;
chunk__26869_26877 = G__26889;
count__26870_26878 = G__26890;
i__26871_26879 = G__26891;
continue;
} else {
var req_26892 = cljs.core.first.call(null,seq__26868_26886__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26892,prov);


var G__26893 = cljs.core.next.call(null,seq__26868_26886__$1);
var G__26894 = null;
var G__26895 = (0);
var G__26896 = (0);
seq__26868_26876 = G__26893;
chunk__26869_26877 = G__26894;
count__26870_26878 = G__26895;
i__26871_26879 = G__26896;
continue;
}
} else {
}
}
break;
}


var G__26897 = seq__26856;
var G__26898 = chunk__26857;
var G__26899 = count__26858;
var G__26900 = (i__26859 + (1));
seq__26856 = G__26897;
chunk__26857 = G__26898;
count__26858 = G__26899;
i__26859 = G__26900;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26856);
if(temp__5720__auto__){
var seq__26856__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26856__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26856__$1);
var G__26901 = cljs.core.chunk_rest.call(null,seq__26856__$1);
var G__26902 = c__4550__auto__;
var G__26903 = cljs.core.count.call(null,c__4550__auto__);
var G__26904 = (0);
seq__26856 = G__26901;
chunk__26857 = G__26902;
count__26858 = G__26903;
i__26859 = G__26904;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26856__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26872_26905 = cljs.core.seq.call(null,requires);
var chunk__26873_26906 = null;
var count__26874_26907 = (0);
var i__26875_26908 = (0);
while(true){
if((i__26875_26908 < count__26874_26907)){
var req_26909 = cljs.core._nth.call(null,chunk__26873_26906,i__26875_26908);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26909,prov);


var G__26910 = seq__26872_26905;
var G__26911 = chunk__26873_26906;
var G__26912 = count__26874_26907;
var G__26913 = (i__26875_26908 + (1));
seq__26872_26905 = G__26910;
chunk__26873_26906 = G__26911;
count__26874_26907 = G__26912;
i__26875_26908 = G__26913;
continue;
} else {
var temp__5720__auto___26914__$1 = cljs.core.seq.call(null,seq__26872_26905);
if(temp__5720__auto___26914__$1){
var seq__26872_26915__$1 = temp__5720__auto___26914__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26872_26915__$1)){
var c__4550__auto___26916 = cljs.core.chunk_first.call(null,seq__26872_26915__$1);
var G__26917 = cljs.core.chunk_rest.call(null,seq__26872_26915__$1);
var G__26918 = c__4550__auto___26916;
var G__26919 = cljs.core.count.call(null,c__4550__auto___26916);
var G__26920 = (0);
seq__26872_26905 = G__26917;
chunk__26873_26906 = G__26918;
count__26874_26907 = G__26919;
i__26875_26908 = G__26920;
continue;
} else {
var req_26921 = cljs.core.first.call(null,seq__26872_26915__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26921,prov);


var G__26922 = cljs.core.next.call(null,seq__26872_26915__$1);
var G__26923 = null;
var G__26924 = (0);
var G__26925 = (0);
seq__26872_26905 = G__26922;
chunk__26873_26906 = G__26923;
count__26874_26907 = G__26924;
i__26875_26908 = G__26925;
continue;
}
} else {
}
}
break;
}


var G__26926 = cljs.core.next.call(null,seq__26856__$1);
var G__26927 = null;
var G__26928 = (0);
var G__26929 = (0);
seq__26856 = G__26926;
chunk__26857 = G__26927;
count__26858 = G__26928;
i__26859 = G__26929;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26930_26934 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26931_26935 = null;
var count__26932_26936 = (0);
var i__26933_26937 = (0);
while(true){
if((i__26933_26937 < count__26932_26936)){
var ns_26938 = cljs.core._nth.call(null,chunk__26931_26935,i__26933_26937);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26938);


var G__26939 = seq__26930_26934;
var G__26940 = chunk__26931_26935;
var G__26941 = count__26932_26936;
var G__26942 = (i__26933_26937 + (1));
seq__26930_26934 = G__26939;
chunk__26931_26935 = G__26940;
count__26932_26936 = G__26941;
i__26933_26937 = G__26942;
continue;
} else {
var temp__5720__auto___26943 = cljs.core.seq.call(null,seq__26930_26934);
if(temp__5720__auto___26943){
var seq__26930_26944__$1 = temp__5720__auto___26943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26930_26944__$1)){
var c__4550__auto___26945 = cljs.core.chunk_first.call(null,seq__26930_26944__$1);
var G__26946 = cljs.core.chunk_rest.call(null,seq__26930_26944__$1);
var G__26947 = c__4550__auto___26945;
var G__26948 = cljs.core.count.call(null,c__4550__auto___26945);
var G__26949 = (0);
seq__26930_26934 = G__26946;
chunk__26931_26935 = G__26947;
count__26932_26936 = G__26948;
i__26933_26937 = G__26949;
continue;
} else {
var ns_26950 = cljs.core.first.call(null,seq__26930_26944__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26950);


var G__26951 = cljs.core.next.call(null,seq__26930_26944__$1);
var G__26952 = null;
var G__26953 = (0);
var G__26954 = (0);
seq__26930_26934 = G__26951;
chunk__26931_26935 = G__26952;
count__26932_26936 = G__26953;
i__26933_26937 = G__26954;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26955__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26956__i = 0, G__26956__a = new Array(arguments.length -  0);
while (G__26956__i < G__26956__a.length) {G__26956__a[G__26956__i] = arguments[G__26956__i + 0]; ++G__26956__i;}
  args = new cljs.core.IndexedSeq(G__26956__a,0,null);
} 
return G__26955__delegate.call(this,args);};
G__26955.cljs$lang$maxFixedArity = 0;
G__26955.cljs$lang$applyTo = (function (arglist__26957){
var args = cljs.core.seq(arglist__26957);
return G__26955__delegate(args);
});
G__26955.cljs$core$IFn$_invoke$arity$variadic = G__26955__delegate;
return G__26955;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__26958_SHARP_,p2__26959_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26958_SHARP_)),p2__26959_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__26960_SHARP_,p2__26961_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26960_SHARP_),p2__26961_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26962 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26962.addCallback(((function (G__26962){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__26962))
);

G__26962.addErrback(((function (G__26962){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__26962))
);

return G__26962;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26963){if((e26963 instanceof Error)){
var e = e26963;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26963;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26964){if((e26964 instanceof Error)){
var e = e26964;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26964;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26965 = cljs.core._EQ_;
var expr__26966 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26966))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26966))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26965.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26966))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26965,expr__26966){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26965,expr__26966))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26968,callback){
var map__26969 = p__26968;
var map__26969__$1 = (((((!((map__26969 == null))))?(((((map__26969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26969):map__26969);
var file_msg = map__26969__$1;
var request_url = cljs.core.get.call(null,map__26969__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26969,map__26969__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26969,map__26969__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24678__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto__){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto__){
return (function (state_27007){
var state_val_27008 = (state_27007[(1)]);
if((state_val_27008 === (7))){
var inst_27003 = (state_27007[(2)]);
var state_27007__$1 = state_27007;
var statearr_27009_27035 = state_27007__$1;
(statearr_27009_27035[(2)] = inst_27003);

(statearr_27009_27035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (1))){
var state_27007__$1 = state_27007;
var statearr_27010_27036 = state_27007__$1;
(statearr_27010_27036[(2)] = null);

(statearr_27010_27036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (4))){
var inst_26973 = (state_27007[(7)]);
var inst_26973__$1 = (state_27007[(2)]);
var state_27007__$1 = (function (){var statearr_27011 = state_27007;
(statearr_27011[(7)] = inst_26973__$1);

return statearr_27011;
})();
if(cljs.core.truth_(inst_26973__$1)){
var statearr_27012_27037 = state_27007__$1;
(statearr_27012_27037[(1)] = (5));

} else {
var statearr_27013_27038 = state_27007__$1;
(statearr_27013_27038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (15))){
var inst_26988 = (state_27007[(8)]);
var inst_26986 = (state_27007[(9)]);
var inst_26990 = inst_26988.call(null,inst_26986);
var state_27007__$1 = state_27007;
var statearr_27014_27039 = state_27007__$1;
(statearr_27014_27039[(2)] = inst_26990);

(statearr_27014_27039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (13))){
var inst_26997 = (state_27007[(2)]);
var state_27007__$1 = state_27007;
var statearr_27015_27040 = state_27007__$1;
(statearr_27015_27040[(2)] = inst_26997);

(statearr_27015_27040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (6))){
var state_27007__$1 = state_27007;
var statearr_27016_27041 = state_27007__$1;
(statearr_27016_27041[(2)] = null);

(statearr_27016_27041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (17))){
var inst_26994 = (state_27007[(2)]);
var state_27007__$1 = state_27007;
var statearr_27017_27042 = state_27007__$1;
(statearr_27017_27042[(2)] = inst_26994);

(statearr_27017_27042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (3))){
var inst_27005 = (state_27007[(2)]);
var state_27007__$1 = state_27007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27007__$1,inst_27005);
} else {
if((state_val_27008 === (12))){
var state_27007__$1 = state_27007;
var statearr_27018_27043 = state_27007__$1;
(statearr_27018_27043[(2)] = null);

(statearr_27018_27043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (2))){
var state_27007__$1 = state_27007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27007__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27008 === (11))){
var inst_26978 = (state_27007[(10)]);
var inst_26984 = figwheel.client.file_reloading.blocking_load.call(null,inst_26978);
var state_27007__$1 = state_27007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27007__$1,(14),inst_26984);
} else {
if((state_val_27008 === (9))){
var inst_26978 = (state_27007[(10)]);
var state_27007__$1 = state_27007;
if(cljs.core.truth_(inst_26978)){
var statearr_27019_27044 = state_27007__$1;
(statearr_27019_27044[(1)] = (11));

} else {
var statearr_27020_27045 = state_27007__$1;
(statearr_27020_27045[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (5))){
var inst_26979 = (state_27007[(11)]);
var inst_26973 = (state_27007[(7)]);
var inst_26978 = cljs.core.nth.call(null,inst_26973,(0),null);
var inst_26979__$1 = cljs.core.nth.call(null,inst_26973,(1),null);
var state_27007__$1 = (function (){var statearr_27021 = state_27007;
(statearr_27021[(11)] = inst_26979__$1);

(statearr_27021[(10)] = inst_26978);

return statearr_27021;
})();
if(cljs.core.truth_(inst_26979__$1)){
var statearr_27022_27046 = state_27007__$1;
(statearr_27022_27046[(1)] = (8));

} else {
var statearr_27023_27047 = state_27007__$1;
(statearr_27023_27047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (14))){
var inst_26988 = (state_27007[(8)]);
var inst_26978 = (state_27007[(10)]);
var inst_26986 = (state_27007[(2)]);
var inst_26987 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26988__$1 = cljs.core.get.call(null,inst_26987,inst_26978);
var state_27007__$1 = (function (){var statearr_27024 = state_27007;
(statearr_27024[(8)] = inst_26988__$1);

(statearr_27024[(9)] = inst_26986);

return statearr_27024;
})();
if(cljs.core.truth_(inst_26988__$1)){
var statearr_27025_27048 = state_27007__$1;
(statearr_27025_27048[(1)] = (15));

} else {
var statearr_27026_27049 = state_27007__$1;
(statearr_27026_27049[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (16))){
var inst_26986 = (state_27007[(9)]);
var inst_26992 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26986);
var state_27007__$1 = state_27007;
var statearr_27027_27050 = state_27007__$1;
(statearr_27027_27050[(2)] = inst_26992);

(statearr_27027_27050[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (10))){
var inst_26999 = (state_27007[(2)]);
var state_27007__$1 = (function (){var statearr_27028 = state_27007;
(statearr_27028[(12)] = inst_26999);

return statearr_27028;
})();
var statearr_27029_27051 = state_27007__$1;
(statearr_27029_27051[(2)] = null);

(statearr_27029_27051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (8))){
var inst_26979 = (state_27007[(11)]);
var inst_26981 = eval(inst_26979);
var state_27007__$1 = state_27007;
var statearr_27030_27052 = state_27007__$1;
(statearr_27030_27052[(2)] = inst_26981);

(statearr_27030_27052[(1)] = (10));


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
});})(c__24678__auto__))
;
return ((function (switch__24583__auto__,c__24678__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24584__auto__ = null;
var figwheel$client$file_reloading$state_machine__24584__auto____0 = (function (){
var statearr_27031 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27031[(0)] = figwheel$client$file_reloading$state_machine__24584__auto__);

(statearr_27031[(1)] = (1));

return statearr_27031;
});
var figwheel$client$file_reloading$state_machine__24584__auto____1 = (function (state_27007){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_27007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e27032){if((e27032 instanceof Object)){
var ex__24587__auto__ = e27032;
var statearr_27033_27053 = state_27007;
(statearr_27033_27053[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27054 = state_27007;
state_27007 = G__27054;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24584__auto__ = function(state_27007){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24584__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24584__auto____1.call(this,state_27007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24584__auto____0;
figwheel$client$file_reloading$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24584__auto____1;
return figwheel$client$file_reloading$state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto__))
})();
var state__24680__auto__ = (function (){var statearr_27034 = f__24679__auto__.call(null);
(statearr_27034[(6)] = c__24678__auto__);

return statearr_27034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto__))
);

return c__24678__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27056 = arguments.length;
switch (G__27056) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27058,callback){
var map__27059 = p__27058;
var map__27059__$1 = (((((!((map__27059 == null))))?(((((map__27059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27059):map__27059);
var file_msg = map__27059__$1;
var namespace = cljs.core.get.call(null,map__27059__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27059,map__27059__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27059,map__27059__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27061){
var map__27062 = p__27061;
var map__27062__$1 = (((((!((map__27062 == null))))?(((((map__27062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27062):map__27062);
var file_msg = map__27062__$1;
var namespace = cljs.core.get.call(null,map__27062__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27064){
var map__27065 = p__27064;
var map__27065__$1 = (((((!((map__27065 == null))))?(((((map__27065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27065):map__27065);
var file_msg = map__27065__$1;
var namespace = cljs.core.get.call(null,map__27065__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27067,callback){
var map__27068 = p__27067;
var map__27068__$1 = (((((!((map__27068 == null))))?(((((map__27068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27068):map__27068);
var file_msg = map__27068__$1;
var request_url = cljs.core.get.call(null,map__27068__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27068__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24678__auto___27118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___27118,out){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___27118,out){
return (function (state_27103){
var state_val_27104 = (state_27103[(1)]);
if((state_val_27104 === (1))){
var inst_27077 = cljs.core.seq.call(null,files);
var inst_27078 = cljs.core.first.call(null,inst_27077);
var inst_27079 = cljs.core.next.call(null,inst_27077);
var inst_27080 = files;
var state_27103__$1 = (function (){var statearr_27105 = state_27103;
(statearr_27105[(7)] = inst_27080);

(statearr_27105[(8)] = inst_27079);

(statearr_27105[(9)] = inst_27078);

return statearr_27105;
})();
var statearr_27106_27119 = state_27103__$1;
(statearr_27106_27119[(2)] = null);

(statearr_27106_27119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (2))){
var inst_27086 = (state_27103[(10)]);
var inst_27080 = (state_27103[(7)]);
var inst_27085 = cljs.core.seq.call(null,inst_27080);
var inst_27086__$1 = cljs.core.first.call(null,inst_27085);
var inst_27087 = cljs.core.next.call(null,inst_27085);
var inst_27088 = (inst_27086__$1 == null);
var inst_27089 = cljs.core.not.call(null,inst_27088);
var state_27103__$1 = (function (){var statearr_27107 = state_27103;
(statearr_27107[(11)] = inst_27087);

(statearr_27107[(10)] = inst_27086__$1);

return statearr_27107;
})();
if(inst_27089){
var statearr_27108_27120 = state_27103__$1;
(statearr_27108_27120[(1)] = (4));

} else {
var statearr_27109_27121 = state_27103__$1;
(statearr_27109_27121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (3))){
var inst_27101 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27103__$1,inst_27101);
} else {
if((state_val_27104 === (4))){
var inst_27086 = (state_27103[(10)]);
var inst_27091 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27086);
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27103__$1,(7),inst_27091);
} else {
if((state_val_27104 === (5))){
var inst_27097 = cljs.core.async.close_BANG_.call(null,out);
var state_27103__$1 = state_27103;
var statearr_27110_27122 = state_27103__$1;
(statearr_27110_27122[(2)] = inst_27097);

(statearr_27110_27122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (6))){
var inst_27099 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27111_27123 = state_27103__$1;
(statearr_27111_27123[(2)] = inst_27099);

(statearr_27111_27123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (7))){
var inst_27087 = (state_27103[(11)]);
var inst_27093 = (state_27103[(2)]);
var inst_27094 = cljs.core.async.put_BANG_.call(null,out,inst_27093);
var inst_27080 = inst_27087;
var state_27103__$1 = (function (){var statearr_27112 = state_27103;
(statearr_27112[(12)] = inst_27094);

(statearr_27112[(7)] = inst_27080);

return statearr_27112;
})();
var statearr_27113_27124 = state_27103__$1;
(statearr_27113_27124[(2)] = null);

(statearr_27113_27124[(1)] = (2));


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
});})(c__24678__auto___27118,out))
;
return ((function (switch__24583__auto__,c__24678__auto___27118,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24584__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24584__auto____0 = (function (){
var statearr_27114 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27114[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24584__auto__);

(statearr_27114[(1)] = (1));

return statearr_27114;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24584__auto____1 = (function (state_27103){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_27103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e27115){if((e27115 instanceof Object)){
var ex__24587__auto__ = e27115;
var statearr_27116_27125 = state_27103;
(statearr_27116_27125[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27126 = state_27103;
state_27103 = G__27126;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24584__auto__ = function(state_27103){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24584__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24584__auto____1.call(this,state_27103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24584__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24584__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___27118,out))
})();
var state__24680__auto__ = (function (){var statearr_27117 = f__24679__auto__.call(null);
(statearr_27117[(6)] = c__24678__auto___27118);

return statearr_27117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___27118,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27127,opts){
var map__27128 = p__27127;
var map__27128__$1 = (((((!((map__27128 == null))))?(((((map__27128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27128):map__27128);
var eval_body = cljs.core.get.call(null,map__27128__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27128__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27130){var e = e27130;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27131_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27131_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27132){
var vec__27133 = p__27132;
var k = cljs.core.nth.call(null,vec__27133,(0),null);
var v = cljs.core.nth.call(null,vec__27133,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27136){
var vec__27137 = p__27136;
var k = cljs.core.nth.call(null,vec__27137,(0),null);
var v = cljs.core.nth.call(null,vec__27137,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27143,p__27144){
var map__27145 = p__27143;
var map__27145__$1 = (((((!((map__27145 == null))))?(((((map__27145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27145):map__27145);
var opts = map__27145__$1;
var before_jsload = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27146 = p__27144;
var map__27146__$1 = (((((!((map__27146 == null))))?(((((map__27146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27146):map__27146);
var msg = map__27146__$1;
var files = cljs.core.get.call(null,map__27146__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27146__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27146__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24678__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27300){
var state_val_27301 = (state_27300[(1)]);
if((state_val_27301 === (7))){
var inst_27160 = (state_27300[(7)]);
var inst_27162 = (state_27300[(8)]);
var inst_27163 = (state_27300[(9)]);
var inst_27161 = (state_27300[(10)]);
var inst_27168 = cljs.core._nth.call(null,inst_27161,inst_27163);
var inst_27169 = figwheel.client.file_reloading.eval_body.call(null,inst_27168,opts);
var inst_27170 = (inst_27163 + (1));
var tmp27302 = inst_27160;
var tmp27303 = inst_27162;
var tmp27304 = inst_27161;
var inst_27160__$1 = tmp27302;
var inst_27161__$1 = tmp27304;
var inst_27162__$1 = tmp27303;
var inst_27163__$1 = inst_27170;
var state_27300__$1 = (function (){var statearr_27305 = state_27300;
(statearr_27305[(7)] = inst_27160__$1);

(statearr_27305[(8)] = inst_27162__$1);

(statearr_27305[(9)] = inst_27163__$1);

(statearr_27305[(11)] = inst_27169);

(statearr_27305[(10)] = inst_27161__$1);

return statearr_27305;
})();
var statearr_27306_27389 = state_27300__$1;
(statearr_27306_27389[(2)] = null);

(statearr_27306_27389[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (20))){
var inst_27203 = (state_27300[(12)]);
var inst_27211 = figwheel.client.file_reloading.sort_files.call(null,inst_27203);
var state_27300__$1 = state_27300;
var statearr_27307_27390 = state_27300__$1;
(statearr_27307_27390[(2)] = inst_27211);

(statearr_27307_27390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (27))){
var state_27300__$1 = state_27300;
var statearr_27308_27391 = state_27300__$1;
(statearr_27308_27391[(2)] = null);

(statearr_27308_27391[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (1))){
var inst_27152 = (state_27300[(13)]);
var inst_27149 = before_jsload.call(null,files);
var inst_27150 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27151 = (function (){return ((function (inst_27152,inst_27149,inst_27150,state_val_27301,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27140_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27140_SHARP_);
});
;})(inst_27152,inst_27149,inst_27150,state_val_27301,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27152__$1 = cljs.core.filter.call(null,inst_27151,files);
var inst_27153 = cljs.core.not_empty.call(null,inst_27152__$1);
var state_27300__$1 = (function (){var statearr_27309 = state_27300;
(statearr_27309[(14)] = inst_27149);

(statearr_27309[(15)] = inst_27150);

(statearr_27309[(13)] = inst_27152__$1);

return statearr_27309;
})();
if(cljs.core.truth_(inst_27153)){
var statearr_27310_27392 = state_27300__$1;
(statearr_27310_27392[(1)] = (2));

} else {
var statearr_27311_27393 = state_27300__$1;
(statearr_27311_27393[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (24))){
var state_27300__$1 = state_27300;
var statearr_27312_27394 = state_27300__$1;
(statearr_27312_27394[(2)] = null);

(statearr_27312_27394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (39))){
var inst_27253 = (state_27300[(16)]);
var state_27300__$1 = state_27300;
var statearr_27313_27395 = state_27300__$1;
(statearr_27313_27395[(2)] = inst_27253);

(statearr_27313_27395[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (46))){
var inst_27295 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27314_27396 = state_27300__$1;
(statearr_27314_27396[(2)] = inst_27295);

(statearr_27314_27396[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (4))){
var inst_27197 = (state_27300[(2)]);
var inst_27198 = cljs.core.List.EMPTY;
var inst_27199 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27198);
var inst_27200 = (function (){return ((function (inst_27197,inst_27198,inst_27199,state_val_27301,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27141_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27141_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27141_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27141_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27197,inst_27198,inst_27199,state_val_27301,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27201 = cljs.core.filter.call(null,inst_27200,files);
var inst_27202 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27203 = cljs.core.concat.call(null,inst_27201,inst_27202);
var state_27300__$1 = (function (){var statearr_27315 = state_27300;
(statearr_27315[(17)] = inst_27197);

(statearr_27315[(18)] = inst_27199);

(statearr_27315[(12)] = inst_27203);

return statearr_27315;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27316_27397 = state_27300__$1;
(statearr_27316_27397[(1)] = (16));

} else {
var statearr_27317_27398 = state_27300__$1;
(statearr_27317_27398[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (15))){
var inst_27187 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27318_27399 = state_27300__$1;
(statearr_27318_27399[(2)] = inst_27187);

(statearr_27318_27399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (21))){
var inst_27213 = (state_27300[(19)]);
var inst_27213__$1 = (state_27300[(2)]);
var inst_27214 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27213__$1);
var state_27300__$1 = (function (){var statearr_27319 = state_27300;
(statearr_27319[(19)] = inst_27213__$1);

return statearr_27319;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27300__$1,(22),inst_27214);
} else {
if((state_val_27301 === (31))){
var inst_27298 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27300__$1,inst_27298);
} else {
if((state_val_27301 === (32))){
var inst_27253 = (state_27300[(16)]);
var inst_27258 = inst_27253.cljs$lang$protocol_mask$partition0$;
var inst_27259 = (inst_27258 & (64));
var inst_27260 = inst_27253.cljs$core$ISeq$;
var inst_27261 = (cljs.core.PROTOCOL_SENTINEL === inst_27260);
var inst_27262 = ((inst_27259) || (inst_27261));
var state_27300__$1 = state_27300;
if(cljs.core.truth_(inst_27262)){
var statearr_27320_27400 = state_27300__$1;
(statearr_27320_27400[(1)] = (35));

} else {
var statearr_27321_27401 = state_27300__$1;
(statearr_27321_27401[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (40))){
var inst_27275 = (state_27300[(20)]);
var inst_27274 = (state_27300[(2)]);
var inst_27275__$1 = cljs.core.get.call(null,inst_27274,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27276 = cljs.core.get.call(null,inst_27274,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27277 = cljs.core.not_empty.call(null,inst_27275__$1);
var state_27300__$1 = (function (){var statearr_27322 = state_27300;
(statearr_27322[(20)] = inst_27275__$1);

(statearr_27322[(21)] = inst_27276);

return statearr_27322;
})();
if(cljs.core.truth_(inst_27277)){
var statearr_27323_27402 = state_27300__$1;
(statearr_27323_27402[(1)] = (41));

} else {
var statearr_27324_27403 = state_27300__$1;
(statearr_27324_27403[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (33))){
var state_27300__$1 = state_27300;
var statearr_27325_27404 = state_27300__$1;
(statearr_27325_27404[(2)] = false);

(statearr_27325_27404[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (13))){
var inst_27173 = (state_27300[(22)]);
var inst_27177 = cljs.core.chunk_first.call(null,inst_27173);
var inst_27178 = cljs.core.chunk_rest.call(null,inst_27173);
var inst_27179 = cljs.core.count.call(null,inst_27177);
var inst_27160 = inst_27178;
var inst_27161 = inst_27177;
var inst_27162 = inst_27179;
var inst_27163 = (0);
var state_27300__$1 = (function (){var statearr_27326 = state_27300;
(statearr_27326[(7)] = inst_27160);

(statearr_27326[(8)] = inst_27162);

(statearr_27326[(9)] = inst_27163);

(statearr_27326[(10)] = inst_27161);

return statearr_27326;
})();
var statearr_27327_27405 = state_27300__$1;
(statearr_27327_27405[(2)] = null);

(statearr_27327_27405[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (22))){
var inst_27217 = (state_27300[(23)]);
var inst_27221 = (state_27300[(24)]);
var inst_27213 = (state_27300[(19)]);
var inst_27216 = (state_27300[(25)]);
var inst_27216__$1 = (state_27300[(2)]);
var inst_27217__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27216__$1);
var inst_27218 = (function (){var all_files = inst_27213;
var res_SINGLEQUOTE_ = inst_27216__$1;
var res = inst_27217__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27217,inst_27221,inst_27213,inst_27216,inst_27216__$1,inst_27217__$1,state_val_27301,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27142_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27142_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27217,inst_27221,inst_27213,inst_27216,inst_27216__$1,inst_27217__$1,state_val_27301,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27219 = cljs.core.filter.call(null,inst_27218,inst_27216__$1);
var inst_27220 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27221__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27220);
var inst_27222 = cljs.core.not_empty.call(null,inst_27221__$1);
var state_27300__$1 = (function (){var statearr_27328 = state_27300;
(statearr_27328[(23)] = inst_27217__$1);

(statearr_27328[(24)] = inst_27221__$1);

(statearr_27328[(25)] = inst_27216__$1);

(statearr_27328[(26)] = inst_27219);

return statearr_27328;
})();
if(cljs.core.truth_(inst_27222)){
var statearr_27329_27406 = state_27300__$1;
(statearr_27329_27406[(1)] = (23));

} else {
var statearr_27330_27407 = state_27300__$1;
(statearr_27330_27407[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (36))){
var state_27300__$1 = state_27300;
var statearr_27331_27408 = state_27300__$1;
(statearr_27331_27408[(2)] = false);

(statearr_27331_27408[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (41))){
var inst_27275 = (state_27300[(20)]);
var inst_27279 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27280 = cljs.core.map.call(null,inst_27279,inst_27275);
var inst_27281 = cljs.core.pr_str.call(null,inst_27280);
var inst_27282 = ["figwheel-no-load meta-data: ",inst_27281].join('');
var inst_27283 = figwheel.client.utils.log.call(null,inst_27282);
var state_27300__$1 = state_27300;
var statearr_27332_27409 = state_27300__$1;
(statearr_27332_27409[(2)] = inst_27283);

(statearr_27332_27409[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (43))){
var inst_27276 = (state_27300[(21)]);
var inst_27286 = (state_27300[(2)]);
var inst_27287 = cljs.core.not_empty.call(null,inst_27276);
var state_27300__$1 = (function (){var statearr_27333 = state_27300;
(statearr_27333[(27)] = inst_27286);

return statearr_27333;
})();
if(cljs.core.truth_(inst_27287)){
var statearr_27334_27410 = state_27300__$1;
(statearr_27334_27410[(1)] = (44));

} else {
var statearr_27335_27411 = state_27300__$1;
(statearr_27335_27411[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (29))){
var inst_27253 = (state_27300[(16)]);
var inst_27217 = (state_27300[(23)]);
var inst_27221 = (state_27300[(24)]);
var inst_27213 = (state_27300[(19)]);
var inst_27216 = (state_27300[(25)]);
var inst_27219 = (state_27300[(26)]);
var inst_27249 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27252 = (function (){var all_files = inst_27213;
var res_SINGLEQUOTE_ = inst_27216;
var res = inst_27217;
var files_not_loaded = inst_27219;
var dependencies_that_loaded = inst_27221;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27253,inst_27217,inst_27221,inst_27213,inst_27216,inst_27219,inst_27249,state_val_27301,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27251){
var map__27336 = p__27251;
var map__27336__$1 = (((((!((map__27336 == null))))?(((((map__27336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27336):map__27336);
var namespace = cljs.core.get.call(null,map__27336__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27253,inst_27217,inst_27221,inst_27213,inst_27216,inst_27219,inst_27249,state_val_27301,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27253__$1 = cljs.core.group_by.call(null,inst_27252,inst_27219);
var inst_27255 = (inst_27253__$1 == null);
var inst_27256 = cljs.core.not.call(null,inst_27255);
var state_27300__$1 = (function (){var statearr_27338 = state_27300;
(statearr_27338[(16)] = inst_27253__$1);

(statearr_27338[(28)] = inst_27249);

return statearr_27338;
})();
if(inst_27256){
var statearr_27339_27412 = state_27300__$1;
(statearr_27339_27412[(1)] = (32));

} else {
var statearr_27340_27413 = state_27300__$1;
(statearr_27340_27413[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (44))){
var inst_27276 = (state_27300[(21)]);
var inst_27289 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27276);
var inst_27290 = cljs.core.pr_str.call(null,inst_27289);
var inst_27291 = ["not required: ",inst_27290].join('');
var inst_27292 = figwheel.client.utils.log.call(null,inst_27291);
var state_27300__$1 = state_27300;
var statearr_27341_27414 = state_27300__$1;
(statearr_27341_27414[(2)] = inst_27292);

(statearr_27341_27414[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (6))){
var inst_27194 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27342_27415 = state_27300__$1;
(statearr_27342_27415[(2)] = inst_27194);

(statearr_27342_27415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (28))){
var inst_27219 = (state_27300[(26)]);
var inst_27246 = (state_27300[(2)]);
var inst_27247 = cljs.core.not_empty.call(null,inst_27219);
var state_27300__$1 = (function (){var statearr_27343 = state_27300;
(statearr_27343[(29)] = inst_27246);

return statearr_27343;
})();
if(cljs.core.truth_(inst_27247)){
var statearr_27344_27416 = state_27300__$1;
(statearr_27344_27416[(1)] = (29));

} else {
var statearr_27345_27417 = state_27300__$1;
(statearr_27345_27417[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (25))){
var inst_27217 = (state_27300[(23)]);
var inst_27233 = (state_27300[(2)]);
var inst_27234 = cljs.core.not_empty.call(null,inst_27217);
var state_27300__$1 = (function (){var statearr_27346 = state_27300;
(statearr_27346[(30)] = inst_27233);

return statearr_27346;
})();
if(cljs.core.truth_(inst_27234)){
var statearr_27347_27418 = state_27300__$1;
(statearr_27347_27418[(1)] = (26));

} else {
var statearr_27348_27419 = state_27300__$1;
(statearr_27348_27419[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (34))){
var inst_27269 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
if(cljs.core.truth_(inst_27269)){
var statearr_27349_27420 = state_27300__$1;
(statearr_27349_27420[(1)] = (38));

} else {
var statearr_27350_27421 = state_27300__$1;
(statearr_27350_27421[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (17))){
var state_27300__$1 = state_27300;
var statearr_27351_27422 = state_27300__$1;
(statearr_27351_27422[(2)] = recompile_dependents);

(statearr_27351_27422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (3))){
var state_27300__$1 = state_27300;
var statearr_27352_27423 = state_27300__$1;
(statearr_27352_27423[(2)] = null);

(statearr_27352_27423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (12))){
var inst_27190 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27353_27424 = state_27300__$1;
(statearr_27353_27424[(2)] = inst_27190);

(statearr_27353_27424[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (2))){
var inst_27152 = (state_27300[(13)]);
var inst_27159 = cljs.core.seq.call(null,inst_27152);
var inst_27160 = inst_27159;
var inst_27161 = null;
var inst_27162 = (0);
var inst_27163 = (0);
var state_27300__$1 = (function (){var statearr_27354 = state_27300;
(statearr_27354[(7)] = inst_27160);

(statearr_27354[(8)] = inst_27162);

(statearr_27354[(9)] = inst_27163);

(statearr_27354[(10)] = inst_27161);

return statearr_27354;
})();
var statearr_27355_27425 = state_27300__$1;
(statearr_27355_27425[(2)] = null);

(statearr_27355_27425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (23))){
var inst_27217 = (state_27300[(23)]);
var inst_27221 = (state_27300[(24)]);
var inst_27213 = (state_27300[(19)]);
var inst_27216 = (state_27300[(25)]);
var inst_27219 = (state_27300[(26)]);
var inst_27224 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27226 = (function (){var all_files = inst_27213;
var res_SINGLEQUOTE_ = inst_27216;
var res = inst_27217;
var files_not_loaded = inst_27219;
var dependencies_that_loaded = inst_27221;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27217,inst_27221,inst_27213,inst_27216,inst_27219,inst_27224,state_val_27301,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27225){
var map__27356 = p__27225;
var map__27356__$1 = (((((!((map__27356 == null))))?(((((map__27356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27356):map__27356);
var request_url = cljs.core.get.call(null,map__27356__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27217,inst_27221,inst_27213,inst_27216,inst_27219,inst_27224,state_val_27301,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27227 = cljs.core.reverse.call(null,inst_27221);
var inst_27228 = cljs.core.map.call(null,inst_27226,inst_27227);
var inst_27229 = cljs.core.pr_str.call(null,inst_27228);
var inst_27230 = figwheel.client.utils.log.call(null,inst_27229);
var state_27300__$1 = (function (){var statearr_27358 = state_27300;
(statearr_27358[(31)] = inst_27224);

return statearr_27358;
})();
var statearr_27359_27426 = state_27300__$1;
(statearr_27359_27426[(2)] = inst_27230);

(statearr_27359_27426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (35))){
var state_27300__$1 = state_27300;
var statearr_27360_27427 = state_27300__$1;
(statearr_27360_27427[(2)] = true);

(statearr_27360_27427[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (19))){
var inst_27203 = (state_27300[(12)]);
var inst_27209 = figwheel.client.file_reloading.expand_files.call(null,inst_27203);
var state_27300__$1 = state_27300;
var statearr_27361_27428 = state_27300__$1;
(statearr_27361_27428[(2)] = inst_27209);

(statearr_27361_27428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (11))){
var state_27300__$1 = state_27300;
var statearr_27362_27429 = state_27300__$1;
(statearr_27362_27429[(2)] = null);

(statearr_27362_27429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (9))){
var inst_27192 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27363_27430 = state_27300__$1;
(statearr_27363_27430[(2)] = inst_27192);

(statearr_27363_27430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (5))){
var inst_27162 = (state_27300[(8)]);
var inst_27163 = (state_27300[(9)]);
var inst_27165 = (inst_27163 < inst_27162);
var inst_27166 = inst_27165;
var state_27300__$1 = state_27300;
if(cljs.core.truth_(inst_27166)){
var statearr_27364_27431 = state_27300__$1;
(statearr_27364_27431[(1)] = (7));

} else {
var statearr_27365_27432 = state_27300__$1;
(statearr_27365_27432[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (14))){
var inst_27173 = (state_27300[(22)]);
var inst_27182 = cljs.core.first.call(null,inst_27173);
var inst_27183 = figwheel.client.file_reloading.eval_body.call(null,inst_27182,opts);
var inst_27184 = cljs.core.next.call(null,inst_27173);
var inst_27160 = inst_27184;
var inst_27161 = null;
var inst_27162 = (0);
var inst_27163 = (0);
var state_27300__$1 = (function (){var statearr_27366 = state_27300;
(statearr_27366[(7)] = inst_27160);

(statearr_27366[(8)] = inst_27162);

(statearr_27366[(9)] = inst_27163);

(statearr_27366[(10)] = inst_27161);

(statearr_27366[(32)] = inst_27183);

return statearr_27366;
})();
var statearr_27367_27433 = state_27300__$1;
(statearr_27367_27433[(2)] = null);

(statearr_27367_27433[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (45))){
var state_27300__$1 = state_27300;
var statearr_27368_27434 = state_27300__$1;
(statearr_27368_27434[(2)] = null);

(statearr_27368_27434[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (26))){
var inst_27217 = (state_27300[(23)]);
var inst_27221 = (state_27300[(24)]);
var inst_27213 = (state_27300[(19)]);
var inst_27216 = (state_27300[(25)]);
var inst_27219 = (state_27300[(26)]);
var inst_27236 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27238 = (function (){var all_files = inst_27213;
var res_SINGLEQUOTE_ = inst_27216;
var res = inst_27217;
var files_not_loaded = inst_27219;
var dependencies_that_loaded = inst_27221;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27217,inst_27221,inst_27213,inst_27216,inst_27219,inst_27236,state_val_27301,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27237){
var map__27369 = p__27237;
var map__27369__$1 = (((((!((map__27369 == null))))?(((((map__27369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27369):map__27369);
var namespace = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27217,inst_27221,inst_27213,inst_27216,inst_27219,inst_27236,state_val_27301,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27239 = cljs.core.map.call(null,inst_27238,inst_27217);
var inst_27240 = cljs.core.pr_str.call(null,inst_27239);
var inst_27241 = figwheel.client.utils.log.call(null,inst_27240);
var inst_27242 = (function (){var all_files = inst_27213;
var res_SINGLEQUOTE_ = inst_27216;
var res = inst_27217;
var files_not_loaded = inst_27219;
var dependencies_that_loaded = inst_27221;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27217,inst_27221,inst_27213,inst_27216,inst_27219,inst_27236,inst_27238,inst_27239,inst_27240,inst_27241,state_val_27301,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27217,inst_27221,inst_27213,inst_27216,inst_27219,inst_27236,inst_27238,inst_27239,inst_27240,inst_27241,state_val_27301,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27243 = setTimeout(inst_27242,(10));
var state_27300__$1 = (function (){var statearr_27371 = state_27300;
(statearr_27371[(33)] = inst_27236);

(statearr_27371[(34)] = inst_27241);

return statearr_27371;
})();
var statearr_27372_27435 = state_27300__$1;
(statearr_27372_27435[(2)] = inst_27243);

(statearr_27372_27435[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (16))){
var state_27300__$1 = state_27300;
var statearr_27373_27436 = state_27300__$1;
(statearr_27373_27436[(2)] = reload_dependents);

(statearr_27373_27436[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (38))){
var inst_27253 = (state_27300[(16)]);
var inst_27271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27253);
var state_27300__$1 = state_27300;
var statearr_27374_27437 = state_27300__$1;
(statearr_27374_27437[(2)] = inst_27271);

(statearr_27374_27437[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (30))){
var state_27300__$1 = state_27300;
var statearr_27375_27438 = state_27300__$1;
(statearr_27375_27438[(2)] = null);

(statearr_27375_27438[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (10))){
var inst_27173 = (state_27300[(22)]);
var inst_27175 = cljs.core.chunked_seq_QMARK_.call(null,inst_27173);
var state_27300__$1 = state_27300;
if(inst_27175){
var statearr_27376_27439 = state_27300__$1;
(statearr_27376_27439[(1)] = (13));

} else {
var statearr_27377_27440 = state_27300__$1;
(statearr_27377_27440[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (18))){
var inst_27207 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
if(cljs.core.truth_(inst_27207)){
var statearr_27378_27441 = state_27300__$1;
(statearr_27378_27441[(1)] = (19));

} else {
var statearr_27379_27442 = state_27300__$1;
(statearr_27379_27442[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (42))){
var state_27300__$1 = state_27300;
var statearr_27380_27443 = state_27300__$1;
(statearr_27380_27443[(2)] = null);

(statearr_27380_27443[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (37))){
var inst_27266 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27381_27444 = state_27300__$1;
(statearr_27381_27444[(2)] = inst_27266);

(statearr_27381_27444[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (8))){
var inst_27160 = (state_27300[(7)]);
var inst_27173 = (state_27300[(22)]);
var inst_27173__$1 = cljs.core.seq.call(null,inst_27160);
var state_27300__$1 = (function (){var statearr_27382 = state_27300;
(statearr_27382[(22)] = inst_27173__$1);

return statearr_27382;
})();
if(inst_27173__$1){
var statearr_27383_27445 = state_27300__$1;
(statearr_27383_27445[(1)] = (10));

} else {
var statearr_27384_27446 = state_27300__$1;
(statearr_27384_27446[(1)] = (11));

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
});})(c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24583__auto__,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24584__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24584__auto____0 = (function (){
var statearr_27385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27385[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24584__auto__);

(statearr_27385[(1)] = (1));

return statearr_27385;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24584__auto____1 = (function (state_27300){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_27300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e27386){if((e27386 instanceof Object)){
var ex__24587__auto__ = e27386;
var statearr_27387_27447 = state_27300;
(statearr_27387_27447[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27448 = state_27300;
state_27300 = G__27448;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24584__auto__ = function(state_27300){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24584__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24584__auto____1.call(this,state_27300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24584__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24584__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24680__auto__ = (function (){var statearr_27388 = f__24679__auto__.call(null);
(statearr_27388[(6)] = c__24678__auto__);

return statearr_27388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto__,map__27145,map__27145__$1,opts,before_jsload,on_jsload,reload_dependents,map__27146,map__27146__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24678__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27451,link){
var map__27452 = p__27451;
var map__27452__$1 = (((((!((map__27452 == null))))?(((((map__27452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27452):map__27452);
var file = cljs.core.get.call(null,map__27452__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__27452,map__27452__$1,file){
return (function (p1__27449_SHARP_,p2__27450_SHARP_){
if(cljs.core._EQ_.call(null,p1__27449_SHARP_,p2__27450_SHARP_)){
return p1__27449_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__27452,map__27452__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27455){
var map__27456 = p__27455;
var map__27456__$1 = (((((!((map__27456 == null))))?(((((map__27456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27456):map__27456);
var match_length = cljs.core.get.call(null,map__27456__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27456__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27454_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27454_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27458_SHARP_,p2__27459_SHARP_){
return cljs.core.assoc.call(null,p1__27458_SHARP_,cljs.core.get.call(null,p2__27459_SHARP_,key),p2__27459_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27460 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27460);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27460);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27461,p__27462){
var map__27463 = p__27461;
var map__27463__$1 = (((((!((map__27463 == null))))?(((((map__27463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27463):map__27463);
var on_cssload = cljs.core.get.call(null,map__27463__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27464 = p__27462;
var map__27464__$1 = (((((!((map__27464 == null))))?(((((map__27464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27464):map__27464);
var files_msg = map__27464__$1;
var files = cljs.core.get.call(null,map__27464__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1579862707733
