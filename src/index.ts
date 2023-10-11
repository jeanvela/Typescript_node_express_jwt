import app from "./app";
import { dbConnect } from "./db";

dbConnect()
app.listen(app.get('port'))
console.log(`Server on port ${app.get('port')}`)