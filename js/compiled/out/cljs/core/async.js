// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24738 = arguments.length;
switch (G__24738) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24739 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24739 = (function (f,blockable,meta24740){
this.f = f;
this.blockable = blockable;
this.meta24740 = meta24740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24741,meta24740__$1){
var self__ = this;
var _24741__$1 = this;
return (new cljs.core.async.t_cljs$core$async24739(self__.f,self__.blockable,meta24740__$1));
});

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24741){
var self__ = this;
var _24741__$1 = this;
return self__.meta24740;
});

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24740","meta24740",267798083,null)], null);
});

cljs.core.async.t_cljs$core$async24739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24739";

cljs.core.async.t_cljs$core$async24739.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24739");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24739.
 */
cljs.core.async.__GT_t_cljs$core$async24739 = (function cljs$core$async$__GT_t_cljs$core$async24739(f__$1,blockable__$1,meta24740){
return (new cljs.core.async.t_cljs$core$async24739(f__$1,blockable__$1,meta24740));
});

}

return (new cljs.core.async.t_cljs$core$async24739(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24745 = arguments.length;
switch (G__24745) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24748 = arguments.length;
switch (G__24748) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24751 = arguments.length;
switch (G__24751) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24753 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24753);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24753,ret){
return (function (){
return fn1.call(null,val_24753);
});})(val_24753,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24755 = arguments.length;
switch (G__24755) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___24757 = n;
var x_24758 = (0);
while(true){
if((x_24758 < n__4607__auto___24757)){
(a[x_24758] = x_24758);

var G__24759 = (x_24758 + (1));
x_24758 = G__24759;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24760 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24760 = (function (flag,meta24761){
this.flag = flag;
this.meta24761 = meta24761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24762,meta24761__$1){
var self__ = this;
var _24762__$1 = this;
return (new cljs.core.async.t_cljs$core$async24760(self__.flag,meta24761__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24760.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24762){
var self__ = this;
var _24762__$1 = this;
return self__.meta24761;
});})(flag))
;

cljs.core.async.t_cljs$core$async24760.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24760.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24760.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24761","meta24761",-136724884,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24760.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24760";

cljs.core.async.t_cljs$core$async24760.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24760");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24760.
 */
cljs.core.async.__GT_t_cljs$core$async24760 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24760(flag__$1,meta24761){
return (new cljs.core.async.t_cljs$core$async24760(flag__$1,meta24761));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24760(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24763 = (function (flag,cb,meta24764){
this.flag = flag;
this.cb = cb;
this.meta24764 = meta24764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24765,meta24764__$1){
var self__ = this;
var _24765__$1 = this;
return (new cljs.core.async.t_cljs$core$async24763(self__.flag,self__.cb,meta24764__$1));
});

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24765){
var self__ = this;
var _24765__$1 = this;
return self__.meta24764;
});

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24764","meta24764",1397673599,null)], null);
});

cljs.core.async.t_cljs$core$async24763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24763";

cljs.core.async.t_cljs$core$async24763.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24763");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24763.
 */
cljs.core.async.__GT_t_cljs$core$async24763 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24763(flag__$1,cb__$1,meta24764){
return (new cljs.core.async.t_cljs$core$async24763(flag__$1,cb__$1,meta24764));
});

}

return (new cljs.core.async.t_cljs$core$async24763(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24766_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24766_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24767_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24767_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24768 = (i + (1));
i = G__24768;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24774 = arguments.length;
var i__4731__auto___24775 = (0);
while(true){
if((i__4731__auto___24775 < len__4730__auto___24774)){
args__4736__auto__.push((arguments[i__4731__auto___24775]));

var G__24776 = (i__4731__auto___24775 + (1));
i__4731__auto___24775 = G__24776;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24771){
var map__24772 = p__24771;
var map__24772__$1 = (((((!((map__24772 == null))))?(((((map__24772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24772):map__24772);
var opts = map__24772__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24769){
var G__24770 = cljs.core.first.call(null,seq24769);
var seq24769__$1 = cljs.core.next.call(null,seq24769);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24770,seq24769__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24778 = arguments.length;
switch (G__24778) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24678__auto___24824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___24824){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___24824){
return (function (state_24802){
var state_val_24803 = (state_24802[(1)]);
if((state_val_24803 === (7))){
var inst_24798 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
var statearr_24804_24825 = state_24802__$1;
(statearr_24804_24825[(2)] = inst_24798);

(statearr_24804_24825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (1))){
var state_24802__$1 = state_24802;
var statearr_24805_24826 = state_24802__$1;
(statearr_24805_24826[(2)] = null);

(statearr_24805_24826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (4))){
var inst_24781 = (state_24802[(7)]);
var inst_24781__$1 = (state_24802[(2)]);
var inst_24782 = (inst_24781__$1 == null);
var state_24802__$1 = (function (){var statearr_24806 = state_24802;
(statearr_24806[(7)] = inst_24781__$1);

return statearr_24806;
})();
if(cljs.core.truth_(inst_24782)){
var statearr_24807_24827 = state_24802__$1;
(statearr_24807_24827[(1)] = (5));

} else {
var statearr_24808_24828 = state_24802__$1;
(statearr_24808_24828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (13))){
var state_24802__$1 = state_24802;
var statearr_24809_24829 = state_24802__$1;
(statearr_24809_24829[(2)] = null);

(statearr_24809_24829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (6))){
var inst_24781 = (state_24802[(7)]);
var state_24802__$1 = state_24802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24802__$1,(11),to,inst_24781);
} else {
if((state_val_24803 === (3))){
var inst_24800 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24802__$1,inst_24800);
} else {
if((state_val_24803 === (12))){
var state_24802__$1 = state_24802;
var statearr_24810_24830 = state_24802__$1;
(statearr_24810_24830[(2)] = null);

(statearr_24810_24830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (2))){
var state_24802__$1 = state_24802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24802__$1,(4),from);
} else {
if((state_val_24803 === (11))){
var inst_24791 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
if(cljs.core.truth_(inst_24791)){
var statearr_24811_24831 = state_24802__$1;
(statearr_24811_24831[(1)] = (12));

} else {
var statearr_24812_24832 = state_24802__$1;
(statearr_24812_24832[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (9))){
var state_24802__$1 = state_24802;
var statearr_24813_24833 = state_24802__$1;
(statearr_24813_24833[(2)] = null);

(statearr_24813_24833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (5))){
var state_24802__$1 = state_24802;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24814_24834 = state_24802__$1;
(statearr_24814_24834[(1)] = (8));

} else {
var statearr_24815_24835 = state_24802__$1;
(statearr_24815_24835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (14))){
var inst_24796 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
var statearr_24816_24836 = state_24802__$1;
(statearr_24816_24836[(2)] = inst_24796);

(statearr_24816_24836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (10))){
var inst_24788 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
var statearr_24817_24837 = state_24802__$1;
(statearr_24817_24837[(2)] = inst_24788);

(statearr_24817_24837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (8))){
var inst_24785 = cljs.core.async.close_BANG_.call(null,to);
var state_24802__$1 = state_24802;
var statearr_24818_24838 = state_24802__$1;
(statearr_24818_24838[(2)] = inst_24785);

(statearr_24818_24838[(1)] = (10));


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
});})(c__24678__auto___24824))
;
return ((function (switch__24583__auto__,c__24678__auto___24824){
return (function() {
var cljs$core$async$state_machine__24584__auto__ = null;
var cljs$core$async$state_machine__24584__auto____0 = (function (){
var statearr_24819 = [null,null,null,null,null,null,null,null];
(statearr_24819[(0)] = cljs$core$async$state_machine__24584__auto__);

(statearr_24819[(1)] = (1));

return statearr_24819;
});
var cljs$core$async$state_machine__24584__auto____1 = (function (state_24802){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_24802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e24820){if((e24820 instanceof Object)){
var ex__24587__auto__ = e24820;
var statearr_24821_24839 = state_24802;
(statearr_24821_24839[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24840 = state_24802;
state_24802 = G__24840;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$state_machine__24584__auto__ = function(state_24802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24584__auto____1.call(this,state_24802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24584__auto____0;
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24584__auto____1;
return cljs$core$async$state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___24824))
})();
var state__24680__auto__ = (function (){var statearr_24822 = f__24679__auto__.call(null);
(statearr_24822[(6)] = c__24678__auto___24824);

return statearr_24822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___24824))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24841){
var vec__24842 = p__24841;
var v = cljs.core.nth.call(null,vec__24842,(0),null);
var p = cljs.core.nth.call(null,vec__24842,(1),null);
var job = vec__24842;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24678__auto___25013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___25013,res,vec__24842,v,p,job,jobs,results){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___25013,res,vec__24842,v,p,job,jobs,results){
return (function (state_24849){
var state_val_24850 = (state_24849[(1)]);
if((state_val_24850 === (1))){
var state_24849__$1 = state_24849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24849__$1,(2),res,v);
} else {
if((state_val_24850 === (2))){
var inst_24846 = (state_24849[(2)]);
var inst_24847 = cljs.core.async.close_BANG_.call(null,res);
var state_24849__$1 = (function (){var statearr_24851 = state_24849;
(statearr_24851[(7)] = inst_24846);

return statearr_24851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24849__$1,inst_24847);
} else {
return null;
}
}
});})(c__24678__auto___25013,res,vec__24842,v,p,job,jobs,results))
;
return ((function (switch__24583__auto__,c__24678__auto___25013,res,vec__24842,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0 = (function (){
var statearr_24852 = [null,null,null,null,null,null,null,null];
(statearr_24852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__);

(statearr_24852[(1)] = (1));

return statearr_24852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1 = (function (state_24849){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_24849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e24853){if((e24853 instanceof Object)){
var ex__24587__auto__ = e24853;
var statearr_24854_25014 = state_24849;
(statearr_24854_25014[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25015 = state_24849;
state_24849 = G__25015;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__ = function(state_24849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1.call(this,state_24849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___25013,res,vec__24842,v,p,job,jobs,results))
})();
var state__24680__auto__ = (function (){var statearr_24855 = f__24679__auto__.call(null);
(statearr_24855[(6)] = c__24678__auto___25013);

return statearr_24855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___25013,res,vec__24842,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24856){
var vec__24857 = p__24856;
var v = cljs.core.nth.call(null,vec__24857,(0),null);
var p = cljs.core.nth.call(null,vec__24857,(1),null);
var job = vec__24857;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___25016 = n;
var __25017 = (0);
while(true){
if((__25017 < n__4607__auto___25016)){
var G__24860_25018 = type;
var G__24860_25019__$1 = (((G__24860_25018 instanceof cljs.core.Keyword))?G__24860_25018.fqn:null);
switch (G__24860_25019__$1) {
case "compute":
var c__24678__auto___25021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25017,c__24678__auto___25021,G__24860_25018,G__24860_25019__$1,n__4607__auto___25016,jobs,results,process,async){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (__25017,c__24678__auto___25021,G__24860_25018,G__24860_25019__$1,n__4607__auto___25016,jobs,results,process,async){
return (function (state_24873){
var state_val_24874 = (state_24873[(1)]);
if((state_val_24874 === (1))){
var state_24873__$1 = state_24873;
var statearr_24875_25022 = state_24873__$1;
(statearr_24875_25022[(2)] = null);

(statearr_24875_25022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (2))){
var state_24873__$1 = state_24873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24873__$1,(4),jobs);
} else {
if((state_val_24874 === (3))){
var inst_24871 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24873__$1,inst_24871);
} else {
if((state_val_24874 === (4))){
var inst_24863 = (state_24873[(2)]);
var inst_24864 = process.call(null,inst_24863);
var state_24873__$1 = state_24873;
if(cljs.core.truth_(inst_24864)){
var statearr_24876_25023 = state_24873__$1;
(statearr_24876_25023[(1)] = (5));

} else {
var statearr_24877_25024 = state_24873__$1;
(statearr_24877_25024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (5))){
var state_24873__$1 = state_24873;
var statearr_24878_25025 = state_24873__$1;
(statearr_24878_25025[(2)] = null);

(statearr_24878_25025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (6))){
var state_24873__$1 = state_24873;
var statearr_24879_25026 = state_24873__$1;
(statearr_24879_25026[(2)] = null);

(statearr_24879_25026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (7))){
var inst_24869 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24880_25027 = state_24873__$1;
(statearr_24880_25027[(2)] = inst_24869);

(statearr_24880_25027[(1)] = (3));


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
});})(__25017,c__24678__auto___25021,G__24860_25018,G__24860_25019__$1,n__4607__auto___25016,jobs,results,process,async))
;
return ((function (__25017,switch__24583__auto__,c__24678__auto___25021,G__24860_25018,G__24860_25019__$1,n__4607__auto___25016,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0 = (function (){
var statearr_24881 = [null,null,null,null,null,null,null];
(statearr_24881[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__);

(statearr_24881[(1)] = (1));

return statearr_24881;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1 = (function (state_24873){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_24873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e24882){if((e24882 instanceof Object)){
var ex__24587__auto__ = e24882;
var statearr_24883_25028 = state_24873;
(statearr_24883_25028[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25029 = state_24873;
state_24873 = G__25029;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__ = function(state_24873){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1.call(this,state_24873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__;
})()
;})(__25017,switch__24583__auto__,c__24678__auto___25021,G__24860_25018,G__24860_25019__$1,n__4607__auto___25016,jobs,results,process,async))
})();
var state__24680__auto__ = (function (){var statearr_24884 = f__24679__auto__.call(null);
(statearr_24884[(6)] = c__24678__auto___25021);

return statearr_24884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(__25017,c__24678__auto___25021,G__24860_25018,G__24860_25019__$1,n__4607__auto___25016,jobs,results,process,async))
);


break;
case "async":
var c__24678__auto___25030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25017,c__24678__auto___25030,G__24860_25018,G__24860_25019__$1,n__4607__auto___25016,jobs,results,process,async){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (__25017,c__24678__auto___25030,G__24860_25018,G__24860_25019__$1,n__4607__auto___25016,jobs,results,process,async){
return (function (state_24897){
var state_val_24898 = (state_24897[(1)]);
if((state_val_24898 === (1))){
var state_24897__$1 = state_24897;
var statearr_24899_25031 = state_24897__$1;
(statearr_24899_25031[(2)] = null);

(statearr_24899_25031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (2))){
var state_24897__$1 = state_24897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24897__$1,(4),jobs);
} else {
if((state_val_24898 === (3))){
var inst_24895 = (state_24897[(2)]);
var state_24897__$1 = state_24897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24897__$1,inst_24895);
} else {
if((state_val_24898 === (4))){
var inst_24887 = (state_24897[(2)]);
var inst_24888 = async.call(null,inst_24887);
var state_24897__$1 = state_24897;
if(cljs.core.truth_(inst_24888)){
var statearr_24900_25032 = state_24897__$1;
(statearr_24900_25032[(1)] = (5));

} else {
var statearr_24901_25033 = state_24897__$1;
(statearr_24901_25033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (5))){
var state_24897__$1 = state_24897;
var statearr_24902_25034 = state_24897__$1;
(statearr_24902_25034[(2)] = null);

(statearr_24902_25034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (6))){
var state_24897__$1 = state_24897;
var statearr_24903_25035 = state_24897__$1;
(statearr_24903_25035[(2)] = null);

(statearr_24903_25035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (7))){
var inst_24893 = (state_24897[(2)]);
var state_24897__$1 = state_24897;
var statearr_24904_25036 = state_24897__$1;
(statearr_24904_25036[(2)] = inst_24893);

(statearr_24904_25036[(1)] = (3));


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
});})(__25017,c__24678__auto___25030,G__24860_25018,G__24860_25019__$1,n__4607__auto___25016,jobs,results,process,async))
;
return ((function (__25017,switch__24583__auto__,c__24678__auto___25030,G__24860_25018,G__24860_25019__$1,n__4607__auto___25016,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0 = (function (){
var statearr_24905 = [null,null,null,null,null,null,null];
(statearr_24905[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__);

(statearr_24905[(1)] = (1));

return statearr_24905;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1 = (function (state_24897){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_24897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e24906){if((e24906 instanceof Object)){
var ex__24587__auto__ = e24906;
var statearr_24907_25037 = state_24897;
(statearr_24907_25037[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25038 = state_24897;
state_24897 = G__25038;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__ = function(state_24897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1.call(this,state_24897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__;
})()
;})(__25017,switch__24583__auto__,c__24678__auto___25030,G__24860_25018,G__24860_25019__$1,n__4607__auto___25016,jobs,results,process,async))
})();
var state__24680__auto__ = (function (){var statearr_24908 = f__24679__auto__.call(null);
(statearr_24908[(6)] = c__24678__auto___25030);

return statearr_24908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(__25017,c__24678__auto___25030,G__24860_25018,G__24860_25019__$1,n__4607__auto___25016,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24860_25019__$1)].join('')));

}

var G__25039 = (__25017 + (1));
__25017 = G__25039;
continue;
} else {
}
break;
}

var c__24678__auto___25040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___25040,jobs,results,process,async){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___25040,jobs,results,process,async){
return (function (state_24930){
var state_val_24931 = (state_24930[(1)]);
if((state_val_24931 === (7))){
var inst_24926 = (state_24930[(2)]);
var state_24930__$1 = state_24930;
var statearr_24932_25041 = state_24930__$1;
(statearr_24932_25041[(2)] = inst_24926);

(statearr_24932_25041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (1))){
var state_24930__$1 = state_24930;
var statearr_24933_25042 = state_24930__$1;
(statearr_24933_25042[(2)] = null);

(statearr_24933_25042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (4))){
var inst_24911 = (state_24930[(7)]);
var inst_24911__$1 = (state_24930[(2)]);
var inst_24912 = (inst_24911__$1 == null);
var state_24930__$1 = (function (){var statearr_24934 = state_24930;
(statearr_24934[(7)] = inst_24911__$1);

return statearr_24934;
})();
if(cljs.core.truth_(inst_24912)){
var statearr_24935_25043 = state_24930__$1;
(statearr_24935_25043[(1)] = (5));

} else {
var statearr_24936_25044 = state_24930__$1;
(statearr_24936_25044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (6))){
var inst_24916 = (state_24930[(8)]);
var inst_24911 = (state_24930[(7)]);
var inst_24916__$1 = cljs.core.async.chan.call(null,(1));
var inst_24917 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24918 = [inst_24911,inst_24916__$1];
var inst_24919 = (new cljs.core.PersistentVector(null,2,(5),inst_24917,inst_24918,null));
var state_24930__$1 = (function (){var statearr_24937 = state_24930;
(statearr_24937[(8)] = inst_24916__$1);

return statearr_24937;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24930__$1,(8),jobs,inst_24919);
} else {
if((state_val_24931 === (3))){
var inst_24928 = (state_24930[(2)]);
var state_24930__$1 = state_24930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24930__$1,inst_24928);
} else {
if((state_val_24931 === (2))){
var state_24930__$1 = state_24930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24930__$1,(4),from);
} else {
if((state_val_24931 === (9))){
var inst_24923 = (state_24930[(2)]);
var state_24930__$1 = (function (){var statearr_24938 = state_24930;
(statearr_24938[(9)] = inst_24923);

return statearr_24938;
})();
var statearr_24939_25045 = state_24930__$1;
(statearr_24939_25045[(2)] = null);

(statearr_24939_25045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (5))){
var inst_24914 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24930__$1 = state_24930;
var statearr_24940_25046 = state_24930__$1;
(statearr_24940_25046[(2)] = inst_24914);

(statearr_24940_25046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (8))){
var inst_24916 = (state_24930[(8)]);
var inst_24921 = (state_24930[(2)]);
var state_24930__$1 = (function (){var statearr_24941 = state_24930;
(statearr_24941[(10)] = inst_24921);

return statearr_24941;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24930__$1,(9),results,inst_24916);
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
});})(c__24678__auto___25040,jobs,results,process,async))
;
return ((function (switch__24583__auto__,c__24678__auto___25040,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0 = (function (){
var statearr_24942 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24942[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__);

(statearr_24942[(1)] = (1));

return statearr_24942;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1 = (function (state_24930){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_24930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e24943){if((e24943 instanceof Object)){
var ex__24587__auto__ = e24943;
var statearr_24944_25047 = state_24930;
(statearr_24944_25047[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25048 = state_24930;
state_24930 = G__25048;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__ = function(state_24930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1.call(this,state_24930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___25040,jobs,results,process,async))
})();
var state__24680__auto__ = (function (){var statearr_24945 = f__24679__auto__.call(null);
(statearr_24945[(6)] = c__24678__auto___25040);

return statearr_24945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___25040,jobs,results,process,async))
);


var c__24678__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto__,jobs,results,process,async){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto__,jobs,results,process,async){
return (function (state_24983){
var state_val_24984 = (state_24983[(1)]);
if((state_val_24984 === (7))){
var inst_24979 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
var statearr_24985_25049 = state_24983__$1;
(statearr_24985_25049[(2)] = inst_24979);

(statearr_24985_25049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (20))){
var state_24983__$1 = state_24983;
var statearr_24986_25050 = state_24983__$1;
(statearr_24986_25050[(2)] = null);

(statearr_24986_25050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (1))){
var state_24983__$1 = state_24983;
var statearr_24987_25051 = state_24983__$1;
(statearr_24987_25051[(2)] = null);

(statearr_24987_25051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (4))){
var inst_24948 = (state_24983[(7)]);
var inst_24948__$1 = (state_24983[(2)]);
var inst_24949 = (inst_24948__$1 == null);
var state_24983__$1 = (function (){var statearr_24988 = state_24983;
(statearr_24988[(7)] = inst_24948__$1);

return statearr_24988;
})();
if(cljs.core.truth_(inst_24949)){
var statearr_24989_25052 = state_24983__$1;
(statearr_24989_25052[(1)] = (5));

} else {
var statearr_24990_25053 = state_24983__$1;
(statearr_24990_25053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (15))){
var inst_24961 = (state_24983[(8)]);
var state_24983__$1 = state_24983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24983__$1,(18),to,inst_24961);
} else {
if((state_val_24984 === (21))){
var inst_24974 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
var statearr_24991_25054 = state_24983__$1;
(statearr_24991_25054[(2)] = inst_24974);

(statearr_24991_25054[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (13))){
var inst_24976 = (state_24983[(2)]);
var state_24983__$1 = (function (){var statearr_24992 = state_24983;
(statearr_24992[(9)] = inst_24976);

return statearr_24992;
})();
var statearr_24993_25055 = state_24983__$1;
(statearr_24993_25055[(2)] = null);

(statearr_24993_25055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (6))){
var inst_24948 = (state_24983[(7)]);
var state_24983__$1 = state_24983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24983__$1,(11),inst_24948);
} else {
if((state_val_24984 === (17))){
var inst_24969 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
if(cljs.core.truth_(inst_24969)){
var statearr_24994_25056 = state_24983__$1;
(statearr_24994_25056[(1)] = (19));

} else {
var statearr_24995_25057 = state_24983__$1;
(statearr_24995_25057[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (3))){
var inst_24981 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24983__$1,inst_24981);
} else {
if((state_val_24984 === (12))){
var inst_24958 = (state_24983[(10)]);
var state_24983__$1 = state_24983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24983__$1,(14),inst_24958);
} else {
if((state_val_24984 === (2))){
var state_24983__$1 = state_24983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24983__$1,(4),results);
} else {
if((state_val_24984 === (19))){
var state_24983__$1 = state_24983;
var statearr_24996_25058 = state_24983__$1;
(statearr_24996_25058[(2)] = null);

(statearr_24996_25058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (11))){
var inst_24958 = (state_24983[(2)]);
var state_24983__$1 = (function (){var statearr_24997 = state_24983;
(statearr_24997[(10)] = inst_24958);

return statearr_24997;
})();
var statearr_24998_25059 = state_24983__$1;
(statearr_24998_25059[(2)] = null);

(statearr_24998_25059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (9))){
var state_24983__$1 = state_24983;
var statearr_24999_25060 = state_24983__$1;
(statearr_24999_25060[(2)] = null);

(statearr_24999_25060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (5))){
var state_24983__$1 = state_24983;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25000_25061 = state_24983__$1;
(statearr_25000_25061[(1)] = (8));

} else {
var statearr_25001_25062 = state_24983__$1;
(statearr_25001_25062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (14))){
var inst_24963 = (state_24983[(11)]);
var inst_24961 = (state_24983[(8)]);
var inst_24961__$1 = (state_24983[(2)]);
var inst_24962 = (inst_24961__$1 == null);
var inst_24963__$1 = cljs.core.not.call(null,inst_24962);
var state_24983__$1 = (function (){var statearr_25002 = state_24983;
(statearr_25002[(11)] = inst_24963__$1);

(statearr_25002[(8)] = inst_24961__$1);

return statearr_25002;
})();
if(inst_24963__$1){
var statearr_25003_25063 = state_24983__$1;
(statearr_25003_25063[(1)] = (15));

} else {
var statearr_25004_25064 = state_24983__$1;
(statearr_25004_25064[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (16))){
var inst_24963 = (state_24983[(11)]);
var state_24983__$1 = state_24983;
var statearr_25005_25065 = state_24983__$1;
(statearr_25005_25065[(2)] = inst_24963);

(statearr_25005_25065[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (10))){
var inst_24955 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
var statearr_25006_25066 = state_24983__$1;
(statearr_25006_25066[(2)] = inst_24955);

(statearr_25006_25066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (18))){
var inst_24966 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
var statearr_25007_25067 = state_24983__$1;
(statearr_25007_25067[(2)] = inst_24966);

(statearr_25007_25067[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (8))){
var inst_24952 = cljs.core.async.close_BANG_.call(null,to);
var state_24983__$1 = state_24983;
var statearr_25008_25068 = state_24983__$1;
(statearr_25008_25068[(2)] = inst_24952);

(statearr_25008_25068[(1)] = (10));


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
});})(c__24678__auto__,jobs,results,process,async))
;
return ((function (switch__24583__auto__,c__24678__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0 = (function (){
var statearr_25009 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25009[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__);

(statearr_25009[(1)] = (1));

return statearr_25009;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1 = (function (state_24983){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_24983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e25010){if((e25010 instanceof Object)){
var ex__24587__auto__ = e25010;
var statearr_25011_25069 = state_24983;
(statearr_25011_25069[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25070 = state_24983;
state_24983 = G__25070;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__ = function(state_24983){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1.call(this,state_24983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24584__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto__,jobs,results,process,async))
})();
var state__24680__auto__ = (function (){var statearr_25012 = f__24679__auto__.call(null);
(statearr_25012[(6)] = c__24678__auto__);

return statearr_25012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto__,jobs,results,process,async))
);

return c__24678__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25072 = arguments.length;
switch (G__25072) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25075 = arguments.length;
switch (G__25075) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25078 = arguments.length;
switch (G__25078) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24678__auto___25127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___25127,tc,fc){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___25127,tc,fc){
return (function (state_25104){
var state_val_25105 = (state_25104[(1)]);
if((state_val_25105 === (7))){
var inst_25100 = (state_25104[(2)]);
var state_25104__$1 = state_25104;
var statearr_25106_25128 = state_25104__$1;
(statearr_25106_25128[(2)] = inst_25100);

(statearr_25106_25128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (1))){
var state_25104__$1 = state_25104;
var statearr_25107_25129 = state_25104__$1;
(statearr_25107_25129[(2)] = null);

(statearr_25107_25129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (4))){
var inst_25081 = (state_25104[(7)]);
var inst_25081__$1 = (state_25104[(2)]);
var inst_25082 = (inst_25081__$1 == null);
var state_25104__$1 = (function (){var statearr_25108 = state_25104;
(statearr_25108[(7)] = inst_25081__$1);

return statearr_25108;
})();
if(cljs.core.truth_(inst_25082)){
var statearr_25109_25130 = state_25104__$1;
(statearr_25109_25130[(1)] = (5));

} else {
var statearr_25110_25131 = state_25104__$1;
(statearr_25110_25131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (13))){
var state_25104__$1 = state_25104;
var statearr_25111_25132 = state_25104__$1;
(statearr_25111_25132[(2)] = null);

(statearr_25111_25132[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (6))){
var inst_25081 = (state_25104[(7)]);
var inst_25087 = p.call(null,inst_25081);
var state_25104__$1 = state_25104;
if(cljs.core.truth_(inst_25087)){
var statearr_25112_25133 = state_25104__$1;
(statearr_25112_25133[(1)] = (9));

} else {
var statearr_25113_25134 = state_25104__$1;
(statearr_25113_25134[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (3))){
var inst_25102 = (state_25104[(2)]);
var state_25104__$1 = state_25104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25104__$1,inst_25102);
} else {
if((state_val_25105 === (12))){
var state_25104__$1 = state_25104;
var statearr_25114_25135 = state_25104__$1;
(statearr_25114_25135[(2)] = null);

(statearr_25114_25135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (2))){
var state_25104__$1 = state_25104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25104__$1,(4),ch);
} else {
if((state_val_25105 === (11))){
var inst_25081 = (state_25104[(7)]);
var inst_25091 = (state_25104[(2)]);
var state_25104__$1 = state_25104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25104__$1,(8),inst_25091,inst_25081);
} else {
if((state_val_25105 === (9))){
var state_25104__$1 = state_25104;
var statearr_25115_25136 = state_25104__$1;
(statearr_25115_25136[(2)] = tc);

(statearr_25115_25136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (5))){
var inst_25084 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25085 = cljs.core.async.close_BANG_.call(null,fc);
var state_25104__$1 = (function (){var statearr_25116 = state_25104;
(statearr_25116[(8)] = inst_25084);

return statearr_25116;
})();
var statearr_25117_25137 = state_25104__$1;
(statearr_25117_25137[(2)] = inst_25085);

(statearr_25117_25137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (14))){
var inst_25098 = (state_25104[(2)]);
var state_25104__$1 = state_25104;
var statearr_25118_25138 = state_25104__$1;
(statearr_25118_25138[(2)] = inst_25098);

(statearr_25118_25138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (10))){
var state_25104__$1 = state_25104;
var statearr_25119_25139 = state_25104__$1;
(statearr_25119_25139[(2)] = fc);

(statearr_25119_25139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25105 === (8))){
var inst_25093 = (state_25104[(2)]);
var state_25104__$1 = state_25104;
if(cljs.core.truth_(inst_25093)){
var statearr_25120_25140 = state_25104__$1;
(statearr_25120_25140[(1)] = (12));

} else {
var statearr_25121_25141 = state_25104__$1;
(statearr_25121_25141[(1)] = (13));

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
});})(c__24678__auto___25127,tc,fc))
;
return ((function (switch__24583__auto__,c__24678__auto___25127,tc,fc){
return (function() {
var cljs$core$async$state_machine__24584__auto__ = null;
var cljs$core$async$state_machine__24584__auto____0 = (function (){
var statearr_25122 = [null,null,null,null,null,null,null,null,null];
(statearr_25122[(0)] = cljs$core$async$state_machine__24584__auto__);

(statearr_25122[(1)] = (1));

return statearr_25122;
});
var cljs$core$async$state_machine__24584__auto____1 = (function (state_25104){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_25104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e25123){if((e25123 instanceof Object)){
var ex__24587__auto__ = e25123;
var statearr_25124_25142 = state_25104;
(statearr_25124_25142[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25143 = state_25104;
state_25104 = G__25143;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$state_machine__24584__auto__ = function(state_25104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24584__auto____1.call(this,state_25104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24584__auto____0;
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24584__auto____1;
return cljs$core$async$state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___25127,tc,fc))
})();
var state__24680__auto__ = (function (){var statearr_25125 = f__24679__auto__.call(null);
(statearr_25125[(6)] = c__24678__auto___25127);

return statearr_25125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___25127,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24678__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto__){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto__){
return (function (state_25164){
var state_val_25165 = (state_25164[(1)]);
if((state_val_25165 === (7))){
var inst_25160 = (state_25164[(2)]);
var state_25164__$1 = state_25164;
var statearr_25166_25184 = state_25164__$1;
(statearr_25166_25184[(2)] = inst_25160);

(statearr_25166_25184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (1))){
var inst_25144 = init;
var state_25164__$1 = (function (){var statearr_25167 = state_25164;
(statearr_25167[(7)] = inst_25144);

return statearr_25167;
})();
var statearr_25168_25185 = state_25164__$1;
(statearr_25168_25185[(2)] = null);

(statearr_25168_25185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (4))){
var inst_25147 = (state_25164[(8)]);
var inst_25147__$1 = (state_25164[(2)]);
var inst_25148 = (inst_25147__$1 == null);
var state_25164__$1 = (function (){var statearr_25169 = state_25164;
(statearr_25169[(8)] = inst_25147__$1);

return statearr_25169;
})();
if(cljs.core.truth_(inst_25148)){
var statearr_25170_25186 = state_25164__$1;
(statearr_25170_25186[(1)] = (5));

} else {
var statearr_25171_25187 = state_25164__$1;
(statearr_25171_25187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (6))){
var inst_25147 = (state_25164[(8)]);
var inst_25144 = (state_25164[(7)]);
var inst_25151 = (state_25164[(9)]);
var inst_25151__$1 = f.call(null,inst_25144,inst_25147);
var inst_25152 = cljs.core.reduced_QMARK_.call(null,inst_25151__$1);
var state_25164__$1 = (function (){var statearr_25172 = state_25164;
(statearr_25172[(9)] = inst_25151__$1);

return statearr_25172;
})();
if(inst_25152){
var statearr_25173_25188 = state_25164__$1;
(statearr_25173_25188[(1)] = (8));

} else {
var statearr_25174_25189 = state_25164__$1;
(statearr_25174_25189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (3))){
var inst_25162 = (state_25164[(2)]);
var state_25164__$1 = state_25164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25164__$1,inst_25162);
} else {
if((state_val_25165 === (2))){
var state_25164__$1 = state_25164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25164__$1,(4),ch);
} else {
if((state_val_25165 === (9))){
var inst_25151 = (state_25164[(9)]);
var inst_25144 = inst_25151;
var state_25164__$1 = (function (){var statearr_25175 = state_25164;
(statearr_25175[(7)] = inst_25144);

return statearr_25175;
})();
var statearr_25176_25190 = state_25164__$1;
(statearr_25176_25190[(2)] = null);

(statearr_25176_25190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (5))){
var inst_25144 = (state_25164[(7)]);
var state_25164__$1 = state_25164;
var statearr_25177_25191 = state_25164__$1;
(statearr_25177_25191[(2)] = inst_25144);

(statearr_25177_25191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (10))){
var inst_25158 = (state_25164[(2)]);
var state_25164__$1 = state_25164;
var statearr_25178_25192 = state_25164__$1;
(statearr_25178_25192[(2)] = inst_25158);

(statearr_25178_25192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25165 === (8))){
var inst_25151 = (state_25164[(9)]);
var inst_25154 = cljs.core.deref.call(null,inst_25151);
var state_25164__$1 = state_25164;
var statearr_25179_25193 = state_25164__$1;
(statearr_25179_25193[(2)] = inst_25154);

(statearr_25179_25193[(1)] = (10));


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
});})(c__24678__auto__))
;
return ((function (switch__24583__auto__,c__24678__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24584__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24584__auto____0 = (function (){
var statearr_25180 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25180[(0)] = cljs$core$async$reduce_$_state_machine__24584__auto__);

(statearr_25180[(1)] = (1));

return statearr_25180;
});
var cljs$core$async$reduce_$_state_machine__24584__auto____1 = (function (state_25164){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_25164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e25181){if((e25181 instanceof Object)){
var ex__24587__auto__ = e25181;
var statearr_25182_25194 = state_25164;
(statearr_25182_25194[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25195 = state_25164;
state_25164 = G__25195;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24584__auto__ = function(state_25164){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24584__auto____1.call(this,state_25164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24584__auto____0;
cljs$core$async$reduce_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24584__auto____1;
return cljs$core$async$reduce_$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto__))
})();
var state__24680__auto__ = (function (){var statearr_25183 = f__24679__auto__.call(null);
(statearr_25183[(6)] = c__24678__auto__);

return statearr_25183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto__))
);

return c__24678__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24678__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto__,f__$1){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto__,f__$1){
return (function (state_25201){
var state_val_25202 = (state_25201[(1)]);
if((state_val_25202 === (1))){
var inst_25196 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25201__$1 = state_25201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25201__$1,(2),inst_25196);
} else {
if((state_val_25202 === (2))){
var inst_25198 = (state_25201[(2)]);
var inst_25199 = f__$1.call(null,inst_25198);
var state_25201__$1 = state_25201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25201__$1,inst_25199);
} else {
return null;
}
}
});})(c__24678__auto__,f__$1))
;
return ((function (switch__24583__auto__,c__24678__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24584__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24584__auto____0 = (function (){
var statearr_25203 = [null,null,null,null,null,null,null];
(statearr_25203[(0)] = cljs$core$async$transduce_$_state_machine__24584__auto__);

(statearr_25203[(1)] = (1));

return statearr_25203;
});
var cljs$core$async$transduce_$_state_machine__24584__auto____1 = (function (state_25201){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_25201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e25204){if((e25204 instanceof Object)){
var ex__24587__auto__ = e25204;
var statearr_25205_25207 = state_25201;
(statearr_25205_25207[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25208 = state_25201;
state_25201 = G__25208;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24584__auto__ = function(state_25201){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24584__auto____1.call(this,state_25201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24584__auto____0;
cljs$core$async$transduce_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24584__auto____1;
return cljs$core$async$transduce_$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto__,f__$1))
})();
var state__24680__auto__ = (function (){var statearr_25206 = f__24679__auto__.call(null);
(statearr_25206[(6)] = c__24678__auto__);

return statearr_25206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto__,f__$1))
);

return c__24678__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25210 = arguments.length;
switch (G__25210) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24678__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto__){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto__){
return (function (state_25235){
var state_val_25236 = (state_25235[(1)]);
if((state_val_25236 === (7))){
var inst_25217 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25237_25258 = state_25235__$1;
(statearr_25237_25258[(2)] = inst_25217);

(statearr_25237_25258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (1))){
var inst_25211 = cljs.core.seq.call(null,coll);
var inst_25212 = inst_25211;
var state_25235__$1 = (function (){var statearr_25238 = state_25235;
(statearr_25238[(7)] = inst_25212);

return statearr_25238;
})();
var statearr_25239_25259 = state_25235__$1;
(statearr_25239_25259[(2)] = null);

(statearr_25239_25259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (4))){
var inst_25212 = (state_25235[(7)]);
var inst_25215 = cljs.core.first.call(null,inst_25212);
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25235__$1,(7),ch,inst_25215);
} else {
if((state_val_25236 === (13))){
var inst_25229 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25240_25260 = state_25235__$1;
(statearr_25240_25260[(2)] = inst_25229);

(statearr_25240_25260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (6))){
var inst_25220 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
if(cljs.core.truth_(inst_25220)){
var statearr_25241_25261 = state_25235__$1;
(statearr_25241_25261[(1)] = (8));

} else {
var statearr_25242_25262 = state_25235__$1;
(statearr_25242_25262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (3))){
var inst_25233 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25235__$1,inst_25233);
} else {
if((state_val_25236 === (12))){
var state_25235__$1 = state_25235;
var statearr_25243_25263 = state_25235__$1;
(statearr_25243_25263[(2)] = null);

(statearr_25243_25263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (2))){
var inst_25212 = (state_25235[(7)]);
var state_25235__$1 = state_25235;
if(cljs.core.truth_(inst_25212)){
var statearr_25244_25264 = state_25235__$1;
(statearr_25244_25264[(1)] = (4));

} else {
var statearr_25245_25265 = state_25235__$1;
(statearr_25245_25265[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (11))){
var inst_25226 = cljs.core.async.close_BANG_.call(null,ch);
var state_25235__$1 = state_25235;
var statearr_25246_25266 = state_25235__$1;
(statearr_25246_25266[(2)] = inst_25226);

(statearr_25246_25266[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (9))){
var state_25235__$1 = state_25235;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25247_25267 = state_25235__$1;
(statearr_25247_25267[(1)] = (11));

} else {
var statearr_25248_25268 = state_25235__$1;
(statearr_25248_25268[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (5))){
var inst_25212 = (state_25235[(7)]);
var state_25235__$1 = state_25235;
var statearr_25249_25269 = state_25235__$1;
(statearr_25249_25269[(2)] = inst_25212);

(statearr_25249_25269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (10))){
var inst_25231 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25250_25270 = state_25235__$1;
(statearr_25250_25270[(2)] = inst_25231);

(statearr_25250_25270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (8))){
var inst_25212 = (state_25235[(7)]);
var inst_25222 = cljs.core.next.call(null,inst_25212);
var inst_25212__$1 = inst_25222;
var state_25235__$1 = (function (){var statearr_25251 = state_25235;
(statearr_25251[(7)] = inst_25212__$1);

return statearr_25251;
})();
var statearr_25252_25271 = state_25235__$1;
(statearr_25252_25271[(2)] = null);

(statearr_25252_25271[(1)] = (2));


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
});})(c__24678__auto__))
;
return ((function (switch__24583__auto__,c__24678__auto__){
return (function() {
var cljs$core$async$state_machine__24584__auto__ = null;
var cljs$core$async$state_machine__24584__auto____0 = (function (){
var statearr_25253 = [null,null,null,null,null,null,null,null];
(statearr_25253[(0)] = cljs$core$async$state_machine__24584__auto__);

(statearr_25253[(1)] = (1));

return statearr_25253;
});
var cljs$core$async$state_machine__24584__auto____1 = (function (state_25235){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_25235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e25254){if((e25254 instanceof Object)){
var ex__24587__auto__ = e25254;
var statearr_25255_25272 = state_25235;
(statearr_25255_25272[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25273 = state_25235;
state_25235 = G__25273;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$state_machine__24584__auto__ = function(state_25235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24584__auto____1.call(this,state_25235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24584__auto____0;
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24584__auto____1;
return cljs$core$async$state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto__))
})();
var state__24680__auto__ = (function (){var statearr_25256 = f__24679__auto__.call(null);
(statearr_25256[(6)] = c__24678__auto__);

return statearr_25256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto__))
);

return c__24678__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25274 = (function (ch,cs,meta25275){
this.ch = ch;
this.cs = cs;
this.meta25275 = meta25275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25276,meta25275__$1){
var self__ = this;
var _25276__$1 = this;
return (new cljs.core.async.t_cljs$core$async25274(self__.ch,self__.cs,meta25275__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25276){
var self__ = this;
var _25276__$1 = this;
return self__.meta25275;
});})(cs))
;

cljs.core.async.t_cljs$core$async25274.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25274.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25274.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25274.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25274.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25274.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25274.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25275","meta25275",965302895,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25274";

cljs.core.async.t_cljs$core$async25274.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25274");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25274.
 */
cljs.core.async.__GT_t_cljs$core$async25274 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25274(ch__$1,cs__$1,meta25275){
return (new cljs.core.async.t_cljs$core$async25274(ch__$1,cs__$1,meta25275));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25274(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24678__auto___25496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___25496,cs,m,dchan,dctr,done){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___25496,cs,m,dchan,dctr,done){
return (function (state_25411){
var state_val_25412 = (state_25411[(1)]);
if((state_val_25412 === (7))){
var inst_25407 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
var statearr_25413_25497 = state_25411__$1;
(statearr_25413_25497[(2)] = inst_25407);

(statearr_25413_25497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (20))){
var inst_25310 = (state_25411[(7)]);
var inst_25322 = cljs.core.first.call(null,inst_25310);
var inst_25323 = cljs.core.nth.call(null,inst_25322,(0),null);
var inst_25324 = cljs.core.nth.call(null,inst_25322,(1),null);
var state_25411__$1 = (function (){var statearr_25414 = state_25411;
(statearr_25414[(8)] = inst_25323);

return statearr_25414;
})();
if(cljs.core.truth_(inst_25324)){
var statearr_25415_25498 = state_25411__$1;
(statearr_25415_25498[(1)] = (22));

} else {
var statearr_25416_25499 = state_25411__$1;
(statearr_25416_25499[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (27))){
var inst_25279 = (state_25411[(9)]);
var inst_25354 = (state_25411[(10)]);
var inst_25359 = (state_25411[(11)]);
var inst_25352 = (state_25411[(12)]);
var inst_25359__$1 = cljs.core._nth.call(null,inst_25352,inst_25354);
var inst_25360 = cljs.core.async.put_BANG_.call(null,inst_25359__$1,inst_25279,done);
var state_25411__$1 = (function (){var statearr_25417 = state_25411;
(statearr_25417[(11)] = inst_25359__$1);

return statearr_25417;
})();
if(cljs.core.truth_(inst_25360)){
var statearr_25418_25500 = state_25411__$1;
(statearr_25418_25500[(1)] = (30));

} else {
var statearr_25419_25501 = state_25411__$1;
(statearr_25419_25501[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (1))){
var state_25411__$1 = state_25411;
var statearr_25420_25502 = state_25411__$1;
(statearr_25420_25502[(2)] = null);

(statearr_25420_25502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (24))){
var inst_25310 = (state_25411[(7)]);
var inst_25329 = (state_25411[(2)]);
var inst_25330 = cljs.core.next.call(null,inst_25310);
var inst_25288 = inst_25330;
var inst_25289 = null;
var inst_25290 = (0);
var inst_25291 = (0);
var state_25411__$1 = (function (){var statearr_25421 = state_25411;
(statearr_25421[(13)] = inst_25291);

(statearr_25421[(14)] = inst_25329);

(statearr_25421[(15)] = inst_25290);

(statearr_25421[(16)] = inst_25288);

(statearr_25421[(17)] = inst_25289);

return statearr_25421;
})();
var statearr_25422_25503 = state_25411__$1;
(statearr_25422_25503[(2)] = null);

(statearr_25422_25503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (39))){
var state_25411__$1 = state_25411;
var statearr_25426_25504 = state_25411__$1;
(statearr_25426_25504[(2)] = null);

(statearr_25426_25504[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (4))){
var inst_25279 = (state_25411[(9)]);
var inst_25279__$1 = (state_25411[(2)]);
var inst_25280 = (inst_25279__$1 == null);
var state_25411__$1 = (function (){var statearr_25427 = state_25411;
(statearr_25427[(9)] = inst_25279__$1);

return statearr_25427;
})();
if(cljs.core.truth_(inst_25280)){
var statearr_25428_25505 = state_25411__$1;
(statearr_25428_25505[(1)] = (5));

} else {
var statearr_25429_25506 = state_25411__$1;
(statearr_25429_25506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (15))){
var inst_25291 = (state_25411[(13)]);
var inst_25290 = (state_25411[(15)]);
var inst_25288 = (state_25411[(16)]);
var inst_25289 = (state_25411[(17)]);
var inst_25306 = (state_25411[(2)]);
var inst_25307 = (inst_25291 + (1));
var tmp25423 = inst_25290;
var tmp25424 = inst_25288;
var tmp25425 = inst_25289;
var inst_25288__$1 = tmp25424;
var inst_25289__$1 = tmp25425;
var inst_25290__$1 = tmp25423;
var inst_25291__$1 = inst_25307;
var state_25411__$1 = (function (){var statearr_25430 = state_25411;
(statearr_25430[(18)] = inst_25306);

(statearr_25430[(13)] = inst_25291__$1);

(statearr_25430[(15)] = inst_25290__$1);

(statearr_25430[(16)] = inst_25288__$1);

(statearr_25430[(17)] = inst_25289__$1);

return statearr_25430;
})();
var statearr_25431_25507 = state_25411__$1;
(statearr_25431_25507[(2)] = null);

(statearr_25431_25507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (21))){
var inst_25333 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
var statearr_25435_25508 = state_25411__$1;
(statearr_25435_25508[(2)] = inst_25333);

(statearr_25435_25508[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (31))){
var inst_25359 = (state_25411[(11)]);
var inst_25363 = done.call(null,null);
var inst_25364 = cljs.core.async.untap_STAR_.call(null,m,inst_25359);
var state_25411__$1 = (function (){var statearr_25436 = state_25411;
(statearr_25436[(19)] = inst_25363);

return statearr_25436;
})();
var statearr_25437_25509 = state_25411__$1;
(statearr_25437_25509[(2)] = inst_25364);

(statearr_25437_25509[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (32))){
var inst_25353 = (state_25411[(20)]);
var inst_25354 = (state_25411[(10)]);
var inst_25351 = (state_25411[(21)]);
var inst_25352 = (state_25411[(12)]);
var inst_25366 = (state_25411[(2)]);
var inst_25367 = (inst_25354 + (1));
var tmp25432 = inst_25353;
var tmp25433 = inst_25351;
var tmp25434 = inst_25352;
var inst_25351__$1 = tmp25433;
var inst_25352__$1 = tmp25434;
var inst_25353__$1 = tmp25432;
var inst_25354__$1 = inst_25367;
var state_25411__$1 = (function (){var statearr_25438 = state_25411;
(statearr_25438[(22)] = inst_25366);

(statearr_25438[(20)] = inst_25353__$1);

(statearr_25438[(10)] = inst_25354__$1);

(statearr_25438[(21)] = inst_25351__$1);

(statearr_25438[(12)] = inst_25352__$1);

return statearr_25438;
})();
var statearr_25439_25510 = state_25411__$1;
(statearr_25439_25510[(2)] = null);

(statearr_25439_25510[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (40))){
var inst_25379 = (state_25411[(23)]);
var inst_25383 = done.call(null,null);
var inst_25384 = cljs.core.async.untap_STAR_.call(null,m,inst_25379);
var state_25411__$1 = (function (){var statearr_25440 = state_25411;
(statearr_25440[(24)] = inst_25383);

return statearr_25440;
})();
var statearr_25441_25511 = state_25411__$1;
(statearr_25441_25511[(2)] = inst_25384);

(statearr_25441_25511[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (33))){
var inst_25370 = (state_25411[(25)]);
var inst_25372 = cljs.core.chunked_seq_QMARK_.call(null,inst_25370);
var state_25411__$1 = state_25411;
if(inst_25372){
var statearr_25442_25512 = state_25411__$1;
(statearr_25442_25512[(1)] = (36));

} else {
var statearr_25443_25513 = state_25411__$1;
(statearr_25443_25513[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (13))){
var inst_25300 = (state_25411[(26)]);
var inst_25303 = cljs.core.async.close_BANG_.call(null,inst_25300);
var state_25411__$1 = state_25411;
var statearr_25444_25514 = state_25411__$1;
(statearr_25444_25514[(2)] = inst_25303);

(statearr_25444_25514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (22))){
var inst_25323 = (state_25411[(8)]);
var inst_25326 = cljs.core.async.close_BANG_.call(null,inst_25323);
var state_25411__$1 = state_25411;
var statearr_25445_25515 = state_25411__$1;
(statearr_25445_25515[(2)] = inst_25326);

(statearr_25445_25515[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (36))){
var inst_25370 = (state_25411[(25)]);
var inst_25374 = cljs.core.chunk_first.call(null,inst_25370);
var inst_25375 = cljs.core.chunk_rest.call(null,inst_25370);
var inst_25376 = cljs.core.count.call(null,inst_25374);
var inst_25351 = inst_25375;
var inst_25352 = inst_25374;
var inst_25353 = inst_25376;
var inst_25354 = (0);
var state_25411__$1 = (function (){var statearr_25446 = state_25411;
(statearr_25446[(20)] = inst_25353);

(statearr_25446[(10)] = inst_25354);

(statearr_25446[(21)] = inst_25351);

(statearr_25446[(12)] = inst_25352);

return statearr_25446;
})();
var statearr_25447_25516 = state_25411__$1;
(statearr_25447_25516[(2)] = null);

(statearr_25447_25516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (41))){
var inst_25370 = (state_25411[(25)]);
var inst_25386 = (state_25411[(2)]);
var inst_25387 = cljs.core.next.call(null,inst_25370);
var inst_25351 = inst_25387;
var inst_25352 = null;
var inst_25353 = (0);
var inst_25354 = (0);
var state_25411__$1 = (function (){var statearr_25448 = state_25411;
(statearr_25448[(20)] = inst_25353);

(statearr_25448[(27)] = inst_25386);

(statearr_25448[(10)] = inst_25354);

(statearr_25448[(21)] = inst_25351);

(statearr_25448[(12)] = inst_25352);

return statearr_25448;
})();
var statearr_25449_25517 = state_25411__$1;
(statearr_25449_25517[(2)] = null);

(statearr_25449_25517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (43))){
var state_25411__$1 = state_25411;
var statearr_25450_25518 = state_25411__$1;
(statearr_25450_25518[(2)] = null);

(statearr_25450_25518[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (29))){
var inst_25395 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
var statearr_25451_25519 = state_25411__$1;
(statearr_25451_25519[(2)] = inst_25395);

(statearr_25451_25519[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (44))){
var inst_25404 = (state_25411[(2)]);
var state_25411__$1 = (function (){var statearr_25452 = state_25411;
(statearr_25452[(28)] = inst_25404);

return statearr_25452;
})();
var statearr_25453_25520 = state_25411__$1;
(statearr_25453_25520[(2)] = null);

(statearr_25453_25520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (6))){
var inst_25343 = (state_25411[(29)]);
var inst_25342 = cljs.core.deref.call(null,cs);
var inst_25343__$1 = cljs.core.keys.call(null,inst_25342);
var inst_25344 = cljs.core.count.call(null,inst_25343__$1);
var inst_25345 = cljs.core.reset_BANG_.call(null,dctr,inst_25344);
var inst_25350 = cljs.core.seq.call(null,inst_25343__$1);
var inst_25351 = inst_25350;
var inst_25352 = null;
var inst_25353 = (0);
var inst_25354 = (0);
var state_25411__$1 = (function (){var statearr_25454 = state_25411;
(statearr_25454[(29)] = inst_25343__$1);

(statearr_25454[(30)] = inst_25345);

(statearr_25454[(20)] = inst_25353);

(statearr_25454[(10)] = inst_25354);

(statearr_25454[(21)] = inst_25351);

(statearr_25454[(12)] = inst_25352);

return statearr_25454;
})();
var statearr_25455_25521 = state_25411__$1;
(statearr_25455_25521[(2)] = null);

(statearr_25455_25521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (28))){
var inst_25370 = (state_25411[(25)]);
var inst_25351 = (state_25411[(21)]);
var inst_25370__$1 = cljs.core.seq.call(null,inst_25351);
var state_25411__$1 = (function (){var statearr_25456 = state_25411;
(statearr_25456[(25)] = inst_25370__$1);

return statearr_25456;
})();
if(inst_25370__$1){
var statearr_25457_25522 = state_25411__$1;
(statearr_25457_25522[(1)] = (33));

} else {
var statearr_25458_25523 = state_25411__$1;
(statearr_25458_25523[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (25))){
var inst_25353 = (state_25411[(20)]);
var inst_25354 = (state_25411[(10)]);
var inst_25356 = (inst_25354 < inst_25353);
var inst_25357 = inst_25356;
var state_25411__$1 = state_25411;
if(cljs.core.truth_(inst_25357)){
var statearr_25459_25524 = state_25411__$1;
(statearr_25459_25524[(1)] = (27));

} else {
var statearr_25460_25525 = state_25411__$1;
(statearr_25460_25525[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (34))){
var state_25411__$1 = state_25411;
var statearr_25461_25526 = state_25411__$1;
(statearr_25461_25526[(2)] = null);

(statearr_25461_25526[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (17))){
var state_25411__$1 = state_25411;
var statearr_25462_25527 = state_25411__$1;
(statearr_25462_25527[(2)] = null);

(statearr_25462_25527[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (3))){
var inst_25409 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25411__$1,inst_25409);
} else {
if((state_val_25412 === (12))){
var inst_25338 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
var statearr_25463_25528 = state_25411__$1;
(statearr_25463_25528[(2)] = inst_25338);

(statearr_25463_25528[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (2))){
var state_25411__$1 = state_25411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25411__$1,(4),ch);
} else {
if((state_val_25412 === (23))){
var state_25411__$1 = state_25411;
var statearr_25464_25529 = state_25411__$1;
(statearr_25464_25529[(2)] = null);

(statearr_25464_25529[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (35))){
var inst_25393 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
var statearr_25465_25530 = state_25411__$1;
(statearr_25465_25530[(2)] = inst_25393);

(statearr_25465_25530[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (19))){
var inst_25310 = (state_25411[(7)]);
var inst_25314 = cljs.core.chunk_first.call(null,inst_25310);
var inst_25315 = cljs.core.chunk_rest.call(null,inst_25310);
var inst_25316 = cljs.core.count.call(null,inst_25314);
var inst_25288 = inst_25315;
var inst_25289 = inst_25314;
var inst_25290 = inst_25316;
var inst_25291 = (0);
var state_25411__$1 = (function (){var statearr_25466 = state_25411;
(statearr_25466[(13)] = inst_25291);

(statearr_25466[(15)] = inst_25290);

(statearr_25466[(16)] = inst_25288);

(statearr_25466[(17)] = inst_25289);

return statearr_25466;
})();
var statearr_25467_25531 = state_25411__$1;
(statearr_25467_25531[(2)] = null);

(statearr_25467_25531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (11))){
var inst_25310 = (state_25411[(7)]);
var inst_25288 = (state_25411[(16)]);
var inst_25310__$1 = cljs.core.seq.call(null,inst_25288);
var state_25411__$1 = (function (){var statearr_25468 = state_25411;
(statearr_25468[(7)] = inst_25310__$1);

return statearr_25468;
})();
if(inst_25310__$1){
var statearr_25469_25532 = state_25411__$1;
(statearr_25469_25532[(1)] = (16));

} else {
var statearr_25470_25533 = state_25411__$1;
(statearr_25470_25533[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (9))){
var inst_25340 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
var statearr_25471_25534 = state_25411__$1;
(statearr_25471_25534[(2)] = inst_25340);

(statearr_25471_25534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (5))){
var inst_25286 = cljs.core.deref.call(null,cs);
var inst_25287 = cljs.core.seq.call(null,inst_25286);
var inst_25288 = inst_25287;
var inst_25289 = null;
var inst_25290 = (0);
var inst_25291 = (0);
var state_25411__$1 = (function (){var statearr_25472 = state_25411;
(statearr_25472[(13)] = inst_25291);

(statearr_25472[(15)] = inst_25290);

(statearr_25472[(16)] = inst_25288);

(statearr_25472[(17)] = inst_25289);

return statearr_25472;
})();
var statearr_25473_25535 = state_25411__$1;
(statearr_25473_25535[(2)] = null);

(statearr_25473_25535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (14))){
var state_25411__$1 = state_25411;
var statearr_25474_25536 = state_25411__$1;
(statearr_25474_25536[(2)] = null);

(statearr_25474_25536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (45))){
var inst_25401 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
var statearr_25475_25537 = state_25411__$1;
(statearr_25475_25537[(2)] = inst_25401);

(statearr_25475_25537[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (26))){
var inst_25343 = (state_25411[(29)]);
var inst_25397 = (state_25411[(2)]);
var inst_25398 = cljs.core.seq.call(null,inst_25343);
var state_25411__$1 = (function (){var statearr_25476 = state_25411;
(statearr_25476[(31)] = inst_25397);

return statearr_25476;
})();
if(inst_25398){
var statearr_25477_25538 = state_25411__$1;
(statearr_25477_25538[(1)] = (42));

} else {
var statearr_25478_25539 = state_25411__$1;
(statearr_25478_25539[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (16))){
var inst_25310 = (state_25411[(7)]);
var inst_25312 = cljs.core.chunked_seq_QMARK_.call(null,inst_25310);
var state_25411__$1 = state_25411;
if(inst_25312){
var statearr_25479_25540 = state_25411__$1;
(statearr_25479_25540[(1)] = (19));

} else {
var statearr_25480_25541 = state_25411__$1;
(statearr_25480_25541[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (38))){
var inst_25390 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
var statearr_25481_25542 = state_25411__$1;
(statearr_25481_25542[(2)] = inst_25390);

(statearr_25481_25542[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (30))){
var state_25411__$1 = state_25411;
var statearr_25482_25543 = state_25411__$1;
(statearr_25482_25543[(2)] = null);

(statearr_25482_25543[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (10))){
var inst_25291 = (state_25411[(13)]);
var inst_25289 = (state_25411[(17)]);
var inst_25299 = cljs.core._nth.call(null,inst_25289,inst_25291);
var inst_25300 = cljs.core.nth.call(null,inst_25299,(0),null);
var inst_25301 = cljs.core.nth.call(null,inst_25299,(1),null);
var state_25411__$1 = (function (){var statearr_25483 = state_25411;
(statearr_25483[(26)] = inst_25300);

return statearr_25483;
})();
if(cljs.core.truth_(inst_25301)){
var statearr_25484_25544 = state_25411__$1;
(statearr_25484_25544[(1)] = (13));

} else {
var statearr_25485_25545 = state_25411__$1;
(statearr_25485_25545[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (18))){
var inst_25336 = (state_25411[(2)]);
var state_25411__$1 = state_25411;
var statearr_25486_25546 = state_25411__$1;
(statearr_25486_25546[(2)] = inst_25336);

(statearr_25486_25546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (42))){
var state_25411__$1 = state_25411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25411__$1,(45),dchan);
} else {
if((state_val_25412 === (37))){
var inst_25279 = (state_25411[(9)]);
var inst_25379 = (state_25411[(23)]);
var inst_25370 = (state_25411[(25)]);
var inst_25379__$1 = cljs.core.first.call(null,inst_25370);
var inst_25380 = cljs.core.async.put_BANG_.call(null,inst_25379__$1,inst_25279,done);
var state_25411__$1 = (function (){var statearr_25487 = state_25411;
(statearr_25487[(23)] = inst_25379__$1);

return statearr_25487;
})();
if(cljs.core.truth_(inst_25380)){
var statearr_25488_25547 = state_25411__$1;
(statearr_25488_25547[(1)] = (39));

} else {
var statearr_25489_25548 = state_25411__$1;
(statearr_25489_25548[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25412 === (8))){
var inst_25291 = (state_25411[(13)]);
var inst_25290 = (state_25411[(15)]);
var inst_25293 = (inst_25291 < inst_25290);
var inst_25294 = inst_25293;
var state_25411__$1 = state_25411;
if(cljs.core.truth_(inst_25294)){
var statearr_25490_25549 = state_25411__$1;
(statearr_25490_25549[(1)] = (10));

} else {
var statearr_25491_25550 = state_25411__$1;
(statearr_25491_25550[(1)] = (11));

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
});})(c__24678__auto___25496,cs,m,dchan,dctr,done))
;
return ((function (switch__24583__auto__,c__24678__auto___25496,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24584__auto__ = null;
var cljs$core$async$mult_$_state_machine__24584__auto____0 = (function (){
var statearr_25492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25492[(0)] = cljs$core$async$mult_$_state_machine__24584__auto__);

(statearr_25492[(1)] = (1));

return statearr_25492;
});
var cljs$core$async$mult_$_state_machine__24584__auto____1 = (function (state_25411){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_25411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e25493){if((e25493 instanceof Object)){
var ex__24587__auto__ = e25493;
var statearr_25494_25551 = state_25411;
(statearr_25494_25551[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25552 = state_25411;
state_25411 = G__25552;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24584__auto__ = function(state_25411){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24584__auto____1.call(this,state_25411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24584__auto____0;
cljs$core$async$mult_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24584__auto____1;
return cljs$core$async$mult_$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___25496,cs,m,dchan,dctr,done))
})();
var state__24680__auto__ = (function (){var statearr_25495 = f__24679__auto__.call(null);
(statearr_25495[(6)] = c__24678__auto___25496);

return statearr_25495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___25496,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25554 = arguments.length;
switch (G__25554) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25566 = arguments.length;
var i__4731__auto___25567 = (0);
while(true){
if((i__4731__auto___25567 < len__4730__auto___25566)){
args__4736__auto__.push((arguments[i__4731__auto___25567]));

var G__25568 = (i__4731__auto___25567 + (1));
i__4731__auto___25567 = G__25568;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25560){
var map__25561 = p__25560;
var map__25561__$1 = (((((!((map__25561 == null))))?(((((map__25561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25561):map__25561);
var opts = map__25561__$1;
var statearr_25563_25569 = state;
(statearr_25563_25569[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__25561,map__25561__$1,opts){
return (function (val){
var statearr_25564_25570 = state;
(statearr_25564_25570[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25561,map__25561__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_25565_25571 = state;
(statearr_25565_25571[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25556){
var G__25557 = cljs.core.first.call(null,seq25556);
var seq25556__$1 = cljs.core.next.call(null,seq25556);
var G__25558 = cljs.core.first.call(null,seq25556__$1);
var seq25556__$2 = cljs.core.next.call(null,seq25556__$1);
var G__25559 = cljs.core.first.call(null,seq25556__$2);
var seq25556__$3 = cljs.core.next.call(null,seq25556__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25557,G__25558,G__25559,seq25556__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25572 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25573){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25573 = meta25573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25574,meta25573__$1){
var self__ = this;
var _25574__$1 = this;
return (new cljs.core.async.t_cljs$core$async25572(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25573__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25574){
var self__ = this;
var _25574__$1 = this;
return self__.meta25573;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25573","meta25573",-479512866,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25572";

cljs.core.async.t_cljs$core$async25572.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25572");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25572.
 */
cljs.core.async.__GT_t_cljs$core$async25572 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25572(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25573){
return (new cljs.core.async.t_cljs$core$async25572(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25573));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25572(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24678__auto___25737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___25737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___25737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25676){
var state_val_25677 = (state_25676[(1)]);
if((state_val_25677 === (7))){
var inst_25591 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
var statearr_25678_25738 = state_25676__$1;
(statearr_25678_25738[(2)] = inst_25591);

(statearr_25678_25738[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (20))){
var inst_25603 = (state_25676[(7)]);
var state_25676__$1 = state_25676;
var statearr_25679_25739 = state_25676__$1;
(statearr_25679_25739[(2)] = inst_25603);

(statearr_25679_25739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (27))){
var state_25676__$1 = state_25676;
var statearr_25680_25740 = state_25676__$1;
(statearr_25680_25740[(2)] = null);

(statearr_25680_25740[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (1))){
var inst_25578 = (state_25676[(8)]);
var inst_25578__$1 = calc_state.call(null);
var inst_25580 = (inst_25578__$1 == null);
var inst_25581 = cljs.core.not.call(null,inst_25580);
var state_25676__$1 = (function (){var statearr_25681 = state_25676;
(statearr_25681[(8)] = inst_25578__$1);

return statearr_25681;
})();
if(inst_25581){
var statearr_25682_25741 = state_25676__$1;
(statearr_25682_25741[(1)] = (2));

} else {
var statearr_25683_25742 = state_25676__$1;
(statearr_25683_25742[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (24))){
var inst_25650 = (state_25676[(9)]);
var inst_25627 = (state_25676[(10)]);
var inst_25636 = (state_25676[(11)]);
var inst_25650__$1 = inst_25627.call(null,inst_25636);
var state_25676__$1 = (function (){var statearr_25684 = state_25676;
(statearr_25684[(9)] = inst_25650__$1);

return statearr_25684;
})();
if(cljs.core.truth_(inst_25650__$1)){
var statearr_25685_25743 = state_25676__$1;
(statearr_25685_25743[(1)] = (29));

} else {
var statearr_25686_25744 = state_25676__$1;
(statearr_25686_25744[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (4))){
var inst_25594 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
if(cljs.core.truth_(inst_25594)){
var statearr_25688_25745 = state_25676__$1;
(statearr_25688_25745[(1)] = (8));

} else {
var statearr_25689_25746 = state_25676__$1;
(statearr_25689_25746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (15))){
var inst_25621 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
if(cljs.core.truth_(inst_25621)){
var statearr_25690_25747 = state_25676__$1;
(statearr_25690_25747[(1)] = (19));

} else {
var statearr_25691_25748 = state_25676__$1;
(statearr_25691_25748[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (21))){
var inst_25626 = (state_25676[(12)]);
var inst_25626__$1 = (state_25676[(2)]);
var inst_25627 = cljs.core.get.call(null,inst_25626__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25628 = cljs.core.get.call(null,inst_25626__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25629 = cljs.core.get.call(null,inst_25626__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25676__$1 = (function (){var statearr_25692 = state_25676;
(statearr_25692[(13)] = inst_25628);

(statearr_25692[(12)] = inst_25626__$1);

(statearr_25692[(10)] = inst_25627);

return statearr_25692;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25676__$1,(22),inst_25629);
} else {
if((state_val_25677 === (31))){
var inst_25658 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
if(cljs.core.truth_(inst_25658)){
var statearr_25693_25749 = state_25676__$1;
(statearr_25693_25749[(1)] = (32));

} else {
var statearr_25694_25750 = state_25676__$1;
(statearr_25694_25750[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (32))){
var inst_25635 = (state_25676[(14)]);
var state_25676__$1 = state_25676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25676__$1,(35),out,inst_25635);
} else {
if((state_val_25677 === (33))){
var inst_25626 = (state_25676[(12)]);
var inst_25603 = inst_25626;
var state_25676__$1 = (function (){var statearr_25695 = state_25676;
(statearr_25695[(7)] = inst_25603);

return statearr_25695;
})();
var statearr_25696_25751 = state_25676__$1;
(statearr_25696_25751[(2)] = null);

(statearr_25696_25751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (13))){
var inst_25603 = (state_25676[(7)]);
var inst_25610 = inst_25603.cljs$lang$protocol_mask$partition0$;
var inst_25611 = (inst_25610 & (64));
var inst_25612 = inst_25603.cljs$core$ISeq$;
var inst_25613 = (cljs.core.PROTOCOL_SENTINEL === inst_25612);
var inst_25614 = ((inst_25611) || (inst_25613));
var state_25676__$1 = state_25676;
if(cljs.core.truth_(inst_25614)){
var statearr_25697_25752 = state_25676__$1;
(statearr_25697_25752[(1)] = (16));

} else {
var statearr_25698_25753 = state_25676__$1;
(statearr_25698_25753[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (22))){
var inst_25635 = (state_25676[(14)]);
var inst_25636 = (state_25676[(11)]);
var inst_25634 = (state_25676[(2)]);
var inst_25635__$1 = cljs.core.nth.call(null,inst_25634,(0),null);
var inst_25636__$1 = cljs.core.nth.call(null,inst_25634,(1),null);
var inst_25637 = (inst_25635__$1 == null);
var inst_25638 = cljs.core._EQ_.call(null,inst_25636__$1,change);
var inst_25639 = ((inst_25637) || (inst_25638));
var state_25676__$1 = (function (){var statearr_25699 = state_25676;
(statearr_25699[(14)] = inst_25635__$1);

(statearr_25699[(11)] = inst_25636__$1);

return statearr_25699;
})();
if(cljs.core.truth_(inst_25639)){
var statearr_25700_25754 = state_25676__$1;
(statearr_25700_25754[(1)] = (23));

} else {
var statearr_25701_25755 = state_25676__$1;
(statearr_25701_25755[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (36))){
var inst_25626 = (state_25676[(12)]);
var inst_25603 = inst_25626;
var state_25676__$1 = (function (){var statearr_25702 = state_25676;
(statearr_25702[(7)] = inst_25603);

return statearr_25702;
})();
var statearr_25703_25756 = state_25676__$1;
(statearr_25703_25756[(2)] = null);

(statearr_25703_25756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (29))){
var inst_25650 = (state_25676[(9)]);
var state_25676__$1 = state_25676;
var statearr_25704_25757 = state_25676__$1;
(statearr_25704_25757[(2)] = inst_25650);

(statearr_25704_25757[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (6))){
var state_25676__$1 = state_25676;
var statearr_25705_25758 = state_25676__$1;
(statearr_25705_25758[(2)] = false);

(statearr_25705_25758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (28))){
var inst_25646 = (state_25676[(2)]);
var inst_25647 = calc_state.call(null);
var inst_25603 = inst_25647;
var state_25676__$1 = (function (){var statearr_25706 = state_25676;
(statearr_25706[(7)] = inst_25603);

(statearr_25706[(15)] = inst_25646);

return statearr_25706;
})();
var statearr_25707_25759 = state_25676__$1;
(statearr_25707_25759[(2)] = null);

(statearr_25707_25759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (25))){
var inst_25672 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
var statearr_25708_25760 = state_25676__$1;
(statearr_25708_25760[(2)] = inst_25672);

(statearr_25708_25760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (34))){
var inst_25670 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
var statearr_25709_25761 = state_25676__$1;
(statearr_25709_25761[(2)] = inst_25670);

(statearr_25709_25761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (17))){
var state_25676__$1 = state_25676;
var statearr_25710_25762 = state_25676__$1;
(statearr_25710_25762[(2)] = false);

(statearr_25710_25762[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (3))){
var state_25676__$1 = state_25676;
var statearr_25711_25763 = state_25676__$1;
(statearr_25711_25763[(2)] = false);

(statearr_25711_25763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (12))){
var inst_25674 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25676__$1,inst_25674);
} else {
if((state_val_25677 === (2))){
var inst_25578 = (state_25676[(8)]);
var inst_25583 = inst_25578.cljs$lang$protocol_mask$partition0$;
var inst_25584 = (inst_25583 & (64));
var inst_25585 = inst_25578.cljs$core$ISeq$;
var inst_25586 = (cljs.core.PROTOCOL_SENTINEL === inst_25585);
var inst_25587 = ((inst_25584) || (inst_25586));
var state_25676__$1 = state_25676;
if(cljs.core.truth_(inst_25587)){
var statearr_25712_25764 = state_25676__$1;
(statearr_25712_25764[(1)] = (5));

} else {
var statearr_25713_25765 = state_25676__$1;
(statearr_25713_25765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (23))){
var inst_25635 = (state_25676[(14)]);
var inst_25641 = (inst_25635 == null);
var state_25676__$1 = state_25676;
if(cljs.core.truth_(inst_25641)){
var statearr_25714_25766 = state_25676__$1;
(statearr_25714_25766[(1)] = (26));

} else {
var statearr_25715_25767 = state_25676__$1;
(statearr_25715_25767[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (35))){
var inst_25661 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
if(cljs.core.truth_(inst_25661)){
var statearr_25716_25768 = state_25676__$1;
(statearr_25716_25768[(1)] = (36));

} else {
var statearr_25717_25769 = state_25676__$1;
(statearr_25717_25769[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (19))){
var inst_25603 = (state_25676[(7)]);
var inst_25623 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25603);
var state_25676__$1 = state_25676;
var statearr_25718_25770 = state_25676__$1;
(statearr_25718_25770[(2)] = inst_25623);

(statearr_25718_25770[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (11))){
var inst_25603 = (state_25676[(7)]);
var inst_25607 = (inst_25603 == null);
var inst_25608 = cljs.core.not.call(null,inst_25607);
var state_25676__$1 = state_25676;
if(inst_25608){
var statearr_25719_25771 = state_25676__$1;
(statearr_25719_25771[(1)] = (13));

} else {
var statearr_25720_25772 = state_25676__$1;
(statearr_25720_25772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (9))){
var inst_25578 = (state_25676[(8)]);
var state_25676__$1 = state_25676;
var statearr_25721_25773 = state_25676__$1;
(statearr_25721_25773[(2)] = inst_25578);

(statearr_25721_25773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (5))){
var state_25676__$1 = state_25676;
var statearr_25722_25774 = state_25676__$1;
(statearr_25722_25774[(2)] = true);

(statearr_25722_25774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (14))){
var state_25676__$1 = state_25676;
var statearr_25723_25775 = state_25676__$1;
(statearr_25723_25775[(2)] = false);

(statearr_25723_25775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (26))){
var inst_25636 = (state_25676[(11)]);
var inst_25643 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25636);
var state_25676__$1 = state_25676;
var statearr_25724_25776 = state_25676__$1;
(statearr_25724_25776[(2)] = inst_25643);

(statearr_25724_25776[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (16))){
var state_25676__$1 = state_25676;
var statearr_25725_25777 = state_25676__$1;
(statearr_25725_25777[(2)] = true);

(statearr_25725_25777[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (38))){
var inst_25666 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
var statearr_25726_25778 = state_25676__$1;
(statearr_25726_25778[(2)] = inst_25666);

(statearr_25726_25778[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (30))){
var inst_25628 = (state_25676[(13)]);
var inst_25627 = (state_25676[(10)]);
var inst_25636 = (state_25676[(11)]);
var inst_25653 = cljs.core.empty_QMARK_.call(null,inst_25627);
var inst_25654 = inst_25628.call(null,inst_25636);
var inst_25655 = cljs.core.not.call(null,inst_25654);
var inst_25656 = ((inst_25653) && (inst_25655));
var state_25676__$1 = state_25676;
var statearr_25727_25779 = state_25676__$1;
(statearr_25727_25779[(2)] = inst_25656);

(statearr_25727_25779[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (10))){
var inst_25578 = (state_25676[(8)]);
var inst_25599 = (state_25676[(2)]);
var inst_25600 = cljs.core.get.call(null,inst_25599,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25601 = cljs.core.get.call(null,inst_25599,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25602 = cljs.core.get.call(null,inst_25599,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25603 = inst_25578;
var state_25676__$1 = (function (){var statearr_25728 = state_25676;
(statearr_25728[(16)] = inst_25602);

(statearr_25728[(7)] = inst_25603);

(statearr_25728[(17)] = inst_25600);

(statearr_25728[(18)] = inst_25601);

return statearr_25728;
})();
var statearr_25729_25780 = state_25676__$1;
(statearr_25729_25780[(2)] = null);

(statearr_25729_25780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (18))){
var inst_25618 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
var statearr_25730_25781 = state_25676__$1;
(statearr_25730_25781[(2)] = inst_25618);

(statearr_25730_25781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (37))){
var state_25676__$1 = state_25676;
var statearr_25731_25782 = state_25676__$1;
(statearr_25731_25782[(2)] = null);

(statearr_25731_25782[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (8))){
var inst_25578 = (state_25676[(8)]);
var inst_25596 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25578);
var state_25676__$1 = state_25676;
var statearr_25732_25783 = state_25676__$1;
(statearr_25732_25783[(2)] = inst_25596);

(statearr_25732_25783[(1)] = (10));


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
});})(c__24678__auto___25737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24583__auto__,c__24678__auto___25737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24584__auto__ = null;
var cljs$core$async$mix_$_state_machine__24584__auto____0 = (function (){
var statearr_25733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25733[(0)] = cljs$core$async$mix_$_state_machine__24584__auto__);

(statearr_25733[(1)] = (1));

return statearr_25733;
});
var cljs$core$async$mix_$_state_machine__24584__auto____1 = (function (state_25676){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_25676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e25734){if((e25734 instanceof Object)){
var ex__24587__auto__ = e25734;
var statearr_25735_25784 = state_25676;
(statearr_25735_25784[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25785 = state_25676;
state_25676 = G__25785;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24584__auto__ = function(state_25676){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24584__auto____1.call(this,state_25676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24584__auto____0;
cljs$core$async$mix_$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24584__auto____1;
return cljs$core$async$mix_$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___25737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24680__auto__ = (function (){var statearr_25736 = f__24679__auto__.call(null);
(statearr_25736[(6)] = c__24678__auto___25737);

return statearr_25736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___25737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25787 = arguments.length;
switch (G__25787) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25791 = arguments.length;
switch (G__25791) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__25789_SHARP_){
if(cljs.core.truth_(p1__25789_SHARP_.call(null,topic))){
return p1__25789_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25789_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25792 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25792 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25793){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25793 = meta25793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25794,meta25793__$1){
var self__ = this;
var _25794__$1 = this;
return (new cljs.core.async.t_cljs$core$async25792(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25793__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25794){
var self__ = this;
var _25794__$1 = this;
return self__.meta25793;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25792.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25792.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25793","meta25793",-879877987,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25792";

cljs.core.async.t_cljs$core$async25792.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25792");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25792.
 */
cljs.core.async.__GT_t_cljs$core$async25792 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25792(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25793){
return (new cljs.core.async.t_cljs$core$async25792(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25793));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25792(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24678__auto___25912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___25912,mults,ensure_mult,p){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___25912,mults,ensure_mult,p){
return (function (state_25866){
var state_val_25867 = (state_25866[(1)]);
if((state_val_25867 === (7))){
var inst_25862 = (state_25866[(2)]);
var state_25866__$1 = state_25866;
var statearr_25868_25913 = state_25866__$1;
(statearr_25868_25913[(2)] = inst_25862);

(statearr_25868_25913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (20))){
var state_25866__$1 = state_25866;
var statearr_25869_25914 = state_25866__$1;
(statearr_25869_25914[(2)] = null);

(statearr_25869_25914[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (1))){
var state_25866__$1 = state_25866;
var statearr_25870_25915 = state_25866__$1;
(statearr_25870_25915[(2)] = null);

(statearr_25870_25915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (24))){
var inst_25845 = (state_25866[(7)]);
var inst_25854 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25845);
var state_25866__$1 = state_25866;
var statearr_25871_25916 = state_25866__$1;
(statearr_25871_25916[(2)] = inst_25854);

(statearr_25871_25916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (4))){
var inst_25797 = (state_25866[(8)]);
var inst_25797__$1 = (state_25866[(2)]);
var inst_25798 = (inst_25797__$1 == null);
var state_25866__$1 = (function (){var statearr_25872 = state_25866;
(statearr_25872[(8)] = inst_25797__$1);

return statearr_25872;
})();
if(cljs.core.truth_(inst_25798)){
var statearr_25873_25917 = state_25866__$1;
(statearr_25873_25917[(1)] = (5));

} else {
var statearr_25874_25918 = state_25866__$1;
(statearr_25874_25918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (15))){
var inst_25839 = (state_25866[(2)]);
var state_25866__$1 = state_25866;
var statearr_25875_25919 = state_25866__$1;
(statearr_25875_25919[(2)] = inst_25839);

(statearr_25875_25919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (21))){
var inst_25859 = (state_25866[(2)]);
var state_25866__$1 = (function (){var statearr_25876 = state_25866;
(statearr_25876[(9)] = inst_25859);

return statearr_25876;
})();
var statearr_25877_25920 = state_25866__$1;
(statearr_25877_25920[(2)] = null);

(statearr_25877_25920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (13))){
var inst_25821 = (state_25866[(10)]);
var inst_25823 = cljs.core.chunked_seq_QMARK_.call(null,inst_25821);
var state_25866__$1 = state_25866;
if(inst_25823){
var statearr_25878_25921 = state_25866__$1;
(statearr_25878_25921[(1)] = (16));

} else {
var statearr_25879_25922 = state_25866__$1;
(statearr_25879_25922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (22))){
var inst_25851 = (state_25866[(2)]);
var state_25866__$1 = state_25866;
if(cljs.core.truth_(inst_25851)){
var statearr_25880_25923 = state_25866__$1;
(statearr_25880_25923[(1)] = (23));

} else {
var statearr_25881_25924 = state_25866__$1;
(statearr_25881_25924[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (6))){
var inst_25797 = (state_25866[(8)]);
var inst_25847 = (state_25866[(11)]);
var inst_25845 = (state_25866[(7)]);
var inst_25845__$1 = topic_fn.call(null,inst_25797);
var inst_25846 = cljs.core.deref.call(null,mults);
var inst_25847__$1 = cljs.core.get.call(null,inst_25846,inst_25845__$1);
var state_25866__$1 = (function (){var statearr_25882 = state_25866;
(statearr_25882[(11)] = inst_25847__$1);

(statearr_25882[(7)] = inst_25845__$1);

return statearr_25882;
})();
if(cljs.core.truth_(inst_25847__$1)){
var statearr_25883_25925 = state_25866__$1;
(statearr_25883_25925[(1)] = (19));

} else {
var statearr_25884_25926 = state_25866__$1;
(statearr_25884_25926[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (25))){
var inst_25856 = (state_25866[(2)]);
var state_25866__$1 = state_25866;
var statearr_25885_25927 = state_25866__$1;
(statearr_25885_25927[(2)] = inst_25856);

(statearr_25885_25927[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (17))){
var inst_25821 = (state_25866[(10)]);
var inst_25830 = cljs.core.first.call(null,inst_25821);
var inst_25831 = cljs.core.async.muxch_STAR_.call(null,inst_25830);
var inst_25832 = cljs.core.async.close_BANG_.call(null,inst_25831);
var inst_25833 = cljs.core.next.call(null,inst_25821);
var inst_25807 = inst_25833;
var inst_25808 = null;
var inst_25809 = (0);
var inst_25810 = (0);
var state_25866__$1 = (function (){var statearr_25886 = state_25866;
(statearr_25886[(12)] = inst_25810);

(statearr_25886[(13)] = inst_25807);

(statearr_25886[(14)] = inst_25832);

(statearr_25886[(15)] = inst_25809);

(statearr_25886[(16)] = inst_25808);

return statearr_25886;
})();
var statearr_25887_25928 = state_25866__$1;
(statearr_25887_25928[(2)] = null);

(statearr_25887_25928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (3))){
var inst_25864 = (state_25866[(2)]);
var state_25866__$1 = state_25866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25866__$1,inst_25864);
} else {
if((state_val_25867 === (12))){
var inst_25841 = (state_25866[(2)]);
var state_25866__$1 = state_25866;
var statearr_25888_25929 = state_25866__$1;
(statearr_25888_25929[(2)] = inst_25841);

(statearr_25888_25929[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (2))){
var state_25866__$1 = state_25866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25866__$1,(4),ch);
} else {
if((state_val_25867 === (23))){
var state_25866__$1 = state_25866;
var statearr_25889_25930 = state_25866__$1;
(statearr_25889_25930[(2)] = null);

(statearr_25889_25930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (19))){
var inst_25797 = (state_25866[(8)]);
var inst_25847 = (state_25866[(11)]);
var inst_25849 = cljs.core.async.muxch_STAR_.call(null,inst_25847);
var state_25866__$1 = state_25866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25866__$1,(22),inst_25849,inst_25797);
} else {
if((state_val_25867 === (11))){
var inst_25807 = (state_25866[(13)]);
var inst_25821 = (state_25866[(10)]);
var inst_25821__$1 = cljs.core.seq.call(null,inst_25807);
var state_25866__$1 = (function (){var statearr_25890 = state_25866;
(statearr_25890[(10)] = inst_25821__$1);

return statearr_25890;
})();
if(inst_25821__$1){
var statearr_25891_25931 = state_25866__$1;
(statearr_25891_25931[(1)] = (13));

} else {
var statearr_25892_25932 = state_25866__$1;
(statearr_25892_25932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (9))){
var inst_25843 = (state_25866[(2)]);
var state_25866__$1 = state_25866;
var statearr_25893_25933 = state_25866__$1;
(statearr_25893_25933[(2)] = inst_25843);

(statearr_25893_25933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (5))){
var inst_25804 = cljs.core.deref.call(null,mults);
var inst_25805 = cljs.core.vals.call(null,inst_25804);
var inst_25806 = cljs.core.seq.call(null,inst_25805);
var inst_25807 = inst_25806;
var inst_25808 = null;
var inst_25809 = (0);
var inst_25810 = (0);
var state_25866__$1 = (function (){var statearr_25894 = state_25866;
(statearr_25894[(12)] = inst_25810);

(statearr_25894[(13)] = inst_25807);

(statearr_25894[(15)] = inst_25809);

(statearr_25894[(16)] = inst_25808);

return statearr_25894;
})();
var statearr_25895_25934 = state_25866__$1;
(statearr_25895_25934[(2)] = null);

(statearr_25895_25934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (14))){
var state_25866__$1 = state_25866;
var statearr_25899_25935 = state_25866__$1;
(statearr_25899_25935[(2)] = null);

(statearr_25899_25935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (16))){
var inst_25821 = (state_25866[(10)]);
var inst_25825 = cljs.core.chunk_first.call(null,inst_25821);
var inst_25826 = cljs.core.chunk_rest.call(null,inst_25821);
var inst_25827 = cljs.core.count.call(null,inst_25825);
var inst_25807 = inst_25826;
var inst_25808 = inst_25825;
var inst_25809 = inst_25827;
var inst_25810 = (0);
var state_25866__$1 = (function (){var statearr_25900 = state_25866;
(statearr_25900[(12)] = inst_25810);

(statearr_25900[(13)] = inst_25807);

(statearr_25900[(15)] = inst_25809);

(statearr_25900[(16)] = inst_25808);

return statearr_25900;
})();
var statearr_25901_25936 = state_25866__$1;
(statearr_25901_25936[(2)] = null);

(statearr_25901_25936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (10))){
var inst_25810 = (state_25866[(12)]);
var inst_25807 = (state_25866[(13)]);
var inst_25809 = (state_25866[(15)]);
var inst_25808 = (state_25866[(16)]);
var inst_25815 = cljs.core._nth.call(null,inst_25808,inst_25810);
var inst_25816 = cljs.core.async.muxch_STAR_.call(null,inst_25815);
var inst_25817 = cljs.core.async.close_BANG_.call(null,inst_25816);
var inst_25818 = (inst_25810 + (1));
var tmp25896 = inst_25807;
var tmp25897 = inst_25809;
var tmp25898 = inst_25808;
var inst_25807__$1 = tmp25896;
var inst_25808__$1 = tmp25898;
var inst_25809__$1 = tmp25897;
var inst_25810__$1 = inst_25818;
var state_25866__$1 = (function (){var statearr_25902 = state_25866;
(statearr_25902[(12)] = inst_25810__$1);

(statearr_25902[(13)] = inst_25807__$1);

(statearr_25902[(15)] = inst_25809__$1);

(statearr_25902[(16)] = inst_25808__$1);

(statearr_25902[(17)] = inst_25817);

return statearr_25902;
})();
var statearr_25903_25937 = state_25866__$1;
(statearr_25903_25937[(2)] = null);

(statearr_25903_25937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (18))){
var inst_25836 = (state_25866[(2)]);
var state_25866__$1 = state_25866;
var statearr_25904_25938 = state_25866__$1;
(statearr_25904_25938[(2)] = inst_25836);

(statearr_25904_25938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (8))){
var inst_25810 = (state_25866[(12)]);
var inst_25809 = (state_25866[(15)]);
var inst_25812 = (inst_25810 < inst_25809);
var inst_25813 = inst_25812;
var state_25866__$1 = state_25866;
if(cljs.core.truth_(inst_25813)){
var statearr_25905_25939 = state_25866__$1;
(statearr_25905_25939[(1)] = (10));

} else {
var statearr_25906_25940 = state_25866__$1;
(statearr_25906_25940[(1)] = (11));

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
});})(c__24678__auto___25912,mults,ensure_mult,p))
;
return ((function (switch__24583__auto__,c__24678__auto___25912,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24584__auto__ = null;
var cljs$core$async$state_machine__24584__auto____0 = (function (){
var statearr_25907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25907[(0)] = cljs$core$async$state_machine__24584__auto__);

(statearr_25907[(1)] = (1));

return statearr_25907;
});
var cljs$core$async$state_machine__24584__auto____1 = (function (state_25866){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_25866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e25908){if((e25908 instanceof Object)){
var ex__24587__auto__ = e25908;
var statearr_25909_25941 = state_25866;
(statearr_25909_25941[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25942 = state_25866;
state_25866 = G__25942;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$state_machine__24584__auto__ = function(state_25866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24584__auto____1.call(this,state_25866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24584__auto____0;
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24584__auto____1;
return cljs$core$async$state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___25912,mults,ensure_mult,p))
})();
var state__24680__auto__ = (function (){var statearr_25910 = f__24679__auto__.call(null);
(statearr_25910[(6)] = c__24678__auto___25912);

return statearr_25910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___25912,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25944 = arguments.length;
switch (G__25944) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25947 = arguments.length;
switch (G__25947) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25950 = arguments.length;
switch (G__25950) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24678__auto___26017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___26017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___26017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25989){
var state_val_25990 = (state_25989[(1)]);
if((state_val_25990 === (7))){
var state_25989__$1 = state_25989;
var statearr_25991_26018 = state_25989__$1;
(statearr_25991_26018[(2)] = null);

(statearr_25991_26018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (1))){
var state_25989__$1 = state_25989;
var statearr_25992_26019 = state_25989__$1;
(statearr_25992_26019[(2)] = null);

(statearr_25992_26019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (4))){
var inst_25953 = (state_25989[(7)]);
var inst_25955 = (inst_25953 < cnt);
var state_25989__$1 = state_25989;
if(cljs.core.truth_(inst_25955)){
var statearr_25993_26020 = state_25989__$1;
(statearr_25993_26020[(1)] = (6));

} else {
var statearr_25994_26021 = state_25989__$1;
(statearr_25994_26021[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (15))){
var inst_25985 = (state_25989[(2)]);
var state_25989__$1 = state_25989;
var statearr_25995_26022 = state_25989__$1;
(statearr_25995_26022[(2)] = inst_25985);

(statearr_25995_26022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (13))){
var inst_25978 = cljs.core.async.close_BANG_.call(null,out);
var state_25989__$1 = state_25989;
var statearr_25996_26023 = state_25989__$1;
(statearr_25996_26023[(2)] = inst_25978);

(statearr_25996_26023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (6))){
var state_25989__$1 = state_25989;
var statearr_25997_26024 = state_25989__$1;
(statearr_25997_26024[(2)] = null);

(statearr_25997_26024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (3))){
var inst_25987 = (state_25989[(2)]);
var state_25989__$1 = state_25989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25989__$1,inst_25987);
} else {
if((state_val_25990 === (12))){
var inst_25975 = (state_25989[(8)]);
var inst_25975__$1 = (state_25989[(2)]);
var inst_25976 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25975__$1);
var state_25989__$1 = (function (){var statearr_25998 = state_25989;
(statearr_25998[(8)] = inst_25975__$1);

return statearr_25998;
})();
if(cljs.core.truth_(inst_25976)){
var statearr_25999_26025 = state_25989__$1;
(statearr_25999_26025[(1)] = (13));

} else {
var statearr_26000_26026 = state_25989__$1;
(statearr_26000_26026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (2))){
var inst_25952 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25953 = (0);
var state_25989__$1 = (function (){var statearr_26001 = state_25989;
(statearr_26001[(9)] = inst_25952);

(statearr_26001[(7)] = inst_25953);

return statearr_26001;
})();
var statearr_26002_26027 = state_25989__$1;
(statearr_26002_26027[(2)] = null);

(statearr_26002_26027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (11))){
var inst_25953 = (state_25989[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25989,(10),Object,null,(9));
var inst_25962 = chs__$1.call(null,inst_25953);
var inst_25963 = done.call(null,inst_25953);
var inst_25964 = cljs.core.async.take_BANG_.call(null,inst_25962,inst_25963);
var state_25989__$1 = state_25989;
var statearr_26003_26028 = state_25989__$1;
(statearr_26003_26028[(2)] = inst_25964);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (9))){
var inst_25953 = (state_25989[(7)]);
var inst_25966 = (state_25989[(2)]);
var inst_25967 = (inst_25953 + (1));
var inst_25953__$1 = inst_25967;
var state_25989__$1 = (function (){var statearr_26004 = state_25989;
(statearr_26004[(10)] = inst_25966);

(statearr_26004[(7)] = inst_25953__$1);

return statearr_26004;
})();
var statearr_26005_26029 = state_25989__$1;
(statearr_26005_26029[(2)] = null);

(statearr_26005_26029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (5))){
var inst_25973 = (state_25989[(2)]);
var state_25989__$1 = (function (){var statearr_26006 = state_25989;
(statearr_26006[(11)] = inst_25973);

return statearr_26006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25989__$1,(12),dchan);
} else {
if((state_val_25990 === (14))){
var inst_25975 = (state_25989[(8)]);
var inst_25980 = cljs.core.apply.call(null,f,inst_25975);
var state_25989__$1 = state_25989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25989__$1,(16),out,inst_25980);
} else {
if((state_val_25990 === (16))){
var inst_25982 = (state_25989[(2)]);
var state_25989__$1 = (function (){var statearr_26007 = state_25989;
(statearr_26007[(12)] = inst_25982);

return statearr_26007;
})();
var statearr_26008_26030 = state_25989__$1;
(statearr_26008_26030[(2)] = null);

(statearr_26008_26030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (10))){
var inst_25957 = (state_25989[(2)]);
var inst_25958 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25989__$1 = (function (){var statearr_26009 = state_25989;
(statearr_26009[(13)] = inst_25957);

return statearr_26009;
})();
var statearr_26010_26031 = state_25989__$1;
(statearr_26010_26031[(2)] = inst_25958);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (8))){
var inst_25971 = (state_25989[(2)]);
var state_25989__$1 = state_25989;
var statearr_26011_26032 = state_25989__$1;
(statearr_26011_26032[(2)] = inst_25971);

(statearr_26011_26032[(1)] = (5));


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
});})(c__24678__auto___26017,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24583__auto__,c__24678__auto___26017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24584__auto__ = null;
var cljs$core$async$state_machine__24584__auto____0 = (function (){
var statearr_26012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26012[(0)] = cljs$core$async$state_machine__24584__auto__);

(statearr_26012[(1)] = (1));

return statearr_26012;
});
var cljs$core$async$state_machine__24584__auto____1 = (function (state_25989){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_25989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e26013){if((e26013 instanceof Object)){
var ex__24587__auto__ = e26013;
var statearr_26014_26033 = state_25989;
(statearr_26014_26033[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26034 = state_25989;
state_25989 = G__26034;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$state_machine__24584__auto__ = function(state_25989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24584__auto____1.call(this,state_25989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24584__auto____0;
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24584__auto____1;
return cljs$core$async$state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___26017,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24680__auto__ = (function (){var statearr_26015 = f__24679__auto__.call(null);
(statearr_26015[(6)] = c__24678__auto___26017);

return statearr_26015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___26017,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26037 = arguments.length;
switch (G__26037) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24678__auto___26091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___26091,out){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___26091,out){
return (function (state_26069){
var state_val_26070 = (state_26069[(1)]);
if((state_val_26070 === (7))){
var inst_26049 = (state_26069[(7)]);
var inst_26048 = (state_26069[(8)]);
var inst_26048__$1 = (state_26069[(2)]);
var inst_26049__$1 = cljs.core.nth.call(null,inst_26048__$1,(0),null);
var inst_26050 = cljs.core.nth.call(null,inst_26048__$1,(1),null);
var inst_26051 = (inst_26049__$1 == null);
var state_26069__$1 = (function (){var statearr_26071 = state_26069;
(statearr_26071[(7)] = inst_26049__$1);

(statearr_26071[(8)] = inst_26048__$1);

(statearr_26071[(9)] = inst_26050);

return statearr_26071;
})();
if(cljs.core.truth_(inst_26051)){
var statearr_26072_26092 = state_26069__$1;
(statearr_26072_26092[(1)] = (8));

} else {
var statearr_26073_26093 = state_26069__$1;
(statearr_26073_26093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (1))){
var inst_26038 = cljs.core.vec.call(null,chs);
var inst_26039 = inst_26038;
var state_26069__$1 = (function (){var statearr_26074 = state_26069;
(statearr_26074[(10)] = inst_26039);

return statearr_26074;
})();
var statearr_26075_26094 = state_26069__$1;
(statearr_26075_26094[(2)] = null);

(statearr_26075_26094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (4))){
var inst_26039 = (state_26069[(10)]);
var state_26069__$1 = state_26069;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26069__$1,(7),inst_26039);
} else {
if((state_val_26070 === (6))){
var inst_26065 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26076_26095 = state_26069__$1;
(statearr_26076_26095[(2)] = inst_26065);

(statearr_26076_26095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (3))){
var inst_26067 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26069__$1,inst_26067);
} else {
if((state_val_26070 === (2))){
var inst_26039 = (state_26069[(10)]);
var inst_26041 = cljs.core.count.call(null,inst_26039);
var inst_26042 = (inst_26041 > (0));
var state_26069__$1 = state_26069;
if(cljs.core.truth_(inst_26042)){
var statearr_26078_26096 = state_26069__$1;
(statearr_26078_26096[(1)] = (4));

} else {
var statearr_26079_26097 = state_26069__$1;
(statearr_26079_26097[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (11))){
var inst_26039 = (state_26069[(10)]);
var inst_26058 = (state_26069[(2)]);
var tmp26077 = inst_26039;
var inst_26039__$1 = tmp26077;
var state_26069__$1 = (function (){var statearr_26080 = state_26069;
(statearr_26080[(11)] = inst_26058);

(statearr_26080[(10)] = inst_26039__$1);

return statearr_26080;
})();
var statearr_26081_26098 = state_26069__$1;
(statearr_26081_26098[(2)] = null);

(statearr_26081_26098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (9))){
var inst_26049 = (state_26069[(7)]);
var state_26069__$1 = state_26069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26069__$1,(11),out,inst_26049);
} else {
if((state_val_26070 === (5))){
var inst_26063 = cljs.core.async.close_BANG_.call(null,out);
var state_26069__$1 = state_26069;
var statearr_26082_26099 = state_26069__$1;
(statearr_26082_26099[(2)] = inst_26063);

(statearr_26082_26099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (10))){
var inst_26061 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26083_26100 = state_26069__$1;
(statearr_26083_26100[(2)] = inst_26061);

(statearr_26083_26100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (8))){
var inst_26049 = (state_26069[(7)]);
var inst_26048 = (state_26069[(8)]);
var inst_26050 = (state_26069[(9)]);
var inst_26039 = (state_26069[(10)]);
var inst_26053 = (function (){var cs = inst_26039;
var vec__26044 = inst_26048;
var v = inst_26049;
var c = inst_26050;
return ((function (cs,vec__26044,v,c,inst_26049,inst_26048,inst_26050,inst_26039,state_val_26070,c__24678__auto___26091,out){
return (function (p1__26035_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26035_SHARP_);
});
;})(cs,vec__26044,v,c,inst_26049,inst_26048,inst_26050,inst_26039,state_val_26070,c__24678__auto___26091,out))
})();
var inst_26054 = cljs.core.filterv.call(null,inst_26053,inst_26039);
var inst_26039__$1 = inst_26054;
var state_26069__$1 = (function (){var statearr_26084 = state_26069;
(statearr_26084[(10)] = inst_26039__$1);

return statearr_26084;
})();
var statearr_26085_26101 = state_26069__$1;
(statearr_26085_26101[(2)] = null);

(statearr_26085_26101[(1)] = (2));


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
});})(c__24678__auto___26091,out))
;
return ((function (switch__24583__auto__,c__24678__auto___26091,out){
return (function() {
var cljs$core$async$state_machine__24584__auto__ = null;
var cljs$core$async$state_machine__24584__auto____0 = (function (){
var statearr_26086 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26086[(0)] = cljs$core$async$state_machine__24584__auto__);

(statearr_26086[(1)] = (1));

return statearr_26086;
});
var cljs$core$async$state_machine__24584__auto____1 = (function (state_26069){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_26069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e26087){if((e26087 instanceof Object)){
var ex__24587__auto__ = e26087;
var statearr_26088_26102 = state_26069;
(statearr_26088_26102[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26103 = state_26069;
state_26069 = G__26103;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$state_machine__24584__auto__ = function(state_26069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24584__auto____1.call(this,state_26069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24584__auto____0;
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24584__auto____1;
return cljs$core$async$state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___26091,out))
})();
var state__24680__auto__ = (function (){var statearr_26089 = f__24679__auto__.call(null);
(statearr_26089[(6)] = c__24678__auto___26091);

return statearr_26089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___26091,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26105 = arguments.length;
switch (G__26105) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24678__auto___26150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___26150,out){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___26150,out){
return (function (state_26129){
var state_val_26130 = (state_26129[(1)]);
if((state_val_26130 === (7))){
var inst_26111 = (state_26129[(7)]);
var inst_26111__$1 = (state_26129[(2)]);
var inst_26112 = (inst_26111__$1 == null);
var inst_26113 = cljs.core.not.call(null,inst_26112);
var state_26129__$1 = (function (){var statearr_26131 = state_26129;
(statearr_26131[(7)] = inst_26111__$1);

return statearr_26131;
})();
if(inst_26113){
var statearr_26132_26151 = state_26129__$1;
(statearr_26132_26151[(1)] = (8));

} else {
var statearr_26133_26152 = state_26129__$1;
(statearr_26133_26152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (1))){
var inst_26106 = (0);
var state_26129__$1 = (function (){var statearr_26134 = state_26129;
(statearr_26134[(8)] = inst_26106);

return statearr_26134;
})();
var statearr_26135_26153 = state_26129__$1;
(statearr_26135_26153[(2)] = null);

(statearr_26135_26153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (4))){
var state_26129__$1 = state_26129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26129__$1,(7),ch);
} else {
if((state_val_26130 === (6))){
var inst_26124 = (state_26129[(2)]);
var state_26129__$1 = state_26129;
var statearr_26136_26154 = state_26129__$1;
(statearr_26136_26154[(2)] = inst_26124);

(statearr_26136_26154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (3))){
var inst_26126 = (state_26129[(2)]);
var inst_26127 = cljs.core.async.close_BANG_.call(null,out);
var state_26129__$1 = (function (){var statearr_26137 = state_26129;
(statearr_26137[(9)] = inst_26126);

return statearr_26137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26129__$1,inst_26127);
} else {
if((state_val_26130 === (2))){
var inst_26106 = (state_26129[(8)]);
var inst_26108 = (inst_26106 < n);
var state_26129__$1 = state_26129;
if(cljs.core.truth_(inst_26108)){
var statearr_26138_26155 = state_26129__$1;
(statearr_26138_26155[(1)] = (4));

} else {
var statearr_26139_26156 = state_26129__$1;
(statearr_26139_26156[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (11))){
var inst_26106 = (state_26129[(8)]);
var inst_26116 = (state_26129[(2)]);
var inst_26117 = (inst_26106 + (1));
var inst_26106__$1 = inst_26117;
var state_26129__$1 = (function (){var statearr_26140 = state_26129;
(statearr_26140[(10)] = inst_26116);

(statearr_26140[(8)] = inst_26106__$1);

return statearr_26140;
})();
var statearr_26141_26157 = state_26129__$1;
(statearr_26141_26157[(2)] = null);

(statearr_26141_26157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (9))){
var state_26129__$1 = state_26129;
var statearr_26142_26158 = state_26129__$1;
(statearr_26142_26158[(2)] = null);

(statearr_26142_26158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (5))){
var state_26129__$1 = state_26129;
var statearr_26143_26159 = state_26129__$1;
(statearr_26143_26159[(2)] = null);

(statearr_26143_26159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (10))){
var inst_26121 = (state_26129[(2)]);
var state_26129__$1 = state_26129;
var statearr_26144_26160 = state_26129__$1;
(statearr_26144_26160[(2)] = inst_26121);

(statearr_26144_26160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (8))){
var inst_26111 = (state_26129[(7)]);
var state_26129__$1 = state_26129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26129__$1,(11),out,inst_26111);
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
});})(c__24678__auto___26150,out))
;
return ((function (switch__24583__auto__,c__24678__auto___26150,out){
return (function() {
var cljs$core$async$state_machine__24584__auto__ = null;
var cljs$core$async$state_machine__24584__auto____0 = (function (){
var statearr_26145 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26145[(0)] = cljs$core$async$state_machine__24584__auto__);

(statearr_26145[(1)] = (1));

return statearr_26145;
});
var cljs$core$async$state_machine__24584__auto____1 = (function (state_26129){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_26129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e26146){if((e26146 instanceof Object)){
var ex__24587__auto__ = e26146;
var statearr_26147_26161 = state_26129;
(statearr_26147_26161[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26162 = state_26129;
state_26129 = G__26162;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$state_machine__24584__auto__ = function(state_26129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24584__auto____1.call(this,state_26129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24584__auto____0;
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24584__auto____1;
return cljs$core$async$state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___26150,out))
})();
var state__24680__auto__ = (function (){var statearr_26148 = f__24679__auto__.call(null);
(statearr_26148[(6)] = c__24678__auto___26150);

return statearr_26148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___26150,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26164 = (function (f,ch,meta26165){
this.f = f;
this.ch = ch;
this.meta26165 = meta26165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26166,meta26165__$1){
var self__ = this;
var _26166__$1 = this;
return (new cljs.core.async.t_cljs$core$async26164(self__.f,self__.ch,meta26165__$1));
});

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26166){
var self__ = this;
var _26166__$1 = this;
return self__.meta26165;
});

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26167 = (function (f,ch,meta26165,_,fn1,meta26168){
this.f = f;
this.ch = ch;
this.meta26165 = meta26165;
this._ = _;
this.fn1 = fn1;
this.meta26168 = meta26168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26169,meta26168__$1){
var self__ = this;
var _26169__$1 = this;
return (new cljs.core.async.t_cljs$core$async26167(self__.f,self__.ch,self__.meta26165,self__._,self__.fn1,meta26168__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26169){
var self__ = this;
var _26169__$1 = this;
return self__.meta26168;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26167.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26167.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26163_SHARP_){
return f1.call(null,(((p1__26163_SHARP_ == null))?null:self__.f.call(null,p1__26163_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26167.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26165","meta26165",31157453,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26164","cljs.core.async/t_cljs$core$async26164",-786945783,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26168","meta26168",-815646305,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26167";

cljs.core.async.t_cljs$core$async26167.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26167");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26167.
 */
cljs.core.async.__GT_t_cljs$core$async26167 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26167(f__$1,ch__$1,meta26165__$1,___$2,fn1__$1,meta26168){
return (new cljs.core.async.t_cljs$core$async26167(f__$1,ch__$1,meta26165__$1,___$2,fn1__$1,meta26168));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26167(self__.f,self__.ch,self__.meta26165,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26165","meta26165",31157453,null)], null);
});

cljs.core.async.t_cljs$core$async26164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26164";

cljs.core.async.t_cljs$core$async26164.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26164");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26164.
 */
cljs.core.async.__GT_t_cljs$core$async26164 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26164(f__$1,ch__$1,meta26165){
return (new cljs.core.async.t_cljs$core$async26164(f__$1,ch__$1,meta26165));
});

}

return (new cljs.core.async.t_cljs$core$async26164(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26170 = (function (f,ch,meta26171){
this.f = f;
this.ch = ch;
this.meta26171 = meta26171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26172,meta26171__$1){
var self__ = this;
var _26172__$1 = this;
return (new cljs.core.async.t_cljs$core$async26170(self__.f,self__.ch,meta26171__$1));
});

cljs.core.async.t_cljs$core$async26170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26172){
var self__ = this;
var _26172__$1 = this;
return self__.meta26171;
});

cljs.core.async.t_cljs$core$async26170.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26170.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26170.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26171","meta26171",-833051344,null)], null);
});

cljs.core.async.t_cljs$core$async26170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26170";

cljs.core.async.t_cljs$core$async26170.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26170");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26170.
 */
cljs.core.async.__GT_t_cljs$core$async26170 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26170(f__$1,ch__$1,meta26171){
return (new cljs.core.async.t_cljs$core$async26170(f__$1,ch__$1,meta26171));
});

}

return (new cljs.core.async.t_cljs$core$async26170(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26173 = (function (p,ch,meta26174){
this.p = p;
this.ch = ch;
this.meta26174 = meta26174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26175,meta26174__$1){
var self__ = this;
var _26175__$1 = this;
return (new cljs.core.async.t_cljs$core$async26173(self__.p,self__.ch,meta26174__$1));
});

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26175){
var self__ = this;
var _26175__$1 = this;
return self__.meta26174;
});

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26174","meta26174",2082542694,null)], null);
});

cljs.core.async.t_cljs$core$async26173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26173";

cljs.core.async.t_cljs$core$async26173.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26173");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26173.
 */
cljs.core.async.__GT_t_cljs$core$async26173 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26173(p__$1,ch__$1,meta26174){
return (new cljs.core.async.t_cljs$core$async26173(p__$1,ch__$1,meta26174));
});

}

return (new cljs.core.async.t_cljs$core$async26173(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26177 = arguments.length;
switch (G__26177) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24678__auto___26217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___26217,out){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___26217,out){
return (function (state_26198){
var state_val_26199 = (state_26198[(1)]);
if((state_val_26199 === (7))){
var inst_26194 = (state_26198[(2)]);
var state_26198__$1 = state_26198;
var statearr_26200_26218 = state_26198__$1;
(statearr_26200_26218[(2)] = inst_26194);

(statearr_26200_26218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (1))){
var state_26198__$1 = state_26198;
var statearr_26201_26219 = state_26198__$1;
(statearr_26201_26219[(2)] = null);

(statearr_26201_26219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (4))){
var inst_26180 = (state_26198[(7)]);
var inst_26180__$1 = (state_26198[(2)]);
var inst_26181 = (inst_26180__$1 == null);
var state_26198__$1 = (function (){var statearr_26202 = state_26198;
(statearr_26202[(7)] = inst_26180__$1);

return statearr_26202;
})();
if(cljs.core.truth_(inst_26181)){
var statearr_26203_26220 = state_26198__$1;
(statearr_26203_26220[(1)] = (5));

} else {
var statearr_26204_26221 = state_26198__$1;
(statearr_26204_26221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (6))){
var inst_26180 = (state_26198[(7)]);
var inst_26185 = p.call(null,inst_26180);
var state_26198__$1 = state_26198;
if(cljs.core.truth_(inst_26185)){
var statearr_26205_26222 = state_26198__$1;
(statearr_26205_26222[(1)] = (8));

} else {
var statearr_26206_26223 = state_26198__$1;
(statearr_26206_26223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (3))){
var inst_26196 = (state_26198[(2)]);
var state_26198__$1 = state_26198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26198__$1,inst_26196);
} else {
if((state_val_26199 === (2))){
var state_26198__$1 = state_26198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26198__$1,(4),ch);
} else {
if((state_val_26199 === (11))){
var inst_26188 = (state_26198[(2)]);
var state_26198__$1 = state_26198;
var statearr_26207_26224 = state_26198__$1;
(statearr_26207_26224[(2)] = inst_26188);

(statearr_26207_26224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (9))){
var state_26198__$1 = state_26198;
var statearr_26208_26225 = state_26198__$1;
(statearr_26208_26225[(2)] = null);

(statearr_26208_26225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (5))){
var inst_26183 = cljs.core.async.close_BANG_.call(null,out);
var state_26198__$1 = state_26198;
var statearr_26209_26226 = state_26198__$1;
(statearr_26209_26226[(2)] = inst_26183);

(statearr_26209_26226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (10))){
var inst_26191 = (state_26198[(2)]);
var state_26198__$1 = (function (){var statearr_26210 = state_26198;
(statearr_26210[(8)] = inst_26191);

return statearr_26210;
})();
var statearr_26211_26227 = state_26198__$1;
(statearr_26211_26227[(2)] = null);

(statearr_26211_26227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26199 === (8))){
var inst_26180 = (state_26198[(7)]);
var state_26198__$1 = state_26198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26198__$1,(11),out,inst_26180);
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
});})(c__24678__auto___26217,out))
;
return ((function (switch__24583__auto__,c__24678__auto___26217,out){
return (function() {
var cljs$core$async$state_machine__24584__auto__ = null;
var cljs$core$async$state_machine__24584__auto____0 = (function (){
var statearr_26212 = [null,null,null,null,null,null,null,null,null];
(statearr_26212[(0)] = cljs$core$async$state_machine__24584__auto__);

(statearr_26212[(1)] = (1));

return statearr_26212;
});
var cljs$core$async$state_machine__24584__auto____1 = (function (state_26198){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_26198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e26213){if((e26213 instanceof Object)){
var ex__24587__auto__ = e26213;
var statearr_26214_26228 = state_26198;
(statearr_26214_26228[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26229 = state_26198;
state_26198 = G__26229;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$state_machine__24584__auto__ = function(state_26198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24584__auto____1.call(this,state_26198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24584__auto____0;
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24584__auto____1;
return cljs$core$async$state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___26217,out))
})();
var state__24680__auto__ = (function (){var statearr_26215 = f__24679__auto__.call(null);
(statearr_26215[(6)] = c__24678__auto___26217);

return statearr_26215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___26217,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26231 = arguments.length;
switch (G__26231) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24678__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto__){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto__){
return (function (state_26294){
var state_val_26295 = (state_26294[(1)]);
if((state_val_26295 === (7))){
var inst_26290 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
var statearr_26296_26334 = state_26294__$1;
(statearr_26296_26334[(2)] = inst_26290);

(statearr_26296_26334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (20))){
var inst_26260 = (state_26294[(7)]);
var inst_26271 = (state_26294[(2)]);
var inst_26272 = cljs.core.next.call(null,inst_26260);
var inst_26246 = inst_26272;
var inst_26247 = null;
var inst_26248 = (0);
var inst_26249 = (0);
var state_26294__$1 = (function (){var statearr_26297 = state_26294;
(statearr_26297[(8)] = inst_26248);

(statearr_26297[(9)] = inst_26249);

(statearr_26297[(10)] = inst_26247);

(statearr_26297[(11)] = inst_26246);

(statearr_26297[(12)] = inst_26271);

return statearr_26297;
})();
var statearr_26298_26335 = state_26294__$1;
(statearr_26298_26335[(2)] = null);

(statearr_26298_26335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (1))){
var state_26294__$1 = state_26294;
var statearr_26299_26336 = state_26294__$1;
(statearr_26299_26336[(2)] = null);

(statearr_26299_26336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (4))){
var inst_26235 = (state_26294[(13)]);
var inst_26235__$1 = (state_26294[(2)]);
var inst_26236 = (inst_26235__$1 == null);
var state_26294__$1 = (function (){var statearr_26300 = state_26294;
(statearr_26300[(13)] = inst_26235__$1);

return statearr_26300;
})();
if(cljs.core.truth_(inst_26236)){
var statearr_26301_26337 = state_26294__$1;
(statearr_26301_26337[(1)] = (5));

} else {
var statearr_26302_26338 = state_26294__$1;
(statearr_26302_26338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (15))){
var state_26294__$1 = state_26294;
var statearr_26306_26339 = state_26294__$1;
(statearr_26306_26339[(2)] = null);

(statearr_26306_26339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (21))){
var state_26294__$1 = state_26294;
var statearr_26307_26340 = state_26294__$1;
(statearr_26307_26340[(2)] = null);

(statearr_26307_26340[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (13))){
var inst_26248 = (state_26294[(8)]);
var inst_26249 = (state_26294[(9)]);
var inst_26247 = (state_26294[(10)]);
var inst_26246 = (state_26294[(11)]);
var inst_26256 = (state_26294[(2)]);
var inst_26257 = (inst_26249 + (1));
var tmp26303 = inst_26248;
var tmp26304 = inst_26247;
var tmp26305 = inst_26246;
var inst_26246__$1 = tmp26305;
var inst_26247__$1 = tmp26304;
var inst_26248__$1 = tmp26303;
var inst_26249__$1 = inst_26257;
var state_26294__$1 = (function (){var statearr_26308 = state_26294;
(statearr_26308[(8)] = inst_26248__$1);

(statearr_26308[(9)] = inst_26249__$1);

(statearr_26308[(14)] = inst_26256);

(statearr_26308[(10)] = inst_26247__$1);

(statearr_26308[(11)] = inst_26246__$1);

return statearr_26308;
})();
var statearr_26309_26341 = state_26294__$1;
(statearr_26309_26341[(2)] = null);

(statearr_26309_26341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (22))){
var state_26294__$1 = state_26294;
var statearr_26310_26342 = state_26294__$1;
(statearr_26310_26342[(2)] = null);

(statearr_26310_26342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (6))){
var inst_26235 = (state_26294[(13)]);
var inst_26244 = f.call(null,inst_26235);
var inst_26245 = cljs.core.seq.call(null,inst_26244);
var inst_26246 = inst_26245;
var inst_26247 = null;
var inst_26248 = (0);
var inst_26249 = (0);
var state_26294__$1 = (function (){var statearr_26311 = state_26294;
(statearr_26311[(8)] = inst_26248);

(statearr_26311[(9)] = inst_26249);

(statearr_26311[(10)] = inst_26247);

(statearr_26311[(11)] = inst_26246);

return statearr_26311;
})();
var statearr_26312_26343 = state_26294__$1;
(statearr_26312_26343[(2)] = null);

(statearr_26312_26343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (17))){
var inst_26260 = (state_26294[(7)]);
var inst_26264 = cljs.core.chunk_first.call(null,inst_26260);
var inst_26265 = cljs.core.chunk_rest.call(null,inst_26260);
var inst_26266 = cljs.core.count.call(null,inst_26264);
var inst_26246 = inst_26265;
var inst_26247 = inst_26264;
var inst_26248 = inst_26266;
var inst_26249 = (0);
var state_26294__$1 = (function (){var statearr_26313 = state_26294;
(statearr_26313[(8)] = inst_26248);

(statearr_26313[(9)] = inst_26249);

(statearr_26313[(10)] = inst_26247);

(statearr_26313[(11)] = inst_26246);

return statearr_26313;
})();
var statearr_26314_26344 = state_26294__$1;
(statearr_26314_26344[(2)] = null);

(statearr_26314_26344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (3))){
var inst_26292 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26294__$1,inst_26292);
} else {
if((state_val_26295 === (12))){
var inst_26280 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
var statearr_26315_26345 = state_26294__$1;
(statearr_26315_26345[(2)] = inst_26280);

(statearr_26315_26345[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (2))){
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26294__$1,(4),in$);
} else {
if((state_val_26295 === (23))){
var inst_26288 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
var statearr_26316_26346 = state_26294__$1;
(statearr_26316_26346[(2)] = inst_26288);

(statearr_26316_26346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (19))){
var inst_26275 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
var statearr_26317_26347 = state_26294__$1;
(statearr_26317_26347[(2)] = inst_26275);

(statearr_26317_26347[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (11))){
var inst_26246 = (state_26294[(11)]);
var inst_26260 = (state_26294[(7)]);
var inst_26260__$1 = cljs.core.seq.call(null,inst_26246);
var state_26294__$1 = (function (){var statearr_26318 = state_26294;
(statearr_26318[(7)] = inst_26260__$1);

return statearr_26318;
})();
if(inst_26260__$1){
var statearr_26319_26348 = state_26294__$1;
(statearr_26319_26348[(1)] = (14));

} else {
var statearr_26320_26349 = state_26294__$1;
(statearr_26320_26349[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (9))){
var inst_26282 = (state_26294[(2)]);
var inst_26283 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26294__$1 = (function (){var statearr_26321 = state_26294;
(statearr_26321[(15)] = inst_26282);

return statearr_26321;
})();
if(cljs.core.truth_(inst_26283)){
var statearr_26322_26350 = state_26294__$1;
(statearr_26322_26350[(1)] = (21));

} else {
var statearr_26323_26351 = state_26294__$1;
(statearr_26323_26351[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (5))){
var inst_26238 = cljs.core.async.close_BANG_.call(null,out);
var state_26294__$1 = state_26294;
var statearr_26324_26352 = state_26294__$1;
(statearr_26324_26352[(2)] = inst_26238);

(statearr_26324_26352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (14))){
var inst_26260 = (state_26294[(7)]);
var inst_26262 = cljs.core.chunked_seq_QMARK_.call(null,inst_26260);
var state_26294__$1 = state_26294;
if(inst_26262){
var statearr_26325_26353 = state_26294__$1;
(statearr_26325_26353[(1)] = (17));

} else {
var statearr_26326_26354 = state_26294__$1;
(statearr_26326_26354[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (16))){
var inst_26278 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
var statearr_26327_26355 = state_26294__$1;
(statearr_26327_26355[(2)] = inst_26278);

(statearr_26327_26355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (10))){
var inst_26249 = (state_26294[(9)]);
var inst_26247 = (state_26294[(10)]);
var inst_26254 = cljs.core._nth.call(null,inst_26247,inst_26249);
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26294__$1,(13),out,inst_26254);
} else {
if((state_val_26295 === (18))){
var inst_26260 = (state_26294[(7)]);
var inst_26269 = cljs.core.first.call(null,inst_26260);
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26294__$1,(20),out,inst_26269);
} else {
if((state_val_26295 === (8))){
var inst_26248 = (state_26294[(8)]);
var inst_26249 = (state_26294[(9)]);
var inst_26251 = (inst_26249 < inst_26248);
var inst_26252 = inst_26251;
var state_26294__$1 = state_26294;
if(cljs.core.truth_(inst_26252)){
var statearr_26328_26356 = state_26294__$1;
(statearr_26328_26356[(1)] = (10));

} else {
var statearr_26329_26357 = state_26294__$1;
(statearr_26329_26357[(1)] = (11));

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
});})(c__24678__auto__))
;
return ((function (switch__24583__auto__,c__24678__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24584__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24584__auto____0 = (function (){
var statearr_26330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26330[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24584__auto__);

(statearr_26330[(1)] = (1));

return statearr_26330;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24584__auto____1 = (function (state_26294){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_26294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e26331){if((e26331 instanceof Object)){
var ex__24587__auto__ = e26331;
var statearr_26332_26358 = state_26294;
(statearr_26332_26358[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26359 = state_26294;
state_26294 = G__26359;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24584__auto__ = function(state_26294){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24584__auto____1.call(this,state_26294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24584__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24584__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto__))
})();
var state__24680__auto__ = (function (){var statearr_26333 = f__24679__auto__.call(null);
(statearr_26333[(6)] = c__24678__auto__);

return statearr_26333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto__))
);

return c__24678__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26361 = arguments.length;
switch (G__26361) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26364 = arguments.length;
switch (G__26364) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26367 = arguments.length;
switch (G__26367) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24678__auto___26414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___26414,out){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___26414,out){
return (function (state_26391){
var state_val_26392 = (state_26391[(1)]);
if((state_val_26392 === (7))){
var inst_26386 = (state_26391[(2)]);
var state_26391__$1 = state_26391;
var statearr_26393_26415 = state_26391__$1;
(statearr_26393_26415[(2)] = inst_26386);

(statearr_26393_26415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (1))){
var inst_26368 = null;
var state_26391__$1 = (function (){var statearr_26394 = state_26391;
(statearr_26394[(7)] = inst_26368);

return statearr_26394;
})();
var statearr_26395_26416 = state_26391__$1;
(statearr_26395_26416[(2)] = null);

(statearr_26395_26416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (4))){
var inst_26371 = (state_26391[(8)]);
var inst_26371__$1 = (state_26391[(2)]);
var inst_26372 = (inst_26371__$1 == null);
var inst_26373 = cljs.core.not.call(null,inst_26372);
var state_26391__$1 = (function (){var statearr_26396 = state_26391;
(statearr_26396[(8)] = inst_26371__$1);

return statearr_26396;
})();
if(inst_26373){
var statearr_26397_26417 = state_26391__$1;
(statearr_26397_26417[(1)] = (5));

} else {
var statearr_26398_26418 = state_26391__$1;
(statearr_26398_26418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (6))){
var state_26391__$1 = state_26391;
var statearr_26399_26419 = state_26391__$1;
(statearr_26399_26419[(2)] = null);

(statearr_26399_26419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (3))){
var inst_26388 = (state_26391[(2)]);
var inst_26389 = cljs.core.async.close_BANG_.call(null,out);
var state_26391__$1 = (function (){var statearr_26400 = state_26391;
(statearr_26400[(9)] = inst_26388);

return statearr_26400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26391__$1,inst_26389);
} else {
if((state_val_26392 === (2))){
var state_26391__$1 = state_26391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26391__$1,(4),ch);
} else {
if((state_val_26392 === (11))){
var inst_26371 = (state_26391[(8)]);
var inst_26380 = (state_26391[(2)]);
var inst_26368 = inst_26371;
var state_26391__$1 = (function (){var statearr_26401 = state_26391;
(statearr_26401[(7)] = inst_26368);

(statearr_26401[(10)] = inst_26380);

return statearr_26401;
})();
var statearr_26402_26420 = state_26391__$1;
(statearr_26402_26420[(2)] = null);

(statearr_26402_26420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (9))){
var inst_26371 = (state_26391[(8)]);
var state_26391__$1 = state_26391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26391__$1,(11),out,inst_26371);
} else {
if((state_val_26392 === (5))){
var inst_26368 = (state_26391[(7)]);
var inst_26371 = (state_26391[(8)]);
var inst_26375 = cljs.core._EQ_.call(null,inst_26371,inst_26368);
var state_26391__$1 = state_26391;
if(inst_26375){
var statearr_26404_26421 = state_26391__$1;
(statearr_26404_26421[(1)] = (8));

} else {
var statearr_26405_26422 = state_26391__$1;
(statearr_26405_26422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (10))){
var inst_26383 = (state_26391[(2)]);
var state_26391__$1 = state_26391;
var statearr_26406_26423 = state_26391__$1;
(statearr_26406_26423[(2)] = inst_26383);

(statearr_26406_26423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26392 === (8))){
var inst_26368 = (state_26391[(7)]);
var tmp26403 = inst_26368;
var inst_26368__$1 = tmp26403;
var state_26391__$1 = (function (){var statearr_26407 = state_26391;
(statearr_26407[(7)] = inst_26368__$1);

return statearr_26407;
})();
var statearr_26408_26424 = state_26391__$1;
(statearr_26408_26424[(2)] = null);

(statearr_26408_26424[(1)] = (2));


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
});})(c__24678__auto___26414,out))
;
return ((function (switch__24583__auto__,c__24678__auto___26414,out){
return (function() {
var cljs$core$async$state_machine__24584__auto__ = null;
var cljs$core$async$state_machine__24584__auto____0 = (function (){
var statearr_26409 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26409[(0)] = cljs$core$async$state_machine__24584__auto__);

(statearr_26409[(1)] = (1));

return statearr_26409;
});
var cljs$core$async$state_machine__24584__auto____1 = (function (state_26391){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_26391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e26410){if((e26410 instanceof Object)){
var ex__24587__auto__ = e26410;
var statearr_26411_26425 = state_26391;
(statearr_26411_26425[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26426 = state_26391;
state_26391 = G__26426;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$state_machine__24584__auto__ = function(state_26391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24584__auto____1.call(this,state_26391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24584__auto____0;
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24584__auto____1;
return cljs$core$async$state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___26414,out))
})();
var state__24680__auto__ = (function (){var statearr_26412 = f__24679__auto__.call(null);
(statearr_26412[(6)] = c__24678__auto___26414);

return statearr_26412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___26414,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26428 = arguments.length;
switch (G__26428) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24678__auto___26494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___26494,out){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___26494,out){
return (function (state_26466){
var state_val_26467 = (state_26466[(1)]);
if((state_val_26467 === (7))){
var inst_26462 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
var statearr_26468_26495 = state_26466__$1;
(statearr_26468_26495[(2)] = inst_26462);

(statearr_26468_26495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (1))){
var inst_26429 = (new Array(n));
var inst_26430 = inst_26429;
var inst_26431 = (0);
var state_26466__$1 = (function (){var statearr_26469 = state_26466;
(statearr_26469[(7)] = inst_26430);

(statearr_26469[(8)] = inst_26431);

return statearr_26469;
})();
var statearr_26470_26496 = state_26466__$1;
(statearr_26470_26496[(2)] = null);

(statearr_26470_26496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (4))){
var inst_26434 = (state_26466[(9)]);
var inst_26434__$1 = (state_26466[(2)]);
var inst_26435 = (inst_26434__$1 == null);
var inst_26436 = cljs.core.not.call(null,inst_26435);
var state_26466__$1 = (function (){var statearr_26471 = state_26466;
(statearr_26471[(9)] = inst_26434__$1);

return statearr_26471;
})();
if(inst_26436){
var statearr_26472_26497 = state_26466__$1;
(statearr_26472_26497[(1)] = (5));

} else {
var statearr_26473_26498 = state_26466__$1;
(statearr_26473_26498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (15))){
var inst_26456 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
var statearr_26474_26499 = state_26466__$1;
(statearr_26474_26499[(2)] = inst_26456);

(statearr_26474_26499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (13))){
var state_26466__$1 = state_26466;
var statearr_26475_26500 = state_26466__$1;
(statearr_26475_26500[(2)] = null);

(statearr_26475_26500[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (6))){
var inst_26431 = (state_26466[(8)]);
var inst_26452 = (inst_26431 > (0));
var state_26466__$1 = state_26466;
if(cljs.core.truth_(inst_26452)){
var statearr_26476_26501 = state_26466__$1;
(statearr_26476_26501[(1)] = (12));

} else {
var statearr_26477_26502 = state_26466__$1;
(statearr_26477_26502[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (3))){
var inst_26464 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26466__$1,inst_26464);
} else {
if((state_val_26467 === (12))){
var inst_26430 = (state_26466[(7)]);
var inst_26454 = cljs.core.vec.call(null,inst_26430);
var state_26466__$1 = state_26466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26466__$1,(15),out,inst_26454);
} else {
if((state_val_26467 === (2))){
var state_26466__$1 = state_26466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26466__$1,(4),ch);
} else {
if((state_val_26467 === (11))){
var inst_26446 = (state_26466[(2)]);
var inst_26447 = (new Array(n));
var inst_26430 = inst_26447;
var inst_26431 = (0);
var state_26466__$1 = (function (){var statearr_26478 = state_26466;
(statearr_26478[(7)] = inst_26430);

(statearr_26478[(8)] = inst_26431);

(statearr_26478[(10)] = inst_26446);

return statearr_26478;
})();
var statearr_26479_26503 = state_26466__$1;
(statearr_26479_26503[(2)] = null);

(statearr_26479_26503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (9))){
var inst_26430 = (state_26466[(7)]);
var inst_26444 = cljs.core.vec.call(null,inst_26430);
var state_26466__$1 = state_26466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26466__$1,(11),out,inst_26444);
} else {
if((state_val_26467 === (5))){
var inst_26430 = (state_26466[(7)]);
var inst_26434 = (state_26466[(9)]);
var inst_26431 = (state_26466[(8)]);
var inst_26439 = (state_26466[(11)]);
var inst_26438 = (inst_26430[inst_26431] = inst_26434);
var inst_26439__$1 = (inst_26431 + (1));
var inst_26440 = (inst_26439__$1 < n);
var state_26466__$1 = (function (){var statearr_26480 = state_26466;
(statearr_26480[(12)] = inst_26438);

(statearr_26480[(11)] = inst_26439__$1);

return statearr_26480;
})();
if(cljs.core.truth_(inst_26440)){
var statearr_26481_26504 = state_26466__$1;
(statearr_26481_26504[(1)] = (8));

} else {
var statearr_26482_26505 = state_26466__$1;
(statearr_26482_26505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (14))){
var inst_26459 = (state_26466[(2)]);
var inst_26460 = cljs.core.async.close_BANG_.call(null,out);
var state_26466__$1 = (function (){var statearr_26484 = state_26466;
(statearr_26484[(13)] = inst_26459);

return statearr_26484;
})();
var statearr_26485_26506 = state_26466__$1;
(statearr_26485_26506[(2)] = inst_26460);

(statearr_26485_26506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (10))){
var inst_26450 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
var statearr_26486_26507 = state_26466__$1;
(statearr_26486_26507[(2)] = inst_26450);

(statearr_26486_26507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (8))){
var inst_26430 = (state_26466[(7)]);
var inst_26439 = (state_26466[(11)]);
var tmp26483 = inst_26430;
var inst_26430__$1 = tmp26483;
var inst_26431 = inst_26439;
var state_26466__$1 = (function (){var statearr_26487 = state_26466;
(statearr_26487[(7)] = inst_26430__$1);

(statearr_26487[(8)] = inst_26431);

return statearr_26487;
})();
var statearr_26488_26508 = state_26466__$1;
(statearr_26488_26508[(2)] = null);

(statearr_26488_26508[(1)] = (2));


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
});})(c__24678__auto___26494,out))
;
return ((function (switch__24583__auto__,c__24678__auto___26494,out){
return (function() {
var cljs$core$async$state_machine__24584__auto__ = null;
var cljs$core$async$state_machine__24584__auto____0 = (function (){
var statearr_26489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26489[(0)] = cljs$core$async$state_machine__24584__auto__);

(statearr_26489[(1)] = (1));

return statearr_26489;
});
var cljs$core$async$state_machine__24584__auto____1 = (function (state_26466){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_26466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e26490){if((e26490 instanceof Object)){
var ex__24587__auto__ = e26490;
var statearr_26491_26509 = state_26466;
(statearr_26491_26509[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26510 = state_26466;
state_26466 = G__26510;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$state_machine__24584__auto__ = function(state_26466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24584__auto____1.call(this,state_26466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24584__auto____0;
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24584__auto____1;
return cljs$core$async$state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___26494,out))
})();
var state__24680__auto__ = (function (){var statearr_26492 = f__24679__auto__.call(null);
(statearr_26492[(6)] = c__24678__auto___26494);

return statearr_26492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___26494,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26512 = arguments.length;
switch (G__26512) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24678__auto___26582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24678__auto___26582,out){
return (function (){
var f__24679__auto__ = (function (){var switch__24583__auto__ = ((function (c__24678__auto___26582,out){
return (function (state_26554){
var state_val_26555 = (state_26554[(1)]);
if((state_val_26555 === (7))){
var inst_26550 = (state_26554[(2)]);
var state_26554__$1 = state_26554;
var statearr_26556_26583 = state_26554__$1;
(statearr_26556_26583[(2)] = inst_26550);

(statearr_26556_26583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (1))){
var inst_26513 = [];
var inst_26514 = inst_26513;
var inst_26515 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26554__$1 = (function (){var statearr_26557 = state_26554;
(statearr_26557[(7)] = inst_26515);

(statearr_26557[(8)] = inst_26514);

return statearr_26557;
})();
var statearr_26558_26584 = state_26554__$1;
(statearr_26558_26584[(2)] = null);

(statearr_26558_26584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (4))){
var inst_26518 = (state_26554[(9)]);
var inst_26518__$1 = (state_26554[(2)]);
var inst_26519 = (inst_26518__$1 == null);
var inst_26520 = cljs.core.not.call(null,inst_26519);
var state_26554__$1 = (function (){var statearr_26559 = state_26554;
(statearr_26559[(9)] = inst_26518__$1);

return statearr_26559;
})();
if(inst_26520){
var statearr_26560_26585 = state_26554__$1;
(statearr_26560_26585[(1)] = (5));

} else {
var statearr_26561_26586 = state_26554__$1;
(statearr_26561_26586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (15))){
var inst_26544 = (state_26554[(2)]);
var state_26554__$1 = state_26554;
var statearr_26562_26587 = state_26554__$1;
(statearr_26562_26587[(2)] = inst_26544);

(statearr_26562_26587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (13))){
var state_26554__$1 = state_26554;
var statearr_26563_26588 = state_26554__$1;
(statearr_26563_26588[(2)] = null);

(statearr_26563_26588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (6))){
var inst_26514 = (state_26554[(8)]);
var inst_26539 = inst_26514.length;
var inst_26540 = (inst_26539 > (0));
var state_26554__$1 = state_26554;
if(cljs.core.truth_(inst_26540)){
var statearr_26564_26589 = state_26554__$1;
(statearr_26564_26589[(1)] = (12));

} else {
var statearr_26565_26590 = state_26554__$1;
(statearr_26565_26590[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (3))){
var inst_26552 = (state_26554[(2)]);
var state_26554__$1 = state_26554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26554__$1,inst_26552);
} else {
if((state_val_26555 === (12))){
var inst_26514 = (state_26554[(8)]);
var inst_26542 = cljs.core.vec.call(null,inst_26514);
var state_26554__$1 = state_26554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26554__$1,(15),out,inst_26542);
} else {
if((state_val_26555 === (2))){
var state_26554__$1 = state_26554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26554__$1,(4),ch);
} else {
if((state_val_26555 === (11))){
var inst_26522 = (state_26554[(10)]);
var inst_26518 = (state_26554[(9)]);
var inst_26532 = (state_26554[(2)]);
var inst_26533 = [];
var inst_26534 = inst_26533.push(inst_26518);
var inst_26514 = inst_26533;
var inst_26515 = inst_26522;
var state_26554__$1 = (function (){var statearr_26566 = state_26554;
(statearr_26566[(7)] = inst_26515);

(statearr_26566[(8)] = inst_26514);

(statearr_26566[(11)] = inst_26534);

(statearr_26566[(12)] = inst_26532);

return statearr_26566;
})();
var statearr_26567_26591 = state_26554__$1;
(statearr_26567_26591[(2)] = null);

(statearr_26567_26591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (9))){
var inst_26514 = (state_26554[(8)]);
var inst_26530 = cljs.core.vec.call(null,inst_26514);
var state_26554__$1 = state_26554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26554__$1,(11),out,inst_26530);
} else {
if((state_val_26555 === (5))){
var inst_26515 = (state_26554[(7)]);
var inst_26522 = (state_26554[(10)]);
var inst_26518 = (state_26554[(9)]);
var inst_26522__$1 = f.call(null,inst_26518);
var inst_26523 = cljs.core._EQ_.call(null,inst_26522__$1,inst_26515);
var inst_26524 = cljs.core.keyword_identical_QMARK_.call(null,inst_26515,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26525 = ((inst_26523) || (inst_26524));
var state_26554__$1 = (function (){var statearr_26568 = state_26554;
(statearr_26568[(10)] = inst_26522__$1);

return statearr_26568;
})();
if(cljs.core.truth_(inst_26525)){
var statearr_26569_26592 = state_26554__$1;
(statearr_26569_26592[(1)] = (8));

} else {
var statearr_26570_26593 = state_26554__$1;
(statearr_26570_26593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (14))){
var inst_26547 = (state_26554[(2)]);
var inst_26548 = cljs.core.async.close_BANG_.call(null,out);
var state_26554__$1 = (function (){var statearr_26572 = state_26554;
(statearr_26572[(13)] = inst_26547);

return statearr_26572;
})();
var statearr_26573_26594 = state_26554__$1;
(statearr_26573_26594[(2)] = inst_26548);

(statearr_26573_26594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (10))){
var inst_26537 = (state_26554[(2)]);
var state_26554__$1 = state_26554;
var statearr_26574_26595 = state_26554__$1;
(statearr_26574_26595[(2)] = inst_26537);

(statearr_26574_26595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (8))){
var inst_26514 = (state_26554[(8)]);
var inst_26522 = (state_26554[(10)]);
var inst_26518 = (state_26554[(9)]);
var inst_26527 = inst_26514.push(inst_26518);
var tmp26571 = inst_26514;
var inst_26514__$1 = tmp26571;
var inst_26515 = inst_26522;
var state_26554__$1 = (function (){var statearr_26575 = state_26554;
(statearr_26575[(7)] = inst_26515);

(statearr_26575[(8)] = inst_26514__$1);

(statearr_26575[(14)] = inst_26527);

return statearr_26575;
})();
var statearr_26576_26596 = state_26554__$1;
(statearr_26576_26596[(2)] = null);

(statearr_26576_26596[(1)] = (2));


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
});})(c__24678__auto___26582,out))
;
return ((function (switch__24583__auto__,c__24678__auto___26582,out){
return (function() {
var cljs$core$async$state_machine__24584__auto__ = null;
var cljs$core$async$state_machine__24584__auto____0 = (function (){
var statearr_26577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26577[(0)] = cljs$core$async$state_machine__24584__auto__);

(statearr_26577[(1)] = (1));

return statearr_26577;
});
var cljs$core$async$state_machine__24584__auto____1 = (function (state_26554){
while(true){
var ret_value__24585__auto__ = (function (){try{while(true){
var result__24586__auto__ = switch__24583__auto__.call(null,state_26554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24586__auto__;
}
break;
}
}catch (e26578){if((e26578 instanceof Object)){
var ex__24587__auto__ = e26578;
var statearr_26579_26597 = state_26554;
(statearr_26579_26597[(5)] = ex__24587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26598 = state_26554;
state_26554 = G__26598;
continue;
} else {
return ret_value__24585__auto__;
}
break;
}
});
cljs$core$async$state_machine__24584__auto__ = function(state_26554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24584__auto____1.call(this,state_26554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24584__auto____0;
cljs$core$async$state_machine__24584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24584__auto____1;
return cljs$core$async$state_machine__24584__auto__;
})()
;})(switch__24583__auto__,c__24678__auto___26582,out))
})();
var state__24680__auto__ = (function (){var statearr_26580 = f__24679__auto__.call(null);
(statearr_26580[(6)] = c__24678__auto___26582);

return statearr_26580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24680__auto__);
});})(c__24678__auto___26582,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1579862706995
