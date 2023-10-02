import router from "@sitevision/api/common/router";
import appData from "@sitevision/api/server/appData";

router.get("/", (req, res) => {
  const message = "Hello, world!";
  const name = appData.get("name");

  const data = {
    message,
    name,
  };

  res.agnosticRender("", data);
});
