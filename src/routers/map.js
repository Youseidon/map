const express = require('express')
const router = new express.Router()

router.get('', (req, res) => {
    res.render('index', {
        title: 'Map app',
        name: 'Yousef Nourizadeh'
    });
})
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        image: 'img/robot.png',
        name: 'Yousef Nourizadeh'
    })
})
router.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is a message for you to help. help. help. help',
        title: 'Help',
        name: 'Yousef Nourizadeh'
    })
})
router.get('/map', (req, res) => {
    if (!req.query.quality) {
        return res.send({
            error: 'the address must be provided'
        })
    } else {
        const qualities = {
            'video1080': 'https://cdn.abasmanesh.com/uploads/video/1398/Cross-Country-Road-Trip/season-01/episode98/abasmanesh-Season01-Episode98-high-mp4.mp4?_=1',
            'video720': 'https://cdn.abasmanesh.com/uploads/video/1399/serial-zendegi-dar-behesht/46/abasmanesh-zendegi-dar-behesht-720p-46.mp4?_=1',
            'video4k': 'https://www.w3schools.com/html/mov_bbb.mp4'
        }

        // const quality = ;
        const result = qualities['video' + req.query.quality];
        if (req.query.quality)
            res.send({ result })
    }
})

// router.get('/products', (req, res) => {
//     if (!req.query.search) {
//         return res.send({
//             error: 'You must provide a search term'
//         })
//     }
//     console.log(req.query.search)
//     res.send({
//         products: {}
//     });
// })

router.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Page',
        errorMessage: 'Help article not found.',
        name: 'Yousef Nourizadeh'
    })
})

router.get('*', (req, res) => {
    res.render('404', {
        title: '404 Page',
        errorMessage: 'Page not found.',
        name: 'Yousef Nourizadeh'
    })
})

module.exports = router