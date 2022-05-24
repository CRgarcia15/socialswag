var counter = 0, // Try change this what ever you want
  votePlus = counter + 1,
  voteMinus = counter - 1;

function checkIfUserVoted() {
  return localStorage.getItem("voted");
}
if (!localStorage.getItem("voted")) {
  localStorage.setItem("voted", counter);
  $("#count").text(counter);
}
$(".buttonup").click(function () {
  var vote = checkIfUserVoted() != votePlus ? votePlus : counter;
  localStorage.setItem("voted", vote);
  $(this).next().text(vote);
});
$(".buttondw").on("click", function () {
  var vote = checkIfUserVoted() != voteMinus ? voteMinus : counter;
  localStorage.setItem("voted", vote);
  $(this).prev().text(vote);
});
