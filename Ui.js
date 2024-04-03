class Ui {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    if (user.profile.message === "Not Found") {
      this.profile.innerHTML = "<h3>Not Found</h3>";
    } else {
      this.profile.innerHTML = `
            <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src=${user.profile.avatar_url} alt="" width="100%" class="mb-3">
                    <a href=${user.profile.url} target="_blank" class="btn btn-dark">
                        View Profile
                    </a>
                </div>
                <div class="col-md-9">
                    <span class="badge bg-primary">
                        Public Repos : ${user.profile.public_repos}
                    </span>
                    <span class="badge bg-secondary">
                        Followers : ${user.profile.followers}
                    </span>
                    <span class="badge bg-warning">
                        Following : ${user.profile.following}
                    </span>
    
                    <div class="mb-3"></div>
    
                    <ul class="list-group">
                        <li class="list-group-item">
                            Type ${user.profile.type}
                        </li>
                        <li class="list-group-item">
                            Company ${user.profile.company}
                        </li>
                        <li class="list-group-item">
                            Location ${user.profile.location}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            `;
    }
  }

  clearProfile() {
    document.querySelector("#searchUser").value = "";
  }
}
