const github = new Github();

const ui = new Ui();

const user = document.querySelector("#submit-button");

user.addEventListener("click", click);

function click(e) {
  let userName = document.querySelector("#searchUser").value;
  console.log(userName);

  if (userName != "") {
    github
      .getUser(userName)
      .then((data) => {
        ui.showProfile(data);
        ui.clearProfile();
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
}
