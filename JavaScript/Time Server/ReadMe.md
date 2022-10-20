# HTTP JSON API + Node.js + Time Server + Parsing Time

## Description:
   Implement a web server to display current time in different formats.
   
    Parse Current Time

    http://localhost:8000/api/parse_currenttme
    
    The browser displays current time in this way

    {"year":2021,"month":09,"date":24,"hour":16,"minute":09}
    
    Unix Time of Current Time

    http://localhost:8000/api/unix_currenttme
    
    The browser displays current time in a way similar to

    {"unixtime":1376136615474}
    
   
## Design:
   Node.js + json data
   
## Implementation
  Create the time_server.js written in node.js
      listening port: 8000
      
## Test
  Enviroment: Windows 10 + MicroSoft Edge + Command Prompt + Node.js
  
      Install Node.js on Windows 10
      Add the following 2 installation paths into  env var PATH.
      C:\Users\root\AppData\Roaming\npm
      C:\Program Files\nodejs
  
  On Command Prompt, start a time server to continue listening port 8000 by running this command:
  
      node time_server.js 8000
  
  On Edge Browser, paste and go the following 2 links:
  
      http://localhost:8000/api/parse_currenttme
      http://localhost:8000/api/unix_currenttme
      
      
## Google Slide:
https://docs.google.com/presentation/d/1RA-_MYVMDtl7ZpmJrGEML8By1bnXmeiIbqsQ9sFl1QQ/edit?usp=sharing
