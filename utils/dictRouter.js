const express = require('express');
const router = express.Router();  

const { getWordDef } = require('./searchDictFunctions');

router.get('/:word', async (req,res)=> {
    const { word } = req.params;
  try{ 
    let wordDescription = await getWordDef(word);
    
    res.status(200).json(wordDescription);
  }catch(e){ 
    res.status(500).json({ message: "Could not retrieve data" });
  }
});

module.exports = router;