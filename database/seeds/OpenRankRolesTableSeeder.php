<?php

use Illuminate\Database\Seeder;

class OpenRankRolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('roles')->delete();
        
        \DB::table('roles')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'admin',
                'display_name' => 'Administrator',
                'created_at' => '2019-02-21 17:22:21',
                'updated_at' => '2019-02-21 17:22:21',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'user',
                'display_name' => 'Normal User',
                'created_at' => '2019-02-21 17:22:21',
                'updated_at' => '2019-02-21 17:22:21',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'company_user',
                'display_name' => 'Company User',
                'created_at' => '2019-02-22 19:23:33',
                'updated_at' => '2019-02-22 19:23:33',
            ),
        ));
        
        
    }
}