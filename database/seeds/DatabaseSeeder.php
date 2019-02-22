<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(OpenRankDataTypesTableSeeder::class);
        $this->call(OpenRankDataRowsTableSeeder::class);
        $this->call(OpenRankMenusTableSeeder::class);
        $this->call(OpenRankMenuItemsTableSeeder::class);
        $this->call(OpenRankRolesTableSeeder::class);
        $this->call(OpenRankPermissionsTableSeeder::class);
        $this->call(OpenRankPermissionRoleTableSeeder::class);
        $this->call(OpenRankSettingsTableSeeder::class);
        $this->call(OpenRankTranslationsTableSeeder::class);
        $this->call(OpenRankUsersTableSeeder::class);
    }
}
