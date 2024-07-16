const { default: mongoose } = require('mongoose');
const urlModel = require("../model/url")
const { fileURLToPath } = require("url");


async function generateId() {
    const { nanoid } = await import('nanoid');
    const id = nanoid(8);
    console.log(id);
    return id;
  }
  
  const isvalidUrl = (url) =>{
    try{
        new URL(url);
        return true;
    }catch(e){
        // console.log(e);
        return false;
    }   
}
const getLongUrl = async (req,res,next)=>{
    
    console.log(req.body.longUrl);
    const validUrlStatus = isvalidUrl(req.body.longUrl);
    console.log(validUrlStatus);
    if(!validUrlStatus){
       return res.json({
            data:`Kindly enter valid long url`
        })
    }else{
        let shortId = await generateId();

        let data = {
            longUrl:req.body.longUrl,
            shortUrl:shortId
        }
       const respond = await urlModel.create(data)
    
       console.log(respond);
    
        res.json({
            data:`http://localhost:10000/url/${data.shortUrl}`
        })
    }

 
}

const getShortUrl = async (req,res,next)=>{

    // console.log(req.body.);
        const id = req.params.shortUrl;

        const urlDocument = await urlModel.findOne({ shortUrl: id })
        if(!urlDocument){
            res.send("You have entered incorrect url")
        }else{
            console.log(urlDocument);

            res.redirect(urlDocument.longUrl)
        }
       
}


const urlControllerApi = {
    getLongUrl,
    getShortUrl
}

module.exports = urlControllerApi;