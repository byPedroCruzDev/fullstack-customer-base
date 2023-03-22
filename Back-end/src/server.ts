import app from "./app";
import AppDataSource from "./data-source";

AppDataSource.initialize()

  .then(() => {
    console.log("conected");
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
