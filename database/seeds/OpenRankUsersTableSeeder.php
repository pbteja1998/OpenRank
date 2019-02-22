<?php

use Illuminate\Database\Seeder;

class OpenRankUsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'role_id' => 1,
                'name' => 'Admin',
                'email' => 'admin@admin.com',
                'avatar' => 'users/default.png',
                'email_verified_at' => NULL,
                'password' => '$2y$10$/MzFs63bonmn94Cj/FaR/uNYUPJ33tItZry2JA53RbdLHgBV2n/1e',
                'remember_token' => 'sYmUMGauqHpbUfGx6zYzpzMjJQXkJBLcaW8npII30kBThL622XfaXQJzzsOE',
                'settings' => NULL,
                'created_at' => '2019-02-21 17:24:25',
                'updated_at' => '2019-02-21 17:24:25',
            ),
            1 => 
            array (
                'id' => 2,
                'role_id' => 2,
                'name' => 'Normal User',
                'email' => 'user@user.com',
                'avatar' => 'users/default.png',
                'email_verified_at' => NULL,
                'password' => '$2y$10$Xy/HvfBlK/msFJcTz4Vpyu87RMQAUZybpOErCf2dGKb6gY61CBpr.',
                'remember_token' => 'dR2by8M7MRhwLl1f7qoQnM0F0zQyviIVERAHOFnv9oc5ZpOsgrRKLLJMnYF3',
                'settings' => '{"locale":"en"}',
                'created_at' => '2019-02-21 18:20:05',
                'updated_at' => '2019-02-21 18:20:05',
            ),
            2 => 
            array (
                'id' => 3,
                'role_id' => 3,
                'name' => 'Company User',
                'email' => 'company_user@user.com',
                'avatar' => 'users/default.png',
                'email_verified_at' => NULL,
                'password' => '$2y$10$BLhoy7swpVEeyfR9E4Tf4ermXxldmQutiL06rqczewR/XL0eeXJ86',
                'remember_token' => NULL,
                'settings' => '{"locale":"en"}',
                'created_at' => '2019-02-22 19:24:01',
                'updated_at' => '2019-02-22 19:24:01',
            ),
        ));
        
        
    }
}