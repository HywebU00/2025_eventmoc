// customize js
$(function () {
  if ($(".tag").length > 0) {
    $(".tag").each(function (index, el) {
      $(this)
        .find("a")
        .off()
        .click(function (e) {
          $(this).parent().siblings("li").removeClass("active");
          $(this).parent("li").addClass("active");
          e.preventDefault();
        });
    });
  }
  var subStatus = false;
  $(".now_edit")
    .find(".btn_change")
    .off()
    .click(function (e) {
      if (!subStatus) {
        $(".sub_nav").addClass("show_subNav");
        subStatus = true;
      } else {
        $(".sub_nav").removeClass("show_subNav");
        subStatus = false;
      }
      e.preventDefault();
    });
  $(".sub_nav")
    .find(".close")
    .off()
    .click(function (e) {
      $(".sub_nav").removeClass("show_subNav");
      subStatus = false;
      e.preventDefault();
    });
  $(window).on("load scroll", function () {
    // var HEIGHT = $(window).scrollTop() + $('.title').innerHeight();
    var windowH = $(window).height(),
      intDis = Math.floor($(".content_block").offset().top),
      contentH = windowH - intDis,
      scrollDis = Math.floor(
        $(window).scrollTop() - $(".title").offset().top + 10
      ),
      blockHeight = Math.floor($(".publish_block").height());
    // console.log(windowH+','+scrollDis+','+blockHeight);
    if (
      $(window).scrollTop() + contentH > blockHeight &&
      blockHeight > contentH
    ) {
      $(".publish_block")
        .stop()
        .stop()
        .delay(200)
        .animate(
          { top: $(window).scrollTop() + contentH - blockHeight },
          800,
          "easeOutQuint"
        );
    } else if (
      $(window).scrollTop() + contentH > blockHeight &&
      blockHeight < contentH &&
      $(window).scrollTop() > 100
    ) {
      $(".publish_block")
        .stop()
        .stop()
        .delay(200)
        .animate({ top: scrollDis }, 400, "easeOutQuint");
    } else {
      $(".publish_block")
        .stop()
        .stop()
        .delay(200)
        .animate({ top: "auto" }, 400, "easeOutQuint")
        .removeAttr("style");
    }
  });
  // password_toggle
  var passShow = false;
  $(".password_toggle").each(function (index, el) {
    $(this)
      .find(".btn-icon")
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children("i").removeClass().addClass("i_show");
          $(this)
            .parents(".password_toggle")
            .find('input[type="password"]')
            .attr("type", "text");
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children("i").removeClass().addClass("i_hide");
          $(this)
            .parents(".password_toggle")
            .find('input[type="text"]')
            .attr("type", "password");
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });
  // sortable
  $(".sortable_list").each(function (index, el) {
    $(this)
      .find(".btn-dropdown")
      .off()
      .click(function (e) {
        e.preventDefault();
        $(this).siblings(".dropdown-content").toggleClass("show");
        $(this).blur();
        e.preventDefault();
      });
  });
  // hot_tag
  $(".hot_tag .btn")
    .off()
    .click(function (e) {
      $(this).toggleClass("active");
      e.preventDefault();
    });
  //upload
  $(".upload_content").hide();
  $(".btn-addfile")
    .off()
    .click(function (e) {
      $(".upload_content").stop().slideDown("400", "easeOutQuint");
      e.preventDefault();
    });
  $(".upload_content")
    .find("a.close")
    .off()
    .click(function (e) {
      $(".upload_content").stop().hide();
      e.preventDefault();
    });
  // photo_list
  $(".photo_list")
    .find(".item")
    .each(function (index, el) {
      $(this)
        .find('input[type="checkbox"]')
        .click(function () {
          if ($(this).prop("checked") == true) {
            $(this).parents(".item").find(".img-container").addClass("active");
            $(this).parents(".check_grp").addClass("show");
          } else if ($(this).prop("checked") == false) {
            $(this)
              .parents(".item")
              .find(".img-container")
              .removeClass("active");
            $(this).parents(".check_grp").removeClass("show");
          }
        });
    });
  // folder_list
  $(".folder_list ul ul").hide();
  $(".folder_list ul li").each(function (index, el) {
    if ($(this).children("ul").length > 0) {
      $(this).addClass("li_hasChild");
    }
  });
  var lihasChildStatus = false;
  $(".li_hasChild>a").each(function (index, el) {
    $(this)
      .off()
      .click(function (e) {
        if (!lihasChildStatus) {
          $(this).parent("li").addClass("active open");
          $(this).next("ul").stop(true, true).slideDown("400", "easeOutQuint");
          lihasChildStatus = true;
        } else {
          $(this).parent("li").removeClass("active open");
          $(this).next("ul").stop(true, true).slideUp("400", "easeOutQuint");
          lihasChildStatus = false;
        }
        e.preventDefault();
      });
  });
  var folderStatus = false;
  $(".toggleOpen")
    .off()
    .click(function (e) {
      if (!folderStatus) {
        $(this).text("收合所有分類");
        $(".folder_list")
          .find(".li_hasChild>a")
          .next("ul")
          .stop(true, true)
          .slideDown("400", "easeOutQuint");
        folderStatus = true;
      } else {
        $(this).text("展開所有分類");
        $(".folder_list")
          .find(".li_hasChild>a")
          .next("ul")
          .stop(true, true)
          .slideUp("400", "easeOutQuint");
        folderStatus = false;
      }
      e.preventDefault();
    });
  //
  $('input[type="text"]').each(function (index, el) {
    if ($(this).val() !== "") {
      $(this).addClass("used");
    }
  });
  $("textarea").each(function (index, el) {
    if ($(this).val() !== "") {
      $(this).addClass("used");
    }
  });
  $(".flex-form .error").each(function (index, el) {
    $(this).find("input").addClass("used");
    $(this).find("textarea").addClass("used");
  });
  // form style
  function _labelAni(obj) {
    var $this = $(obj);
    if ($this.val()) $this.addClass("used");
    else $this.removeClass("used");
  }
  $("input").blur(function () {
    _labelAni($(this));
  });
  $("textarea").blur(function () {
    _labelAni($(this));
  });
  $("textarea").focus(function () {
    if ($(this).parents(".error").length > 0) {
      $(this).parents(".error").removeClass("error");
    }
  });
  $(".labelEffect").each(function (index, el) {
    $(this)
      .find("select")
      .blur(function () {
        var $this = $(this);
        $(this).find("option").first().attr("disabled", "true");
        if ($(this).find(":selected").val() != "") {
          $this.addClass("used");
        } else {
          $this.removeClass("used");
          // $(this).find(":selected").text("");
        }
      });
    // $(this)
    //   .find("select")
    //   .focus(function () {
    //     var item = $(this).find("option").first();
    //     $(item).text("請選擇");
    //     $(item).removeAttr("disabled");
    //     $(this).removeClass("used");
    //   });
  });
  $(window, document, undefined).ready(function () {
    var $ripples = $(".ripples");
    $ripples.on("click.Ripples", function (e) {
      var $this = $(this);
      var $offset = $this.parent().offset();
      var $circle = $this.find(".ripplesCircle");
      var x = e.pageX - $offset.left;
      var y = e.pageY - $offset.top;
      $circle.css({
        top: y + "px",
        left: x + "px",
      });
      $this.addClass("is-active");
    });
    $ripples.on(
      "animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd",
      function (e) {
        $(this).removeClass("is-active");
      }
    );
  });
  // adv_search
  if ($(".adv_search").length > 0) {
    $(".adv_search").hide();
    $(".btn-adv")
      .off()
      .click(function (e) {
        $(".adv_search").stop().slideToggle(400, "easeOutCubic");
        e.preventDefault();
      });
  }
  // ripple
  var links = document.querySelectorAll(".btn");
  for (var i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener(
      "click",
      function (e) {
        var targetEl = e.target;
        var inkEl = targetEl.querySelector(".ink");
        if (inkEl) {
          inkEl.classList.remove("animate");
        } else {
          inkEl = document.createElement("span");
          inkEl.classList.add("ink");
          inkEl.style.width = inkEl.style.height =
            Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + "px";
          targetEl.appendChild(inkEl);
        }
        inkEl.style.left = e.offsetX - inkEl.offsetWidth / 2 + "px";
        inkEl.style.top = e.offsetY - inkEl.offsetHeight / 2 + "px";
        inkEl.classList.add("animate");
      },
      false
    );
  }
  var menulis = document.querySelectorAll("nav ul li a");
  for (var i = 0, len = menulis.length; i < len; i++) {
    menulis[i].addEventListener(
      "click",
      function (e) {
        var targetEl = e.target;
        var inkEl = targetEl.querySelector(".ink");

        if (inkEl) {
          inkEl.classList.remove("animate");
        } else {
          inkEl = document.createElement("span");
          inkEl.classList.add("ink");
          inkEl.style.width = inkEl.style.height =
            Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + "px";
          targetEl.appendChild(inkEl);
        }

        inkEl.style.left = e.offsetX - inkEl.offsetWidth / 2 + "px";
        inkEl.style.top = e.offsetY - inkEl.offsetHeight / 2 + "px";
        inkEl.classList.add("animate");
        // MobileHiddenUi();
      },
      false
    );
  }

  //----------------------------------------------------------版頭-----//
  // var dropdownStatus = false;
  // $(".dropdown-btn").each(function (index, el) {
  //   $(this).click(function (e) {
  //     $(this).siblings(".dropdown-content").addClass("show");
  //     dropdownStatus = true;
  //     $(this).blur();
  //     e.preventDefault();
  //   });
  // });
  // $(document).mouseup(function (e) {
  //   var target = e.target,
  //     container = $(".dropdown-content");
  //   if (
  //     !container.is(e.target) &&
  //     container.has(e.target).length === 0 &&
  //     (!$(".dropdown-btn").is(e.target) || !$(".btn-dropdown").is(e.target))
  //   ) {
  //     if (
  //       !(
  //         ($(".dropdown-btn").is(e.target) ||
  //           $(".btn-dropdown").is(e.target)) &&
  //         $(target).siblings(".show").length > 0
  //       )
  //     ) {
  //       container.removeClass("show");
  //     }
  //   }
  // });
  
  // ---------------------------------------------------------------------
  // header --------------------------------------------------------------
  // ---------------------------------------------------------------------
  // 計算並設定 dropdown 右側對齊：right = .headerFunction 的寬度
  function setPersonalPanelRight() {
    const $hf = $(".headerFunction");
    const base = $hf.length ? $hf.outerWidth() : 0;
    const offset = 30;
    $("header .account .dropdown-content").css("right", (base + offset) + "px");
  }

  function bindPersonalPanel() {
    const isDesktop = $(window).width() > 991;

    // 只在 header .account 底下找這一組
    const $wrap    = $("header .account");
    const $btn     = $wrap.find(".dropdown-btn");
    const $content = $wrap.find(".dropdown-content");

    // 清舊事件（限這一組命名空間）
    $btn.off(".pp");
    $(document).off(".pp.headerAccount");

    if (isDesktop) {
      // 桌機：隱藏按鈕、內容固定顯示且不綁外部關閉
      $btn.hide();
      $content.addClass("show is-fixed");
      setPersonalPanelRight();
    } else {
      // 手機：顯示按鈕、內容預設收起，right=0
      $btn.show();
      $content.removeClass("is-fixed show").css("right", "0");

      // 先清掉舊的未命名 click（這顆只限 header .account .dropdown-btn，不會影響別處）
      $btn.off("click");        // ← 移除舊版 .click(...)
      $btn.off(".pp");
      $content.off(".pp");
      $(document).off(".pp.headerAccount");

      // ① 防止 document 的 mouseup 把面板關掉：在目標上阻斷冒泡
      $btn.on("mousedown.pp mouseup.pp click.pp touchstart.pp touchend.pp", function (e) {
        e.stopPropagation();
      });
      $content.on("mousedown.pp mouseup.pp click.pp touchstart.pp touchend.pp", function (e) {
        e.stopPropagation();
      });

      // ② 點 .dropdown-btn → 若已展開就關，否則展開（避免閃爍）
      $btn.on("click.pp", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const $panel = $(this).siblings(".dropdown-content");
        const willOpen = !$panel.hasClass("show");

        // 若要同時只允許一個打開，可先關掉其它（可選）
        // $("header .account .dropdown-content.show").not($panel).removeClass("show");

        if (willOpen) {
          // 延後到下一個 event loop，避開全域 mouseup
          setTimeout(function () {
            $panel.addClass("show");
          }, 0);
        } else {
          $panel.removeClass("show");
        }

        $(this).blur();
      });

      // ③ 手機才啟用：點 .account 以外才關閉（用 click，限定範圍，避免干擾其他 dropdown）
      $(document).on("click.pp.headerAccount", function (e) {
        if (!$(e.target).closest("header .account .dropdown-content, header .account .dropdown-btn").length) {
          $content.removeClass("show");
        }
      });
    }
  }

  $(function () {
    bindPersonalPanel();
    $(window).on("resize.pp", function () {
      bindPersonalPanel();
      if ($(window).width() > 991) setPersonalPanelRight();
      else $("header .account .dropdown-content").css("right", "0");
    });
  });

  // ---------------------------------------------------------------------
  // ------- FunctionPanel（頁面工具列）的下拉：只作用在 .functionPanel -------
  // ---------------------------------------------------------------------
  function bindFunctionPanelDropdown() {
    const $root = $(".functionPanel");
    if (!$root.length) return;

    const $btns     = $root.find(".btn.dropdown-btn");
    const $contents = $root.find(".dropdown-content");

    // 先清事件（只清本區塊 .fp 命名空間）
    $btns.off(".fp");
    $contents.off(".fp");
    $(document).off(".fp.close").off(".fp.key");

    // 防止冒泡到全域關閉器
    $btns.on("mousedown.fp mouseup.fp click.fp touchstart.fp touchend.fp", e => e.stopPropagation());
    $contents.on("mousedown.fp mouseup.fp click.fp touchstart.fp touchend.fp", e => e.stopPropagation());

    // 點按鈕 → 切換同層 dropdown-content 的 .show（並關閉其他）
    $btns.on("click.fp", function (e) {
      e.preventDefault();
      const $panel = $(this).siblings(".dropdown-content");
      const isOpen = $panel.hasClass("show");

      // 關閉同區塊其他展開的
      $contents.not($panel).removeClass("show");

      if (isOpen) {
        $panel.removeClass("show");
      } else {
        // 避開可能存在的全域 mouseup/click 關閉造成的「閃一下」
        setTimeout(() => { $panel.addClass("show"); }, 0);
      }

      $(this).blur();
    });

    // 點 .functionPanel 外部 → 關閉（只關這一區）
    $(document).on("click.fp.close", function (e) {
      if (!$(e.target).closest(".functionPanel .dropdown-content, .functionPanel .btn.dropdown-btn").length) {
        $contents.removeClass("show");
      }
    });

    // ESC 關閉（只關這一區）
    $(document).on("keydown.fp.key", function (e) {
      if (e.key === "Escape" || e.keyCode === 27) $contents.removeClass("show");
    });
  }
  // 啟用
  $(function () { bindFunctionPanelDropdown(); });
  $(window).on("resize.fp", function () { bindFunctionPanelDropdown(); });


  //----------------------------------------------------------選單控制-----//
  // 手機版關閉左側選單
  function _CLOSEMENU() {
    $("aside").removeClass("open");
    $(".overlay").removeClass("show");
    $(".wrapper").removeClass("noscroll");
    $(this).blur();

    //手機版關閉左側選單
    if (!sideStatus) {
      $("aside").addClass("hidden");
      $("header").addClass("full");
      $(".content").addClass("full");
      sideStatus = true;
    } else {
      $("aside").removeClass("hidden");
      $("header").removeClass("full");
      $(".content").removeClass("full");
      sideStatus = false;
    }
    if ((subStatus = -true)) {
      $(".sub_nav").removeClass("show_subNav");
      subStatus = false;
    }
    $(".li_hasChild>a").find(".ink").remove();
    $(this).blur();
    // e.preventDefault();
  }
  //
  // $("body").append('<div class="overlay"></div>');
  $(".toggle_menu_btn")
    .off()
    .click(function (e) {
      $("aside").toggleClass("open");
      $(".overlay").toggleClass("show");
      $(".wrapper").toggleClass("noscroll");
      $(this).blur();
      e.preventDefault();
    });
  $(".overlay")
    .off()
    .click(function (e) {
      _CLOSEMENU();
      e.preventDefault();
    });
  var sideStatus = false;

  $("header")
    .find(".toggle_menu_btn")
    .off()
    .click(function (e) {
      if (!sideStatus) {
        $("aside").addClass("hidden");
        $("header").addClass("full");
        $(".content").addClass("full");

        sideStatus = true;
      } else {
        $("aside").removeClass("hidden");
        $("header").removeClass("full");
        $(".content").removeClass("full");
        sideStatus = false;
      }
      if ((subStatus = -true)) {
        $(".sub_nav").removeClass("show_subNav");
        subStatus = false;
      }
      $(".li_hasChild>a").find(".ink").remove();
      $(this).blur();
      e.preventDefault();
      togglePCclass();
      OpenMenu();
    });
  $(window).resize(function () {
    togglePCclass();
  });
  //當Menu在PC版本時 增加ＣlassName PC(子選單不會展開)
  function togglePCclass() {
    if ($("aside.hidden").length != 0) {
      if ($(window).width() > 992) {
        $("aside").addClass("Pc");
      } else {
        $("aside").removeClass("Pc");
      }
    }
  }

  function OpenMenu() {
    //當Menu隱藏時 hover時則會展開選單
    if ($(".hidden").length != 0) {
      $(".hidden").mouseover(function () {
        $("header.full").removeClass("full");
        $(".content.full").removeClass("full");

        if ($(window).width() > 992) {
          $("aside").removeClass("hidden");
          sideStatus = false;
        } else {
          $("aside").addClass("hidden");
        }
      });
    }
  }
  OpenMenu();
  //----------------------------------------------------------選單控制-----//
  //   $("aside").prepend('<a href="#" class="close_btn"></a>');
  $("aside").prepend('<a href="#" class="close_btn toggle_menu_btn"></a>');
  // $('aside').find('.toggle_menu_btn').clone().prependTo('header');
  $("aside")
    // .find(".close_btn")
    .find(".close_btn.toggle_menu_btn")
    .off()
    .click(function (e) {
      _CLOSEMENU();
      e.preventDefault();
    });
  // 選單控制下拉
  $("aside nav ul li").each(function (index, el) {
    if ($(this).children("ul").length > 0) {
      $(this).addClass("li_hasChild");
    }
  });
  $("aside nav ul ul").hide();
  // 設定有副選單的a
  $(".li_hasChild>a").each(function (index, el) {
    $(this)
      .off()
      .click(function (e) {
        $(this).parent("li").toggleClass("active open");
        $(this).parents("li").siblings().find(".ink").remove();
        $(this)
          .parents("li")
          .siblings()
          .removeClass("active open")
          .find("ul")
          .stop(true, true)
          .slideUp("800", "easeOutQuint");
        $(this).next("ul").stop(true, true).slideToggle("800", "easeOutQuint");
        e.preventDefault();
      });
  });
});
$(function () {
  $(".mp_widget .counter").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 5000,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          //alert('finished');
        },
      }
    );
  });
});
//tab
$(function () {
  // Variables
  var clickedTab = $(".tab_items > .active");
  var tabWrapper = $(".tab__content");
  var activeTab = tabWrapper.find(".active");
  var activeTabHeight = activeTab.outerHeight();
  activeTab.show();
  tabWrapper.height(activeTabHeight);
  // 按鈕事件
  $(".tab_items > button").on("click", function () {
    $(".tab_items > button").removeClass("active");
    $(this).addClass("active");
    clickedTab = $(".tab_items .active");
    activeTab.fadeOut(100, function () {
      $(".tab__content > div").removeClass("active");
      var clickedTabIndex = clickedTab.index();
      $(".tab__content > div").eq(clickedTabIndex).addClass("active");
      activeTab = $(".tab__content > .active");
      activeTabHeight = activeTab.outerHeight();
      tabWrapper
        .stop()
        .delay(0)
        .animate({ height: activeTabHeight }, 500, function () {
          activeTab.stop().delay(50).fadeIn(100);
        });
    });
  });
  if ($(".right_sidebar").length > 0) {
    $(".btn-module-choose")
      .off()
      .click(function (e) {
        $(".right_sidebar").removeClass("show");
        $(".template_choose").addClass("show");
        e.preventDefault();
      });
    $(".btn-grid-choose")
      .off()
      .click(function (e) {
        $(".right_sidebar").removeClass("show");
        $(".grid_choose").addClass("show");
        e.preventDefault();
      });
    $(".right_sidebar")
      .find("._head a.close")
      .off()
      .click(function (e) {
        $(this).parents(".right_sidebar").removeClass("show");
        e.preventDefault();
      });
  }
});


// hyui js
/*-----------------------------------*/
///////////////// 變數 ////////////////
/*-----------------------------------*/
var _window = $(window),
    ww = _window.outerWidth(),
    wh = _window.height(),
    _body = $('body'),
    wwNormal = 1400,
    wwMedium = 992,
    wwSmall = 768,
    wwxs = 576;
/*-------------------------------------*/
/////////table 加上響應式table wrapper/////
///*------------------------------------*/
$('table').each(function(index, el) {
    //判斷沒有table_list
    if ($(this).parents('.table_list').length == 0 && $(this).parents('.fix_th_table').length == 0 && $(this).parent('form').length == 0) {
        $(this).scroltable();
    }
});
// tablearrow arrow，為了設定箭頭
$('.scroltable-nav-left').append('<div class="tablearrow_left" style="display:block;"></div>');
$('.scroltable-nav-right').append('<div class="tablearrow_right"  style="display:block;"></div>');

// 固定版頭
function table_Arrow() {
    if ($('table').parents('.table_list').length == 0 && $(this).parent('form').length == 0) {
        if ($('.scroltable-wrapper').length > 0) {
            var stickyArrowTop = Math.floor($('.scroltable-wrapper').offset().top),
                thisScroll = Math.floor($(this).scrollTop());
            if (thisScroll > stickyArrowTop - 230) {
                $('.scroltable-wrapper .tablearrow_left').css('display', 'block');
                $('.scroltable-wrapper .tablearrow_left').css({ "top": thisScroll - stickyArrowTop + 220 }, 100, 'easeOutQuint');
                $('.scroltable-wrapper .tablearrow_right').css('display', 'block');
                $('.scroltable-wrapper .tablearrow_right').css({ "top": thisScroll - stickyArrowTop + 220 }, 100, 'easeOutQuint');
                // $('.scroltable-wrapper .tablearrow_right').css({ "top": thisScroll - stickyArrowTop + 220 }, 100, 'easeOutQuint');
            } else {
                $('.scroltable-wrapper .tablearrow_left').css({
                    top: '10px',
                    display: 'none'
                });
                $('.scroltable-wrapper .tablearrow_right').css({
                    top: '10px',
                    display: 'none'
                });
            }
        }
    }
}
$(window).scroll(function(event) {
    table_Arrow();
});
var scrollTimer;
_window.scroll(function() {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function() {
        table_Arrow();
    }, 50);
});
///*------------------------------------*/
////////////table 加上 data-title//////////
///*------------------------------------*/
function rwdTable() {
    $('.table_list').find('table').each(function() {
        var $row = $(this).find('tr');
        rowCount = $row.length;
        for (var n = 1; n <= rowCount; n++) {
            $(this).find('th').each(function(index) {
                var thText = $(this).text();
                $row.eq(n).find('td').eq(index).attr('data-title', thText);
            });
        }
    });
}
rwdTable();

/*-----------------------------------*/
///////////////置頂go to top////////////
/*-----------------------------------*/
$(window).bind('scroll', function() {
    if ($(this).scrollTop() > 200) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});
/*-----------------------------------*/
/////click event to scroll to top//////
/*-----------------------------------*/
$('.scrollToTop').click(function(e) {
    $('html, body').animate({ scrollTop: 0 }, 400, 'easeOutExpo');
    e.preventDefault();
});
$('.scrollToTop').keydown(function(e) {
    _body.find('a.goCenter').focus();
    e.preventDefault();
});

// fontSize
// 先把可能的舊事件移除，避免重複綁定造成「加了又被減掉」
// $(".fontSize > button").off("click.fontsize");
// $(".fontSize ul button").off("click.fontsize");
// $(document).off("click.fontsize");

// // 預設：medium 有 .act（只設在當前元件底下，避免影響別處）
// $(".fontSize").each(function () {
//   $(this).find(".mediumSize").addClass("act");
// });

// // A. 點「文字大小」→ 開/關當前 ul.show（並關閉其它組）
// $(".fontSize > button").on("click.fontsize", function (e) {
//   e.preventDefault();
//   e.stopPropagation();

//   const $wrap = $(this).closest(".fontSize");
//   const $ul   = $wrap.find("> ul");

//   // 關掉其它 fontSize 的展開
//   $(".fontSize > ul").not($ul).removeClass("show");

//   // 只切換當前這一組
//   $ul.toggleClass("show");
// });

// // B. 點 ul 裡任一按鈕 → 切換 .act
// $(".fontSize ul button").on("click.fontsize", function (e) {
//   e.preventDefault();
//   e.stopPropagation();

//   const $ul   = $(this).closest("ul");
//   const $btns = $ul.find("button");

//   $btns.removeClass("act");
//   $(this).addClass("act");

//   // 若需要：點完就收合
//   $ul.removeClass("show");
// });

// // C. 點擊外部 → 關閉所有 fontSize 的下拉
// $(document).on("click.fontsize", function () {
//   $(".fontSize > ul").removeClass("show");
// });

// fontSize
// var fontSizeDropdownStatus = false;

// // 預設 mediumSize → 加上 .act
// $(".fontSize .mediumSize").addClass("act");

// // 點擊 .fontSize > button → 開關 ul.show
// $(".fontSize > button").each(function () {
//   $(this).off("click.fontSize").on("click.fontSize", function (e) {
//     e.preventDefault();
//     e.stopPropagation(); // 避免冒泡到 document
//     $(this).siblings("ul").toggleClass("show");
//     fontSizeDropdownStatus = true;
//     $(this).blur();
//   });
// });

// // 點擊 ul 裡的按鈕 → 切換 .act，保持 ul.show
// $(".fontSize ul button").off("click.fontSize").on("click.fontSize", function (e) {
//   e.preventDefault();
//   e.stopPropagation(); // 避免冒泡到 document
//   var $ul = $(this).closest("ul");
//   $ul.find("button").removeClass("act");
//   $(this).addClass("act");
//   // 不移除 .show，保持展開
// });

// // 點擊外部 → 關閉 ul.show
// $(document).off("click.fontSize").on("click.fontSize", function (e) {
//   if (!$(e.target).closest(".fontSize").length) {
//     $(".fontSize > ul").removeClass("show");
//     fontSizeDropdownStatus = false;
//   }
// });


// fontSize
var fontSizeDropdownStatus = false;

// 預設 mediumSize → 加上 .act & .content 字級 100%
$(".fontSize .smallSize").addClass("act");
$(".content").css("font-size", "100%");
$("aside nav a span").css("font-size", "100%");

// 點擊 .fontSize > button → 開關 ul.show
$(".fontSize > button").each(function () {
  $(this).off("click.fontSize").on("click.fontSize", function (e) {
    e.preventDefault();
    e.stopPropagation(); // 避免冒泡到 document
    $(this).siblings("ul").toggleClass("show");
    fontSizeDropdownStatus = true;
    $(this).blur();
  });
});

// 點擊 ul 裡的按鈕 → 切換 .act & 調整字級
$(".fontSize ul button").off("click.fontSize").on("click.fontSize", function (e) {
  e.preventDefault();
  e.stopPropagation();

  var $ul = $(this).closest("ul");
  $ul.find("button").removeClass("act");
  $(this).addClass("act");

  // 根據 class 切換 .content 字級
  if ($(this).hasClass("smallSize")) {
    $(".content").css("font-size", "100%");
    $("aside nav a span").css("font-size", "100%");
  } else if ($(this).hasClass("mediumSize")) {
    $(".content").css("font-size", "120%");
    $("aside nav a span").css("font-size", "120%");
  } else if ($(this).hasClass("largeSize")) {
    $(".content").css("font-size", "140%");
    $("aside nav a span").css("font-size", "140%");
  }
});

// 點擊外部 → 關閉 ul.show
$(document).off("click.fontSize").on("click.fontSize", function (e) {
  if (!$(e.target).closest(".fontSize").length) {
    $(".fontSize > ul").removeClass("show");
    fontSizeDropdownStatus = false;
  }
});

// ESC 關閉選單並回焦控制鈕
$(document).off("keydown.fontSize").on("keydown.fontSize", function (e) {
  if (e.key === "Escape" || e.keyCode === 27) {
    var $open = $(".fontSize > ul.show");
    if ($open.length) {
      $open.removeClass("show");
      var $activeWrap = $(document.activeElement).closest(".fontSize");
      if ($activeWrap.length) {
        $activeWrap.find("> button").focus();
      }
    }
  }
});


