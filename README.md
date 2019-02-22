# OpenRank


### Setting up the project
```bash
$ git clone https://github.com/pbteja1998/OpenRank.git
$ cd OpenRank
$ composer install
$ cp .env.example .env
$ php artisan key:generate
```

### Setting up the database configuration
- Open `.env` file

#### If you want to use `MYSQL` as database, set the following as per your system's `MYSQL` settings. 
( You would probably only need to change `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`.
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

#### If you want to use `SQLITE` as your database, refer to [docs](https://laravel.com/docs/5.7/database) to set the configurations.

I am using [Laravel Voyager](https://laravelvoyager.com/) to make administration tasks easier.

### Other Instructions

#### Setting up voyager
```bash
$ php artisan voyager:install

# Create an admin user
$ php artisan voyager:admin admin@admin.com --create  # Follow the instructions to set name and password of admin

# Run the remaining migrations (if any)
$ php artisan migrate
```

#### Install npm packages
```bash
# Leave the following command running.
$ npm install && npm run watch
```

#### Run the server
```bash
# In an other terminal instance, leave the following command running
$ php artisan serve
```

- You can open the application at [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
- To open the admin panel, go to [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin) and enter the admin credentials that you created earlier.

#### Generating migrations and seeds
```bash
$ php artisan migrate:generate table1,table2
$ php artisan iseed data_types,data_rows,menus,menu_items,roles,permissions,permission_role,settings,translations --classnameprefix=OpenRank
```

#### For Seeding the database
```bash
$ composer dump-autoload
$ php artisan migrate:fresh
$ php artisan db:seed
```
