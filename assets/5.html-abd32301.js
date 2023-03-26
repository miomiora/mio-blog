import{_ as d,V as e,W as o,a0 as c}from"./framework-0aae388a.js";const O={},n=c("<p>选择切换数据库：<code>use miodb</code></p><p>插入数据：<code>db.COLLECTION_NAME.insertOne({bson数据})</code></p><p>查询所有数据：<code>db.COLLECTION_NAME.find();</code></p><p>条件查询数据：<code>db.COLLECTION_NAME.find({条件})</code></p><p>查询符合条件的第一条记录：<code>db.COLLECTION_NAME.findOne({条件})</code></p><p>查询符合条件的前几条记录：<code>db.COLLECTION_NAME.find({条件}).limit(条数)</code></p><p>查询符合条件的跳过的记录：<code>db.COLLECTION_NAME.find({条件}).skip(条数)</code></p><p>修改数据：<code>db.COLLECTION_NAME.updateOne({条件},{修改后的数据})</code> 或<code>db.COLLECTION_NAME.updateOne({条件},{$set:{要修改部分的字段:数据})</code></p><p>修改数据并自增某字段值：<code>db.COLLECTION_NAME.updateOne({条件},{$inc:{自增的字段:步进值}})</code></p><p>删除数据：<code>db.COLLECTION_NAME.deleteOne({条件})</code></p><p>统计查询：<code>db.COLLECTION_NAME.count({条件})</code></p><p>模糊查询：<code>db.COLLECTION_NAME.find({字段名:/正则表达式/})</code></p><p>条件比较运算：<code>db.COLLECTION_NAME.find({字段名:{$gt:值}})</code></p><p>包含查询：<code>db.COLLECTION_NAME.find({字段名:{$in:[值1，值2]}})或db.COLLECTION_NAME.find({字段名:{$nin:[值1，值2]}})</code></p><p>条件连接查询：<code>db.COLLECTION_NAME.find({$and:[{条件1},{条件2}]})或db.COLLECTION_NAME.find({$or:[{条件1},{条件2}]})</code></p>",15),p=[n];function E(N,C){return e(),o("div",null,p)}const _=d(O,[["render",E],["__file","5.html.vue"]]);export{_ as default};
