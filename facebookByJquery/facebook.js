
$(document).ready(function () {
  $('#button').click(function () {
    var current = new Date();
    var h = current.getHours();
    var m = current.getMinutes();
    var s = current.getSeconds();
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    var str = h + ":" + m + ":" + s;
    var feed = $("#txt-feed").val();
    if (!feed) {
      alert("Plase input message")
    } else {
      $(`<div class="box"><div class="row">\
        <div class="col-md-2" >\
        <img src="https://i.pinimg.com/originals/81/6d/a5/816da533638aee63cfbd315ea24cccbd.jpg" width="70px"
          height="70px" class="rounded-circle" style="border: 1.5px solid black" />\
			</div>\
        <div class="col-md-10">\
          <div><b>Meow Merry</b>
            <div class="float-right text-muted" id="delete">ลบโพสต์</div>\
            <div>` + feed + `</div>\
            <div><small>โพสต์เมื่อ ` + str + `</small></div>\
          </div>\
        </div>
    </div><hr></div>`).insertAfter(`#insert`);
      $(`#txt-feed`).val("");
    }
  });
  $(document).on(`click`, `#delete`, function () {
    $(".box").remove();
  })
});


