start:
	pm2 start npm --name Strapi --output /dev/null --error /dev/null -- run develop 

delete:
	read -p "Enter pm2 pid to remove: " PID; \
	pm2 delete $$PID;
