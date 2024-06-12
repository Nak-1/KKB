
var ua = {};
ua.name = window.navigator.userAgent.toLowerCase();

ua.isiPhone = ua.name.indexOf('iphone') >= 0;
ua.isiPod = ua.name.indexOf('ipod') >= 0;
ua.isiPad = ua.name.indexOf('ipad') >= 0;
ua.isiOS = (ua.isiPhone || ua.isiPod || ua.isiPad);
ua.isAndroid = ua.name.indexOf('android') >= 0;
ua.isMobile = (ua.isiOS || ua.isAndroid);
ua.isIpadChrome = ((ua.name.indexOf('crios') != -1) && ua.isiPad);

var w = 0;//繧ｦ繧｣繝ｳ繝峨え縺ｮ蟷�
var h = 0;//繧ｦ繧｣繝ｳ繝峨え縺ｮ鬮倥＆
var scrollWindow = 0; //迴ｾ蝨ｨ縺ｮ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ驥�
var switchWidth = 767; //繧ｹ繝槭�迚域ｨｪ蟷�
//鬮倥＆繝ｻ讓ｪ蟷�叙蠕�
(window).on('load',function(){
    w = window.innerWidth ? window.innerWidth: (window).width();
    h = window.innerHeight ? window.innerHeight: (window).height();
    //.fullHeight繧堤判髱｢繧ｵ繧､繧ｺ縺ｨ蜷後§縺ｫ縺吶ｋ
    ('.fullHeight').height(h);
    if(ua.isTouch){
        // w = screen.width;
        // h = screen.height;
    }
});
if(!ua.isMobile){
    (window).on('resize',function(){
        w = window.innerWidth ? window.innerWidth: (window).width();
        h = window.innerHeight ? window.innerHeight: (window).height();
        //.fullHeight繧堤判髱｢繧ｵ繧､繧ｺ縺ｨ蜷後§縺ｫ縺吶ｋ
        ('.fullHeight').height(h);
    });
}
(function(){
//繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ
    (document).on('click', '#gNavi .openClose', function(){
        ("#wrap").toggleClass('menuOpen');
    });
    (document).on('click', '#gNavi .closeBtn', function(){
        ("#wrap").removeClass('menuOpen');
    });
    (document).on('click', '#header #gNavi #menu .inner dl dt', function(){
        ('#header #gNavi #menu .inner dl dd').slideUp(500);
        (this).parent('dl').children('dd').stop(true,false).slideToggle(500);
    });
    (document).on('click', 'a', function(){
        ("#wrap").removeClass('menuOpen');
    });

//footer繧ｹ繝槭�迚�
    (document).on('click', '#footer .footer02 h2', function(){
        if(switchWidth > w){
            (this).toggleClass('active').next('.inner').stop(true,false).slideToggle(500);
        }
    });

//繧ｹ繝�繝ｼ繧ｹ繝ｪ繝ｳ繧ｯ
    (document).on('click', 'a.scroll', function(){
    ('html,body').animate({ scrollTop: ((this).attr('href')).offset().top - ('#header').height()}, 'slow','swing');
    return false;
    });
    (document).on('click', 'a.scrollNoNav', function(){
    ('html,body').animate({ scrollTop: ((this).attr('href')).offset().top}, 'slow','swing');
    return false;
    });

//鬮倥＆謠�∴
    ('.listStyle01 li').matchHeight({
        byRow:false
    });
    ('.boxStyle04 .half .innerBox').matchHeight();

//繧ｯ繝ｪ繝�け遽�峇諡｡螟ｧ
    (document).on('click', '.clickBox', function(){
        if( ("a",this).attr('target') == "_blank" ){
            window.open((this).find("a").attr("href"), '_blank');
        }else{
            window.location=(this).find("a").attr("href");
        }
        return false;
    });

//繝｢繝ｼ繝繝ｫ繧ｦ繧｣繝ｳ繝峨え
    (".lightbox").boxer();

//繧ｹ繝槭�譎ゅ�縺ｿ髮ｻ隧ｱ逡ｪ蜿ｷ譛牙柑
    if(ua.isiPhone || ua.isAndroid){
        ('.tel-link').each(function(){
            var str = (this).text();
            (this).html(('<a>').attr('href', 'tel:' + str.replace(/-/g, '')).append(str + '</a>'));
        });
    }

//逕ｻ髱｢諡｡螟ｧ邵ｮ蟆丞虚菴�
    var switchFlag = 0;
    var timer = false;
    if((document).width()<switchWidth){switchFlag = 1}
    function responsive(){
        if((document).width()<switchWidth){
            if(switchFlag == 1){
                switchFlag = 0;
            }
        }else{
            if(switchFlag == 0){
                ("#footer .footer02 .inner").show();
                switchFlag = 1;
            }
        }
    }
    responsive();
    (window).resize(function(){
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        responsive();
    }, 200);
    });

//縺雁撫縺�粋繧上○
    (document).on('click', 'input#kakunin1', function(){
        ('#kakunin').removeAttr("disabled");
    });
    (document).on('click', 'input#kakunin2', function(){
        ('#kakunin').attr("disabled", "disabled");
    });

//TOP縺ｮ縺ｿ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ驥上〒螟画峩
    if(("body#topPage").length){
        var area04start = false;
        var area05start = false;
        var time = 2500;//邨ゆｺ�∪縺ｧ縺ｮ譎る俣
        var act = 100;//莠亥ｮ壼ｮ溯｡悟屓謨ｰ
        var num = []; //譛邨ゅ�蛟､
        var length = []; //譛邨ゅ�譁�ｭ玲焚
        var diff = []; //1蝗槭↓荳翫′繧句､
        var decimal = []; //蟆乗焚縺九←縺�°
        var decimal_int = []; //謨ｴ謨ｰ譁�ｭ玲焚
        var decimal_dec = []; //蟆乗焚轤ｹ莉･荳区枚蟄玲焚
        var count = [];//螳溯｡悟屓謨ｰ
        var countup = [];
        var countUpSet = [];
        ('.activeNum').each(function(i) {
            num[i] = ('.activeNum:eq('+i+')').attr('data-number');
            length[i] = num[i].length;
            count[i] = 0;
            diff[i] = num[i] / act;
            decimal[i] = false;
            if (String(num[i]).indexOf('.') != -1) { //蟆乗焚轤ｹ縺後≠繧句�ｴ蜷�
                decimal[i] = true;
                var k = String(num[i]).split('.');
                decimal_int[i] = k[0].length;//謨ｴ謨ｰ縺ｮ譁�ｭ玲焚
                decimal_dec[i] = k[1].length;//蟆乗焚轤ｹ縺ｮ譁�ｭ玲焚
            }
            countup[i] = function(){
                if (decimal[i] == false){ //謨ｴ謨ｰ縺ｪ繧我ｸｸ繧√※陦ｨ遉ｺ
                    var j = Math.round(diff[i]*count[i]);
                }
                if (decimal[i] == true){ //蟆乗焚縺ｪ繧画｡∵焚繧貞�縺｣縺ｦ陦ｨ遉ｺ
                    var j = Math.round(diff[i]*count[i]*Math.pow(10, decimal_dec[i])) / Math.pow(10, decimal_dec[i]);
                }
                if (decimal[i] == false && String(j).length >= 4){ //謨ｴ謨ｰ驛ｨ縺�4譯∽ｻ･荳翫↑繧峨き繝ｳ繝槭ｒ謇薙▽
                    j = String(j).replace(/(\d)(?=(\d\d\d)+)/g, "1,");
                }
                ('.activeNum:eq('+i+')').text(j);
                count[i]++;
                countUpSet[i] = setTimeout(countup[i], time / act);
                if(count[i] > act){
                    if (decimal[i] == false && String(num[i]).length >= 4){ //謨ｴ謨ｰ驛ｨ縺�4譯∽ｻ･荳翫↑繧峨き繝ｳ繝槭ｒ謇薙▽
                        ('.activeNum:eq('+i+')').text(String(num[i]).replace(/(\d)(?=(\d\d\d)+)/g, "1,"));
                    } else {
                        ('.activeNum:eq('+i+')').text(num[i]);
                    }
                    clearTimeout(countUpSet[i]);
                }
            }
        });
        (window).on('load scroll', function(){
            var area01H = ('#area01').offset().top; //#area01縺ｮ邵ｦ菴咲ｽｮ
            var area02H = ('#area02').offset().top; //#area02縺ｮ邵ｦ菴咲ｽｮ
            var area03H = ('#area03').offset().top; //#area03縺ｮ邵ｦ菴咲ｽｮ
            var area04H = ('#area04').offset().top; //#area04縺ｮ邵ｦ菴咲ｽｮ
            var area05H = ('#area05').offset().top; //#area05縺ｮ邵ｦ菴咲ｽｮ
            scrollWindow = (window).scrollTop();
            if(area01H <= scrollWindow){ //#area01縺ｾ縺ｧ遘ｻ蜍輔＠縺溘→縺�
                ('#area01').addClass('active');
            }
            if(area02H <= scrollWindow){ //#area02縺ｾ縺ｧ遘ｻ蜍輔＠縺溘→縺�
                ('#area02').addClass('active');
            }
            if(area03H - ('#header').height() <= scrollWindow){ //#area03�医�繝�ム霎ｼ縺ｿ�峨∪縺ｧ遘ｻ蜍輔＠縺溘→縺�
                ('#area03').addClass('active');
            }
            if(area03H - ('#header').height() <= scrollWindow){ //#area03�医�繝�ム霎ｼ縺ｿ�峨∪縺ｧ遘ｻ蜍輔＠縺溘→縺�
                ('#header').removeClass('clearType');
            } else {
                ('#header').addClass('clearType');
            }
            if(area04H <= scrollWindow + h/2 && area04start == false){ //#area04縺悟濠蛻�ｦ九∴縺溘→縺�
                ('#area04 ul li').each(function(i) {
                    (this).delay(300 * i).animate({'opacity':1,'top':0});
                });
                area04start = true;
            }
            if(area05H <= scrollWindow + h*3/5 && area05start == false){ //#area05縺悟ｰ代＠隕九∴縺溘→縺�
                countup[0]();
                countup[1]();
                countup[2]();
                countup[3]();
                countup[4]();
                area05start = true;
            }
        });
        //TOP繧ｹ繝ｩ繧､繝繝ｼ
        topBkSlide();
        function topBkSlide() {
          var speed = 7000;
          var interval = 7000;
          var slide = ('#area01 .bkSlide li');
          var count = 0;
          var length = slide.length-1;
          (slide[0]).addClass('active');
          setInterval(function(){
            (slide[count]).fadeOut(speed);
            (slide[count+1]).removeClass('active');
            (slide[count-1]).removeClass('active');
            if ( count >= length ) {
              count = 0;
            } else {
              count++;
            }
            (slide[count]).fadeIn(speed).addClass('active');
          }, interval);
        }
        //TOP繝代Λ繝ｩ繝�け繧ｹ
        (window).bind('scroll',function(e){
            parallaxScroll();
        });
        function parallaxScroll(){
            var scrolled = (window).scrollTop();
            ('.imgScrollBox').each(function(index, el) {
                var ph1 = (this).height();
                var ih1 = ('.img',this).height();
                var pp1 = (this).offset().top;
                var ppNum = (ih1-ph1)+pp1-scrolled-ph1/2;
                ('.img',this).css({'top':-ppNum/2});
            });
        };
    }
});