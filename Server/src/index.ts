import App from './app'
import {logger} from './config/logger'

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {
    console.log(`Server Started at Port, ${PORT}`)
})
