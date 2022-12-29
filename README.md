# Elastic phrases   
Useful library for writing English papers, based on : 
``` 
@article{https://doi.org/10.13140/rg.2.2.23979.08486,
  doi = {10.13140/RG.2.2.23979.08486},
  url = {http://rgdoi.net/10.13140/RG.2.2.23979.08486},
  author = {Lachiheb,  Anis Ben Ahmed},
  language = {en},
  title = {Useful Phrases for Writing Research Papers},
  publisher = {University of Sousse},
  year = {2019}
}  
```  
## Usage:  
Run compose:   
``` 
docker-compose -f docker-compose-dev.yml up
```  
Then import data in the elastic  
```  
cd importer 
make import  
```   

Now you can use it by navigating at: 
```  
cd english-phrases 
npm install 
npm start
```  

