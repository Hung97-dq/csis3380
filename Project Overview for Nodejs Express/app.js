const express = require("express");
const app = express();


var projects = [
  {
    id: "0",
    name: "Contact List",
    image: ["/static/img/project_1_0.PNG", "/static/img/project_1_1.PNG"],
    description: "Display Contact List from an Array of contact",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://hung97-dq.github.io/csis3380_exercise2_hung_dinh_300331448/",
    link: "https://github.com/Hung97-dq/csis3380_exercise2_hung_dinh_300331448"

  },
  {
    id: "1",
    name: "Score Board",
    image: ["/static/img/project_2_0.PNG", "/static/img/project_2_1.PNG"],
    technologies: ["Reactjs", "Nodejs"],
    demo: "https://github.com/Hung97-dq/hung-97.github.io-scoreboard/tree/master",
    description: "Scoreboard to keep track of player score and time",
    link: "https://github.com/Hung97-dq/hung-97.github.io-scoreboard/tree/master"

  },
  {
    id: "2",
    name: "EJS Website",
    image: ["/static/img/project_5_0.PNG", "/static/img/project_5_1.PNG", "/static/img/project_5_2.PNG"],
    technologies: ["Nodejs", "EJS", "Express"],
    demo: "https://github.com/Hung97-dq/csis3380/tree/main/confeti",
    description: "Demo of EJS website",
    link: "https://github.com/Hung97-dq/csis3380/tree/main/confeti"

  },
  {
    id: "3",
    name: "Planet Card",
    image: ["/static/img/project_3_0.PNG", "/static/img/project_3_1.PNG"],
    technologies: ["Reactjs", "Nodejs", "CSS"],
    demo: "https://github.com/Hung97-dq/csis3380/tree/main/ReactComponentExercise-HungDinh-300331448/ReactComponentExercise-HungDinh-300331448",
    description: "Display cards of Planet with information from an Array",
    link: "https://github.com/Hung97-dq/csis3380/tree/main/ReactComponentExercise-HungDinh-300331448/ReactComponentExercise-HungDinh-300331448"

  },
  {
    id: "4",
    name: "Card List",
    image: ["/static/img/project_4_0.PNG", "/static/img/project_4_1.PNG"],
    technologies: ["Reactjs", "Nodejs"],
    demo: "https://hung97-dq.github.io/csis3380_exercise2_hung_dinh_300331448/",
    description: "Display and Turn cards",   link: "https://github.com/Hung97-dq/csis3380_exercise2_hung_dinh_300331448.git"

  }
];

app.set('view engine', 'pug')
app.use("/static", express.static("public"));

app.get("/", function (req, res, next) {

  res.render("index", {
    projects: projects
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/projects/:id", (req, res, next) => {

  const { id } = req.params;

  if (id === null || id > projects.length - 1) {

    return next();

  } else {

    const project = projects[id];

    res.render("project", { project });
  }
});

app.use( (req, res, next) => {
  res.status(404).send('<img src="https://www.lifewire.com/thmb/KRWNaXsGSTOz_NMB485Cql7MAI8=/1500x999/filters:no_upscale():max_bytes(150000):strip_icc()/404-not-found-error-explained-2622936-b5abe50f71c1433e8112ba57b5de5346.png"/>');
})
   
app.use( (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, () => {
  console.log('Server started on port 3000!');
});