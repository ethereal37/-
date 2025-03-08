// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}
// 复制提醒
document.addEventListener("copy", function () {
  debounce(function () {
      new Vue({
          data: function () {
              this.$notify({
                  title: "哎嘿！恭喜你达成程序员最终成就🎊",
                  message: "会用ctrl+c,ctrl+v走遍天下都不怕💻",
                  position: 'top-left',
                  offset: 50,
                  showClose: true,
                  type: "success",
                  duration: 5000
              });
          }
      })
  }, 300);
})






//恶搞标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '😨别走啊~';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '🤭嘻嘻,我就知道你会回来的！';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});