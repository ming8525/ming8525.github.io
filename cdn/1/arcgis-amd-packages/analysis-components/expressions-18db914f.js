define(["exports","./index2-588b02d9"],(function(e,t){"use strict";function i(e,t){if(!1===e)throw new Error(t)}let n=0;function s(){return n+=1,`${n}`}const a=86399e3;const r=Object.freeze({equal:(e,t)=>`${e} = ${t}`,not_equal:(e,t)=>`${e} <> ${t}`,is_in:(e,t)=>`${e} IN(${t.join(", ")})`,is_not_in:(e,t)=>`${e} NOT IN(${t.join(", ")})`,less:(e,t)=>`${e} < ${t}`,less_or_equal:(e,t)=>`${e} <= ${t}`,greater:(e,t)=>`${e} > ${t}`,greater_or_equal:(e,t)=>`${e} >= ${t}`,between:(e,t)=>`${e} BETWEEN ${t.join(" AND ")}`,not_between:(e,t)=>`${e} NOT BETWEEN ${t.join(" AND ")}`,contains:(e,t)=>`${e} LIKE '%${t.slice(1,-1)}%'`,not_contains:(e,t)=>`${e} NOT LIKE '%${t.slice(1,-1)}%'`,begins_with:(e,t)=>`${e} LIKE '${t.slice(1,-1)}%'`,not_begins_with:(e,t)=>`${e} NOT LIKE '${t.slice(1,-1)}%'`,ends_with:(e,t)=>`${e} LIKE '%${t.slice(1,-1)}'`,not_ends_with:(e,t)=>`${e} NOT LIKE '%${t.slice(1,-1)}'`,is_empty:(e,t)=>`${e} = ''`,is_not_empty:(e,t)=>`${e} <> ''`,is_blank:(e,t)=>`${e} IS Null`,is_not_blank:(e,t)=>`${e} IS NOT Null`,is_on:(e,t)=>`${e} BETWEEN ${t}`,is_not_on:(e,t)=>`${e} NOT BETWEEN ${t}`,is_before:(e,t)=>`${e} < ${t}`,is_after:(e,t)=>`${e} > ${t}`,is_true:(e,t)=>`${e} IS TRUE`,is_false:(e,t)=>`${e} IS FALSE`}),o={"<":"less","<=":"less_or_equal",">":"greater",">=":"greater_or_equal","=":"equal","<>":"not_equal",IN:"is_in","NOT IN":"is_not_in",BETWEEN:"between",NOTBETWEEN:"not_between"},l=["between","not_between","equal","not_equal","is_in","is_not_in","greater","greater_or_equal","less","less_or_equal","is_blank","is_not_blank"],c=["equal","not_equal","is_in","is_not_in","contains","not_contains","begins_with","not_begins_with","ends_with","not_ends_with","is_blank","is_not_blank","is_empty","is_not_empty"],u=["between","not_between","is_on","is_not_on","is_before","is_after","is_blank","is_not_blank"],p=["is_blank","is_not_blank"],d=["is_blank","is_not_blank","is_true","is_false"],h=["between","not_between"],_=["is_in","is_not_in"],g=["is_blank","is_not_blank","is_empty","is_not_empty","is_true","is_false"];function f(e){return h.includes(e)}function y(e){return _.includes(e)}function m(e){return g.includes(e)}function $(e,t){return t?`"${e}"`:e}function b(e,t){switch(t){case"integer":case"small-integer":case"big-integer":case"long":case"oid":return null==e?"0":("number"!=typeof e&&(e=parseInt(e)),"number"==typeof e&&isNaN(e)?"0":`${e}`);case"double":case"single":return null==e?"0.0":("number"!=typeof e&&(e=parseFloat(e)),"number"==typeof e&&isNaN(e)?"0.0":`${e}`);case"date":const i=e instanceof Date?e:void 0;return void 0!==i?`timestamp '${function(e){if(void 0===e)return"";const t=`${e.getUTCFullYear()}`;let i=`${e.getUTCMonth()+1}`;1===i.length&&(i=`0${i}`);let n=`${e.getUTCDate()}`;1===n.length&&(n=`0${n}`);let s=`${e.getUTCHours()}`;1===s.length&&(s=`0${s}`);let a=`${e.getUTCMinutes()}`;1===a.length&&(a=`0${a}`);let r=`${e.getUTCSeconds()}`;return 1===r.length&&(r=`0${r}`),`${t}-${i}-${n} ${s}:${a}:${r}`}(i)}'`:"''";case"string":return`'${null==e?"":e.replace(/'/g,"''")}'`;case"boolean":case"geometry":return"";default:throw new Error(`Unsupported data type: ${t}`)}}function w(e){switch(e.type){case"string":case"number":case"boolean":return e.value;case"null":return null;case"timestamp":return function(e){const t=new Date(e);return new Date(t.getTime()-6e4*t.getTimezoneOffset())}(e.value);case"function":case"binary-expression":case"column-reference":case"current-time":case"date":case"interval":case"interval-period":case"interval-qualifier":case"expression-list":case"case_expression":case"case-expression":case"timestamp":case"unary-expression":case"when-clause":throw new Error("Invalid expression: unsupported node value.")}}const v=["Meters","Kilometers","Feet","Yards","Miles"];var T;function I(e){return null==e}function E(e){let t=!0;return(I(e)||""===e||"number"==typeof e&&isNaN(e))&&(t=!1),t}class N{constructor(e,t,i,n,a){this.field=e,this.dataType=t,this.value=i,this.operator=n,this.id=a??s()}}class D extends N{constructor(){super(...arguments),this.type="value"}validate(){return m(this.operator)||E(this.value)}toSQL(e){let t;if("date"===this.dataType)t=this.toSQLForDate(this.value,this.operator,e);else{const i=$(this.field,!0===e?.useDelimitedIdentifiers),n=b(this.value,this.dataType);t=r[this.operator](i,n)}return t}toSQLForDate(e,t,i){const n=$(this.field,!0===i?.useDelimitedIdentifiers);switch(t){case"is_on":case"is_not_on":const i=void 0!==e?function(e){const t=function(e){return new Date(e.toDateString())}(e),i=function(e){return new Date(e.getTime()+a)}(e);return[t,i]}(e).map((e=>b(e,"date"))):["''","''"];return r[t](n,`${i[0]} AND ${i[1]}`);default:const s=b(e,"date");return r[t](n,s)}}}class x extends N{constructor(){super(...arguments),this.type="multi-value"}get validValues(){return this.value.filter(E)}validate(){return this.validValues.length>0}toSQL(e){const t=$(this.field,!0===e?.useDelimitedIdentifiers),i=this.validValues.map((e=>b(e,this.dataType)));return r[this.operator](t,i)}}class L extends N{constructor(){super(...arguments),this.type="range"}validate(){return E(this.value[0])&&E(this.value[1])}toSQL(e){const t=$(this.field,!0===e?.useDelimitedIdentifiers),i=b(this.value[0],this.dataType),n=b(this.value[1],this.dataType);return r[this.operator](t,[i,n])}}class S{constructor(e,t,i,n){this.layer=e,this.selectingLayer=t,this.spatialRelationship=i,this.spatialRelationshipParams=n}get isDistanceRelationship(){return"withinDistance"===this.spatialRelationship||"notWithinDistance"===this.spatialRelationship}validate(){let e=void 0!==this.selectingLayer&&void 0!==this.spatialRelationship;if(this.isDistanceRelationship){const{distance:t,units:i}=this.spatialRelationshipParams??{};e=e&&E(t)&&E(i)}return e}changeSelectingLayer(e){return new S(this.layer,e,this.spatialRelationship,this.spatialRelationshipParams)}static getValidLayersForRelationships(e,t,i){const n=new Map;return i.forEach((i=>{let s=this.filterLayersBasedOnGeometryType(e,t,i);s=this.getValidSelectingLayers(e,s??[]),n.set(i,s)})),n}static filterLayersBasedOnGeometryType(e,t,i){const n=new Map;t.forEach((e=>{n.has(e.geometryType)?n.get(e.geometryType).push(e):n.set(e.geometryType,[e])}));const s=e.geometryType,a=n.get("polygon")??[],r=n.get("polyline")??[],o=n.get("point")??[],l=n.get("multipoint")??[];let c=[];return c="contains"===i||"notContains"===i?"polygon"===s?[...o,...r,...a,...l]:"polyline"===s?[...o,...r,...l]:"point"===s||"multipoint"===s?[...o,...l]:[]:"within"===i||"notWithin"===i?"point"===s||"multipoint"===s?[...o,...r,...a,...l]:"polyline"===s?[...a,...r]:"polygon"===s?a:[]:t,c}static getValidSelectingLayers(e,t){return t.filter((t=>e.id!==t.id))}changeSpatialRelationship(e){const t=new S(this.layer,this.selectingLayer,e);return t.isDistanceRelationship&&(t.spatialRelationshipParams={distance:this.spatialRelationshipParams?.distance,units:this.spatialRelationshipParams?.units??v[0]}),t}changeSpatialRelationshipDistance(e){const t={...this.spatialRelationshipParams,distance:e};return new S(this.layer,this.selectingLayer,this.spatialRelationship,t)}changeSpatialRelationshipUnit(e){const t={...this.spatialRelationshipParams,units:e};return new S(this.layer,this.selectingLayer,this.spatialRelationship,t)}}function O(e,t,i){const n=t?.allowGeometryFields??!1,s=[i?.geometryFieldsInfo?.shapeAreaField,i?.geometryFieldsInfo?.shapeLengthField].includes(e.name)&&!1===n;if(!0===t?.hideObjectIdField&&e.name===i?.objectIdField||!0===s)return!1;switch(e.type){case"string":case"small-integer":case"integer":case"single":case"double":case"long":case"big-integer":case"date":case"geometry":case"oid":return!0;default:return!1}}function R(e,t){let i;return I(e.description)||(e.description===t?.booleanFieldDescription?i="boolean":!0===t?.geometryFieldDescriptions?.includes(e.description)&&(i="geometry")),i}function k(e){let t="value";return f(e)?t="range":y(e)&&(t="multi-value"),t}class W{constructor(e){this.expression=e}changeOperator(e){const{field:t,dataType:i,id:n}=this.expression,s=T.create({field:t,dataType:i,operator:e,id:n});return k(e)===this.expression.type&&(s.value=this.expression.value),s}changeField(e,t){if(!O(e,t))throw new Error(`Unsupported field type '${e.type}' for '${e.name}'`);const i=R(e,t)??e.type;return T.create({field:e.name,dataType:i,id:this.expression.id})}changeValue(e){return T.create({field:this.expression.field,dataType:this.expression.dataType,operator:this.expression.operator,value:e,id:this.expression.id})}static create({field:e,dataType:t,operator:i,id:n,value:s}){let a,r,o;switch(t){case"string":a="equal",r=c;break;case"small-integer":case"integer":case"big-integer":case"single":case"double":case"long":case"oid":a="equal",r=l;break;case"date":a="is_on",r=u;break;case"geometry":a="is_blank",r=p;break;case"boolean":a="is_true",r=d;break;default:throw new Error(`Data type not supported: ${t}`)}if(void 0!==i&&!r.includes(i))throw new Error(`Invalid operator '${i}' for type '${e}'`);const h=i??a;switch(k(h)){case"value":o=new D(e,t,s,h,n);break;case"multi-value":o=new x(e,t,s??[],h,n);break;case"range":o=new L(e,t,s??[void 0,void 0],h,n)}return o}static createDefaultForLayer(e,t){const i=e.fields.filter((i=>O(i,t,e)));if(!(i.length<1)){const e=i[0],n=R(e,t)??e.type;return T.create({field:e.name,dataType:n})}}}T=W,W.fromSQL=async(e,i,n)=>{const s=await t.parseWhereClause(e,i);return T.fromSQLNode(s.parseTree,i,n)},W.fromSQLNode=(e,t,n)=>{let s,r;i("binary-expression"===e.type,"Invalid expression: not a condition."),"column-reference"===e.left.type?(s=e.left,r=e.right):(s=e.right,r=e.left),i("column-reference"===s.type,"Invalid expression: missing column reference.");const l=t.get(s.column);let c;i(O(l,n),"Invalid expression: unsupported field.");const u=o[e.operator];if(f(u)){i("expression-list"===r.type,"Invalid expression: invalid value type.");const e=r.value,t=w(e[0]),n=w(e[1]);if(c=new L(l.name,l.type,[t,n],u),t instanceof Date&&n instanceof Date&&function(e){const t=e[0],i=(n=e[1],new Date(n.getTime()-a));var n;return Math.abs(i.getTime()-t.getTime())<1e3}([t,n])){const e="between"===c.operator?"is_on":"is_not_on";c=new D(l.name,"date",t,e)}}else if(y(u)){i("expression-list"===r.type,"Invalid expression: invalid value type.");const e=r.value.map(w);c=new x(l.name,l.type,e,u)}else{const[t,s]=function(e,t){const n=w(t);switch(e){case"IS":if(null===n)return["is_blank",void 0];if("boolean"==typeof n)return[!0===n?"is_true":"is_false",void 0];throw new Error("Invalid expression: unsupported value for `IS` operator.");case"ISNOT":if(null===n)return["is_not_blank",void 0];throw new Error("Invalid expression: unsupported value for `ISNOT` operator.");case"=":return""===n?["is_empty",""]:["equal",n];case"<>":return""===n?["is_not_empty",""]:["not_equal",n];case"<":return n instanceof Date?["is_before",n]:["less",n];case">":return n instanceof Date?["is_after",n]:["greater",n];case"LIKE":return i("string"==typeof n,"Invalid expression: unsupported value for `LIKE` operator."),n.startsWith("%")&&n.endsWith("%")?["contains",n.substring(1,n.length-1)]:n.endsWith("%")?["begins_with",n.substring(0,n.length-1)]:n.startsWith("%")?["ends_with",n.substring(1)]:["equal",n];case"NOT LIKE":return i("string"==typeof n,"Invalid expression: unsupported value for `NOT LIKE` operator."),n.startsWith("%")&&n.endsWith("%")?["not_contains",n.slice(1,n.length-1)]:n.endsWith("%")?["not_begins_with",n.slice(0,n.length-1)]:n.startsWith("%")?["not_ends_with",n.slice(1)]:["not_equal",n];default:const t=o[e];return i(void 0!==t,"Invalid expression: unsupported operator."),[t,n]}}(e.operator,r),a=R(l,n)??l.type;c=new D(l.name,a,s,t)}return c},e.BooleanOperators=d,e.DateOperators=u,e.ExpressionController=W,e.ExpressionGroupOperator={And:"and",Or:"or",Default:""},e.GeometryOperators=p,e.NumericOperators=l,e.SpatialExpression=S,e.SpatialRelationshipUnits=v,e.SpatialRelationships={Intersects:"intersects",NotIntersects:"notIntersects",WithinDistance:"withinDistance",NotWithinDistance:"notWithinDistance",Contains:"contains",NotContains:"notContains",Within:"within",NotWithin:"notWithin",Nearest:"nearest"},e.StringOperators=c,e.assert=i,e.getIncrementalId=s,e.isFloatFieldType=function(e){return"single"===e||"double"===e},e.isIntFieldType=function(e){return"small-integer"===e||"integer"===e||"big-integer"===e||"long"===e||"oid"===e},e.isNoValueOperator=m,e.isRangeOperator=f,e.isSupportedField=O}));