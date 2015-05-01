# International Alert Security App

This is the International Alert Security App. Files are compiled using Intel XDK into Android/iOS.

## What to do when the server on vagrant isn't responding
This happens because the Apache server can't see the configuration file ```local.conf```. The reason it can't see it is that when your host machine goes to sleep, the shared filespace (where local.conf sits) is briefly unavailable to the guest machine.

1. Open up terminal (or command-line on windows)
2. Navigate to the root of the this repo
```cd /path/to/repo```
3. Type ```vagrant up```
4. Type ```vagrant ssh```
5. Type ```sudo apachectl restart```
6. Type ```exit```

