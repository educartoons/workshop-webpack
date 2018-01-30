import './assets/styles/app.scss';

import * as api from './app/api'

api.getPost().then((response) => {
    console.log(response)
})
