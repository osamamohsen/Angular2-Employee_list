<?php

use Illuminate\Database\Seeder;
use App\Employee;
use Faker\Factory;
class EmployeeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        for($i=0;$i<10;$i++){
            Employee::create([
                'name' => $faker->name,
                'gender' => 'male'
            ]);
        }
    }
}
