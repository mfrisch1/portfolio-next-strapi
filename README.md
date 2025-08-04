# portfolio-next-strapi

## Local Dev Setup
Install depencencies using root makefile
```Makefile
make setup-local-linux
or 
make setup-local-win
```
Makefile uses pm2 to run and manage local server in background.
```
make run-next
make run-strapi
// For both
make run
// To delete specific background server
make delete
// To delete all
delete-all
```

