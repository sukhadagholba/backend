const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const db = require('./data/helpers/postDb');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());


server.get('/', (req,res) => {
	res.status(200).send('API Running..');

});


server.get('/api/posts', (req, res) => {
        const request = db.get();

        request.then(response => {
        res.status(200).json(response);
        })

        .catch(err => {
        res.status(404).json({error: "The posts information could not be retrieved."});
        })

});


server.get('/api/posts/:id', (req, res) => {
        const id = req.params.id;

        db.getById(id)
	.then(response => {
        if(response.length==0) res.status(404).json({ error: "The post with the specified ID does not exist." });
        else res.status(200).json(response);
        })

        .catch(err => {
        res.status(404).json({error: "The user with the specified ID does not exist."});
        })

});


server.post('/api/posts', (req, res) => {

        const {title, contents} = req.body;
        const post = {title, contents};

        if (!title || !contents) {
                res.status(400).json({errorMessage: "Please provide title and content for the post."});
        }

        else{

        const request = db.insert(post);

        request.then(response => {
                response.title = post.title;
                response.contents = post.contents;

                res.status(201).json(response);
        })

        .catch(error => {
        res.status(500).json({ message: "There was an error while saving the user to the database" });
        })

        }  
});


server.delete('/api/posts/:id', (req, res) => {
        const id = req.params.id;
        const request = db.remove(id);

        request.then(response => {
                if(response===1) res.json({message: "Post successfully deleted." });
                else res.status(404).json({ error: "The post with the specified ID does not exist." });
        })

        .catch(error => {
        res.status(500).json({ error: "The post could not be removed" });
        })

  });




server.use(function(req, res) {
  res.status(404).send("Wrong path, check url");
});


server.listen(7000, () => console.log('API running on port 7000'));
