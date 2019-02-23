---
id: installation
title: Installation
sidebar_label: Installation
---

### Running Locally

First make sure that the docker is installed correctly. 

If you do not have docker installed, you can follow the instructions in the [official docs](https://hub.docker.com/search/?type=edition&offering=community) and follow the relevant instructions based on your operating system.

```bash
# Clone the Repo
$ git clone https://github.com/pbteja1998/OpenRank.git

# Navigate to OpenRank directory
$ cd OpenRank

# Laravel uses "dot-env" for managing environment variables. Create ".env" file from ".env-example" file
$ cp .env.example .env

# Navigate to "laradock" directory
$ cd laradock

# Create .env file for LaraDock
$ cp env-example .env

# Build the environment and run it using docker-compose
$ docker-compose up -d nginx mysql

# Enter the Workspace container, to execute commands like (Artisan, Composer, PHPUnit, Gulp, …)
$ docker-compose exec workspace bash

# Install the composer dependencies
>> composer install

# Set the application key 
>> php artisan key:generate

# Install the npm dependencies
>> npm install && npm run dev

# Install voyager and run the migrations
>> php artisan voyager:install

# Seed the database
>> php artisan db:seed

# Seeding will create three users - 1 AdminUser, 1 NormalUser and 1 CompanyUser
# Admin User Credentials (email: admin@admin.com, password: password)
# Normal User Credentials (email: user@user.com, password: password)
# Company User Credentials (email: company_user@user.com, password: password)

# You can also create your own admin user using the following command
>> php artisan voyager:admin admin@email.com --create  # Follow the instructions to set name and password of admin

# To exit the workspace container, simply enter the following command
>> exit
```


- You can view the application at [http://localhost](http://localhost)
- To view the admin panel, navigate to [http://localhost/admin](http://localhost/admin) and enter the admin credentials that were created earlier.


### Docs Update
We are using [Docusaurus](https://github.com/facebook/docusaurus) for managing documentation.

The only directories that needs to be changed are `/docs` and `/website`

```bash
# Navigate to website directory
$ cd website

# Install the dependencies
$ npm install

# To view the website locally
$ npm run start
```
The website will be opened automatically in the browser at [http://localhost:3000](http://localhost:3000)

### Other Instructions 

**All of the following commands should be run in the `workspace` container.**

To Enter workspace container, enter the following command.
```bash
$ docker-compose exec workspace bash
```

#### Generating migrations and seeds 
**Run the following commands only if you created any new tables and breads from voyager admin panel**
```bash
>> php artisan migrate:generate table1,table2
>> php artisan iseed data_types,data_rows,menus,menu_items,roles,permissions,permission_role,settings,translations --classnameprefix=OpenRank
```

#### For Seeding the database
**Run the following commands if new files are added to the `database/seeds` directory**
```bash
>> composer dump-autoload

# (Recommended) You could add seeds of only the newly added/updated seed files by specifying the class name
>> php artisan db:seed --class=OpenRankUsersTableSeeder

# Else if you want to seed the entire database again, run the following command
>> php artisan db:seed

# In case of any error, run "php artisan migrate:fresh" before "php artisan db:seed"
# Note that "php artisan migrate:fresh" will drop all the tables and runs the all migrations again 
```

#### Updating voyager config
**Run the following commands if you change `config/voyager.php` file**
```bash
>> php artisan config:cache
```

#### Docker related commands
**All of the following commands should be run after navigating to `laradock` directory.**

```bash
# To Enter the Workspace container, to execute commands like (Artisan, Composer, PHPUnit, Gulp, …)
$ docker-compose exec workspace bash

# To Exit the Workspace container, after entering the Workspace container
>> exit

# To Enter the mysql container
$ docker-compose exec mysql bash

# To Exit the mysql container
>> exit

# To build the initial environment using nginx and mysql
$ docker-compose up -d nginx mysql

# To build mysql container (Optionally, you can add --no-cache as an argument)
$ docker-compose build mysql
```

#### Laravel Related Commands
**All of the following commands should be run after entering the workspace container.**

```bash
# If the images are not being rendered, run the following command
>> php artisan storage:link

# If you get an error which says something like the key is not set, run the following command
>> php artisan key:generate

# To view the list of routes, run
>> php artisan route:list
```

