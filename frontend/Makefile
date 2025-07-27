start:
	pm2 start npm --name Next --output /dev/null --error /dev/null -- run dev

delete:
	read -p "Enter pm2 pid to remove: " PID; \
	pm2 delete $$PID;
