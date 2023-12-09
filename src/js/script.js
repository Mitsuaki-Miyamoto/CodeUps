
jQuery(function ($) {
  // この中であればWordPressでも「$」が使用可能になる

  // ハンバーガーメニュー
  $(".js-hamburger, .js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();

    // ドロワーの状態を追跡するフラグ
    let isDrawerOpen = false;
    if ($(".js-hamburger").hasClass("is-active")) {
      // ドロワーが表示された場合
      $("body").css("overflow", "hidden");
      $(".header__inner").css("background-color", "#408F95"); // 追加
      isDrawerOpen = true;
    } else {
      // ドロワーが閉じられ、他にスクロール無効化の要因がない場合、スクロールを有効にする
      $("body").css("overflow", "auto");
      $(".header__inner").css("background-color", ""); // 追加
      isDrawerOpen = false;
    }
  });


$(function () {
  // ページ内スクロール
  $(function () {
    // ヘッダーの高さ取得
    const headerHeight = $(".js-header").height();
    $('a[href^="#"]').click(function () {
      const speed = 500;
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? "html" : href);
      // ヘッダーの高さ分下げる
      let position = target.offset().top - headerHeight;
      $("body,html").animate({ scrollTop: position }, speed, "swing");
      return false;
    });
  });
});

  // resizeイベント
  $(window).resize(function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeDrawer();
      $(".header__inner").css("background-color", ""); // 追加
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
  let mv__slider = new Swiper(".js-mv-swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    autoplay: {
      delay: 3000, // 画像が自動的にスライドするまでの遅延時間
    },
    allowTouchMove: false,
  });

  document.addEventListener("DOMContentLoaded", function() {
  let mvSlider = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
  });
});


  // top-campaignスライダー
  let topCampaign__body = new Swiper(".js-swiper-container", {
    slidesPerView: 1.2,
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

//モーダル(About us下層ページ)
$(function(){
  // if (window.matchMedia('(min-width:768px)').matches) {
		/* ウィンドウサイズ769以上の処理を記述 */

jQuery(".js-modal-open1").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-about-modal1")[0].showModal();

  // モーダルを開いたときに背景を固定
  document.body.style.overflow = 'hidden';
});
jQuery(".js-modal-close").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-about-modal1")[0].close();
  // モーダルを閉じたときに背景の固定を解除
  document.body.style.overflow = '';
});

jQuery(".js-modal-open2").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-about-modal2")[0].showModal();
  // モーダルを開いたときに背景を固定
  document.body.style.overflow = 'hidden';
});
jQuery(".js-modal-close").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-about-modal2")[0].close();
  // モーダルを閉じたときに背景の固定を解除
  // document.body.style.overflow = '';
});

jQuery(".js-modal-open3").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-about-modal3")[0].showModal();
  // モーダルを開いたときに背景を固定
  document.body.style.overflow = 'hidden';
});
jQuery(".js-modal-close").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-about-modal3")[0].close();
});

jQuery(".js-modal-open4").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-about-modal4")[0].showModal();
  // モーダルを開いたときに背景を固定
document.body.style.overflow = 'hidden';
});
jQuery(".js-modal-close").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-about-modal4")[0].close();
});

jQuery(".js-modal-open5").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-about-modal5")[0].showModal();
  // モーダルを開いたときに背景を固定
  document.body.style.overflow = 'hidden';
});
jQuery(".js-modal-close").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-about-modal5")[0].close();
});

jQuery(".js-modal-open6").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-about-modal6")[0].showModal();
  // モーダルを開いたときに背景を固定
  document.body.style.overflow = 'hidden';
});
jQuery(".js-modal-close").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-about-modal6")[0].close();
});
})

// タブ
document.addEventListener('DOMContentLoaded', function(){
  const tabList = document.querySelectorAll('.js-information-tab');
  const tabContent = document.querySelectorAll('.js-information-contents');

  // 初期状態ではすべての.tab__contents-itemを非表示にする
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  // タブに対してクリックイベントを適用
  for(let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', tabSwitch);
  }

  // 初期表示の設定
  // 最初のタブのコンテンツを表示
  tabContent[0].style.display = 'block';

  // タブをクリックすると実行する関数
  function tabSwitch(){
    // すべての.tab__contents-itemを非表示にする
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = 'none';
    }

    // activeクラスを削除
    const activeElements = document.querySelectorAll('.active');
    if (activeElements.length > 0) {
      activeElements[0].classList.remove('active');
    }

    // クリックしたタブにactiveクラスを付与
    this.classList.add('active');

    // クリックしたタブに関連する.tab__contents-itemを表示
    const index = Array.from(tabList).indexOf(this);
    tabContent[index].style.display = 'block';
  }
});


//トグル(2カラム)
jQuery(function ($) {
  // 最初にすべての兄弟要素を閉じる
  // $('.js-toggle').siblings().hide();

   // 最初の .js-toggle の兄弟要素を表示する
 $('.js-toggle').first().siblings().show();

  $('.js-toggle').on('click', function () {
    /* クリックでコンテンツを開閉 */
    $(this).siblings().slideToggle('300');
    /* 矢印の向きを変更 */
    $(this).toggleClass('open');
  });
});



// アコーディオン(FAQ)
$(function () {
  // 最初のコンテンツは表示
  $(".js-accordion-faq-item:first .js-accordion-faq-content").css("display", "block");
  // 最初の矢印は開いた時の状態に
  $(".js-accordion-faq-item:first .js-accordion-title").addClass("open");
  // タイトルをクリックすると
  $(".js-accordion-title").on("click", function () {
   // クリックした次の要素を開閉
   $(this).next().slideToggle(300);
   // タイトルにopenクラスを付け外しして矢印の向きを変更
   $(this).toggleClass("open", 300);
  });
  // 2つ目以降のコンテンツは非表示
  $(".js-accordion-faq-item:not(:first) .js-accordion-faq-content").css("display", "none");
 });


$(function(){
  $('#js-about-modal1, #js-about-modal2, #js-about-modal3, #js-about-modal4, #js-about-modal5, #js-about-modal6').one('focusin', function(){
    $(this).blur();
  });
});