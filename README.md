# layui
layui数据表格无感刷新

使用方法：
         saveScrollPosition(); // 保存滚动条位置
         table.reload('PList', {
               data: PData,
               done: function (res, curr, count) {
                    restoreScrollPosition(); // 恢复滚动条位置
               }
         });
