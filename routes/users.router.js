/* eslint-disable consistent-return */
const express = require('express');
const user = require('../model/user.model');
const mockUser = require('../mocking/userslists');

const router = express.Router();

router.post('/', async (req, res) => {
  const { body } = req;
  console.log(body);
  try {
    const userDB = await user.create(body);
    res.status(200).json(userDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrió un error',
      error,
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const userDB = await user.find();
    res.json(userDB);


  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrió un error',
      error,
    });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const userDB = await user.findOne({ id });
    res.json(userDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrió un error',
      error,
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params.id;
  try {
    const userDB = await user.findByIdAndDelete({ id });
    if (!userDB) {
      return res.status(400).json({
        mensaje: 'No se encontró el id solicitado',
      });
    }
    res.json(userDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrió un error',
      error,
    });
  }
});

router.patch('/:id', async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const { id } = req.params;
  const { body } = req.body;
  try {
    const userDB = await user.updateOne(body);
    res.status(200).json(userDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrió un error',
      error,
    });
  }
});

module.exports = router;
