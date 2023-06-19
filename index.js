import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import {fileURLToPath} from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const app = express()
app.use(exoress.json())
app.use(helemt.crossOriginResoursePolicy({
  policy:"cross-origin"
}))

app.use(morgan("common"))


app.use(bodyParser.json({limit:"30mb",extended:true}))

app.use(cors())

app.use("/assets",express.static(path.join(__dirname,"public/assets")))


const storage =  multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,"public/assets")
  },
  filename:function (req,file,cb){
    cb(null,file.orignalname)
  }
}
)

const upload = multer({storage})