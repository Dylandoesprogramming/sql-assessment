module.exports = {
    getUsers: function(req, res, next) {
        const db = req.app.get('db');
        db.getUsers()
            .then(function(users) {
                res.status(200).send(users);
            })
    },
    getVehicles: function(req, res, next) {
        const db = req.app.get('db');
        db.getVehicles()
            .then(function(vehicles) {
                res.status(200).send(vehicles)
            })
    },
    postUser: function(req, res, next) {
        const db = req.app.get('db');
        db.createUser(req.body.name, req.body.email)
            .then(function(user) {
                res.status(200).send(user);
            })
    },
    postVehicle: function(req, res, next) {
        const db = req.app.get('db');
        db.createVehicle(req.body.make, req.body.model, req.body.year, req.body.owner_id)
            .then(function(vehicle) {
                res.status(200).send(vehicle);
            })
    },
    countVehicles: function(req, res, next) {
        const db = req.app.get('db');
        db.countVehicles(req.params.userId)
            .then(function(count) {
                res.status(200).send(count);
            })
    },
    getVehiclesById: function(req, res, next) {
        const db = req.app.get('db');
        db.getVehiclesById(req.params.userId)
            .then(function(vehicles) {
                res.status(200).send(vehicles);
            })
    },
    getVehiclesByEmail: function(req, res, next) {
        const db = req.app.get('db');
        if (req.query.userEmail) {
            db.getVehiclesByEmail(req.query.userEmail)
                .then(function(vehicles) {
                    res.status(200).send(vehicles);
                })
        } else {
            req.query.userFirstStart = req.query.userFirstStart + "%";
            db.getVehiclesByFirstLet(req.query.userFirstStart)
                .then(function(vehicles) {
                    res.status(200).send(vehicles);
                })
        }
    },
    getByYear: function(req, res, next) {
        const db = req.app.get('db');
        db.getByYear()
            .then(function(vehicles) {
                res.status(200).send(vehicles);
            })
    },
    sellVehicle: function(req, res, next) {
        const db = req.app.get('db');
        db.sellVehicle(req.params.vehicleId, req.params.userId)
            .then(function(vehicle) {
                res.status(200).send(vehicle);
            })
    },
    removeOwner: function(req, res, next) {
        const db = req.app.get('db');
        db.removeOwner(req.params.userId, req.params.vehicleId)
            .then(function(vehicle) {
                res.status(200).send(vehicle);
            })
    },
    removeVehicle: function(req, res, next) {
        const db = req.app.get('db');
        db.removeVehicle(req.params.vehicleId)
            .then(function(vehicle) {
                res.status(200).send(vehicle);
            })
    }






}