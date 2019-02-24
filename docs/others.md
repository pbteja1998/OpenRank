---
id: others
title: Other Instructions
sidebar_label: Others
---

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

