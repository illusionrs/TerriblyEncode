# TerriblyEncode



# HOW TO RUN APP

AFTER DOWNLOADING ZIP :

1. Extract it and open terminal in that directory ;

2. Run Command:  npm start

# if above command give error :

1. Run command in Parent folder :  npm install
 
2. Go to frontend folder : Run Command : npm install

3. then comeback in terminal to parent folder : Run command : npm start


# Technology Used

     # Frontend:   Reactjs
     
     # Backend : Expressjs (Nodejs Framework)
     
# Dependencies 

     # Expressjs( to access data from API)
     # Concurrently ( to run many commands at the same time ) : So I am running express js on another port and react on another
     # Axios (to request data froms server)
     
     
# Folder Details
       1.index.js file : Containing server code which requesting data
       2.Frontend/src there is a file comonents : which is containing frontend code and extracting words from file:
       3.Frontend/src there is App.js  it is main file of React js
       4.Frontend/src/Components: there are two files Encode.js and Decode.js (which is used to encode and decode the data.)
 
 
 # Algorithm
    1.First I am converting every character to their 2 place ahead by incrementing their ASCII value. (eg: A-C)
    
    2.After this I am checking that if this character already in the string or not if yes then putting index of
      that. (Eg: abcda :- CDEF0 so a is already there so index at 0 . I am putting at last).
      
    3.To make it shorter , I remove all white space and to know where was white space I converted the
      previous character to small letter ( eg: hello world : JGN2qY4T2F so q is telling that after this there is
      white space )
 


