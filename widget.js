let defaultTotalGoal = 100;
let totalGoal;

// Executes on widget load
window.addEventListener('onWidgetLoad', function (obj) {
    // Start bar content
    totalGoal = obj.detail.fieldData.totalGoal;
    generateBar(obj.detail.session.data['subscriber-total'].count, totalGoal);
});

// Executes on every session update
window.addEventListener('onSessionUpdate', function(obj) {

    // Update bar content on every session update
    generateBar(obj.detail.session['subscriber-total'].count, totalGoal);
});

// Generate the bar
function generateBar(currentStateGoal, totalGoal) {

  let textContent = 'Meta de Subs:' + currentStateGoal + '/' + totalGoal;
  let currentCount = (100*currentStateGoal)/ totalGoal;
  
  $("#bar-wrapper").css("width", `${parseInt(currentCount, 10)}%`);
  $("#text-wrapper").html(textContent);
}