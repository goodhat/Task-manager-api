const express = require('express')

require('./db/mongoose') // run this script, will connect to mongodb
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT


const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        console.log(file)
        // if (!file.originalname.endsWith('.pdf')) {
        //     return cb(new Error('File must be a PDF'))
        // }
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('File must be .doc or .docx'))
        }
        cb(undefined, true)
    }
})
app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

app.use(express.json()) //parse req to json
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
