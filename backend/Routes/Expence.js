const express = require("express")

const router = express.Router();


// To create user//

router.post("/", require("./../Controllers/Expence").AddExpence);

// To Get All user data From Database //

router.get("/", require("./../Controllers/Expence").getAllExpence);

// To Get Specific User Data from Database///

router.get("/:userId", require("./../Controllers/Expence").getExpence);


// To delete data From Database //

router.delete("/:userId", require("./../Controllers/Expence").delExpence);


// To Update data From Database //

router.put("/:userId", require("./../Controllers/Expence").updateExpence);


module.exports = router;