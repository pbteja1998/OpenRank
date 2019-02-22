<?php

use Illuminate\Database\Seeder;

class OpenRankDataTypesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('data_types')->delete();
        
        \DB::table('data_types')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'users',
                'slug' => 'users',
                'display_name_singular' => 'User',
                'display_name_plural' => 'Users',
                'icon' => 'voyager-person',
                'model_name' => 'TCG\\Voyager\\Models\\User',
                'policy_name' => 'TCG\\Voyager\\Policies\\UserPolicy',
                'controller' => '',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => NULL,
                'created_at' => '2019-02-21 17:22:14',
                'updated_at' => '2019-02-21 17:22:14',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'menus',
                'slug' => 'menus',
                'display_name_singular' => 'Menu',
                'display_name_plural' => 'Menus',
                'icon' => 'voyager-list',
                'model_name' => 'TCG\\Voyager\\Models\\Menu',
                'policy_name' => NULL,
                'controller' => '',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => NULL,
                'created_at' => '2019-02-21 17:22:15',
                'updated_at' => '2019-02-21 17:22:15',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'roles',
                'slug' => 'roles',
                'display_name_singular' => 'Role',
                'display_name_plural' => 'Roles',
                'icon' => 'voyager-lock',
                'model_name' => 'TCG\\Voyager\\Models\\Role',
                'policy_name' => NULL,
                'controller' => '',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => NULL,
                'created_at' => '2019-02-21 17:22:15',
                'updated_at' => '2019-02-21 17:22:15',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'contests',
                'slug' => 'contests',
                'display_name_singular' => 'Contest',
                'display_name_plural' => 'Contests',
                'icon' => 'voyager-code',
                'model_name' => 'App\\Contest',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null}',
                'created_at' => '2019-02-22 17:38:00',
                'updated_at' => '2019-02-22 18:05:10',
            ),
            4 => 
            array (
                'id' => 6,
                'name' => 'tags',
                'slug' => 'tags',
                'display_name_singular' => 'Tag',
                'display_name_plural' => 'Tags',
                'icon' => 'voyager-tag',
                'model_name' => 'App\\Tag',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null}',
                'created_at' => '2019-02-22 17:43:54',
                'updated_at' => '2019-02-22 18:13:35',
            ),
            5 => 
            array (
                'id' => 8,
                'name' => 'questions',
                'slug' => 'questions',
                'display_name_singular' => 'Question',
                'display_name_plural' => 'Questions',
                'icon' => 'voyager-question',
                'model_name' => 'App\\Question',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null}',
                'created_at' => '2019-02-22 17:50:45',
                'updated_at' => '2019-02-22 18:07:22',
            ),
        ));
        
        
    }
}