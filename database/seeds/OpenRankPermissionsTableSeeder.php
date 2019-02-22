<?php

use Illuminate\Database\Seeder;

class OpenRankPermissionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('permissions')->delete();
        
        \DB::table('permissions')->insert(array (
            0 => 
            array (
                'id' => 1,
                'key' => 'browse_admin',
                'table_name' => NULL,
                'created_at' => '2019-02-21 17:22:22',
                'updated_at' => '2019-02-21 17:22:22',
            ),
            1 => 
            array (
                'id' => 2,
                'key' => 'browse_bread',
                'table_name' => NULL,
                'created_at' => '2019-02-21 17:22:22',
                'updated_at' => '2019-02-21 17:22:22',
            ),
            2 => 
            array (
                'id' => 3,
                'key' => 'browse_database',
                'table_name' => NULL,
                'created_at' => '2019-02-21 17:22:22',
                'updated_at' => '2019-02-21 17:22:22',
            ),
            3 => 
            array (
                'id' => 4,
                'key' => 'browse_media',
                'table_name' => NULL,
                'created_at' => '2019-02-21 17:22:22',
                'updated_at' => '2019-02-21 17:22:22',
            ),
            4 => 
            array (
                'id' => 5,
                'key' => 'browse_compass',
                'table_name' => NULL,
                'created_at' => '2019-02-21 17:22:22',
                'updated_at' => '2019-02-21 17:22:22',
            ),
            5 => 
            array (
                'id' => 6,
                'key' => 'browse_menus',
                'table_name' => 'menus',
                'created_at' => '2019-02-21 17:22:22',
                'updated_at' => '2019-02-21 17:22:22',
            ),
            6 => 
            array (
                'id' => 7,
                'key' => 'read_menus',
                'table_name' => 'menus',
                'created_at' => '2019-02-21 17:22:22',
                'updated_at' => '2019-02-21 17:22:22',
            ),
            7 => 
            array (
                'id' => 8,
                'key' => 'edit_menus',
                'table_name' => 'menus',
                'created_at' => '2019-02-21 17:22:22',
                'updated_at' => '2019-02-21 17:22:22',
            ),
            8 => 
            array (
                'id' => 9,
                'key' => 'add_menus',
                'table_name' => 'menus',
                'created_at' => '2019-02-21 17:22:23',
                'updated_at' => '2019-02-21 17:22:23',
            ),
            9 => 
            array (
                'id' => 10,
                'key' => 'delete_menus',
                'table_name' => 'menus',
                'created_at' => '2019-02-21 17:22:23',
                'updated_at' => '2019-02-21 17:22:23',
            ),
            10 => 
            array (
                'id' => 11,
                'key' => 'browse_roles',
                'table_name' => 'roles',
                'created_at' => '2019-02-21 17:22:23',
                'updated_at' => '2019-02-21 17:22:23',
            ),
            11 => 
            array (
                'id' => 12,
                'key' => 'read_roles',
                'table_name' => 'roles',
                'created_at' => '2019-02-21 17:22:24',
                'updated_at' => '2019-02-21 17:22:24',
            ),
            12 => 
            array (
                'id' => 13,
                'key' => 'edit_roles',
                'table_name' => 'roles',
                'created_at' => '2019-02-21 17:22:24',
                'updated_at' => '2019-02-21 17:22:24',
            ),
            13 => 
            array (
                'id' => 14,
                'key' => 'add_roles',
                'table_name' => 'roles',
                'created_at' => '2019-02-21 17:22:24',
                'updated_at' => '2019-02-21 17:22:24',
            ),
            14 => 
            array (
                'id' => 15,
                'key' => 'delete_roles',
                'table_name' => 'roles',
                'created_at' => '2019-02-21 17:22:24',
                'updated_at' => '2019-02-21 17:22:24',
            ),
            15 => 
            array (
                'id' => 16,
                'key' => 'browse_users',
                'table_name' => 'users',
                'created_at' => '2019-02-21 17:22:24',
                'updated_at' => '2019-02-21 17:22:24',
            ),
            16 => 
            array (
                'id' => 17,
                'key' => 'read_users',
                'table_name' => 'users',
                'created_at' => '2019-02-21 17:22:24',
                'updated_at' => '2019-02-21 17:22:24',
            ),
            17 => 
            array (
                'id' => 18,
                'key' => 'edit_users',
                'table_name' => 'users',
                'created_at' => '2019-02-21 17:22:25',
                'updated_at' => '2019-02-21 17:22:25',
            ),
            18 => 
            array (
                'id' => 19,
                'key' => 'add_users',
                'table_name' => 'users',
                'created_at' => '2019-02-21 17:22:25',
                'updated_at' => '2019-02-21 17:22:25',
            ),
            19 => 
            array (
                'id' => 20,
                'key' => 'delete_users',
                'table_name' => 'users',
                'created_at' => '2019-02-21 17:22:25',
                'updated_at' => '2019-02-21 17:22:25',
            ),
            20 => 
            array (
                'id' => 21,
                'key' => 'browse_settings',
                'table_name' => 'settings',
                'created_at' => '2019-02-21 17:22:25',
                'updated_at' => '2019-02-21 17:22:25',
            ),
            21 => 
            array (
                'id' => 22,
                'key' => 'read_settings',
                'table_name' => 'settings',
                'created_at' => '2019-02-21 17:22:25',
                'updated_at' => '2019-02-21 17:22:25',
            ),
            22 => 
            array (
                'id' => 23,
                'key' => 'edit_settings',
                'table_name' => 'settings',
                'created_at' => '2019-02-21 17:22:26',
                'updated_at' => '2019-02-21 17:22:26',
            ),
            23 => 
            array (
                'id' => 24,
                'key' => 'add_settings',
                'table_name' => 'settings',
                'created_at' => '2019-02-21 17:22:26',
                'updated_at' => '2019-02-21 17:22:26',
            ),
            24 => 
            array (
                'id' => 25,
                'key' => 'delete_settings',
                'table_name' => 'settings',
                'created_at' => '2019-02-21 17:22:26',
                'updated_at' => '2019-02-21 17:22:26',
            ),
            25 => 
            array (
                'id' => 26,
                'key' => 'browse_hooks',
                'table_name' => NULL,
                'created_at' => '2019-02-21 17:22:35',
                'updated_at' => '2019-02-21 17:22:35',
            ),
            26 => 
            array (
                'id' => 27,
                'key' => 'browse_contests',
                'table_name' => 'contests',
                'created_at' => '2019-02-22 17:38:00',
                'updated_at' => '2019-02-22 17:38:00',
            ),
            27 => 
            array (
                'id' => 28,
                'key' => 'read_contests',
                'table_name' => 'contests',
                'created_at' => '2019-02-22 17:38:00',
                'updated_at' => '2019-02-22 17:38:00',
            ),
            28 => 
            array (
                'id' => 29,
                'key' => 'edit_contests',
                'table_name' => 'contests',
                'created_at' => '2019-02-22 17:38:00',
                'updated_at' => '2019-02-22 17:38:00',
            ),
            29 => 
            array (
                'id' => 30,
                'key' => 'add_contests',
                'table_name' => 'contests',
                'created_at' => '2019-02-22 17:38:00',
                'updated_at' => '2019-02-22 17:38:00',
            ),
            30 => 
            array (
                'id' => 31,
                'key' => 'delete_contests',
                'table_name' => 'contests',
                'created_at' => '2019-02-22 17:38:00',
                'updated_at' => '2019-02-22 17:38:00',
            ),
            31 => 
            array (
                'id' => 37,
                'key' => 'browse_tags',
                'table_name' => 'tags',
                'created_at' => '2019-02-22 17:43:54',
                'updated_at' => '2019-02-22 17:43:54',
            ),
            32 => 
            array (
                'id' => 38,
                'key' => 'read_tags',
                'table_name' => 'tags',
                'created_at' => '2019-02-22 17:43:54',
                'updated_at' => '2019-02-22 17:43:54',
            ),
            33 => 
            array (
                'id' => 39,
                'key' => 'edit_tags',
                'table_name' => 'tags',
                'created_at' => '2019-02-22 17:43:54',
                'updated_at' => '2019-02-22 17:43:54',
            ),
            34 => 
            array (
                'id' => 40,
                'key' => 'add_tags',
                'table_name' => 'tags',
                'created_at' => '2019-02-22 17:43:54',
                'updated_at' => '2019-02-22 17:43:54',
            ),
            35 => 
            array (
                'id' => 41,
                'key' => 'delete_tags',
                'table_name' => 'tags',
                'created_at' => '2019-02-22 17:43:54',
                'updated_at' => '2019-02-22 17:43:54',
            ),
            36 => 
            array (
                'id' => 47,
                'key' => 'browse_questions',
                'table_name' => 'questions',
                'created_at' => '2019-02-22 17:50:45',
                'updated_at' => '2019-02-22 17:50:45',
            ),
            37 => 
            array (
                'id' => 48,
                'key' => 'read_questions',
                'table_name' => 'questions',
                'created_at' => '2019-02-22 17:50:45',
                'updated_at' => '2019-02-22 17:50:45',
            ),
            38 => 
            array (
                'id' => 49,
                'key' => 'edit_questions',
                'table_name' => 'questions',
                'created_at' => '2019-02-22 17:50:45',
                'updated_at' => '2019-02-22 17:50:45',
            ),
            39 => 
            array (
                'id' => 50,
                'key' => 'add_questions',
                'table_name' => 'questions',
                'created_at' => '2019-02-22 17:50:45',
                'updated_at' => '2019-02-22 17:50:45',
            ),
            40 => 
            array (
                'id' => 51,
                'key' => 'delete_questions',
                'table_name' => 'questions',
                'created_at' => '2019-02-22 17:50:45',
                'updated_at' => '2019-02-22 17:50:45',
            ),
        ));
        
        
    }
}