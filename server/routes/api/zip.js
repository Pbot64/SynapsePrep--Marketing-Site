// Node Modules
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const validateZipInput = require('../../validation/zip');

router.post('/', (req, res) => {
  const { errors, isValid } = validateZipInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const austinZipsNumber = [
    78610,
    78613,
    78617,
    78641,
    78652,
    78653,
    78660,
    78664,
    78681,
    78701,
    78702,
    78703,
    78704,
    78705,
    78712,
    78717,
    78719,
    78721,
    78722,
    78723,
    78724,
    78725,
    78726,
    78727,
    78728,
    78729,
    78730,
    78731,
    78732,
    78733,
    78734,
    78735,
    78736,
    78737,
    78738,
    78739,
    78741,
    78742,
    78744,
    78745,
    78746,
    78747,
    78748,
    78749,
    78750,
    78751,
    78752,
    78753,
    78754,
    78756,
    78757,
    78758,
    78759,
  ];

  const austinZips = austinZipsNumber.map(String);
  if (austinZips.includes(req.body.zip)) {
    res.send('local');
  } else {
    res.send('distant');
  }
});

module.exports = router;
