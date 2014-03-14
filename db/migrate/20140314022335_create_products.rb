class CreateProducts < ActiveRecord::Migration

  def change
    create_table :products do |t|
      t.string :title
      t.text :short
      t.text :long
      t.string :images
      t.boolean :featured
      t.boolean :in_stock

      t.timestamps
    end
  end
end
