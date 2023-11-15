$(function() {
  // Get current hour 
  var currentHour = dayjs().hour();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  $(".saveBtn").on("click", function() {
    // Get the id of the time-block 
    var timeBlockId = $(this).parent().attr("id");
    // Get the user input text
    var userText = $(this).siblings(".description").val();
    // Save to localStorage
    localStorage.setItem(timeBlockId, userText);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  // Loop through each time block
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    // Remove old classes  
    $(this).removeClass("past present future");
    // Compare block hour to current hour and add class
    if(blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements
  $(".time-block").each(function() {
    var id = $(this).attr("id");
    var storedData = localStorage.getItem(id);
    if (storedData) {
      $(this).find(".description").val(storedData); 
    }
  });

  // TODO: Add code to display the current date in the header of the page.
  // Display current date in header
  $("#currentDay").text(dayjs().format('MMMM D, YYYY'));
});