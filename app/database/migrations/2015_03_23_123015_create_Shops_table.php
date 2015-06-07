<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateShopsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('Shops', function(Blueprint $table)
		{
			$table->increments('I_SHOP_ID');
			$table->string('CH_NAME');
			$table->string('CH_TELPHONE');
			$table->string('CH_MENAGER');
			$table->string('CH_WECHART');
			$table->string('CH_QQ');

			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('Shops');
	}

}
