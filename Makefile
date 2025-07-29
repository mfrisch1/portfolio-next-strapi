setup-local-linux:
	sudo npm install pm2 -g
	cd ./frontend; npm install;
	cd ./backend; npm install;

setup-local-win:
	npm install pm2 -g
	cd ./frontend; npm install;
	cd ./backend; npm install;

run:
	cd ./frontend; \
	pm2 start npm \
		--name Next \
		--output /dev/null \
		--error /dev/null \
		-- run dev
	cd ./backend; \
	pm2 start npm \
		--name Strapi \
		--output /dev/null \
		--error /dev/null \
		-- run develop 

run-next:
	cd ./frontend; \
	pm2 start npm \
		--name Next \
		--output /dev/null \
		--error /dev/null \
		-- run dev

run-strapi:
	cd ./backend; \
	pm2 start npm \
		--name Strapi \
		--output /dev/null \
		--error /dev/null \
		-- run develop 

delete:
	read -p "Enter pm2 pid to remove: " PID; \
	pm2 delete $$PID;elete:
