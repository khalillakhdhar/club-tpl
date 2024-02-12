const Event = require('../models/Event'); // import the model
exports.createEvent=async (req,res)=>{
    try {
        const event = new Event({
            titre: req.body.titre,
            description: req.body.description,
            date: req.body.date,
            lieu: req.body.lieu
        });
        //event.remove(titre);
        const result = await event.save();
        res.status(201).json({ message: 'Objet enregistré !' });
    } catch (error) {
        res.status(400).json({ error });
    }

}
exports.getAllevents=async (req,res)=>{
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(400).json({ error });
    }

}
exports.getEventById=async (req,res)=>{
    try {
        const event = await Event.findOne({ _id: req.params.id });
        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({ error });
    }

}
exports.updateEvent=async (req,res)=>{
    try {
        const event = new Event({
            _id: req.params.id,
            titre: req.body.titre,
            description: req.body.description,
            date: req.body.date,
            lieu: req.body.lieu
        });
        event.remove(description);
        const result = await Event.updateOne({ _id: req.params.id }, event);
        res.status(200).json({ message: 'Objet modifié !' });
    } catch (error) {
        res.status(400).json({ error });
    }

}
exports.deleteEvent=async (req,res)=>{
    try {
        const result = await Event.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'Objet supprimé !' });
    } catch (error) {
        res.status(400).json({ error });
    }

}