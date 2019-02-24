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
