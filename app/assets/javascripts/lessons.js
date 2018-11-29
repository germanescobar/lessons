function LessonView() {
  alert("Funciona");
  $(".lessons").on("click", ".lesson", function(e) {
    $(this).children(".content").toggle();
  });
}

// window.LessonView = LessonView;
