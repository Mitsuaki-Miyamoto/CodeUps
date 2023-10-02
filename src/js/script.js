
jQuery(function ($) {
  // この中であればWordPressでも「$」が使用可能になる
  // ドロワーの状態を追跡するフラグ
  let isDrawerOpen = false;

  // クリック可能な要素をキャッシュ
  // const $hamburger = $(".js-hamburger");
  // const $drawer = $(".js-drawer");

  // ハンバーガーメニュー
  $(".js-hamburger, .js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();

    if ($(".js-hamburger").hasClass("is-active")) {
      // ドロワーが表示された場合
      $("body").css("overflow", "hidden");
      isDrawerOpen = true;
    } else {
      // ドロワーが非表示の場合
      if (!isDrawerOpen) {
        // ドロワーが閉じられ、他にスクロール無効化の要因がない場合、スクロールを有効にする
        $("body").css("overflow", "auto");
      }
      isDrawerOpen = false;
      
      // ドロワーを閉じた後にhiddenスタイルを削除
      $("body").css("overflow", "visible");
    }
  });

  // resizeイベント
  $(window).resize(function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeDrawer();
    }
  });

  function openDrawer() {
    $(".js-drawer").fadeIn();
    $(".js-hamburger").addClass("is-open");
    $(".js-hamburger").addClass("is-active");
  }

  function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-open");
    $(".js-hamburger").removeClass("is-active");
  }

  // MVスライダー
  let mv__slider = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
  });

  // Campaignスライダー
  let campaign__body = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 3000,
      // 矢印をクリックして自動再生を止める
      disableOnInteraction: true,
    },

    breakpoints: {
      // スライドの表示枚数：768px以上の場合
      768: {
        slidesPerView: "auto",
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // to-top
  const pageTop = $(".js-page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });

  // 要素の取得とスピードの設定
  var box = $(".js-colorbox"),
    speed = 700;

  // .colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="js-color"></div>');
    var color = $(this).find($(".js-color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");

    // inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });
});
