var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var picCross = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var arrayHTML = [];

for (var i = 0; i < picCross.length; i++) {
  for (var j = 0; j < picCross[i].length; j++) {
    arrayHTML.push(`<div class="checkbox ${["" + i + j + ""]}"><input type="checkbox"></input></div>`);
  }
}

var solution = [
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]
];

function verifySolution() {
  if (picCross.toString() === solution.toString()) {
    array.forEach((n, index) => {
      setTimeout(function() {
        $('.' + n).animate({
          'background-color': '#50B74A'
        }, 20);
      }, 20 * index)
      $(".piccross .checkbox input").attr("disabled", true);
      $(".piccross .checkbox").off();
    })
  }
}

var array = [];

for (var i = 0; i < solution.length; i++) {
  for (var j = 0; j < solution[i].length; j++) {  
    solution[i][solution[i].indexOf(solution[i][j])] == 1 ?
      array.push(["" + i + j + ""]) :
      "";
  }
}

$('#show').click(() => {
  array.forEach((n) => {
    $('.' + n + ' input').prop('checked', true);
    $('.' + n).addClass("is-checked");
  });
  picCross = solution;
  verifySolution();
});



/*$(".piccross").html((arrayHTML = arrayHTML.join("")));

$(".piccross .checkbox,.piccross .checkbox input").click(function() {
  let e = $(this);
  var checkThisOnArray = $(e)
    .attr("class")
    .replace(/\D/g, "")
    .split("");

  function check(callback) {
    console.log(picCross)
    e.children('input').prop('checked', true)
    $(e).addClass("is-checked");
    picCross[parseInt(checkThisOnArray[0])][parseInt(checkThisOnArray[1])] = 1;
    callback();
    console.log('Ok')
  }

  function uncheck(callback) {
    e.children('input').prop('checked', false)
    picCross[parseInt(checkThisOnArray[0])][parseInt(checkThisOnArray[1])] = 0;
    $(e).removeClass("is-checked");
    callback();
  }

  $(this)
    .attr("class")
    .includes("is-checked") ?
    uncheck(verifySolution) :
    check(verifySolution);
});
*/
