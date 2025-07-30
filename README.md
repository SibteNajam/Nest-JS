Custom Pipe.................

''''''all pipes build-in or custom execute before going to controller'''''''''


nest js custom pipe we already use build in pipes for calss validators

sometime we want toapply validator that not buildin support



authentication,, authorization

authentication
                User logged in or not user provide its credential its checked whether its authentic or not.

authorization:
            Role based 
            if its user only allow user related features routes if admin allow all routes

            Guards --> avoid duplicate checks in each controleruse same guard at multiple places

filters for exception handling


Middleware

logging incoming request , authentication (chck JWT) Request tranform , redirect if not login , setting headers etc

                    Middleware(node express)    
                    execut ebeofre controller
                    do common task token decode,  logging (write node express code inside this middleware function not nenst)
                        
                           vs
            
                    Guard(Nest feature) not in node or express
                    guard exxecute before routeis accesed 
                    role based ,authorization

