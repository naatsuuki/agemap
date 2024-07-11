class CreateAgeTables < ActiveRecord::Migration[7.1]
  def change
    create_table :age_tables do |t|
      t.string :user_id
      t.string :table_title

      t.timestamps
    end
  end
end
