const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "Two track of peaches" },
    { id: "2", title: "collect all the stars", content: "From sky" },
    {
      id: "3",
      title: "Warren Chow hunt for dinosaur eggs",
      content: "which farm",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project success", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
