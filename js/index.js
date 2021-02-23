$(function () {
    //轮播图大小图适配
    $(window).on('resize', function () {
        // 获取窗口的宽度
        let clientX = $(window).width()

        //获取items
        let $allItems = $("#lk_carousel .item")

        //判断是否设置大图
        let isShowBigImg = clientX > 800;

        if (isShowBigImg) {
            //设置大图
            $allItems.each(function () {
                let src =  $(this).data('lg-img')
                let imgUrl = "url(" + src + ")";
                $(this).css({
                    "backgroundImage": imgUrl
                })
                //清除小图的img
                $(this).empty();
            })
        }else{
            //设置小图
            $allItems.each(function(){
                let src = $(this).data('sm-img')
                let img = "<img src='"+src+"'>"
                $(this).empty().append(img)
            })
        }
    })
    
    $(window).trigger('resize')
    //工具提示初始化
    $('[data-toggle="tooltip"').tooltip()

    //产品特色选项卡适配
    //当选项卡的总宽度大于父盒子的宽度,就给选项卡设置宽度
    $(window).on('resize',function(){
        var $ul = $("#lk_product .nav")
        var $allItems = $("[role='presentation']",$ul)
        
        var total = 0;
        //遍历计算li总宽度
        $allItems.each(function(index,item){
            total +=$(item).width()
        })
        
        //父盒子宽度
        var parentW = $ul.parent().width()
        
        if(total>parentW){
            $ul.css({
                width:total+'px'
            })
        }else{
            $ul.removeAttr('style')
        }

    })
 

    //导航选项卡滚动到相应位置
    var allLis = $("#lk_header .nav li")
    $(allLis[1]).on('click',function(){
        // $("html body").animate({scrollTop:$('#lk_product').offset().top},1000)
        // console.log($('#lk_product').offset().top)
        $('html,body').animate({scrollTop:1000})
    })
   
});