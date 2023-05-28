var express = require('express');
var router = express.Router();

// Model
const MessageModel = require('../models/messageModel');
const sendMail = require('../utils/mail');

/* Messages CRUD */


// [domainname.com]/message/
router.get('/', function (req, res, next) {
  const query = MessageModel.find();
  query
    .then((result) => { res.json({ message: "All Messages", result: result }); })
    .catch((err) => res.json({ message: 'Error!', error: err }));
});

// [domainname.com]/message/
router.post('/', function (req, res, next) {
  const newMessage = new MessageModel(req.body);
  newMessage.save()
    .then((result) => 
    {
      // sendMail(process.env.MAIL_SYSTEM, 'New Message', 'You have a new message!');
      res.json({ message: 'Message Saved', result: result })
    })
    .catch((err) => res.json({ message: 'Error!', error: err }));
});

// [domainname.com]/message/MessageID
router.get('/:messageID', function (req, res, next) {
  // const query = MessageModel.find({_id:req.params.messageID});
  const query = MessageModel.findById(req.params.messageID);
  query
    .then((result) => { res.json({ message: "Message:", result: result }); })
    .catch((err) => res.json({ message: 'Error!', error: err }));
});

// [domainname.com]/message/MessageID
router.put('/:messageID', function (req, res, next) {
  const query = MessageModel.findByIdAndUpdate(req.params.messageID, req.body, { new: true });

  query
    .then((result) => { res.json({ message: "Message Updated", result: result }); })
    .catch((err) => res.json({ message: 'Error!', error: err }));
});

// [domainname.com]/message/MessageID
router.delete('/:messageID', function (req, res, next) {
  const query = MessageModel.findByIdAndDelete(req.params.messageID);
  query
    .then((result) => { res.json({ message: "Message Deleted!", result: result }); })
    .catch((err) => res.json({ message: 'Error!', error: err }));
});



// [domainname.com]/message/
router.get('/getall', function (req, res, next) {
  res.json({ message: 'Welcome to the Contact Form API! From Message.' });
});

module.exports = router;
