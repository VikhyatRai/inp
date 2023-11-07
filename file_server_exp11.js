// exp-11  Write a program to implement and understand the ‘file server’ in Nodejs. 

const http=require('http');  
fs=require('fs'); 
const port=4000 
const server=http.createServer(function(req,res){ 
    res.writeHead(200,{'content-type':'text/html'}) 
    fs.readFile('vik.html',function(error,data){   
      if(error){ 
 
            res.write(404) 
            res.write('error: File not Found') 
        }else{   
          res.write(data) 
        }        
 res.end() 
    }) }) 
server.listen(port,function(error){ 
    if(error){ 
        console.log('something went wrong',error) 
    }   
  else{ 
        console.log('server is listening on port'+port) 
    } 
 
}) 

// // vik.html
// <!DOCTYPE html> 
//  <html lang="en"> 
//  <head> 
//      <meta charset="UTF-8"> 
//      <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
//      <title>Document</title> 
//  </head> 
//  <body> 
//      <p>         my name is vikhyat rai     roll no. is 120A3042     from SIES 
//      THANK YOU!!!!!!!!!!!!!!!! 
//      </p> 
//  </body> 
//  </html> 
 
