---
id: installation
title: Contributing to Backend
sidebar_label: Installation
---

### Running Locally

First make sure that the docker is installed correctly. 

If you do not have docker installed, you can follow the instructions in the [official docs](https://hub.docker.com/search/?type=edition&offering=community) and follow the relevant instructions based on your operating system.

<!--DOCUSAURUS_CODE_TABS-->
<!--Bash-->
```bash
# Clone the Repo
git clone https://github.com/pbteja1998/OpenRank.git

# Navigate to OpenRank directory
cd OpenRank

# Laravel uses "dot-env" for managing environment variables. 
# Create ".env" file from ".env-example" file
cp .env.example .env

# Navigate to "laradock" directory
cd laradock

# Create .env file for LaraDock
cp env-example .env

# Build the environment and run it using docker-compose
docker-compose up -d nginx mysql

# Enter the Workspace container, to execute commands like (Artisan, Composer, Gulp, …)
docker-compose exec workspace bash

# Install the composer dependencies
composer install

# Set the application key 
php artisan key:generate

# Install the npm dependencies
npm install && npm run dev

# Install voyager and run the migrations
php artisan voyager:install

# Seed the database
php artisan db:seed

# Seeding will create three users - 1 AdminUser, 1 NormalUser and 1 CompanyUser
# Admin User Credentials (email: admin@admin.com, password: password)
# Normal User Credentials (email: user@user.com, password: password)
# Company User Credentials (email: company_user@user.com, password: password)

# You can also create your own admin user using the following command
# and follow the instructions to set name and password of admin
##########
# php artisan voyager:admin admin@email.com --create
##########

# To exit the workspace container, simply enter the following command
exit
```

<!--END_DOCUSAURUS_CODE_TABS-->


- You can view the application at [http://localhost](http://localhost)
- To view the admin panel, navigate to [http://localhost/admin](http://localhost/admin) and enter the admin credentials that were created earlier.

---

### Other Instructions 

Run the following commands wherever/whenever necessary.

---

**All of the following commands should be run in the `workspace` container.**

To Enter workspace container, enter the following command.

<!--DOCUSAURUS_CODE_TABS-->
<!--Bash-->
```bash
docker-compose exec workspace bash
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### Generating migrations and seeds 

Run the following commands only if you created any new tables and breads from voyager admin panel

<!--DOCUSAURUS_CODE_TABS-->
<!--Bash-->
```bash
php artisan migrate:generate table1,table2
php artisan iseed data_types, data_rows, menus, menu_items, roles, \
        permissions,permission_role,settings,translations --classnameprefix=OpenRank
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### For Seeding the database

Run the following commands if new files are added to the `database/seeds` directory

<!--DOCUSAURUS_CODE_TABS-->
<!--Bash-->
```bash
composer dump-autoload

# (Recommended) 
# You could add seeds of only the newly added/updated seed files by specifying the class
php artisan db:seed --class=OpenRankUsersTableSeeder

# Else if you want to seed the entire database again, run the following command
php artisan db:seed

# In case of any error, run "php artisan migrate:fresh" before "php artisan db:seed"

# Note:- 
# "php artisan migrate:fresh" will drop all the tables and runs the all migrations again 
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### Updating voyager config

Run the following commands if you change `config/voyager.php` file

<!--DOCUSAURUS_CODE_TABS-->
<!--Bash-->
```bash
php artisan config:cache
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### Docker related commands

All of the following commands should be run after navigating to `laradock` directory.

<!--DOCUSAURUS_CODE_TABS-->
<!--Bash-->
```bash
# To Enter the Workspace container, to execute commands like (Artisan, Composer, Gulp, …)
docker-compose exec workspace bash

# To Exit the Workspace container, after entering the Workspace container
exit

# To Enter the mysql container
docker-compose exec mysql bash

# To Exit the mysql container
exit

# To build the initial environment using nginx and mysql
docker-compose up -d nginx mysql

# To build mysql container (Optionally, you can add --no-cache as an argument)
docker-compose build mysql
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### Laravel Related Commands

All of the following commands should be run after entering the workspace container.

<!--DOCUSAURUS_CODE_TABS-->
<!--Bash-->
```bash
# If the images are not being rendered, run the following command
php artisan storage:link

# To generate Laravel application key, run the following command
php artisan key:generate

# To view the list of routes, run the following command
php artisan route:list
```
<!--END_DOCUSAURUS_CODE_TABS-->

