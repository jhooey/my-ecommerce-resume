class Product < ActiveRecord::Base
  def change
    create_table :products do |t|
      t.string :title
      t.text :text
      t.boolean :featured
 
      t.timestamps
    end
  end
end
