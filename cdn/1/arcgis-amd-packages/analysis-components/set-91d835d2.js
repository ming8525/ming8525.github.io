define(["exports","./analysis-expression-group2-ce4cdcfd","./_baseGet-9bd467fe","./_Uint8Array-190b1a5d","./isObject-072a0200"],(function(t,e,r,n,i){"use strict";function s(t,s,o,a){if(!i.isObject(t))return t;for(var c=-1,u=(s=r.castPath(s,t)).length,f=u-1,d=t;null!=d&&++c<u;){var b=r.toKey(s[c]),l=o;if("__proto__"===b||"constructor"===b||"prototype"===b)return t;if(c!=f){var p=d[b];void 0===(l=a?a(p,b,d):void 0)&&(l=i.isObject(p)?p:n.isIndex(s[c+1])?[]:{})}e.assignValue(d,b,l),d=d[b]}return t}t.baseSet=s,t.set=function(t,e,r){return null==t?t:s(t,e,r)}}));