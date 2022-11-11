import { randomBytes } from "crypto";
import {diskStorage, Options,} from "multer";
import { resolve } from "path";
import path from "path";

export const multerConfig = {
  dest:resolve(__dirname, '..','..','uploads'),
  storage:diskStorage({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    destination: (req, file, cb) => {
      cb(null,resolve(__dirname, '..','..','uploads'));
    },
    filename: (req, file, cb)=>{
      randomBytes(16, (error,hash)=>{
        if(error){
          cb(error, file.filename)
        }
        const fileName = `${hash.toString('hex')}-${file.originalname}`
        
        cb(null,fileName);
        // preciso retornar agora com o callback o nome do arquivo file
      });
    },
  }),
  limits:{
    fileSize: 10 * 1024 * 1024
  },
  fileFilter:(req,file,cb)=>{

   if(path.extname(file.originalname) === '.pdf'){
    cb(null,true);
   }else{
    cb(new Error('arquivo invalido'))
   }
  }
} as Options