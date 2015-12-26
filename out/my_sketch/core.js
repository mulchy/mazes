// Compiled by ClojureScript 1.7.170 {}
goog.provide('my_sketch.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
my_sketch.core.step = (10);
my_sketch.core.size = (500);
my_sketch.core.edges = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.flatten,(function (){var iter__5440__auto__ = (function my_sketch$core$iter__6254(s__6255){
return (new cljs.core.LazySeq(null,(function (){
var s__6255__$1 = s__6255;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6255__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first.call(null,xs__4977__auto__);
var iterys__5436__auto__ = ((function (s__6255__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function my_sketch$core$iter__6254_$_iter__6256(s__6257){
return (new cljs.core.LazySeq(null,((function (s__6255__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__6257__$1 = s__6257;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__6257__$1);
if(temp__4425__auto____$1){
var s__6257__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6257__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__6257__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__6259 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__6258 = (0);
while(true){
if((i__6258 < size__5439__auto__)){
var y = cljs.core._nth.call(null,c__5438__auto__,i__6258);
cljs.core.chunk_append.call(null,b__6259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + my_sketch.core.step),y], null)], null));

var G__6266 = (i__6258 + (1));
i__6258 = G__6266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6259),my_sketch$core$iter__6254_$_iter__6256.call(null,cljs.core.chunk_rest.call(null,s__6257__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6259),null);
}
} else {
var y = cljs.core.first.call(null,s__6257__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + my_sketch.core.step),y], null)], null),my_sketch$core$iter__6254_$_iter__6256.call(null,cljs.core.rest.call(null,s__6257__$2)));
}
} else {
return null;
}
break;
}
});})(s__6255__$1,x,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__6255__$1,x,xs__4977__auto__,temp__4425__auto__))
;
var fs__5437__auto__ = cljs.core.seq.call(null,iterys__5436__auto__.call(null,cljs.core.range.call(null,(0),my_sketch.core.size,my_sketch.core.step)));
if(fs__5437__auto__){
return cljs.core.concat.call(null,fs__5437__auto__,my_sketch$core$iter__6254.call(null,cljs.core.rest.call(null,s__6255__$1)));
} else {
var G__6267 = cljs.core.rest.call(null,s__6255__$1);
s__6255__$1 = G__6267;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,cljs.core.range.call(null,(0),my_sketch.core.size,my_sketch.core.step));
})()),cljs.core.map.call(null,cljs.core.flatten,(function (){var iter__5440__auto__ = (function my_sketch$core$iter__6260(s__6261){
return (new cljs.core.LazySeq(null,(function (){
var s__6261__$1 = s__6261;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6261__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first.call(null,xs__4977__auto__);
var iterys__5436__auto__ = ((function (s__6261__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function my_sketch$core$iter__6260_$_iter__6262(s__6263){
return (new cljs.core.LazySeq(null,((function (s__6261__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__6263__$1 = s__6263;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__6263__$1);
if(temp__4425__auto____$1){
var s__6263__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6263__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__6263__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__6265 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__6264 = (0);
while(true){
if((i__6264 < size__5439__auto__)){
var y = cljs.core._nth.call(null,c__5438__auto__,i__6264);
cljs.core.chunk_append.call(null,b__6265,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + my_sketch.core.step)], null)], null));

var G__6268 = (i__6264 + (1));
i__6264 = G__6268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6265),my_sketch$core$iter__6260_$_iter__6262.call(null,cljs.core.chunk_rest.call(null,s__6263__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6265),null);
}
} else {
var y = cljs.core.first.call(null,s__6263__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + my_sketch.core.step)], null)], null),my_sketch$core$iter__6260_$_iter__6262.call(null,cljs.core.rest.call(null,s__6263__$2)));
}
} else {
return null;
}
break;
}
});})(s__6261__$1,x,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__6261__$1,x,xs__4977__auto__,temp__4425__auto__))
;
var fs__5437__auto__ = cljs.core.seq.call(null,iterys__5436__auto__.call(null,cljs.core.range.call(null,(0),my_sketch.core.size,my_sketch.core.step)));
if(fs__5437__auto__){
return cljs.core.concat.call(null,fs__5437__auto__,my_sketch$core$iter__6260.call(null,cljs.core.rest.call(null,s__6261__$1)));
} else {
var G__6269 = cljs.core.rest.call(null,s__6261__$1);
s__6261__$1 = G__6269;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,cljs.core.range.call(null,(0),my_sketch.core.size,my_sketch.core.step));
})()));
my_sketch.core.remove_edge = (function my_sketch$core$remove_edge(edges,edge){
return cljs.core.remove.call(null,(function (p1__6270_SHARP_){
return cljs.core._EQ_.call(null,edge,p1__6270_SHARP_);
}),edges);
});
my_sketch.core.dir__GT_points = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"N","N",-640629860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- my_sketch.core.step)], null),new cljs.core.Keyword(null,"S","S",1267293308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),my_sketch.core.step], null),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_sketch.core.step,(0)], null),new cljs.core.Keyword(null,"W","W",-2035370425),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- my_sketch.core.step),(0)], null)], null);
my_sketch.core.add_points = (function my_sketch$core$add_points(p__6271,p__6272){
var vec__6275 = p__6271;
var x1 = cljs.core.nth.call(null,vec__6275,(0),null);
var y1 = cljs.core.nth.call(null,vec__6275,(1),null);
var vec__6276 = p__6272;
var x2 = cljs.core.nth.call(null,vec__6276,(0),null);
var y2 = cljs.core.nth.call(null,vec__6276,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
my_sketch.core.sub_points = (function my_sketch$core$sub_points(p__6277,p__6278){
var vec__6281 = p__6277;
var x1 = cljs.core.nth.call(null,vec__6281,(0),null);
var y1 = cljs.core.nth.call(null,vec__6281,(1),null);
var vec__6282 = p__6278;
var x2 = cljs.core.nth.call(null,vec__6282,(0),null);
var y2 = cljs.core.nth.call(null,vec__6282,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
my_sketch.core.move = (function my_sketch$core$move(point,direction){

return my_sketch.core.add_points.call(null,direction.call(null,my_sketch.core.dir__GT_points),point);
});
my_sketch.core.get_edge_map = (function my_sketch$core$get_edge_map(p__6283){
var vec__6285 = p__6283;
var x = cljs.core.nth.call(null,vec__6285,(0),null);
var y = cljs.core.nth.call(null,vec__6285,(1),null);
var point = vec__6285;

return cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.flatten,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + my_sketch.core.step),y], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + my_sketch.core.step)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + my_sketch.core.step),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + my_sketch.core.step),(y + my_sketch.core.step)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + my_sketch.core.step)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + my_sketch.core.step),(y + my_sketch.core.step)], null)], null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"N","N",-640629860),new cljs.core.Keyword(null,"W","W",-2035370425),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"S","S",1267293308)], null));
});
my_sketch.core.edge_and_dir__GT_point = (function my_sketch$core$edge_and_dir__GT_point(p__6286,dir){
var vec__6289 = p__6286;
var a = cljs.core.nth.call(null,vec__6289,(0),null);
var b = cljs.core.nth.call(null,vec__6289,(1),null);
var _ = cljs.core.nth.call(null,vec__6289,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__6289,(3),null);

var G__6290 = (((dir instanceof cljs.core.Keyword))?dir.fqn:null);
switch (G__6290) {
case "N":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);

break;
case "W":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);

break;
case "S":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,(b - my_sketch.core.step)], null);

break;
case "E":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a - my_sketch.core.step),b], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(dir)].join('')));

}
});
my_sketch.core.remove_invalid_edges = (function my_sketch$core$remove_invalid_edges(edge_map,visited){

return cljs.core.remove.call(null,(function (p__6295){
var vec__6296 = p__6295;
var vec__6297 = cljs.core.nth.call(null,vec__6296,(0),null);
var x1 = cljs.core.nth.call(null,vec__6297,(0),null);
var y1 = cljs.core.nth.call(null,vec__6297,(1),null);
var x2 = cljs.core.nth.call(null,vec__6297,(2),null);
var y2 = cljs.core.nth.call(null,vec__6297,(3),null);
var edge = vec__6297;
var direction = cljs.core.nth.call(null,vec__6296,(1),null);
var or__4668__auto__ = cljs.core._EQ_.call(null,(0),x1,x2);
if(or__4668__auto__){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = cljs.core._EQ_.call(null,(0),y1,y2);
if(or__4668__auto____$1){
return or__4668__auto____$1;
} else {
var or__4668__auto____$2 = cljs.core._EQ_.call(null,my_sketch.core.size,x1,x2);
if(or__4668__auto____$2){
return or__4668__auto____$2;
} else {
var or__4668__auto____$3 = cljs.core._EQ_.call(null,my_sketch.core.size,y1,y2);
if(or__4668__auto____$3){
return or__4668__auto____$3;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([my_sketch.core.move.call(null,my_sketch.core.edge_and_dir__GT_point.call(null,edge,direction),direction)], true),visited);
}
}
}
}
}),edge_map);
});
/**
 * randomly picks a wall to knock down
 */
my_sketch.core.choose_edge = (function my_sketch$core$choose_edge(point,visited){
return cljs.core.first.call(null,cljs.core.shuffle.call(null,(function (p1__6298_SHARP_){
return my_sketch.core.remove_invalid_edges.call(null,p1__6298_SHARP_,visited);
}).call(null,my_sketch.core.get_edge_map.call(null,point))));
});
my_sketch.core.run = (function my_sketch$core$run(initial_point,edges){

var point = initial_point;
var edges__$1 = edges;
var visited = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [point], null);
var stack = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.count.call(null,visited) > (1))) && (cljs.core._EQ_.call(null,point,initial_point))){
return edges__$1;
} else {
var vec__6300 = my_sketch.core.choose_edge.call(null,point,visited);
var edge_to_remove = cljs.core.nth.call(null,vec__6300,(0),null);
var direction = cljs.core.nth.call(null,vec__6300,(1),null);
if(!((edge_to_remove == null))){
var next_point = my_sketch.core.move.call(null,point,direction);
var G__6301 = next_point;
var G__6302 = my_sketch.core.remove_edge.call(null,edges__$1,edge_to_remove);
var G__6303 = cljs.core.conj.call(null,visited,next_point);
var G__6304 = cljs.core.conj.call(null,stack,point);
point = G__6301;
edges__$1 = G__6302;
visited = G__6303;
stack = G__6304;
continue;
} else {
var G__6305 = cljs.core.peek.call(null,stack);
var G__6306 = edges__$1;
var G__6307 = cljs.core.conj.call(null,visited,point);
var G__6308 = cljs.core.pop.call(null,stack);
point = G__6305;
edges__$1 = G__6306;
visited = G__6307;
stack = G__6308;
continue;
}
}
break;
}
});
my_sketch.core.draw_grid = (function my_sketch$core$draw_grid(state){
quil.core.no_loop.call(null);

var seq__6313 = cljs.core.seq.call(null,my_sketch.core.run.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),my_sketch.core.edges));
var chunk__6314 = null;
var count__6315 = (0);
var i__6316 = (0);
while(true){
if((i__6316 < count__6315)){
var edge = cljs.core._nth.call(null,chunk__6314,i__6316);
cljs.core.apply.call(null,quil.core.line,edge);

var G__6317 = seq__6313;
var G__6318 = chunk__6314;
var G__6319 = count__6315;
var G__6320 = (i__6316 + (1));
seq__6313 = G__6317;
chunk__6314 = G__6318;
count__6315 = G__6319;
i__6316 = G__6320;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6313);
if(temp__4425__auto__){
var seq__6313__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6313__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__6313__$1);
var G__6321 = cljs.core.chunk_rest.call(null,seq__6313__$1);
var G__6322 = c__5471__auto__;
var G__6323 = cljs.core.count.call(null,c__5471__auto__);
var G__6324 = (0);
seq__6313 = G__6321;
chunk__6314 = G__6322;
count__6315 = G__6323;
i__6316 = G__6324;
continue;
} else {
var edge = cljs.core.first.call(null,seq__6313__$1);
cljs.core.apply.call(null,quil.core.line,edge);

var G__6325 = cljs.core.next.call(null,seq__6313__$1);
var G__6326 = null;
var G__6327 = (0);
var G__6328 = (0);
seq__6313 = G__6325;
chunk__6314 = G__6326;
count__6315 = G__6327;
i__6316 = G__6328;
continue;
}
} else {
return null;
}
}
break;
}
});
my_sketch.core.my_sketch = (function my_sketch$core$my_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"my-sketch",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_sketch.core.size,my_sketch.core.size], null),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,my_sketch.core.draw_grid))?(function() { 
var G__6329__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.draw_grid,args);
};
var G__6329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6330__i = 0, G__6330__a = new Array(arguments.length -  0);
while (G__6330__i < G__6330__a.length) {G__6330__a[G__6330__i] = arguments[G__6330__i + 0]; ++G__6330__i;}
  args = new cljs.core.IndexedSeq(G__6330__a,0);
} 
return G__6329__delegate.call(this,args);};
G__6329.cljs$lang$maxFixedArity = 0;
G__6329.cljs$lang$applyTo = (function (arglist__6331){
var args = cljs.core.seq(arglist__6331);
return G__6329__delegate(args);
});
G__6329.cljs$core$IFn$_invoke$arity$variadic = G__6329__delegate;
return G__6329;
})()
:my_sketch.core.draw_grid));
});
goog.exportSymbol('my_sketch.core.my_sketch', my_sketch.core.my_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5808__5809__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__5808__5809__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),my_sketch.core.my_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"my-sketch"], null));
}

//# sourceMappingURL=core.js.map