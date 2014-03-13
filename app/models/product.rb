class Product < ActiveRecord::Base
  scope :is_featured, lambda {|featured_boolean| {:conditions => {:featured => featured_boolean}}}
  
  def change
    create_table :products do |t|
      t.string :title
      t.text :text
      t.boolean :featured
 
      t.timestamps
    end
  end
end
