const express = require("express")
const app = express()
const cors = require("cors");
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const flash = require("express-flash")
const logger = require("morgan")
const connectDB = require("./config/database")
const mainRoutes = require("./routes/main")
const apiRoutes = require("./routes/api")
require("dotenv").config({path: "./config/.env"})


const corsOptions = {
  methods: ["GET", "POST"],
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

connectDB()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger("dev"))

// Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET || "session_secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_STRING,
    }),
  })
);


// Passport middleware
app.use(passport.initialize())
app.use(passport.session())


// Routers 
app.use("/", mainRoutes)
app.use("/", apiRoutes)

app.use(flash())

app.listen(process.env.PORT, ()=>{
  console.log(`Server is running on a port ${process.env.PORT}, you better catch it!`)
})  
