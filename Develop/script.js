$("#currentDay").text(
    luxon.DateTime.local().toLocaleString({
      weekday: "long",
      month: "long",
      day: "2-digit",
    })
  );

//timeblock
function timeBlock() {
    let hourEl = luxon.DateTime.local().toLocaleString({
      hour: "2-digit",
      hour12: false,
    });
    let formattedHour = parseInt(hourEl[0] + hourEl[1]);

    $(".time-block").each(function () {
      let currentHour = parseInt($(this).attr("id"));
      
      if (formattedHour > currentHour) {
        $(this).addClass("past");
      } else if (currentHour === formattedHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  //store
  function store() {
    $(".hour").each(function () {
      let currentHour = $(this).text();
      let storedText = localStorage.getItem(currentHour);
  
      if (storedText !== null) {
        $(this).siblings(".userTxt").val(storedText);
      }
    });
  }

  
  const saveBtn = $(".saveBtn");

  saveBtn.on("click", function () {
    let time = $(this).siblings(".hour").text();
    let userText = $(this).siblings(".userText").val();

    localStorage.setItem(time, userText);
  });

  timeBlock();
  store();